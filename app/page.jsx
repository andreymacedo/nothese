"use client";

import "../app/globals.css";
import Countdown from "../components/Countdown";
import Image from "next/image";


export default function Page(){
  const target = new Date(2025, 12, 31, 0,0,0);

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

        <div className="logo" styles="margin-top: -4px;">
          
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
          <h3>verão 2025</h3>
          <a className="cta" href="https://chat.whatsapp.com/B5538Db5XQO5JoTtLFhAOM?mode=hqrt2&fbclid=PAb21jcAOdlD1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeIE_UuERFUOGJtvISOwPDmVbvNz3756QjBhmce6lRvRlTjm5Rdw8eNh9Z27Q_aem_yiUhNdScnHqzRnXUBW-X5A" target="_blank">faça parte do grupo</a>
        </div>
      </div>
    </main>
  );
}
