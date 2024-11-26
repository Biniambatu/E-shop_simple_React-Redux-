import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"


export const Header = () => {
    const cartList = useSelector(state => state.cartState.cartList)
  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jupitar</span>
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <span className="text-sm  text-gray-500 dark:text-white hover:underline">Cart: {cartList.Length}</span>
                    <Link to="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <NavLink to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="text-gray-900 dark:text-white hover:underline">Cart</NavLink>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline">Company</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
