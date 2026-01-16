import { Link } from "react-router-dom"
import { HiOutlineChatAlt2 } from "react-icons/hi"
const UserChatIcon = () => {
  return (
    <Link
      to="/userchats"
      className="relative text-gray-700 hover:text-blue-600"
    >
      <HiOutlineChatAlt2 size={26} />
      {/* Unread badge */}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        3
      </span>
    </Link>
  )
}
export default UserChatIcon
