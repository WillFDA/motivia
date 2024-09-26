"use client";
import { useEffect, useState } from "react";
import { useUserFormContext } from "@/hooks/useUserFormContext";
import { Form, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Steps1() {
  const formContext = useUserFormContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const newPropertyFormSchema = z.object({
    name: z.string().min(3),
    lastName: z.string().min(3),
  });

  const stepOneForm = useForm<z.infer<typeof newPropertyFormSchema>>({
    resolver: zodResolver(newPropertyFormSchema),
    mode: "onChange",
    defaultValues: {
      name: formContext.user?.name || "",
      lastName: formContext.user?.lastName || "",
    },
  });

  function onSubmit(data: z.infer<typeof newPropertyFormSchema>) {
    formContext.updatePropertyForm(data);
  }

  if (!isClient) {
    return null; // Ne pas rendre le formulaire côté serveur
  }

  return (
    <FormProvider {...stepOneForm}>
      <Form
        className="w-full max-w-md border-border border rounded-lg overflow-hidden mx-auto my-auto"
        {...stepOneForm}
      >
        <form
          className="p-6 bg-card w-full space-y-8"
          onSubmit={stepOneForm.handleSubmit(onSubmit)}
        >
          <FormField
            name="name"
            control={stepOneForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            control={stepOneForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </FormProvider>
  );
}
