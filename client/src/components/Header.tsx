import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="flex flex-col px-10 py-2 shadow-lg border-b border-gray-200 dark:border-gray-600 dark:shadow-gray-800">
      <div className="flex justify-between items-center">
         <div>
           <Link to="/signin">
            <button className="bg-[#C7AD86] text-white px-4 py-1 rounded-2xl hover:bg-[#6F4F37]">
              S'inscrire
            </button>
           </Link>
         </div>
      </div>
    </div>
  )
}

export default Header
