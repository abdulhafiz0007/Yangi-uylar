import { Filter } from "lucide-react";
import { useState } from "react";
import { PopularPlaces2 } from "../PopularPlaces2/PopularPlaces2";

export const PropertyListingPage = () => {
    const [filters, setFilters] = useState({ location: '', minPrice: 0 });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className='min-h-screen bg-gray-50 relative'>
            {/* Filter Component */}
            <Filter onFilterChange={handleFilterChange} />
            
            {/* Properties List */}
            <PopularPlaces2 filters={filters} />
            
            {/* Debug info - remove in production */}
            <div className='fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-sm'>
                <p>Active Filters:</p>
                <p>Location: {filters.location || 'All'}</p>
                <p>Min Price: {filters.minPrice ? `${filters.minPrice.toLocaleString()} сум` : 'Any'}</p>
            </div>
        </div>
    );
};
