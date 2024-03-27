import AsideComponent from "@/components/aside";
import ChatInput from "@/components/Chat-input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Aichat() {
  return (
    <main className="flex flex-col max-h-screen px-10 relative">
      <ScrollArea>
        w
      </ScrollArea>

      <div className="absolute translate-y-5 -bottom-[35rem] inset-x-0 px-10">
        <ChatInput />
      </div>
    </main>
  );
}
