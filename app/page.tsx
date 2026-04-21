"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Header scroll logic
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    // Intersection Observer for scroll reveal
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container relative">
      
      {/* Premium Dynamic Header */}
      <header className={`fixed top-0 left-0 w-full z-[120] transition-all duration-700 flex justify-center ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}>
        <nav className={`transition-all duration-700 flex justify-between items-center ${scrolled ? 'header-fixed px-6 md:px-12' : 'w-[92%] md:w-[95%] max-w-[1400px] bg-white py-4 md:py-6 px-6 md:px-12 rounded-[24px] md:rounded-[32px] shadow-[0_15px_40px_-15px_rgba(120,87,74,0.1)] border border-primary/5'}`}>
          <div className="flex flex-col gap-0 cursor-pointer group">
            <span className={`text-[6px] md:text-[7px] tracking-[0.5em] uppercase text-primary/80 font-bold transition-all duration-500 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'mb-1'}`}>Medical Artistry</span>
            <span className={`font-headline font-bold tracking-[-0.03em] text-primary transition-all duration-500 ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-3xl'}`}>AURA <span className="font-light italic">AESTHETIC.</span></span>
          </div>
          
          <div className={`hidden lg:flex items-center gap-12 font-body text-[9px] tracking-[0.4em] uppercase font-bold transition-all duration-500 ${scrolled ? 'text-on-surface' : 'text-on-surface/70'}`}>
            <Link className="text-primary" href="/">Gallery</Link>
            <a className="hover:text-primary transition-colors" href="#layanan">Services</a>
            <a className="hover:text-primary transition-colors" href="#hasil">Results</a>
            <a className="hover:text-primary transition-colors" href="#tentang">Philosophy</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <Link href="/reservation" className={`hidden lg:block rounded-full font-bold tracking-[0.2em] uppercase text-[9px] transition-all duration-500 ${scrolled ? 'bg-primary text-white px-8 py-3.5 shadow-xl shadow-primary/20' : 'bg-primary text-white px-10 py-5 hover:bg-primary-container'}`}>
              Book Now
            </Link>

            {/* Mobile Booking Button (Always Visible) */}
            <Link href="/reservation" className={`lg:hidden rounded-full font-bold tracking-[0.2em] uppercase text-[8px] transition-all duration-500 bg-primary text-white ${scrolled ? 'px-4 py-2.5' : 'px-5 py-3'}`}>
              Book Now
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[130]"
            >
              <div className={`w-6 h-[1.5px] bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}></div>
              <div className={`w-6 h-[1.5px] bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <Link onClick={() => setIsMenuOpen(false)} className="mobile-nav-link text-primary" href="/">Gallery</Link>
        <a onClick={() => setIsMenuOpen(false)} className="mobile-nav-link" href="#layanan">Services</a>
        <a onClick={() => setIsMenuOpen(false)} className="mobile-nav-link" href="#hasil">Results</a>
        <a onClick={() => setIsMenuOpen(false)} className="mobile-nav-link" href="#tentang">Philosophy</a>
        <Link onClick={() => setIsMenuOpen(false)} href="/reservation" className="mt-12 bg-primary text-white px-16 py-6 rounded-full text-xs font-bold tracking-[0.5em] uppercase opacity-0 translate-y-10 transition-all duration-700 delay-500 active:scale-95">
          Book Now
        </Link>
      </div>

      <main>
        {/* Editorial Hero Section */}
        <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 scale-110">
            <Image 
              className="object-cover filter brightness-[0.85] grayscale-[0.3]" 
              alt="High-end clinic interior"
              src="/hero.avif" 
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/10 to-surface"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-9 reveal">
                <span className="inline-block text-[8px] md:text-[10px] font-bold tracking-[0.6em] uppercase text-primary mb-8 md:mb-12 border-l-2 border-primary pl-4">Aesthetic Excellence</span>
                <h1 className="text-[14vw] md:text-[10vw] lg:text-[9vw] font-headline tracking-tighter text-on-surface leading-[0.8] mb-12">
                  Sculpting <br/>
                  <span className="italic font-light md:ml-[15vw] text-primary">Timeless</span> <br/>
                  Artistry.
                </h1>
              </div>
              <div className="col-span-12 lg:col-span-3 lg:self-end lg:mb-24 reveal reveal-stagger">
                <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-6 md:pl-0 md:pr-8 italic">
                  "Dimana sains kedokteran berpadu dengan ketelitian seni untuk hasil yang tak terlupakan."
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
            <span className="text-[7px] tracking-[0.6em] uppercase text-primary font-bold">Explore the Glow</span>
            <div className="w-[1px] h-20 bg-primary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-primary animate-[scroll-line_2s_infinite]"></div>
            </div>
          </div>
        </section>

        {/* The "Asymmetric Bento" Service Gallery */}
        <section className="section-py px-6 md:px-8 max-w-[1400px] mx-auto" id="layanan">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40 border-b border-primary/5 pb-16 reveal">
            <div className="max-w-2xl mb-12 md:mb-0">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary block mb-6">Signature Treatments</span>
              <h2 className="text-5xl md:text-8xl font-headline leading-[0.9] tracking-tighter">Manifestasi <br/>Kecantikan.</h2>
            </div>
            <p className="text-base text-on-surface-variant max-w-sm md:text-right font-light leading-relaxed">
              Kurasi prosedur medis tercanggih yang dirancang untuk menonjolkan fitur unik wajah Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[1300px]">
            {/* Main Treatment Card */}
            <div className="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-5 group relative overflow-hidden rounded-[32px] md:rounded-[40px] bloom-shadow reveal hover:z-10 transition-all duration-700 min-h-[500px]">
              <Image 
                className="object-cover transition-transform duration-[3s] group-hover:scale-105" 
                alt="Sophisticated skin treatment"
                src="/treatment.avif" 
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-1000"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4 md:mb-6 block text-white/80">Premium Solution</span>
                <h3 className="text-5xl md:text-6xl font-headline mb-8">Regenerative <br/>Cellular Facial</h3>
                <Link href="/reservation" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-8 md:px-10 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-primary transition-all">
                  Eksplorasi Prosedur
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">north_east</span>
                </Link>
              </div>
            </div>

            {/* Side Card 1: Text Focused Luxury */}
            <div className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-3 bg-surface-container-low p-8 md:p-14 rounded-[32px] md:rounded-[40px] flex flex-col justify-between border border-primary/5 hover-lift reveal reveal-stagger min-h-[300px]">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary group shadow-sm">
                <span className="material-symbols-outlined text-2xl transition-transform duration-700 group-hover:rotate-[360deg]" aria-hidden="true">flare</span>
              </div>
              <div>
                <h3 className="text-4xl font-headline mb-6">Laser <br/>Sculpting</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">Akurasi tingkat mikron untuk memperbaiki tekstur dan keremajaan kulit.</p>
              </div>
            </div>

            {/* Side Card 2: List with Glass Effect */}
            <div className="md:col-start-9 md:col-end-13 md:row-start-3 md:row-end-7 glass-panel p-8 md:p-14 rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center text-center reveal reveal-stagger min-h-[400px]">
              <span className="text-[9px] tracking-[0.6em] uppercase text-primary font-bold mb-10 opacity-60">Clinical Hierarchy</span>
              <h3 className="text-4xl md:text-5xl font-headline mb-12 italic tracking-tighter">Liquid <br/>Transformation</h3>
              <div className="space-y-6 w-full mb-12">
                {[
                  { id: "01", name: "Dermal Fillers" },
                  { id: "02", name: "Botox Rejuvenation" },
                  { id: "03", name: "Threads Lift" }
                ].map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-primary/5 pb-4 group cursor-pointer hover:border-primary/20 transition-colors">
                    <span className="text-[9px] uppercase font-bold text-primary">{item.id}</span>
                    <span className="text-sm font-light text-on-surface group-hover:italic transition-all">{item.name}</span>
                  </div>
                ))}
              </div>
              <Link href="/reservation" className="group flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                Check Availability 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>

            {/* Lower Card: Micro Interaction */}
            <div className="md:col-start-1 md:col-end-9 md:row-start-5 md:row-end-7 bg-surface-container-highest/30 rounded-[32px] md:rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 reveal">
              <div className="relative group flex-shrink-0">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden bloom-shadow transition-all duration-1000 group-hover:rounded-[60px] group-hover:scale-105 relative">
                  <Image className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" alt="Consultation" fill sizes="(max-width: 768px) 160px, 208px" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <span className="material-symbols-outlined text-sm rotate-45" aria-hidden="true">bolt</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-headline mb-4 tracking-tight">Eksklusivitas Konsultasi.</h3>
                <p className="text-sm md:text-base text-on-surface-variant font-light italic leading-relaxed max-w-sm">Dapatkan analisis anatomi wajah mendalam oleh tim dokter ahli bersertifikasi internasional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Spotlight (NEW) */}
        <section className="section-py bg-surface-container-low overflow-hidden" id="hasil">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            <div className="text-center mb-16 md:mb-32 reveal">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary block mb-6">Real Outcomes</span>
              <h2 className="text-5xl md:text-7xl font-headline italic">Miracles in <span className="not-italic text-primary">Every Detail.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="reveal hover-scale">
                <div className="ba-slider aspect-[4/3] md:aspect-[16/10] rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl relative">
                  <Image src="/results.avif" alt="Before and After Results" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex gap-4 text-white z-20">
                    <span className="px-4 md:px-6 py-2 bg-black/20 backdrop-blur-xl rounded-full text-[7px] md:text-[8px] uppercase tracking-widest font-bold">Before</span>
                    <span className="px-4 md:px-6 py-2 bg-primary/40 backdrop-blur-xl rounded-full text-[7px] md:text-[8px] uppercase tracking-widest font-bold">After 2 Weeks</span>
                  </div>
                </div>
              </div>
              <div className="space-y-8 md:space-y-10 reveal reveal-stagger">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-headline">Hanya Hasil Nyata.</h3>
                  <p className="text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
                    Kami tidak menjanjikan keajaiban instan, melainkan perbaikan struktural sistematis yang menghasilkan perubahan visual yang elegan dan natural.
                  </p>
                </div>
                <ul className="space-y-4 md:space-y-6">
                  {["Perbaikan Tekstur 85%+", "Hidrasi Kulit Mendalam", "Tanpa Masa Downtime Lama"].map((point) => (
                    <li key={point} className="flex items-center gap-4 md:gap-6 group">
                      <div className="w-2 h-2 rounded-full bg-primary-container group-hover:scale-150 transition-transform"></div>
                      <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-primary">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 md:pt-8">
                   <Link href="/reservation" className="text-sm font-headline italic border-b border-primary/20 pb-2 hover:border-primary transition-all">Lihat Galeri Lebih Lengkap</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-py" id="tentang">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div className="space-y-10 md:space-y-16 reveal">
                <span className="text-[10px] font-black tracking-[0.6em] uppercase text-primary">Mastery & Philosophy</span>
                <h2 className="text-7xl md:text-9xl font-headline leading-[0.8] tracking-tighter">Kurasi <br/> <span className="italic text-primary">Elegansi.</span></h2>
                <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl">
                  Filosofi medis kami berakar pada prinsip "Minimal Intervention, Maximum Impact". Kami percaya keindahan sejati tersimpan dalam proporsi yang tepat.
                </p>
                <div className="flex gap-12 md:gap-20 pt-4 md:pt-8">
                  <div className="space-y-2 md:space-y-4 group">
                    <span className="text-5xl md:text-6xl font-headline text-primary group-hover:italic transition-all">15+</span>
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-on-surface/70 font-black">Professional Years</p>
                  </div>
                  <div className="space-y-2 md:space-y-4 group">
                    <span className="text-5xl md:text-6xl font-headline text-primary group-hover:italic transition-all">10k+</span>
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-on-surface/70 font-black">Satisfied Souls</p>
                  </div>
                </div>
              </div>
              <div className="relative reveal reveal-stagger">
                <div className="aspect-[4/5] rounded-[40px] md:rounded-[80px] overflow-hidden bloom-shadow-heavy bg-surface-container relative group">
                  <Image 
                    className="object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clinic Aesthetics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="absolute -bottom-10 -left-6 md:-bottom-20 md:-left-20 glass-panel p-8 md:p-16 rounded-[32px] md:rounded-[50px] max-w-sm hidden md:block bloom-shadow">
                  <div className="w-12 h-[1px] bg-primary mb-8"></div>
                  <p className="text-xl md:text-2xl font-headline italic text-primary leading-tight">"Mendefinisikan ulang batas antara keajaiban medis dan estetika murni."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-End Grand Footer Section (Updated) */}
        <section className="bg-primary text-white pt-32 md:pt-60 pb-20 px-6 md:px-8" id="kontak">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 reveal">
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <span className="font-headline text-[12vw] md:text-[6vw] font-bold tracking-tighter leading-none mb-12 block">AURA <br/>AESTHETIC.</span>
                <p className="text-2xl md:text-3xl font-light text-white/80 leading-[1.3] max-w-lg mb-16 md:mb-20 italic">
                  Bringing global standards of excellence to the heart of beauty enthusiasts.
                </p>
                <div className="space-y-8 md:space-y-12">
                   <h4 className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/80">The Concierge</h4>
                   <Link href="/reservation" className="inline-block text-4xl md:text-7xl font-headline border-b-2 border-primary-container pb-4 hover:italic transition-all">
                      Request Consultation
                   </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-12 md:space-y-20 pt-10 md:pt-20">
              <div className="group">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 block mb-6 md:mb-8 transition-colors group-hover:text-white">Atelier Location</span>
                <p className="text-base md:text-lg font-light leading-relaxed">
                  Jl. Senopati No. 88, Suite 402<br/>
                  Kebayoran Baru, Jakarta Selatan<br/>
                  DKI Jakarta, 12110
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[9px] uppercase font-bold tracking-widest border-b border-primary-container pb-1 text-white">Open in Maps</a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 block mb-6 md:mb-8">Clinical Hours</span>
                <p className="text-base md:text-lg font-light leading-relaxed">
                  Monday – Friday: 09:00 – 19:00<br/>
                  Saturday: 10:00 – 16:00<br/>
                  Sunday: By Appointment
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-12 md:space-y-20 pt-10 md:pt-20">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 block mb-6 md:mb-8">Digital Presence</span>
                <div className="flex flex-col gap-4 md:gap-6 text-lg md:text-xl font-headline italic">
                  <a href="#" className="hover:text-white transition-colors">Instagram @aura.aesthetic</a>
                  <a href="#" className="hover:text-white transition-colors">LinkedIn /aura-aesthetic</a>
                  <a href="#" className="hover:text-white transition-colors">WhatsApp +62 812 3456 7890</a>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 block mb-6 md:mb-8">Direct Line</span>
                <p className="text-lg md:text-xl font-light">
                  care@auraaesthetic.com<br/>
                  (+62) 21 5558 8888
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-[1400px] mx-auto mt-32 md:mt-60 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.5em] text-white/70 font-bold text-center md:text-left">
            <p>© 2026 AURA AESTHETIC Clinic. All Medical Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <a href="#" className="hover:text-white transition-colors">Digital Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
            <p className="italic">Designed for Excellence.</p>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.2); }
        }
        @keyframes scroll-line {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
