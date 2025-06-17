// app/chat/layout.tsx
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { cookies, headers } from "next/headers";
import { Kalam } from "next/font/google";
import ChatInput from "@/components/ChatInput";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log(session);
  const cookieStore = cookies(); // no need to await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" className={kalam.className}>
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="flex-1 bg-white">
            <SidebarTrigger />
            <div className="flex flex-col">
              {children}
            <ChatInput/>
            </div> 
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
