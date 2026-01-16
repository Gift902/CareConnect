import React from "react"
import { Link } from "react-router-dom"
const chats = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Thank you doctor 🙏",
    time: "2 min ago",
    unread: 2,
    image: "/imgs/patient1.jpg",
  },
  {
    id: 2,
    name: "Mary Smith",
    lastMessage: "When should I take the medicine?",
    time: "10 min ago",
    unread: 0,
    image: "/imgs/patient2.jpg",
  },
  {
    id: 3,
    name: "Alex Brown",
    lastMessage: "I feel better today",
    time: "1 hr ago",
    unread: 1,
    image: "/imgs/patient3.jpg",
  },
]
const DoctorChats = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Chats
          </h1>
          <p className="text-gray-600">
            Messages from your patients
          </p>
        </div>
        {/* Chats List */}
        <div className="bg-white rounded-2xl shadow">
          {chats.map((chat) => (
            <Link
              key={chat.id}
              to={`/doctorchat`}
              className="flex items-center shadow justify-between p-5 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={chat.image}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {chat.name}
                  </h3>
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
export default DoctorChats
