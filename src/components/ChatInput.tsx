"use client";
import { useEffect, useState } from "react";
import { Mic, Paperclip, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import axios from "axios";
import FormattedText from "./FormattedText";
import { authClient } from "@/lib/auth-client";
import { saveConversation, saveTitle } from "@/lib/actions";
import { useRouter } from "next/navigation";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [userId, setUserId] = useState("");

  const router = useRouter();
  const { data: session } = authClient.useSession();
  console.log(session);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);

      const prompt = `You are an AI assistant. Your task is to generate a short, relevant title (3–6 words) that summarizes the topic of the following user prompt.

      Return only the title as plain text — no explanation, no formatting, and no extra characters.

      User prompt:
      "${message}"`;

      const userPrompt = `
You are an AI assistant in a chatbot application. Reply to the following user message in JSON format for use in a chat UI.

The JSON response should have the structure:
{
  "role": "assistant",
  "content": "<your response here, markdown supported if needed>"
}

Here is the user's message:
${message}
`;

      // generating title from userPropmpt
      const titleResponse = await axios.post("/api/ai", { prompt });
      console.log(titleResponse.data.response);

      const aiResponse = await axios.post("/api/ai", { prompt: message });
      console.log(aiResponse.data.response);
      setMarkdown(aiResponse.data.response);

      // save titile to database

      const savedTitle = await saveTitle(
        titleResponse.data.response,
        session?.user.id as string
      );
      console.log(savedTitle);

      const savedConversation = await saveConversation(
        message,
        savedTitle.id,
        session?.user.id as string,
        aiResponse.data.response,
        "assistant"
      );
      console.log(savedConversation);
      router.push(`/chats/${savedConversation.id}`);
      setMessage("");
    }
  };

  return (
    <>
      {/* <FormattedText markdown={markdown} /> */}
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 z-0">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Voice Input */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 transition"
            >
              <Mic size={20} />
              <span className="sr-only">Voice Input</span>
            </Button>

            {/* Text Input */}
            <div className="relative flex-1">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask your ques.."
                className="w-full min-h-[48px] max-h-[120px] resize-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm sm:text-base focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                rows={1}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height =
                    Math.min(target.scrollHeight, 120) + "px";
                }}
              />

              {/* Attachment Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-100 transition"
              >
                <Paperclip size={18} />
                <span className="sr-only">Attach File</span>
              </Button>
            </div>

            {/* Send Button */}
            <Button
              type="submit"
              className={cn(
                "rounded-full p-2 transition font-medium flex items-center justify-center",
                !message.trim()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              )}
              disabled={!message.trim()}
            >
              <Send size={20} />
              <span className="sr-only">Send Message</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatInput;
