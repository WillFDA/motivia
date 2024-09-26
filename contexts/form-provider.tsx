"use client";
import { useState } from "react";
import {
  NewPropertyFormContext,
  UserData,
} from "@/contexts/multistep-form-context";
export default function UserFormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserData | null>(null);
  const updatePropertyForm = (values: UserData) => {
    setUser({ ...user, ...values });
  };

  return (
    <NewPropertyFormContext.Provider value={{ user, updatePropertyForm }}>
      {children}
    </NewPropertyFormContext.Provider>
  );
}
