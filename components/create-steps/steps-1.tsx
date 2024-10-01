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
import { Button } from "@/components/ui/button";

export default function Steps1() {
  const formContext = useUserFormContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const newPropertyFormSchema = z.object({
    name: z.string().min(3),
    lastName: z.string().min(3),
    stack: z.array(z.string()).min(1),
    motivation: z.string().min(1),
    journey: z.string().min(1),
  });

  const stepOneForm = useForm<z.infer<typeof newPropertyFormSchema>>({
    resolver: zodResolver(newPropertyFormSchema),
    mode: "onChange",
    defaultValues: {
      name: formContext.user?.name || "",
      lastName: formContext.user?.lastName || "",
      stack: formContext.user?.stack || [],
      motivation: formContext.user?.motivation || "",
      journey: formContext.user?.journey || "",
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
                <FormLabel>Prénom</FormLabel>
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
                <FormLabel>Nom</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="stack"
            control={stepOneForm.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre stack technique</FormLabel>
                <FormMessage />
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Sélectionnez les technologies que vous utilisez
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Button variant="secondary">Previous</Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
