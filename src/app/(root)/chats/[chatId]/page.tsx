"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation"; // ✅ import hook
import { getChats } from "@/lib/actions";
import FormattedText from "@/components/FormattedText";

function DynamicChatPage() {
  const { chatId } = useParams() as { chatId: string }; // ✅ get dynamic route param
  const [chat, setChat] = useState<any>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chatId) return;
    const fetchChat = async () => {
      const data = await getChats(chatId);
      setChat(data);
    };
    fetchChat();
  }, [chatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col h-full max-h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-10 bg-gray-50 conversation">
        <h1 className="text-xl ml-0 xl:ml-20 font-semibold text-gray-800 capitalize">
          {chat?.title || "Loading.."}
        </h1>
        <div className="max-w-5xl mx-auto space-y-6 text-sm text-gray-800">
          {chat?.conversation ? (
            <FormattedText markdown={chat.conversation} />
          ) : (
            <div className="text-gray-500 text-center mt-20">
              Loading chat..
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

export default DynamicChatPage;
