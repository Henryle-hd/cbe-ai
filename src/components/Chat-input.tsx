import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const ChatInput = () => {
    return (
        <div className="flex items-center justify-start shadow-md">
            <Input
                className="w-full rounded-xl rounded-r-none"
                placeholder="Type a message..."
                type="text"
            />
            <Button className="rounded-xl rounded-l-none bg-cbeaiclr-1" size={"icon"}>
                <Send />
            </Button>
        </div>
    )
}

export default ChatInput