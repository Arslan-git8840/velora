import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { cookies, headers } from "next/headers";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className={`flex-1 bg-white ${kalam.className}`}>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
