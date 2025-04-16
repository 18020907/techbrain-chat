import LiveChatLayout from "@/components/live-chat/live-chat-layout"
import ConversationsList from "@/components/live-chat/conversations-list"
import ChatArea from "@/components/live-chat/chat-area"

export default function LiveChatPage() {
  return (
    <LiveChatLayout>
      <ConversationsList />
      <ChatArea />
    </LiveChatLayout>
  )
}
