import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Avatar from '../assets/seller.png'
import Avatar2 from '../assets/cust1.png'
import { Camera, Plus, SendHorizonal, ShieldCheck } from "lucide-react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import products from "../utils/products";

const ChatPage = () => {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatRef = useRef(null);
    const [botIndex, setBotIndex] = useState(0);
    const lastMessageRef = useRef(null);

    // Menggabungkan semua produk dari berbagai kategori
    const allProducts = products.flatMap(category => category.items);

    // Mencari produk berdasarkan id
    const product = allProducts.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div className="text-center text-red-500 text-lg">Produk tidak ditemukan</div>;
    }

    useEffect(() => {
        if (messages.length > 0) {
            gsap.fromTo(
                chatRef.current.lastChild,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        }
    }, [messages]);

    // Auto-scroll ke bawah setiap kali ada pesan baru
    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
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

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const userImageMessage = { image: reader.result, sender: "user" };
                setMessages((prev) => [...prev, userImageMessage]);

                setTimeout(() => {
                    setMessages((prev) => [
                        ...prev,
                        { text: "Gambar yang menarik! Ada yang bisa saya bantu?", sender: "bot" }
                    ]);
                }, 1000);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <main className="w-full flex pt-20 md:pt-30 h-[100dvh] px-3 lg:px-15 pb-20 lg:pb-0">
            <div className="md:w-1/3 md:block hidden">
                <div className="h-full bg-[#fafafa] p-5  overflow-hidden">
                    <div className="flex gap-x-2 items-center">
                        <p className="font-semibold text-black text-xl">INBOX</p>
                        <p>(3)</p>
                    </div>

                    <div className="mt-4 bg-white rounded-lg p-4 flex gap-x-2 justify-between items-center font-semibold w-full">
                        <div className="flex gap-x-2 items-center">
                            <img src={Avatar} alt="" className="h-15 rounded-lg" />
                            <div className="text-sm text-black/70">
                                <p className="font-semibold">Angely</p>
                                <p className="text-xs">Seller</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-green animate-pulse"></div>
                    </div>
                    <div className="mt-1 bg-white rounded-lg p-4 flex gap-x-2 justify-between items-center font-semibold w-full">
                        <div className="flex gap-x-2 items-center">
                            <img src={Avatar2} alt="" className="h-15 rounded-full grayscale" />
                            <div className="text-sm text-black/70">
                                <p className="font-semibold">Michael</p>
                                <p className="text-xs">Seller</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-gray-800 animate-pulse"></div>
                    </div>
                    <div className="mt-1 bg-white rounded-lg p-4 flex gap-x-2 justify-between items-center font-semibold w-full">
                        <div className="flex gap-x-2 items-center">
                            <img src={Avatar2} alt="" className="h-15 rounded-full grayscale" />
                            <div className="text-sm text-black/70">
                                <p className="font-semibold">Thomas</p>
                                <p className="text-xs">Seller</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-gray-800 animate-pulse"></div>
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
                                    <div className="w-2 h-2 rounded-full bg-green animate-pulse pulse-strong"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-black/70">
                            <QuestionMarkCircleIcon className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="py-2 px-1 bg-white border-b-black/15 border-b w-full flex justify-between items-center">
                        <div className="flex gap-x-2">
                            <img src={product.image} className="w-20 h-15 object-cover rounded-lg" alt="" />
                            <div>
                                <p className="text-sm font-semibold mb-2">{product.name}</p>
                                <p className="text-sm">${product.price}</p>
                                <div className="flex gap-x-1 items-center">
                                    <p className="text-xs text-green flex flex-wrap">${product.price + 5} Include Buyer Protection <span><ShieldCheck className="w-4 h-4 text-green" /></span></p>
                                </div>
                            </div>
                        </div>

                        <div className="text-sm py-2 px-3 rounded-lg border border-black/20">
                            <Link to={`/product/${product.id}`}>Back</Link>
                        </div>
                    </div>

                    <div className="flex flex-col h-full overflow-y-auto md:p-5 p-3 space-y-5 w-full" ref={chatRef}>
                        <div className="py-2 flex flex-col justify-between px-3 rounded-lg max-w-[15rem] md:max-w-xs text-xs md:text-sm bg-gray-300 text-black shadow-sm self-start text-left w-fit">
                            <p className="mr-9 break-words">Halo, terimakasih sudah melihat produk saya!</p>
                            <p className=" text-xs self-end text-black/40">11.37</p>
                        </div>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                ref={index === messages.length - 1 ? lastMessageRef : null}
                                className={`py-2 flex flex-col justify-between px-3 rounded-lg max-w-[15rem] md:max-w-xs text-xs md:text-sm ${msg.sender === "user"
                                    ? "bg-gray-100 text-black/70 shadow-sm self-end text-start w-fit"
                                    : "bg-gray-300 text-black shadow-sm self-start text-left w-fit"
                                    }`}
                            >
                                {msg.text && <p className="mr-9 break-words">{msg.text}</p>}
                                {msg.image && <img src={msg.image} alt="Uploaded" className="w-40 rounded-lg mt-2" />}
                                <p className=" text-xs self-end text-black/40">11.37</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mt-2 text-black/70 bg-[#fff] border-t border-t-black/30 w-full p-3 sm:p-4 md:p-5">
                        {/* upload image */}
                        <input type="file" accept="image/*" className="hidden" id="imageUpload" onChange={handleImageUpload} />
                        <button onClick={() => document.getElementById("imageUpload").click()}>
                            <Plus className="w-5 h-5" />
                        </button>
                        <button onClick={() => document.getElementById("imageUpload").click()}>
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

export default ChatPage;