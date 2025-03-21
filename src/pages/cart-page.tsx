import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context"
import { Minus, Plus, Trash2 } from "lucide-react";

export const CartPage = () => {
  const { cart, cartProducts, removeFromCart, addToCart, deleteFromCart, cartTotal } = useCart();

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-y-6">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <Link to="/" className="flex items-center justify-center gap-x-4 bg-white px-4 py-2 rounded-sm text-lg hover:bg-black hover:text-white hover:transition-all hover:duration-300">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {cartProducts.map((cartProduct) => (
                <div key={cartProduct.id} className="flex gap-4 justify-between border-b border-black pb-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link to={`/${cartProduct.url}`}>
                    <div className="size-24 md:size-48">
                        <img src={cartProduct.image} alt={cartProduct.name} className="rounded-sm size-full object-cover" />
                    </div>
                    </Link>
                    <div>
                      <p className="font-bold text-black">{cartProduct.name}</p>
                      <p>${cartProduct.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="flex justify-between flex-col-reverse items-center gap-4 border border-black rounded-sm p-2 lg:w-fit lg:gap-x-8 sm:flex-row">
                    <button className="border border-black rounded-sm px-2 py-1 cursor-pointer"
                    onClick={() => removeFromCart(cartProduct.id)}
                  >
                    <Minus className="size-5 text-black"/>
                  </button>
                  <span>{cartProduct.quantity}</span>
                  <button className="border border-black rounded-sm px-2 py-1 cursor-pointer" onClick={() => addToCart(cartProduct.id)}>
                    <Plus className="size-5 text-black"/>
                  </button>
                  <button onClick={() => deleteFromCart(cartProduct.id)}>
                    <Trash2 className="size-5 text-black"/>
                  </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-2xl text-black">Total:</p>
            <span className="text-black font-bold text-2xl">${cartTotal.toFixed(2)}</span>
          </div>
        </>
      )}
    </section>
  )
}
