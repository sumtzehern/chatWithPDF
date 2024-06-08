import { ChatBubble } from "./chat-bubble";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Message } from "ai/react"

export function Chat() {
    const messages: Message[] = [
        { id: "1", role: "assistant", content: "Hello, how can I help you today?" },
        { id: "2",role: "user", content: "What's up?" },
    ];
    const sources = ["https://example.com", "https://example.com"];

    return(
        <div className="rounded-2xl border h-[75vh] justify-between flex flex-col border-gray-200 dark:border-gray-700">
            <div className="overflow-auto p-4">
                {
                    messages.map(({id, role, content}:  Message, index) => (
                        <ChatBubble
                            key={id}
                            role={role}
                            content={content}
                            sources={role !== "assistant" ? [] : sources} //only shows sources for assistant
                        />
                    ))
                }
            </div>
            <form className="flex p-4 clear-both">
                <Input placeholder="Type to chat ..." className="mr-4"/>

                <Button type="submit" className="">Submit</Button>
            </form>
        </div>

    )
}