import React from "react"
import { Link } from "react-router-dom"
const chats = [
  {
    id: 1,
    doctor: "Dr. Jane Smith",
    specialty: "Neurologist",
    lastMessage: "Please take the medicine after meals.",
    time: "5 min ago",
    unread: 1,
    image: "/imgs/doctor1.jpg",
  },
  {
    id: 2,
    doctor: "Dr. John Doe",
    specialty: "Cardiologist",
    lastMessage: "Your test results look good.",
    time: "30 min ago",
    unread: 0,
    image: "/imgs/doctor2.jpg",
  },
  {
    id: 3,
    doctor: "Dr. Alex Brown",
    specialty: "Pediatrician",
    lastMessage: "Let me know if the fever continues.",
    time: "Yesterday",
    unread: 2,
    image: "/imgs/doctor3.jpg",
  },
]
const UserChats = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Messages
          </h1>
          <p className="text-gray-600">
            Your conversations with doctors
          </p>
        </div>
        {/* Chats List */}
        <div className="bg-white rounded-2xl shadow">
          {chats.map((chat) => (
            <Link
              key={chat.id}
              to={`/userchat`}
              className="flex items-center justify-between p-5 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={chat.image}
                  alt={chat.doctor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {chat.doctor}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {chat.specialty}
                  </p>
                  <p className="text-sm text-gray-600 truncate max-w-xs">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">
                  {chat.time}
                </p>
                {chat.unread > 0 && (
                  <span className="inline-block mt-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
export default UserChats
