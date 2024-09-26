import Steps1 from "@/components/create-steps/Steps1";
import UserFormContextProvider from "@/contexts/form-provider";

export default function Create() {
  return (
    <UserFormContextProvider>
      <Steps1 />
    </UserFormContextProvider>
  );
}
