
import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';

function App(){
 const target=new Date('2026-08-23T09:00:00');
 const [time,setTime]=useState('');
 useEffect(()=>{
  const i=setInterval(()=>{
   const d=target-new Date();
   const days=Math.floor(d/86400000);
   const hrs=Math.floor((d%86400000)/3600000);
   const min=Math.floor((d%3600000)/60000);
   setTime(`${days} Hari ${hrs} Jam ${min} Menit`);
  },1000);
  return ()=>clearInterval(i);
 },[]);

 return <div style={{background:'#f7ecd0',padding:20,fontFamily:'serif'}}>
 <h1>Muhammad Solikhin & Vera Monica</h1>
 <h2>Undangan Pernikahan Jawa Keraton Emas</h2>
 <p>Countdown: {time}</p>

 <h3>Mempelai</h3>
 <p>Putra Bpk. Muhammad Sarjono & Ibu Sumaryanti</p>
 <p>Putri Bpk. Agus Sulistiyono & Ibu Siti Asmonah</p>

 <h3>Acara</h3>
 <p>Akad: 23 Agustus 2026 - 09.00 WIB</p>
 <p>Resepsi: 23 Agustus 2026 - 10.00 WIB</p>
 <p>Dusun Gadingan, Banyubiru, Dukun, Magelang, Jawa Tengah</p>

 <a href="https://share.google/zmUUfJnE69BI58B6D">Buka Maps</a>

 <h3>Love Story</h3>
 <p>Ceritakan perjalanan cinta Anda di sini.</p>

 <h3>Galeri Prewedding</h3>
 <p>Tambahkan foto pada folder public dan tampilkan di sini.</p>

 <h3>RSVP WhatsApp</h3>
 <a href="https://wa.me/6283113099072?text=Saya%20akan%20hadir">Konfirmasi Kehadiran</a>

 <h3>Amplop Digital</h3>
 <p>Bank Mandiri</p>
 <p>181850004693666</p>
 <p>a.n Muhammad Solikhin</p>

 <h3>Ucapan Tamu</h3>
 <textarea rows="5" cols="40" placeholder="Tulis ucapan..."></textarea>
 </div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
