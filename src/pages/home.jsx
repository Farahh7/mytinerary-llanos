import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";



import NotFoundPage from './E404'; // Importa el componente NotFoundPage

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('/data.json')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <main className="grow flex flex-col items-center mt-[20px]"
    style={{
      backgroundImage: `./assets/fondonube.JPG`, // Cambia la ruta de la imagen
      backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir el fondo
      backgroundPosition: 'center', // Centra la imagen en el fondo
    }}>
      
      <div className=" grow flex justify-center items-center">
        <div className="md:w-[742px] md:h-[304px] flex flex-col md:items-center lg:items-start lg:w-[40vw] justify-center gap-10">
          <h1 className="font-sans font-bold text-[48px]">Find the perfect destination</h1>
          <p>Our app will help you find the perfect path for your next<br />trip. With an easy-to-use interface and a host of itinerary<br />options, planning your next trip has never been easier.</p>
          <Anchor to='/Error' className="flex justify-center items-center md:w-[230px] md:h-[50px] bg-[#4f46e5] text-white py-[16px] px-[20px] rounded-[8px]">View More</Anchor>
        </div>
        <Carousel data={data} />
      </div>
    </main>
  )
}
