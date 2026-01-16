import React, { useState } from "react"
const DoctorChat = () => {
  const [messages, setMessages] = useState([
    { from: "patient", text: "Hello Doctor 👋" },
    { from: "doctor", text: "Hello! How can I help you today?" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const sendMessage = () => {
    if (!newMessage.trim()) return
    setMessages([...messages, { from: "doctor", text: newMessage }])
    setNewMessage("")
  }
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Chat with Patient
            </h1>
            <p className="text-gray-600 text-sm">
              Patient: John Doe
            </p>
          </div>
          <span className="px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
            Online
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Patient Info */}
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold text-gray-800 mb-4">
              Patient Info
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Name:</strong> John Doe
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Age:</strong> 29
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Appointment:</strong> Today · 2:00 PM
            </p>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold">
              View Profile
            </button>
          </div>
          {/* Chat Area */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.from === "doctor"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
                      msg.from === "doctor"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            {/* Input */}
            <div className="shadow p-4 flex gap-3">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 pl-4 py-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DoctorChat
