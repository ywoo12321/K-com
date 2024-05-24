import { redirect } from "next/dist/server/api-utils";

export default function LoginRoute(): void {
  redirect("/i/flow/login");
}
