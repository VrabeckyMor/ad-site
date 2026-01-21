'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Nav } from './nav';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="h-16"></div>
      <video src="/bg.mp4" ref={videoRef} autoPlay loop muted className="fixed top-0 left-0 w-full h-full z-0 object-cover" />
      <main className="relative flex flex-col items-center z-10">

        <section id="home" className="flex flex-col items-center py-5 w-[60%] scroll-mt-16">
          <h1 className="border-b border-black w-[60%] text-center text-2xl mb-5">Úvod</h1>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium quo deserunt dolore doloribus? Non accusamus voluptatem ut provident soluta. Minima ducimus vero inventore neque, ullam dolor nesciunt esse expedita!</p>
        </section>

        <section id="services" className="flex flex-col items-center py-5 w-[60%] scroll-mt-16">
          <h1 className="border-b border-black w-[60%] text-center text-2xl mb-5">Služby</h1>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium quo deserunt dolore doloribus? Non accusamus voluptatem ut provident soluta. Minima ducimus vero inventore neque, ullam dolor nesciunt esse expedita!</p>
        </section>

        <section id="about" className="flex flex-col items-center py-5 w-[60%] scroll-mt-16">
          <h1 className="border-b border-black w-[60%] text-center text-2xl mb-5">O mně</h1>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium quo deserunt dolore doloribus? Non accusamus voluptatem ut provident soluta. Minima ducimus vero inventore neque, ullam dolor nesciunt esse expedita!</p>
        </section>

        <section id="contact" className="flex flex-col items-center py-5 w-[60%] scroll-mt-16">
          <h1 className="border-b border-black w-[60%] text-center text-2xl mb-5">Kontakt</h1>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium quo deserunt dolore doloribus? Non accusamus voluptatem ut provident soluta. Minima ducimus vero inventore neque, ullam dolor nesciunt esse expedita!</p>
        </section>

      </main>
      <footer className="relative flex flex-col items-center z-10 p-4">
        <p className='text-center'>© 2026 Tadeáš Kótka. <br /> Všechna práva vyhrazena.</p>
        <p className='text-center'>Background by: <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a></p>
      </footer>
    </div>
  );

}