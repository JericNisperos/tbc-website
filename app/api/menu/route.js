import { revalidatePath } from "next/cache";
import { getMenu, saveMenu } from "@/lib/menu";
import { isAuthenticated } from "@/lib/admin-auth";

function isValidMenu(data) {
  if (!data || typeof data !== "object") return false;
  if (!Array.isArray(data.food) || !Array.isArray(data.drinks)) return false;
  const sectionOk = (s) =>
    s &&
    typeof s.id === "string" &&
    typeof s.title === "string" &&
    typeof s.type === "string";
  if (!data.food.every(sectionOk)) return false;
  if (!data.drinks.every(sectionOk)) return false;
  return true;
}

export async function GET() {
  const menu = await getMenu();
  return Response.json(menu);
}

export async function PUT(request) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await request.json().catch(() => null);
  if (!isValidMenu(data)) {
    return Response.json({ error: "Invalid menu data" }, { status: 400 });
  }
  await saveMenu(data);
  revalidatePath("/");
  revalidatePath("/admin");
  return Response.json({ ok: true });
}
