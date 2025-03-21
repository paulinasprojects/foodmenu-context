import { Star } from "lucide-react";
import { ReviewsProps } from "../lib/types";

export const Reviews = ({reviews}: ReviewsProps) => {
  return (
    <section className="flex flex-col gap-6 my-12 relative before:content-[''] before:absolute before:h-px before:w-full before:bg-black before:rounded-sm before:-mt-8 ">
      <h2 className="text-xl font-bold">Customer Reviews</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-y-3 border border-black p-4 rounded-sm">
            <h4 className="font-bold">{review.user}</h4>
            <div className="flex items-center gap-1">
              {
                [...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-5  ${i < Math.floor(review.rating) ? "text-yellow-400 fill-amber-400" : "text-gray-400"}`}/>
                ))
              }
            </div>
            <p className="text-black">{review.comment}</p>
            <p>{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
