import { Link } from "react-router-dom"
import { Link as Anchor } from "react-router-dom"
export default function Card({ src, alt, text }) {
  return (
    <div className="w-2/5 flex flex-col items-center mt-5 cursor-pointer">
      <Link to="/error" className="w-[308px] h-[200px] rounded-[10px] overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </Link>
      <p className="text-[#1c1c1c] font-semibold leading-[31.92px] text-[20px]">{text}</p>
      <div className="mt-3">
        <Anchor to="./src/pages/Error.jsx" className="flex justify-center items-center md:w-[230px] md:h-[50px] bg-[#4f46e5] text-white py-[16px] px-[20px] rounded-[8px]">View More</Anchor>
        <Link to="./src/assets/underconstruction.jpg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Explore Cities
        </Link>
      </div>
    </div>
  );
}









