
import { Chat } from "@/components/chat";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";

export default function Home() {
  return (
    <main className="relative container flex min-hscreen flex-col items-center justify-center">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <span className="font-bold">FileChatAI</span>
      <ModeToggle />
        </div>
        <div className="flex flex-1 py-4 w-full justify-center">
          <div className="w-full max-w-4xl">
            <Chat />
          </div>
        </div>
    </main>
  );
}
