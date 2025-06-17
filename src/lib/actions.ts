"use server";

import prisma from "@/lib/prisma";

export async function saveTitle(title: string, userId: string) {
  try {
    const newHistoryEntry = await prisma.history.create({
      data: {
        title,
        userId,
      },
    });
    return newHistoryEntry;
  } catch (error) {
    console.error("Error saving history data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function saveConversation(
  title: string,
  historyId: string,
  userId: string,
  conversation: string,
  role: "user" | "assistant"
) {
  try {
    const newConversationMessage = await prisma.conversation.create({
      data: {
        title,
        historyId,
        userId,
        conversation,
        role,
      },
    });
    return newConversationMessage;
  } catch (error) {
    console.error("Error saving conversation data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getChats(chatId: string) {
  try {
    const chat = await prisma.conversation.findFirst({
      where: {
        OR: [
          { id: chatId },
          { historyId: chatId }
        ]
      }
    });
    return chat;
  } catch (error) {
    console.error("Error getting chat data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getHistoryTitles(userId: string) {
  try {
    const history = await prisma.history.findMany({
      where: {
        userId,
      },
    });
    return history;
  } catch (error) {
    console.error("Error getting history data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
