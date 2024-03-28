import ChatInput from "@/components/Chat-input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const chatMessages = [
  {
    from: "user",
    message: "In Briefly explain the history of Cbe"
  },
  {
    from: "AI",
    message: "As the College of Business Education (CBE) celebrates 40 years anniversary, we are prestigiously appreciating the extent to which the College has inspired the lives and careers of students and alumni. We are also happy to serve the general public by conducting practical training, applied research activities and consultancy. Over the 40 years, CBE has registered significant achievements being provision of quality business knowledge and skills to over 50,000 graduates in business related disciplines at various academic levels, that is, from certificates, diploma, bachelors and masters degrees.During academic year 2022/2023, the College enrolled a total of 16,322 students in its four campuses of Dar es salaam, Dodoma, Mwanza and Mbeya, out of which 3,962 students were enrolled at Dodoma Campus.Furthermore, the College has improved its learning environment at all its four campuses. Specifically, the College has renovated buildings, revamped drainage systems and has been fixing modern learning facilities in classrooms. This has then contributed to better academic performance."
  },
  {
    from: "user",
    message: "In Briefly explain the history of Cbe"
  },
  {
    from: "AI",
    message: "As the College of Business Education (CBE) celebrates 40 years anniversary, we are prestigiously appreciating the extent to which the College has inspired the lives and careers of students and alumni. We are also happy to serve the general public by conducting practical training, applied research activities and consultancy. Over the 40 years, CBE has registered significant achievements being provision of quality business knowledge and skills to over 50,000 graduates in business related disciplines at various academic levels, that is, from certificates, diploma, bachelors and masters degrees.During academic year 2022/2023, the College enrolled a total of 16,322 students in its four campuses of Dar es salaam, Dodoma, Mwanza and Mbeya, out of which 3,962 students were enrolled at Dodoma Campus.Furthermore, the College has improved its learning environment at all its four campuses. Specifically, the College has renovated buildings, revamped drainage systems and has been fixing modern learning facilities in classrooms. This has then contributed to better academic performance."
  }
]


export default function Aichat() {
  return (
    <main className="flex flex-col h-screen px-10 relative">
      <ScrollArea className="h-full p-10">
        {chatMessages.map((message, index) => (
          <div key={index} className="flex items-start gap-4 mb-4">
            {message.from === "user" ? (
              <div className="flex items-start gap-4 mb-4 w-full">
                <Card className="flex items-center justify-end w-full">
                  <CardContent>
                    <p>{message.message}</p>
                  </CardContent>
                </Card>

                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>USER</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div className="flex items-start gap-4 mb-4">
                <Avatar>
                    <AvatarImage src="https://cosis.cbe.ac.tz//assets/themes/logo.png" alt="cbe" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>

                <Card className="flex items-start justify-start w-full mb-4">
                  <CardContent>
                    <p>{message.message}</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        ))}
      </ScrollArea>

      <div className="absolute translate-y-5 bottom-10 inset-x-0 px-10">
        <ChatInput />
      </div>
    </main>
  );
}