"use client";

import { useEffect, useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { GoHistory } from "react-icons/go";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Kalam } from "next/font/google";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getHistoryTitles } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function AppSidebar() {
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<{ id: string; title: string }[]>([]);
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    if (!userId) return;
    const fetchHistoryTitles = async () => {
      const historyRes = await getHistoryTitles(userId);
      setHistory(historyRes);
    };
    fetchHistoryTitles();
  }, [userId]);

  return (
    <Sidebar>
      <SidebarContent className={`${kalam.className}`}>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* AI Chat Item */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/chats">
                    <BsChatSquareText />
                    <span className="text-base">AI Chat</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* History Toggle Item */}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setShowHistory((prev) => !prev)}>
                  <GoHistory />
                  <span className="flex items-center justify-between w-full">
                    <span className="text-base">History</span>
                    {showHistory ? (
                      <ChevronUp className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    )}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Sub-items under History */}
              {showHistory &&
                history.map((chat) => (
                  <SidebarMenuItem key={chat.id} className="pl-6">
                    <SidebarMenuButton asChild>
                      <Link href={`/chats/${chat.id}`}>
                        <span className="text-sm">{chat.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
