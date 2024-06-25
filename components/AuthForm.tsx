"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const formSchema = authFormSchema(type);

  //Form validation

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      city: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true);
    alert("Is it woeking");

    try {
      // sign up with appwrite and create a plaid token

      if (type === "sign-up") {
        // const newUser = await Signup(data)
        // setUser(newUser)
      }

      if (type === "sign-in") {
        // const response = await signIn({
        //   email: data.email,
        //   password: data.password,
        // });

        // if (response) {
        //     router.push('/')
        // }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  //Ends here with validation

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className=" cursor-pointer items-center gap-2 flex">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1
            className="text-26 font-ibm-plex-serif 
          text-black-1 font-bold"
          >
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal tetx-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaid Link to link the bank account */}
          Plaid
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label={"First Name"}
                      placeholder={"Enter your First Name"}
                    />
                    <CustomInput
                      control={form.control}
                      name={"lastName"}
                      label={"Last Name"}
                      placeholder={"Enter your Last Name"}
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    name={"address1"}
                    label={"Address"}
                    placeholder={"Enter your Address"}
                  />
                  <CustomInput
                    control={form.control}
                    name={"city"}
                    label={"City"}
                    placeholder={"Enter your City"}
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name={"state"}
                      label={"State"}
                      placeholder={"ex: UP "}
                    />
                    <CustomInput
                      control={form.control}
                      name={"postalCode"}
                      label={"Postal Code"}
                      placeholder={"ex: 211010"}
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name={"dateOfBirth"}
                      label={"Date Of Birth"}
                      placeholder={"DD-MM-YYYY"}
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="ex: 123"
                    />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                name={"email"}
                label={"Email"}
                placeholder={"Enter your Email"}
              />

              <CustomInput
                control={form.control}
                name={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
              />
              <div className=" flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal tetx-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "sign-in"}
              className="ml-1 cursor-pointer form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
