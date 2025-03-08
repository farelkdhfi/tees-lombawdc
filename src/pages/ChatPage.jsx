import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Avatar from '../assets/seller.png'
import Avatar2 from '../assets/cust1.png'
import { Camera, Plus, SendHorizonal } from "lucide-react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatRef = useRef(null);
    const [botIndex, setBotIndex] = useState(0);


    useEffect(() => {
        if (messages.length > 0) {
            gsap.fromTo(
                chatRef.current.lastChild,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        }
    }, [messages]);

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");

        const botReplies = [
            "Halo! Ada yang bisa saya bantu?",
            "Bisa jelaskan lebih detail?",
            "Baik, saya mengerti!",
            "Itu menarik! Mari kita bahas lebih lanjut.",
            "Terima kasih sudah bertanya!",
        ];

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: botReplies[botIndex], sender: "bot" }]);
            setBotIndex((prevIndex) => (prevIndex + 1) % botReplies.length);
        }, 1000);
    };

    return (
        <main className="w-full flex pt-20 md:pt-30 h-[100dvh] px-3 lg:px-15 pb-20 lg:pb-0">
            <div className="md:w-1/3 md:block hidden">
                <div className="h-full bg-[#fafafa] p-5  overflow-hidden">
                    <p className="font-semibold text-black text-xl">INBOX</p>
                    <div className="mt-4 bg-white rounded-lg p-4 flex gap-x-2 justify-between items-center font-semibold w-full">
                        <div className="flex gap-x-2 items-center">
                            <img src={Avatar} alt="" className="h-15 rounded-lg" />
                            <div className="text-sm text-black/70">
                                <p className="font-semibold">Angely</p>
                                <p className="text-xs">Seller</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                    </div>
                    <div className="mt-1 bg-white rounded-lg p-4 flex gap-x-2 justify-between items-center font-semibold w-full">
                        <div className="flex gap-x-2 items-center">
                            <img src={Avatar2} alt="" className="h-15 rounded-full grayscale" />
                            <div className="text-sm text-black/70">
                                <p className="font-semibold">Michael</p>
                                <p className="text-xs">Seller</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                    </div>
                    <div className="mt-1 bg-white rounded-lg p-4 flex gap-x-2 justify-between items-center font-semibold w-full">
                        <div className="flex gap-x-2 items-center">
                            <img src={Avatar2} alt="" className="h-15 rounded-full grayscale" />
                            <div className="text-sm text-black/70">
                                <p className="font-semibold">Thomas</p>
                                <p className="text-xs">Seller</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                    </div>

                </div>
            </div>

            <div className="md:w-2/3 w-full relative">
                <div className="flex flex-col justify-between bg-[#ffffff] h-full overflow-hidden">
                    <div className="bg-[#fff] border-b justify-between border-black/15 w-full text-black/70 flex items-center gap-x-2 p-3">
                        <div className="flex gap-x-2">
                            <img src={Avatar} alt="" className="w-10 rounded-full" />
                            <div className="text-sm">
                                <p className="font-semibold">Angely</p>
                                <div className="flex gap-x-1 items-center">
                                    <p className="text-xs">online</p>
                                    <div className="w-2 h-2 rounded-full bg-green"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-black/70">
                            <QuestionMarkCircleIcon className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex flex-col h-full overflow-y-auto md:p-5 p-3 space-y-5 w-full" ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`py-2 flex flex-col justify-between px-3 rounded-lg max-w-[15rem] overflow-x-clip md:max-w-xs text-xs md:text-sm ${msg.sender === "user"
                                    ? "bg-gray-100 text-black/70 shadow-lg self-end text-start w-fit"
                                    : "bg-gray-300 text-black shadow-lg self-start text-left w-fit"
                                    }`}
                            >
                                <p className="mr-9">{msg.text}</p>
                                <p className=" text-xs self-end text-black/40">11.37</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mt-2 text-black/70 bg-[#fff] border-t border-t-black/30 w-full p-3 sm:p-4 md:p-5">
                        <button className="">
                            <Plus className="w-5 h-5" />
                        </button>
                        <button className="">
                            <Camera className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            className="flex-1 px-2 py-2 bg-gray-300 rounded-lg w-full sm:w-auto text-sm"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type message..."
                        />
                        <button
                            onClick={sendMessage}
                            className="p-1 px-3 sm:px-4 cursor-pointer h-full bg-green text-white rounded-lg"
                        >
                            <SendHorizonal className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>

        </main>
    );
}