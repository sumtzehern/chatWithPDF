import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formattedText } from "@/lib/utils"
import { Message } from "ai"
import { Key } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import Balancer from "react-wrap-balancer"

const wrappedText = (text: string) => {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))
}

interface ChatBubbleProps extends Partial<Message> {
  sources?: string[]
}

export function ChatBubble({
  role = "assistant",
  content,
  sources,
}: ChatBubbleProps) {
  if (!content) return null

  const wrappedMessage = wrappedText(content)

  return (
    <div>
      <Card className="mb-2">
        <CardHeader>
          <CardTitle
            className={role !== "assistant"
              ? "text-amber-500 dark:text-amber-200"
              : "text-emerald-500 dark:text-emerald-200"}
          >
            {role === "assistant" ? "AI" : "You"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <Balancer>{wrappedMessage}</Balancer>
        </CardContent>
        <CardFooter>
          <CardDescription className="w-full">
            {sources && sources.length ? (
              <Accordion type="single" collapsible className="w-full">
                {sources.map((source, i) => (
                  <AccordionItem value={`source-${i}`} key={i}>
                    <AccordionTrigger>{`Source ${i + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <ReactMarkdown>
                        {formattedText(source)}
                      </ReactMarkdown>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <></>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
