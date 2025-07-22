import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
   const [isFormActive, setIsFormActive] = useState(false);

   return (
      <FormContext.Provider value={{ isFormActive, setIsFormActive }}>
         {children}
      </FormContext.Provider>
   );
};