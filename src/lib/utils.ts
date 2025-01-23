import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const comments = [
  {
    quote: "★★★★☆",
    name: "Apolline Nosten",
    title:
      "Très bonne expérience comme d’habitude. Petit bémol, la prothésiste a été très longue donc je n’ai pas pu faire ma pause en entier… Dommage",
  },
  {
    quote: "★★★★★",
    name: "Sara",
    title: "Super",
  },
  {
    quote: "★★★★★",
    name: "Elodie",
    title: "Top comme toujours",
  },
  {
    quote: "★★★★★",
    name: "Dan",
    title: "Je recommande",
  },
  {
    quote: "★★★★★",
    name: "Giuliana",
    title:
      "Très agréable, accueil chaleureux! Je remercie la coiffeuse qui m’a soigneusement fais mon dégradé!",
  },
  {
    quote: "★★★★★",
    name: "Philippine",
    title: "Génial j’adore toujours parfait et tient vraiment longtemps !",
  },
  {
    quote: "★★★★★",
    name: "Bérengère",
    title: "Très bon accueil, efficace, je reviendrai",
  },
  {
    quote: "★★★★★",
    name: "Wittig",
    title:
      "Super comme toujours ! Sarah est hyper pro et minutieuse ! Je vous recommande le rapport qualité/prix est excellent",
  },
  {
    quote: "★★★★★",
    name: "Alexandra",
    title: "Je suis ravie ! Merci.",
  },
  {
    quote: "★★★★★",
    name: "Elo",
    title:
      "Super brushing wavy effectué par Nora, je recommande les yeux fermés",
  },
];

export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const slides = [
  "https://cdn1.treatwell.net/images/view/v2.i9877593.w1280.h800.xB8E2CDAA/",
  "https://cdn1.treatwell.net/images/view/v2.i9877595.w1280.h800.x66524EBE/",
  "https://cdn1.treatwell.net/images/view/v2.i9877597.w1280.h800.xBD8D6913/",
  "https://cdn1.treatwell.net/images/view/v2.i9877558.w1280.h800.x9BCA90BA/",
  "https://cdn1.treatwell.net/images/view/v2.i9877602.w1280.h800.x585476C6/",
  "https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,h_500/v1708598208/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/photogallery-85fe9fed-2ed8-41f3-a477-c32c1991a0bc.6.photocpid.jpg",
  "https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,h_500/v1708598208/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/photogallery-34c3282f-87a6-482e-907b-5a5ff95c26bd.7.photocpid.jpg",
  "https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,h_500/v1708598275/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/photogallery-b23022fa-c516-48da-8c85-11d5bc4101a6.8.photocpid.jpg",
  "https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,h_500/v1708598275/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/photogallery-2d1fe358-0d71-4312-8e80-56f95b5f86d8.9.photocpid.jpg",
  "https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,h_500/v1708598274/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/photogallery-2fe29169-d1b9-41f9-9cd3-5e09d582b76d.10.photocpid.jpg",
];
