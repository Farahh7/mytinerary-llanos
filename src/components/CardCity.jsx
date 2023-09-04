
import { Link as Anchor } from "react-router-dom"

export default function CardCity({ src, alt, text, id, textCountry }) {
    return (
        <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
            <Anchor to={'/city/' + id} className="block w-full h-[150px]">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </Anchor>
            <div className="p-4 flex flex-col justify-center items-center">
                <h1 className="py-1 px-1 font-semibold text-center">{text}</h1>
                <p className="flex items-center text-[14px] font-bold">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path
                            fillRule="evenodd"
                            d="M12 2c-5.532 0-10 4.477-10 10s4.468 10 10 10 10-4.477 10-10-4.468-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-14a1 1 0 00-1 1v2.336l-1.802 1.722a1 1 0 101.447 1.392L12 9.238l1.355 1.072a1 1 0 001.448-1.392L13 7.336V5a1 1 0 00-1-1zm0 12.742v2.964a1 1 0 102 0v-2.964l1.802-1.722a1 1 0 10-1.447-1.392L12 14.238l-1.355-1.072a1 1 0 10-1.448 1.392L11 16.138v2.964a1 1 0 102 0z"
                            clipRule="evenodd"
                        />                    </svg>
                    {textCountry}
                </p>
            </div>
        </div>

    )
}