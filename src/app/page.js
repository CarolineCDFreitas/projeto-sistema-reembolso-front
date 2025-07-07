import { redirect } from "next/navigation";

export default async function ToLogin() {
  redirect("/login");
}
