import LiveChatLayout from "@/components/live-chat/live-chat-layout"
import ConversationsList from "@/components/live-chat/conversations-list"
import ChatConversation from "@/components/live-chat/chat-conversation"

export default function ChatPage() {
  return (
    <LiveChatLayout>
      <ConversationsList />
      <ChatConversation />
    </LiveChatLayout>
  )
}
