import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import apiUrl from "../apiUrl";



import NotFoundPage from './E404'; // Importa el componente NotFoundPage

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(apiUrl+'cities/carousel')
      .then(res => setData(res.data.data_carousel))
      .catch(err => console.log(err))
  }, []);

  return (
    <main className="mx-[50px] my-[100px] flex flex-col flex-wrap
    md:mx-[100px] md:my-[150px]
    lg:mx-[80px] lg:my-[200px] lg:flex-row lg:justify-between lg:flex-nowrap
    xl:mx-[120px]
    2xl:mx-[200px]
    min-[1800px]:mx-[250px"
    style={{
      backgroundImage: `./assets/fondonube.JPG`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}>
      
      <div className="flex flex-col gap-5 items-center text-center
            md:w-fit md:gap-7
            lg:w-1/2 lg:gap-10 lg:items-start lg:text-start">
                <h1 className="w-full font-bold text-[24px] leading-8
                md:text-[38px] md:leading-10
                lg:leading-tight lg:text-[30px]
                min-[1570px]:text-[44px]">Find the perfect destination</h1>
                <p className="w-full text-[18px] leading-6 font-semibold text-[#1C1C1C99]
                md:w-5/6 md:text-[20px] md:leading-8
                lg:text-[18px]
                min-[1570px]:text-[24px]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="w-2/3 rounded-lg py-[8px] px-[10px] flex justify-center bg-indigo-600 text-white text-[15px] font-semibold
                md:py-[13px] md:px-[15px] md:gap-4 md:text-[18px] md:leading-8
                lg:w-1/2 lg:py-[12px] lg:px-[16px] lg:text-[18px]
                xl:w-5/12
                min-[1570px]:text-[24px]">
                    <Anchor to='/cities'>View More</Anchor>
                </button>
            </div>
            <Carousel data={data} />
    </main>
  )
}
