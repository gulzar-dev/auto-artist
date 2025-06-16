import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const reviews = [
  {
      id: 1,
      name: "Sarah Johnson",
      text: "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    text: "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend! I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend!",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    text: "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend!",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    text: "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend! I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend! I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend!",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    text: "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend!",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    text: "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's really easy to use. Highly recommend!",
  },
]