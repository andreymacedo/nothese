"use client";

import "../app/globals.css";
import Countdown from "../components/Countdown";
import Image from "next/image";


export default function Page(){
  const target = new Date(2025, 11, 15, 0,0,0);

  return (
    <main className="main">
      {/* Vídeo desktop */}
      <video
        className="video-bg video-desktop"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/nothese-l.mp4" type="video/mp4" />
      </video>

      {/* Vídeo mobile */}
      <video
        className="video-bg video-mobile"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/nothese-s.mp4" type="video/mp4" />
      </video>

      <div className="header">

        <div className="logo">
          
          <Image
            src="/nothese-logo-w.svg"
            alt="Nothese logo"
            width={220}
            height={80}
            priority
            className="w-[200px] md:w-[260px]"
          />

        </div>

        <h3>art for you</h3>

      </div>

      <div className="sheet">
        <h2 className="h1">lançamento</h2>

        <Countdown targetDate={target} />

        <div className="footer">
          <h3>edição única e limitada</h3>
          <button className="cta">fila de espera</button>
        </div>
      </div>
    </main>
  );
}
