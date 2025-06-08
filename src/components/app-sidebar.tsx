"use client";

import { useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { GoHistory } from "react-icons/go";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Kalam } from "next/font/google";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });
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
import Link from "next/link";

// Dummy chat history
const chatHistory = [
  { id: "1", title: "Chat with GPT-4", url: "/chats/1" },
  { id: "2", title: "Interview Prep", url: "/chats/2" },
  { id: "3", title: "Project Ideas", url: "/chats/3" },
];

export function AppSidebar() {
  const [showHistory, setShowHistory] = useState(false);

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
                chatHistory.map((chat) => (
                  <SidebarMenuItem key={chat.id} className="pl-6">
                    <SidebarMenuButton asChild>
                      <Link href={chat.url}>
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
