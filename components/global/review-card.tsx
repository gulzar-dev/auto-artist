import React from 'react'
import { StarIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { cn, reviews } from '@/lib/utils'


const Reviewcard = () => {
    const itemslist = reviews.map(review => 
    <div key={review.id} className="bg-[#3F3F3F] flex-none rounded-lg shadow-lg overflow-hidden w-3/12 ">
        <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                {/* <Avatar className="w-10 h-10 mr-4">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">San Francisco</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <p className="text-gray-300">
                {review.text}
              </p>
            </div>
    </div>
    )
  return itemslist
}

export default Reviewcard
