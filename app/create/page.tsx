import UserFormContextProvider from "@/contexts/form-provider";

export default function Create() {
  return (
    <UserFormContextProvider>
      <div>Create</div>
    </UserFormContextProvider>
  );
}
