import { useState } from "react"
import { ShoppingCart, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { products } from "../lib/products"

type CartItem = {
  productId: number;
  quantity: number;
}

export const HomePage = () => {
  const [cartNumber, setCartNumber] = useState<CartItem[]>([]);

  const productCount = cartNumber.reduce((sum, product) =>  sum + product.quantity, 0);

  const addToCart = (productId: number) => {
    setCartNumber(cartNumber.some((item) => item.productId === productId) ? cartNumber.map((item) => (
      item.productId === productId ? {...item, quantity: item.quantity + 1} : item
    )) : [...cartNumber, { productId, quantity: 1 }])
  }

  return (
    <>
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
      <section className="flex flex-col gap-8 mt-4">
        <h1 className="text-4xl font-bold">Food Products</h1>
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-y-6 pl-4">
              <Link to={`/${product.url}`}>
              <figure className="h-96">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </figure>
              </Link>
              <div className="space-x-2">
                <h3 className="text-xl text-black">{product.name}</h3>

            <div className="flex items-center gap-1">
            {
              [...Array(5)].map((_, i) => (
                <Star key={i} className={`size-5  ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-400"}`}/>
              ))
            }
            </div>
                <p className="font-bold">${product.price}</p>
              </div>

              <button onClick={() => addToCart(product.id)} className="flex items-center justify-center gap-x-4 bg-white px-4 py-2 rounded-sm text-lg hover:bg-black hover:text-white hover:transition-colors hover:duration-500">
                <ShoppingCart className="size-4"/>
                Add to Cart
              </button>
            </div>

          ))}
        </div>
      </section>
    </>
  )
}
