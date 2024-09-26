import { NewPropertyFormContext } from "@/contexts/multistep-form-context";
import { useContext } from "react";
export const useUserFormContext = () => {
  const context = useContext(NewPropertyFormContext);
  if (!context) {
    throw new Error("FormContext must be used within a FormContextProvider");
  }
  return context;
};
