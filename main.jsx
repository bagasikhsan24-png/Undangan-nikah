import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const targetDate = new Date("2026-08-23T09:00:00");

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown("Acara Sedang Berlangsung");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        background: "#f8f1dd",
        color: "#4b3416",
        fontFamily: "Georgia, serif",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h3>The Wedding Of</h3>

      <h1
        style={{
          color: "#b8860b",
          fontSize: "38px",
        }}
      >
        Muhammad Solikhin
        <br />&
        <br />
        Vera Monica
      </h1>

      <hr />

      <h2>✨ Jawa Keraton Emas Premium ✨</h2>

      <p>
        Dengan memohon rahmat dan ridho Allah SWT,
        kami mengundang Bapak/Ibu/Saudara/i
        untuk menghadiri pernikahan kami.
      </p>

      <h2>⏳ Countdown Acara</h2>
      <h3>{countdown}</h3>

      <hr />

      <h2>👑 Mempelai Pria</h2>
      <p>
        Muhammad Solikhin
        <br />
        Putra Bapak Muhammad Sarjono
        <br />
        dan Ibu Sumaryanti
      </p>

      <h2>👑 Mempelai Wanita</h2>
      <p>
        Vera Monica
        <br />
        Putri Bapak Agus Sulistiyono
        <br />
        dan Ibu Siti Asmonah
      </p>

      <hr />

      <h2>📅 Akad Nikah</h2>
      <p>23 Agustus 2026</p>
      <p>09.00 WIB</p>

      <h2>🎉 Resepsi</h2>
      <p>23 Agustus 2026</p>
      <p>10.00 WIB</p>

      <hr />

      <h2>📍 Lokasi Acara</h2>
      <p>
        Dusun Gadingan,
        Banyubiru, Dukun,
        Magelang, Jawa Tengah
      </p>

      <a
        href="https://share.google/zmUUfJnE69BI58B6D"
        target="_blank"
      >
        📍 Buka Google Maps
      </a>

      <hr />

      <h2>❤️ Love Story</h2>
      <p>
        Ceritakan perjalanan cinta Anda
        dari awal pertemuan hingga
        menuju hari bahagia ini.
      </p>

      <hr />

      <h2>📸 Galeri Prewedding</h2>

<img
  src="/SAVE_20260719_043851.jpg"
  alt="Foto 1"
  style={{
    width: "100%",
    maxWidth: "400px",
    borderRadius: "20px",
    marginBottom: "20px"
  }}
/>

<img
  src="/solikhin-vera-2.jpg"
  alt="Foto 2"
  style={{
    width: "100%",
    maxWidth: "400px",
    borderRadius: "20px",
    marginBottom: "20px"
  }}
/>

<img
  src="/solikhin-vera-3.jpg"
  alt="Foto 3"
  style={{
    width: "100%",
    maxWidth: "400px",
    borderRadius: "20px"
  }}
/>
        style={{
          width: "100%",
          maxWidth: "300px",
          borderRadius: "15px",
        }}
      />

      <hr />

      <h2>🎁 Amplop Digital</h2>

      <p>
        <b>Bank Mandiri</b>
      </p>

      <p>181850004693666</p>

      <p>a.n Muhammad Solikhin</p>

      <hr />

      <h2>💌 RSVP Kehadiran</h2>

      <a
        href="https://wa.me/6283113099072?text=Assalamu'alaikum,%20Saya%20akan%20hadir%20di%20acara%20pernikahan%20Muhammad%20Solikhin%20dan%20Vera%20Monica"
        target="_blank"
      >
        Konfirmasi via WhatsApp
      </a>

      <hr />

      <h2>📝 Ucapan Tamu</h2>

      <textarea
        rows="5"
        cols="40"
        placeholder="Tulis ucapan dan doa terbaik..."
      />

      <br />
      <br />

      <button>Kirim Ucapan</button>

      <hr />

      <h2>🎵 Musik</h2>
      <p>Kusuma Wijaya</p>

      <br />

      <p>
        Terima kasih atas doa dan restunya.
      </p>

      <h3>
        Muhammad Solikhin & Vera Monica
      </h3>
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);
