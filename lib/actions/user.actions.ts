"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password}: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password)

    return parseStringify(response);
  } catch (e) {
    console.error("Error", e);
  }
};

export const signUp = async (userData: SignUpParams) => {

  const { email ,password, firstName, lastName} = userData;

  // Validate input data
  if (!email || !password || !firstName || !lastName) {
    throw new Error("Missing required user data");
  }

  let newUserAccount;

  try {
    const { account } = await createAdminClient();
    
   newUserAccount = await account.create(
    ID.unique(), 
    email,
    password,
    `${firstName} ${lastName}`
  );
  
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAccount)
  } catch (e) {
    console.error("Error", e);
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete('appwrite-session');

    await account.deleteSession('current')
  }catch(e){
    return null;
  }
}