import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FormProvider } from "./context/FormContext.jsx";

createRoot(document.getElementById("root")).render(
   <FormProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </FormProvider>
);
