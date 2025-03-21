import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "../context/cart-context"

export const Header = () => {
  const {cart} = useCart();

  const productCount = cart.reduce((sum, product) =>  sum + product.quantity, 0);

  return (
    <header className="bg-white shadow-md p-6 sticky top-0 z-50 backdrop-blur-md">
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <Link to="/" className="text-2xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex gap-x-2">
                <ShoppingCart/>
                 {productCount > 0 && (
                   <span className="bg-black text-white text-lg rounded-full w-7 h-7 flex items-center justify-center">
                    {productCount}
                   </span>
                 )}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
