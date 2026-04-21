"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    timeSlot: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo AURA AESTHETIC Clinic, saya ingin melakukan reservasi:\n\n` +
      `*Nama:* ${formData.name}\n` +
      `*Layanan:* ${formData.service}\n` +
      `*Tanggal:* ${formData.date}\n` +
      `*Sesi:* ${formData.timeSlot}\n\n` +
      `Mohon konfirmasinya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "6281234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <Image className="object-cover blur-sm opacity-10 grayscale" src="/hero.png" alt="" fill priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
      </div>

      {/* Header */}
      <header className="relative z-50">
        <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center">
          <Link href="/" className="bg-white/95 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-full border border-primary/10 shadow-sm flex flex-col gap-0 group">
            <span className="text-[10px] font-headline font-bold tracking-tighter text-primary">AURA AESTHETIC.</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-8 md:space-y-12 text-center lg:text-left">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-primary block">The Concierge</span>
            <h1 className="font-headline text-5xl md:text-7xl leading-[0.9] text-primary">Reservasi <br/><span className="italic font-light">Privat.</span></h1>
            <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
              Satu langkah menuju transformasi. Tim ahli kami menanti untuk menyambut kehadiran Anda dalam suasana yang tenang dan eksklusif.
            </p>
            <div className="pt-4 md:pt-8 flex flex-col md:flex-row lg:flex-col gap-4 text-[9px] md:text-[10px] uppercase tracking-widest text-on-surface/70 font-bold justify-center lg:justify-start">
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>Konsultasi Medis Mendalam</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span>Prosedur Higienis & Aman</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-16 rounded-[32px] md:rounded-[40px] bloom-shadow">
              <form onSubmit={handleReservation} className="space-y-12">
                
                {/* 01. Identity */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-primary">01</span>
                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-4">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-on-surface/80">Nama Lengkap</label>
                      <input 
                        id="name" name="name" value={formData.name} onChange={handleInputChange} required
                        className="bg-transparent border-b border-primary/20 py-4 text-sm font-light focus:border-primary focus:outline-none transition-all placeholder:text-on-surface/60" 
                        placeholder="Ex: Sofia Alana" 
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-on-surface/80">WhatsApp Number</label>
                      <input 
                        id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required
                        className="bg-transparent border-b border-primary/20 py-4 text-sm font-light focus:border-primary focus:outline-none transition-all placeholder:text-on-surface/60" 
                        placeholder="0812xxxx" 
                      />
                    </div>
                  </div>
                </div>

                {/* 02. Service Selection */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-primary">02</span>
                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-widest text-on-surface/80">Pilihan Perawatan</label>
                    <select 
                      id="service" name="service" value={formData.service} onChange={handleInputChange} required
                      className="bg-transparent border-b border-primary/20 py-4 text-sm font-light focus:border-primary focus:outline-none cursor-pointer appearance-none"
                    >
                      <option value="">Pilih Prosedur</option>
                      <option value="Regenerative Facial">Regenerative Facial</option>
                      <option value="Laser Sculpting">Laser Sculpting</option>
                      <option value="Dermal Fillers">Dermal Fillers</option>
                      <option value="Botox Rejuvenation">Botox Rejuvenation</option>
                      <option value="Full Consultation">Personal Consultation</option>
                    </select>
                  </div>
                </div>

                {/* 03. Date & Time */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-primary">03</span>
                    <div className="h-[1px] flex-grow bg-primary/10"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col gap-2">
                       <label htmlFor="date" className="sr-only">Tanggal Reservasi</label>
                       <input 
                         id="date" name="date" value={formData.date} onChange={handleInputChange} required
                         className="bg-primary-container/10 border-none rounded-2xl p-6 text-sm font-light focus:ring-1 focus:ring-primary/20 outline-none w-full" 
                         type="date" 
                       />
                    </div>
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      {["Pagi", "Siang", "Sore"].map((slot) => (
                        <label 
                          key={slot} 
                          className={`flex items-center justify-center py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] uppercase font-bold tracking-widest transition-all cursor-pointer ${formData.timeSlot === slot ? 'bg-primary text-white shadow-lg' : 'bg-surface-container hover:bg-primary/10 text-on-surface/80'}`}
                        >
                          <input type="radio" name="timeSlot" value={slot} checked={formData.timeSlot === slot} onChange={handleInputChange} className="sr-only" required />
                          {slot}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 rounded-full text-white font-bold tracking-[0.3em] uppercase text-[10px] shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all bg-primary"
                >
                  Confirm Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Minimalist */}
      <footer className="relative z-10 py-12 px-8">
        <div className="mt-12 pt-8 border-t border-primary/10 flex justify-between items-center text-[8px] uppercase tracking-[0.3em] text-primary/80 font-bold">
          <p>© 2026 AURA AESTHETIC Clinic</p>
          <p>Medical Excellence</p>
        </div>
      </footer>
    </div>
  );
}
