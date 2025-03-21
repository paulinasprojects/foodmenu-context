import { ArrowRight, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { products } from "../lib/products";
import { Reviews } from "../components/reviews";
import { useCart } from "../context/cart-context";


export const ProductPage = () => {
    const { url } = useParams();
    const {addToCart, removeFromCart, getProductQuantity} = useCart();
    const product = products.find((item) => item.url === url)!;

    const quantity = getProductQuantity(product.id);
    
  return (
    <>
      <section className="flex flex-col gap-4 mt-5">
        <h2 className="text-3xl">{product.name}</h2>
        <div className="flex gap-x-8 items-center">
          <div className="flex items-center gap-1">
              {
                [...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-5  ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-400"}`}/>
                ))
              }
            </div>
            <span className="text-xl">
              {product.reviews.length} {" "}
              {product.reviews.length === 1 ? "rating" : "ratings"}
            </span>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <figure>
            <img src={product.image} alt={product.name} className="rounded-sm" />
          </figure>

          <div className="flex flex-col gap-4">
            <p className="text-xl">{product.description}</p>
            <p className="text-xl">${product.price}</p>

            <div className="grid gap-4 sm:grid-cols-[200px_1fr] lg:grid-cols-1">
              <div className="flex justify-between border border-black rounded-sm p-4 lg:w-fit lg:gap-x-8">
                <button className="border border-black rounded-sm px-2 py-1 cursor-pointer disabled:bg-[#f8f8f2] disabled:border-transparent disabled:cursor-not-allowed"
                  disabled={quantity === 0}
                  onClick={() => removeFromCart(product.id)}
                >
                  <Minus className="size-5 text-black"/>
                </button>
                <span>{quantity}</span>
                <button className="border border-black rounded-sm px-2 py-1 cursor-pointer" onClick={() => addToCart(product.id)}>
                  <Plus className="size-5 text-black"/>
                </button>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">               
              <button onClick={() => addToCart(product.id)} className="flex items-center justify-center gap-x-2 bg-white px-4 py-2 rounded-sm text-lg hover:bg-black hover:text-white hover:transition-colors hover:duration-500">
                <ShoppingCart className="size-4"/>
                Add to Cart
              </button>
              <Link to="/cart" className="flex items-center justify-center gap-x-2 px-4 py-1 border border-black rounded-sm hover:bg-black hover:text-white">
                Go to Cart
                <ArrowRight/>
              </Link>
              </div>
            </div>
          </div>
        </div>

        <Reviews reviews={product.reviews}/>
      </section>
    </>
  )
}
