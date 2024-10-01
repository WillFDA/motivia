import { createContext } from "react";

export type UserData = {
  name: string;
  lastName: string;
  stack: string[];
  motivation?: string;
  journey: string;
};

export type UserContextProps = {
  user: UserData | null;
  updatePropertyForm: (values: UserData) => void;
};

export const NewPropertyFormContext = createContext<UserContextProps | null>({
  user: null,
  updatePropertyForm: () => null,
});
