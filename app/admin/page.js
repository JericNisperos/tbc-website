import { isAuthenticated } from "@/lib/admin-auth";
import { getMenu } from "@/lib/menu";
import LoginForm from "./login-form";
import AdminEditor from "./admin-editor";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await isAuthenticated();
  if (!authed) return <LoginForm />;
  const menu = await getMenu();
  return <AdminEditor initialMenu={menu} />;
}
