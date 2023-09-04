import { useState } from "react"
import Activity from "../components/Activity"
import Money from "./Money"

export default function Itinerary({ name, price, duration, tags, photo, admin_id, admin_photo }) {

    const [show, setShow] = useState(false)
    const [red, setRed] = useState(false)

    const time = Math.floor(duration / 60);

    return (
        <main>
            <div className="flex-grow flex flex-col items-center justify-center mt-5 px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="w-full sm:w-11/12 lg:w-3/4 flex flex-col items-center justify-start bg-slate-100 mb-4">
                    <p className="text-center text-2xl font-bold m-4">{name}</p>
                    <div className="w-full h-[300px] sm:h-[500px] lg:h-[600px] bg-slate-700">
                        <img className="w-full h-full object-cover" src={photo} alt="photo" />
                    </div>
                    
                    <div className="flex flex-wrap sm:w-[250px] lg:w-[850px] h-[320px] mt-10 py-5 m-6 items-center justify-between">
                     <div className="flex flex-col items-center justify-start p-2.5 w-[100px]">
                            <p className=" flex text-md font-bold">User:</p>
                            <img className="flex p-2" src={admin_photo} alt="User" />
                            <p className=" flex text-center text-sm">{admin_id}</p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start p-2.5 ">
                            <p className=" flex items-center justify-start text-md font-bold">Hashtags:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{tags}</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Duration:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{time} hs.</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Price:</p>
                            <p className=" flex  items-center justify-start text-center text-sm"></p>
                            <div className=" flex ">
                                <Money price={price} />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full sm:w-[50px] lg:w-[750px] h-[40px] mt-5 p-5 items-center justify-between" >
                        {red ? <div onClick={() => setRed(!red)}><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg></div> : <div onClick={() => setRed(!red)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg></div>}

                        {show ? (<div onClick={() => setShow(!show)} className="hidden sm:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></div>) : (<div onClick={() => setShow(!show)} className="hidden sm:flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>)}
                    </div>
                </div>
                {show ? <Activity /> : <h1></h1>}

            </div>
        </main>
    )
}