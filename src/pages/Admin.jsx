import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import toast, { Toaster } from 'react-hot-toast';

export function Admin() {
  const [homes, setHomes] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    metro: "",
    rooms: "",
    year_range: "",
    installment: "",
    characteristics: "",
    image_url: "",
    is_popular: false
  });
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);

  const fetchHomes = async () => {
    try {
      const { data, error } = await supabase.from("homes").select("*");
      if (error) {
        console.error("Database error:", error);
        toast.error("Ma'lumotlarni olishda xatolik: " + error.message);
        return;
      }
      setHomes(data || []);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Server bilan bog'lanishda xatolik");
    }
  };

  useEffect(() => {
    fetchHomes();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Fayl hajmini tekshirish (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Rasm hajmi 5MB dan oshmasligi kerak");
        return;
      }

      // Fayl turini tekshirish
      if (!file.type.startsWith('image/')) {
        toast.error("Faqat rasm fayllarini yuklash mumkin");
        return;
      }

      setImageFile(file);
      
      // Preview yaratish
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = fileName;

      const { data, error } = await supabase.storage
        .from('home-images')
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('home-images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let imageUrl = form.image_url;

      // Agar yangi rasm yuklangan bo'lsa
      if (imageFile) {
        toast.loading("Rasm yuklanmoqda...", { id: 'image-upload' });
        imageUrl = await uploadImage(imageFile);
        toast.success("Rasm muvaffaqiyatli yuklandi", { id: 'image-upload' });
      }

      const formData = {
        ...form,
        image_url: imageUrl,
        rooms: parseInt(form.rooms) || null,
        characteristics: form.characteristics.split(",").map(c => c.trim()).filter(c => c)
      };

      if (editingId) {
        const { error } = await supabase
          .from("homes")
          .update(formData)
          .eq("id", editingId);
        
        if (error) {
          throw error;
        }

        toast.success("Uy ma'lumotlari muvaffaqiyatli yangilandi!");
        setEditingId(null);
      } else {
        const { error } = await supabase.from("homes").insert([formData]);
        
        if (error) {
          throw error;
        }

        toast.success("Yangi uy muvaffaqiyatli qo'shildi!");
      }

      resetForm();
      fetchHomes();
      
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Xatolik yuz berdi: " + error.message);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      price: "",
      location: "",
      metro: "",
      rooms: "",
      year_range: "",
      installment: "",
      characteristics: "",
      image_url: "",
      is_popular: false
    });
    setImageFile(null);
    setImagePreview("");
  };

  const handleEdit = (home) => {
    setEditingId(home.id);
    setForm({
      title: home.title,
      price: home.price,
      location: home.location,
      metro: home.metro || "",
      rooms: home.rooms?.toString() || "",
      year_range: home.year_range || "",
      installment: home.installment || "",
      characteristics: home.characteristics?.join(", ") || "",
      image_url: home.image_url || "",
      is_popular: home.is_popular || false
    });
    setImagePreview(home.image_url || "");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ushbu uyni o'chirmoqchimisiz?")) {
      try {
        // Avval rasm o'chiriladi (agar mavjud bo'lsa)
        const home = homes.find(h => h.id === id);
        if (home?.image_url && home.image_url.includes('supabase')) {
          try {
            const urlParts = home.image_url.split('/');
            const fileName = urlParts[urlParts.length - 1];
            await supabase.storage.from('home-images').remove([fileName]);
          } catch (storageError) {
            console.warn("Rasm o'chirishda xatolik:", storageError);
          }
        }

        const { error } = await supabase.from("homes").delete().eq("id", id);
        
        if (error) {
          throw error;
        }

        toast.success("Uy muvaffaqiyatli o'chirildi!");
        fetchHomes();
      } catch (error) {
        console.error("Delete error:", error);
        toast.error("O'chirishda xatolik: " + error.message);
      }
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Panel - Uylar boshqaruvi</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">
          {editingId ? "Uyni tahrirlash" : "Yangi uy qo'shish"}
        </h3>
        
        {/* Rasm yuklash bo'limi */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Uy rasmi
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="outline-none block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          
          {imagePreview && (
            <div className="mt-4">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-32 h-32 object-cover rounded-lg border"
              />
            </div>
          )}
          
          <input
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            placeholder="Yoki rasm URL kiriting"
            className="outline-none mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Uy nomi *
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Uy nomi"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Narxi *
            </label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="180 500 000 сум"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Joylashuvi *
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Joylashuvi"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Metro
            </label>
            <input
              name="metro"
              value={form.metro}
              onChange={handleChange}
              placeholder="Chilonzor"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Xonalar soni
            </label>
            <input
              name="rooms"
              type="number"
              value={form.rooms}
              onChange={handleChange}
              placeholder="3"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Qurilish yillari
            </label>
            <input
              name="year_range"
              value={form.year_range}
              onChange={handleChange}
              placeholder="2025-2028"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Muddatli to'lov
            </label>
            <input
              name="installment"
              value={form.installment}
              onChange={handleChange}
              placeholder="24 месяца рассроч"
              className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Xususiyatlar
          </label>
          <textarea
            name="characteristics"
            value={form.characteristics}
            onChange={handleChange}
            placeholder="Характеристика 1, Характеристика 2, ..."
            className="outline-none w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          />
          <p className="text-sm text-gray-500 mt-1">Vergul bilan ajrating</p>
        </div>
        
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            name="is_popular"
            checked={form.is_popular}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">
            Mashhur uylar ro'yxatiga qo'shish
          </label>
        </div>
        
        <div className="flex gap-4 mt-8">
          <button
            type="submit"
            disabled={uploading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Yuklanmoqda..." : editingId ? "Yangilash" : "Qo'shish"}
          </button>
          
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Bekor qilish
            </button>
          )}
        </div>
      </form>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            Mavjud uylar ({homes.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rasm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nomi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Narxi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joylashuvi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Xonalar</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mashhur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amallar</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {homes.map((home) => (
                <tr key={home.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {home.image_url ? (
                      <img 
                        src={home.image_url} 
                        alt={home.title}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/64x64?text=No+Image';
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">Rasm yo'q</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{home.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{home.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{home.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-sm text-gray-900">{home.rooms || '-'}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      home.is_popular 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {home.is_popular ? 'Ha' : 'Yo\'q'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(home)}
                        className="text-blue-600 hover:text-blue-900 transition-colors px-6 py-2 bg-sky-100 rounded-lg"
                        title="Tahrirlash"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(home.id)}
                        className="text-red-600 hover:text-red-900 transition-colors px-6 py-2 bg-sky-100 rounded-lg"
                        title="O'chirish"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {homes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">Hozircha uylar yo'q</div>
              <div className="text-gray-400 text-sm mt-2">Birinchi uyni qo'shish uchun yuqoridagi formadan foydalaning</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}