"use client";

import ChatInput from "@/components/Chat-input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const chatMessages = [
  {
    from: "user",
    message: "In Briefly explain the history of Cbe",
  },
  {
    from: "AI",
    message:
      "As the College of Business Education (CBE) celebrates 40 years anniversary, we are prestigiously appreciating the extent to which the College has inspired the lives and careers of students and alumni. We are also happy to serve the general public by conducting practical training, applied research activities and consultancy. Over the 40 years, CBE has registered significant achievements being provision of quality business knowledge and skills to over 50,000 graduates in business related disciplines at various academic levels, that is, from certificates, diploma, bachelors and masters degrees.During academic year 2022/2023, the College enrolled a total of 16,322 students in its four campuses of Dar es salaam, Dodoma, Mwanza and Mbeya, out of which 3,962 students were enrolled at Dodoma Campus.Furthermore, the College has improved its learning environment at all its four campuses. Specifically, the College has renovated buildings, revamped drainage systems and has been fixing modern learning facilities in classrooms. This has then contributed to better academic performance.",
  },
  {
    from: "user",
    message: "In Briefly explain the history of Cbe",
  },
  {
    from: "AI",
    message:
      "As the College of Business Education (CBE) celebrates 40 years anniversary, we are prestigiously appreciating the extent to which the College has inspired the lives and careers of students and alumni. We are also happy to serve the general public by conducting practical training, applied research activities and consultancy. Over the 40 years, CBE has registered significant achievements being provision of quality business knowledge and skills to over 50,000 graduates in business related disciplines at various academic levels, that is, from certificates, diploma, bachelors and masters degrees.During academic year 2022/2023, the College enrolled a total of 16,322 students in its four campuses of Dar es salaam, Dodoma, Mwanza and Mbeya, out of which 3,962 students were enrolled at Dodoma Campus.Furthermore, the College has improved its learning environment at all its four campuses. Specifically, the College has renovated buildings, revamped drainage systems and has been fixing modern learning facilities in classrooms. This has then contributed to better academic performance.",
  },
];

export default function Aichat() {
  return (
    <main className="relative flex h-screen flex-col sm:px-2 md:px-4 lg:px-10">
      <ScrollArea
        className="h-full bg-transparent p-2 px-3 md:p-4 lg:p-10"
        scrollHideDelay={10}
      >
        {chatMessages.map((message, index) => (
          <div key={index} className="mb-4 flex items-start gap-2 md:gap-4">
            {message.from === "user" ? (
              <div className="mb-4 flex w-full items-center justify-end gap-4">
                <Card className="flex w-auto items-center justify-end">
                  <CardContent className="p-2 md:p-4 lg:p-4">
                    <p className="sm:text-sm md:text-lg lg:text-lg">
                      {message.message}
                    </p>
                  </CardContent>
                </Card>

                <Avatar>
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87NMEa-JLyykEpAHDobica15GN5Ge8GISAQ&usqp=CAU"
                    alt="@shadcn"
                  />
                  <AvatarFallback>USER</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div className="mb-4 flex items-start gap-2 pr-12 md:gap-4">
                <Avatar>
                  <AvatarImage
                    src="https://www.iconarchive.com/download/i140988/microsoft/fluentui-emoji-flat/Robot-Flat.1024.png"
                    alt="cbe"
                    className="object-cover"
                  />

                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>

                <Card className="mb-4 flex w-auto  items-start justify-start ">
                  <CardContent className="p-2 md:p-4 lg:p-4">
                    <p className="sm:text-sm md:text-lg lg:text-lg">
                      {message.message}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="px-14  ">
        <ChatInput />
      </div>
      {/* absolute inset-x-0 bottom-10 translate-y-5 px-10 */}
    </main>
  );
}
