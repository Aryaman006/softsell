"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    const userMsg = { text: userMessage, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setUserMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      const botMsg = { text: data.reply || "Sorry, no response.", sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Please try again.", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Chat Bot Icon/Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer z-50"
        >
          <span role="img" aria-label="chatbot">
            💬
          </span>
        </div>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 bg-white p-4 rounded-lg shadow-lg w-80 z-50">
          <div className="h-60 overflow-y-auto mb-3 space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg max-w-[75%] ${
                    message.sender === "user"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left text-gray-400 text-sm">Typing...</div>
            )}
          </div>
          <div className="flex">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="border p-2 w-3/4 rounded-md"
              placeholder="Ask me anything..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 ml-2 rounded-md"
            >
              Send
            </button>
          </div>

          {/* Close button */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 cursor-pointer text-gray-500"
          >
            ✖
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
