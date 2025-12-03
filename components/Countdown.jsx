"use client";
import { useEffect, useState } from "react";

function pad(n){ return String(n).padStart(2, "0"); }

export default function Countdown({ targetDate }) {
  const target = new Date(targetDate);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(()=> setNow(new Date()), 1000);
    return ()=> clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  return (
    <div className="countrow" aria-live="polite">
      <div className="block">
        <div className="num">{days}</div>
        <div className="label">dias</div>
      </div>

      <div className="block">
        <div className="num">{pad(hours)}</div>
        <div className="label">horas</div>
      </div>

      <div className="block">
        <div className="num">{pad(minutes)}</div>
        <div className="label">minutos</div>
      </div>

      <div className="block">
        <div className="num">{pad(seconds)}</div>
        <div className="label">segundos</div>
      </div>
    </div>
  );
}
