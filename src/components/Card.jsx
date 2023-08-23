import { Link } from "react-router-dom";
import { Link as Anchor } from "react-router-dom"

export default function Card({ src, alt, text }) {
  return (
    <div class="w-full md:w-2/5 flex flex-col items-center p-2 m-2">
  <div class="w-full flex flex-col items-center mt-5 cursor-pointer">
    <a href="/cities" class="w-full h-[200px] rounded-lg overflow-hidden">
      <img src={src} alt={alt} class="w-[300px] h-[400px] object-cover" />
    </a>
    <p class="text-gray-700 font-semibold text-lg mt-3 leading-tight text-center">{text}</p>
    <div class="mt-3">
      <a href="/cities" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
        Explore Cities
      </a>
    </div>
  </div>
</div>
  )
}







