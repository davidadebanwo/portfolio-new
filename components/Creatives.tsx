import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, ArrowRight, ExternalLink, X, MoveUpRight, Menu, MapPin, ChevronLeft, ChevronRight, Zap, Shield, Smartphone, Star, CheckCircle } from 'lucide-react';

interface Concept {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    gallery?: string[];
    project_link?: string;
}

const CONCEPTS: Concept[] = [
    {
        id: 1,
        title: "Wilfred Choco",
        description: "As Head of Engineering, I architected a multi-role EdTech platform. Features include a complex RBAC system for Admins, Mentors, and Students, and an automated application processing pipeline that handled 1,000+ candidates.",
        tags: ["Model", "Fashion", "Menswear"],
        image: "/images/creatives/wilfredchoco/1.png",
        gallery: [
            "/images/creatives/wilfredchoco/2.png",
            "/images/creatives/wilfredchoco/3.png",
            "/images/creatives/wilfredchoco/4.png",
            "/images/creatives/wilfredchoco/5.png",
        ],
        project_link: "https://wilfredchoco.netlify.app/"
    },
    {
        id: 2,
        title: "Suarim Ahmed",
        description: "Enterprise admission system with automated letter generation and applicant tracking dashboard using robust SQL architecture.",
        tags: ["Creative Director", "Content Creator", "Videographer"],
        image: "/images/creatives/suarimahmed/1.png",
        gallery: [
            "/images/creatives/suarimahmed/2.png",
            "/images/creatives/suarimahmed/3.png",
            "/images/creatives/suarimahmed/4.png",
            "/images/creatives/suarimahmed/5.png",
            "/images/creatives/suarimahmed/6.png"
        ],
        project_link: "https://suarimahmed.netlify.app/"
    },
    {
        id: 3,
        title: "Ariane Ilagan",
        description: "An AI-powered tool that helps SMBs generate content calendars based on their goals, business objectives, target audience, social media platforms, and strategy duration.",
        tags: ["Artist", "Fashion"],
        image: "/images/creatives/arianeilagan/1.png",
        gallery: [
            "/images/creatives/arianeilagan/2.png",
            "/images/creatives/arianeilagan/3.png",
            "/images/creatives/arianeilagan/4.png",
            "/images/creatives/arianeilagan/5.png",
            "/images/creatives/arianeilagan/6.png",
            "/images/creatives/arianeilagan/7.png"
        ],
        project_link: "https://arianeilagan.netlify.app/"
    },
    {
        id: 4,
        title: "James Kweisi",
        description: "A goal-oriented application that accepts user goals and generates personalized timetables to help achieve those goals efficiently.",
        tags: ["Model", "Dancer", "Actor", "Artist"],
        image: "/images/creatives/jameskweisi/1.png",
        gallery: [
            "/images/creatives/jameskweisi/2.png",
            "/images/creatives/jameskweisi/3.png",
            "/images/creatives/jameskweisi/4.png",
            "/images/creatives/jameskweisi/5.png",
            "/images/creatives/jameskweisi/6.png",
            "/images/creatives/jameskweisi/7.png"
        ],
        project_link: "https://jameskweisi.netlify.app/"
    },
    {
        id: 5,
        title: "Emma Vermaase",
        description: "A full-stack E-Learning platform featuring secure user authentication, payment gateway integration, and a progress-tracking dashboard. I handled the end-to-end development, ensuring a seamless experience for students and easy content management for the admin",
        tags: ["Photographer"],
        image: "/images/creatives/emmavermaase/1.png",
        gallery: [
            "/images/creatives/emmavermaase/2.png",
            "/images/creatives/emmavermaase/3.png",
            "/images/creatives/emmavermaase/4.png",
            "/images/creatives/emmavermaase/5.png",
            "/images/creatives/emmavermaase/6.png",
            "/images/creatives/emmavermaase/7.png"
        ],
        project_link: "https://emmavermaase.netlify.app/"
    },
    {
        id: 6,
        title: "Omar Artigas",
        description: "Created a fast food restaurant site with responsive design and exceptional visual aesthetic, delivering an intuitive and engaging user experience across all devices.",
        tags: ["Tattoo Artist", "High-Street Visionary"],
        image: "/images/creatives/omarartigas/1.png",
        gallery: [
            "/images/creatives/omarartigas/2.png",
            "/images/creatives/omarartigas/3.png",
            "/images/creatives/omarartigas/4.png",
            "/images/creatives/omarartigas/5.png"            
        ],
        project_link: "https://omarartigas.netlify.app/"
    },
    {
        id: 7,
        title: "D4ysgonebye",
        description: "Created a fast food restaurant site with responsive design and exceptional visual aesthetic, delivering an intuitive and engaging user experience across all devices.",
        tags: ["Artist", "Dancer"],
        image: "/images/creatives/d4ysgonebye/1.png",
        gallery: [
            "/images/creatives/d4ysgonebye/2.png",
            "/images/creatives/d4ysgonebye/3.png",
            "/images/creatives/d4ysgonebye/4.png",
            "/images/creatives/d4ysgonebye/5.png"
        ],
        project_link: "https://d4ysgonebye.netlify.app/"
    },
    {
        id: 8,
        title: "Nick Alexander",
        description: "Created a fast food restaurant site with responsive design and exceptional visual aesthetic, delivering an intuitive and engaging user experience across all devices.",
        tags: ["Model", "Fashion"],
        image: "/images/creatives/nickalexander/1.png",
        gallery: [
            "/images/creatives/nickalexander/2.png",
            "/images/creatives/nickalexander/3.png",
            "/images/creatives/nickalexander/4.png",
            "/images/creatives/nickalexander/5.png",
            "/images/creatives/nickalexander/6.png",
            "/images/creatives/nickalexander/7.png",
            "/images/creatives/nickalexander/8.png"
        ],
        project_link: "https://nickalexander.netlify.app/"
    },
    {
        id: 9,
        title: "Kevin Hwang",
        description: "Created a fast food restaurant site with responsive design and exceptional visual aesthetic, delivering an intuitive and engaging user experience across all devices.",
        tags: ["Photographer"],
        image: "/images/creatives/kevinhwang/1.png",
        gallery: [
            "/images/creatives/kevinhwang/2.png",
            "/images/creatives/kevinhwang/3.png",
            "/images/creatives/kevinhwang/4.png",
            "/images/creatives/kevinhwang/5.png",
            
        ],
        project_link: "https://kevinhwang.netlify.app/"
    }
];

const TRUST_STATS = [
    { number: "30+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3x", label: "Avg. Conversion Lift" },
    { number: "< 1s", label: "Page Load Time" },
];

const PROCESS_STEPS = [
    {
        num: "01",
        title: "Discovery & Strategy",
        desc: "We deep-dive into your brand identity, target audience, and competitive landscape to craft a strategic digital blueprint.",
        icon: <Star size={20} />,
    },
    {
        num: "02",
        title: "Design & Prototype",
        desc: "High-fidelity, bespoke designs tailored to your aesthetic — reviewed and iterated until pixel-perfect.",
        icon: <Zap size={20} />,
    },
    {
        num: "03",
        title: "Engineer & Launch",
        desc: "Precision-coded, performance-optimised, and deployed to the world — with a dashboard to manage your portfolio on the go.",
        icon: <Shield size={20} />,
    },
];

// Intersection Observer hook for scroll-triggered animations
function useInView(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (ref.current) observer.unobserve(ref.current);
            }
        }, { threshold: 0.15, ...options });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return { ref, inView };
}

const Creatives: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', inquiryType: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);

    // Gallery Modal State
    const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Scroll-triggered sections
    const trustBar = useInView();
    const showroomHeader = useInView();
    const processSection = useInView();
    const ctaSection = useInView();

    // Handle Body Scroll Lock when Modal is Open
    useEffect(() => {
        if (isContactModalOpen || selectedConcept) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isContactModalOpen, selectedConcept]);

    // Handle Keyboard Navigation for Gallery Modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedConcept) return;
            const allImages = [selectedConcept.image, ...(selectedConcept.gallery || [])];

            if (e.key === 'Escape') setSelectedConcept(null);
            if (e.key === 'ArrowRight') setCurrentImageIndex(prev => (prev === allImages.length - 1 ? 0 : prev + 1));
            if (e.key === 'ArrowLeft') setCurrentImageIndex(prev => (prev === 0 ? allImages.length - 1 : prev - 1));
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedConcept]);

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            // Validate fields
            if (!formState.name.trim() || !formState.email.trim() || !formState.inquiryType.trim() || !formState.message.trim()) {
                setSubmitStatus('error');
                setSubmitMessage('Please fill in all fields.');
                setIsSubmitting(false);
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formState.email)) {
                setSubmitStatus('error');
                setSubmitMessage('Please enter a valid email address.');
                setIsSubmitting(false);
                return;
            }

            // Send to the same backend API as the homepage contact form
            const response = await fetch('https://api.davidadebanwo.com/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formState.name.trim(),
                    email: formState.email.trim(),
                    subject: `[Creatives] ${formState.inquiryType.trim()}`,
                    message: formState.message.trim()
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                setSubmitMessage(null);
                setTimeout(() => {
                    setIsContactModalOpen(false);
                    setSubmitStatus('idle');
                    setFormState({ name: '', email: '', inquiryType: '', message: '' });
                }, 3000);
            } else {
                setSubmitStatus('error');
                setSubmitMessage(result.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setSubmitMessage('An error occurred while sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black scroll-smooth">
            {/* ============ NAVIGATION ============ */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/5 py-3' : 'bg-transparent border-transparent py-6 lg:py-8'}`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <a href="/" className="text-xl md:text-2xl font-serif tracking-widest text-white hover:opacity-70 transition-opacity">
                        D.A. CREATIVES
                    </a>

                    <div className="hidden md:flex items-center gap-12 text-sm tracking-[0.2em] font-light uppercase">
                        <a href="#showroom" className="hover:text-zinc-400 transition-colors">Showroom</a>
                        <a href="#process" className="hover:text-zinc-400 transition-colors">Process</a>
                        <button onClick={() => setIsContactModalOpen(true)} className="relative group hover:text-zinc-400 transition-colors uppercase tracking-[0.2em] cursor-pointer outline-none">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X strokeWidth={1} size={28} /> : <Menu strokeWidth={1} size={28} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-8 animate-in slide-in-from-top-4">
                        <a href="#showroom" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif tracking-widest border-b border-white/10 pb-4">Showroom</a>
                        <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif tracking-widest border-b border-white/10 pb-4">Process</a>
                        <button onClick={() => { setIsMenuOpen(false); setIsContactModalOpen(true); }} className="text-2xl font-serif tracking-widest border-b border-white/10 pb-4 text-left">Contact</button>
                    </div>
                )}
            </nav>

            {/* ============ HERO SECTION ============ */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
                {/* Ambient Gradient Orbs — Vivid */}
                <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-violet-800/30 via-purple-900/20 to-transparent rounded-full blur-[120px] animate-gradient-pulse pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-800/20 via-teal-900/10 to-transparent rounded-full blur-[100px] animate-float-slow pointer-events-none"></div>
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-gradient-to-br from-fuchsia-900/10 to-transparent rounded-full blur-[80px] animate-float-delay pointer-events-none"></div>

                {/* Right-Side Editorial Image */}
                <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full">
                    <img
                        src="/images/creatives/marissa.png"
                        alt="High Fashion Editorial"
                        fetchPriority="high"
                        className="w-full h-full object-cover grayscale opacity-30 lg:opacity-70 object-top lg:object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/50 lg:to-transparent"></div>
                    {/* Subtle Scanline Overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}}></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full pt-8 pb-20 justify-center">
                    <div className="max-w-3xl lg:max-w-2xl mt-12 md:mt-24">
                        {/* Eyebrow */}
                        <div className="overflow-hidden mb-6 md:mb-10">
                            <span className="inline-flex items-center gap-3 px-4 py-1.5 border border-violet-500/20 bg-violet-500/[0.05] backdrop-blur-md text-[10px] md:text-xs tracking-[0.3em] font-mono text-zinc-300 uppercase animate-in slide-in-from-bottom duration-1000 ease-out fill-mode-both">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 glow-dot"></span>
                                Currently Accepting New Projects
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-6xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] font-serif tracking-tighter mb-4 animate-in fade-in zoom-in-95 duration-1000 delay-300 ease-out fill-mode-both">
                            <span className="block text-white">Bespoke</span>
                            <span className="italic text-shimmer-vivid pr-2">Digital</span>
                            <span className="block text-white">Portfolios.</span>
                        </h1>
                        {/* Accent Line */}
                        <div className="h-[2px] w-24 bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent accent-line mb-8"></div>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed tracking-wide animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-700 ease-out fill-mode-both mb-12 max-w-lg lg:max-w-xl">
                            I engineer blazing-fast, visually striking portfolio platforms for <strong className="font-medium text-white">creatives, models, and agencies</strong> — designed to elevate your brand and <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-medium">convert high-ticket clients</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 ease-out fill-mode-both flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="btn-shine group flex items-center justify-center gap-4 bg-white text-black px-8 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-zinc-100 transition-all cursor-pointer outline-none w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex gap-4 items-center">Build Your Book <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></span>
                            </button>
                            <a
                                href="#showroom"
                                className="group flex items-center justify-center px-8 py-5 border border-white/10 bg-white/[0.02] backdrop-blur-md text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer outline-none w-full sm:w-auto"
                            >
                                View Showroom
                                <ChevronRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-zinc-600 uppercase animate-in fade-in duration-1000 delay-1200 pb-2">
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-scroll-hint"></div>
                        Scroll
                    </div>
                </div>
            </section>

            {/* ============ TRUST BAR ============ */}
            <div ref={trustBar.ref} className="border-y border-white/5 bg-zinc-950/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 md:px-12">
                    <div className={`grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 transition-all duration-700 ${trustBar.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {TRUST_STATS.map((stat, i) => (
                            <div key={stat.label} className="py-8 md:py-10 px-4 md:px-8 text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="text-3xl md:text-4xl font-serif text-white mb-1 stat-number">{stat.number}</div>
                                <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ============ SHOWROOM SECTION ============ */}
            <section id="showroom" className="py-24 md:py-32 px-6 md:px-12">
                <div className="container mx-auto max-w-screen-2xl">
                    {/* Section Header */}
                    <div ref={showroomHeader.ref} className={`mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${showroomHeader.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div>
                            <span className="text-xs font-mono tracking-[0.3em] text-zinc-600 uppercase mb-4 block">// Selected Work</span>
                            <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1]">
                                The Boutique<br />
                                <span className="italic text-zinc-500">Board</span>
                            </h2>
                        </div>
                        <p className="text-zinc-500 font-light tracking-wide max-w-md text-sm md:text-base leading-relaxed md:text-right">
                            A curated selection of digital experiences, each engineered with obsessive attention to performance and aesthetics.
                        </p>
                    </div>

                    {/* Masonry Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                        {CONCEPTS.map((concept, idx) => {
                            const cardRef = useInView({ threshold: 0.1 });
                            return (
                                <div
                                    ref={cardRef.ref}
                                    key={concept.id}
                                    onClick={() => {
                                        setSelectedConcept(concept);
                                        setCurrentImageIndex(0);
                                    }}
                                    className={`group relative overflow-hidden cursor-pointer aspect-[4/3] img-zoom card-glow transition-all duration-700 border border-transparent hover:border-violet-500/20 ${cardRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${idx === 1 ? 'md:mt-10' : ''} ${idx === 2 ? 'lg:mt-20' : ''} ${idx === 4 ? 'lg:mt-10' : ''}`}
                                    style={{ transitionDelay: `${(idx % 3) * 120}ms` }}
                                >
                                    {/* Image */}
                                    <img
                                        src={concept.image}
                                        alt={concept.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover grayscale-[30%] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                                    />

                                    {/* Persistent Bottom Info Bar — Always Visible */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-12">
                                        <h3 className="text-lg font-serif mb-1 text-white">{concept.title}</h3>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/50 via-black/20 to-transparent">
                                        <div className="w-14 h-14 rounded-full border border-white/40 bg-black/50 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
                                            <MoveUpRight size={20} />
                                        </div>
                                    </div>

                                    {/* Top Tag */}
                                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white">
                                            {concept.tags[0]}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============ PROCESS SECTION ============ */}
            <section id="process" className="py-32 px-6 md:px-12 bg-zinc-950 border-y border-white/[0.04] relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none"></div>

                <div ref={processSection.ref} className="container mx-auto max-w-6xl relative z-10">
                    <div className={`text-center mb-20 md:mb-28 transition-all duration-700 ${processSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="text-xs font-mono tracking-[0.3em] text-zinc-600 uppercase mb-4 block">// How We Work</span>
                        <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
                            The <span className="italic text-zinc-500">Process</span>
                        </h2>
                        <p className="text-zinc-400 font-light max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                            A refined three-phase approach that transforms your vision into a high-converting digital experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {PROCESS_STEPS.map((step, i) => (
                            <div
                                key={step.num}
                                className={`glass-card p-8 md:p-10 flex flex-col items-start text-left group transition-all duration-700 ${processSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                            >
                                {/* Step Header */}
                                <div className="flex items-center gap-4 mb-8 w-full">
                                    <div className="w-12 h-12 rounded-full border border-violet-500/20 bg-violet-500/[0.05] flex items-center justify-center group-hover:border-violet-400/40 group-hover:bg-violet-500/[0.1] transition-all duration-500 text-violet-300">
                                        {step.icon}
                                    </div>
                                    <span className="text-5xl font-serif font-light text-zinc-800 group-hover:text-zinc-600 transition-colors duration-500 ml-auto">{step.num}</span>
                                </div>

                                <h3 className="text-lg font-bold tracking-wide mb-4 uppercase text-white">{step.title}</h3>
                                <p className="text-zinc-500 font-light leading-relaxed text-sm flex-1">{step.desc}</p>

                                {/* Decorative Bottom Line */}
                                <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ TESTIMONIAL / SOCIAL PROOF ============ */}
            <section className="py-20 px-6 md:px-12 border-b border-white/[0.04] overflow-hidden">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        {/* Left Label */}
                        <div className="shrink-0 text-center md:text-left">
                            <span className="text-xs font-mono tracking-[0.3em] text-zinc-600 uppercase block mb-2">// Trusted By</span>
                            <div className="flex items-center gap-1 justify-center md:justify-start">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star key={star} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                        </div>

                        {/* Marquee Ticker */}
                        <div className="relative flex-1 overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}>
                            <div className="flex gap-12 animate-marquee whitespace-nowrap">
                                {['Wilfred Choco', 'Suarim Ahmed', 'Ariane Ilagan', 'James Kweisi', 'Emma Vermaase', 'Omar Artigas', 'D4ysgonebye', 'Nick Alexander', 'Kevin Hwang',
                                    'Wilfred Choco', 'Suarim Ahmed', 'Ariane Ilagan', 'James Kweisi', 'Emma Vermaase', 'Omar Artigas', 'D4ysgonebye', 'Nick Alexander', 'Kevin Hwang'].map((name, i) => (
                                    <span key={i} className="text-sm font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-3">
                                        <CheckCircle size={12} className="text-violet-400/60" />
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ CTA SECTION ============ */}
            <section id="contact" className="py-32 md:py-44 px-6 md:px-12 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-violet-800/15 via-purple-800/15 to-cyan-800/15 rounded-full blur-[120px] animate-gradient-pulse pointer-events-none"></div>

                <div ref={ctaSection.ref} className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-700 ${ctaSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-xs font-mono tracking-[0.3em] text-zinc-600 uppercase mb-8 block">// Let's Build Something Exceptional</span>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[0.95]">
                        Ready to upgrade<br />
                        your <span className="italic font-light text-shimmer-vivid">digital home?</span>
                    </h2>

                    <p className="text-zinc-400 font-light max-w-lg mx-auto mb-12 text-base md:text-lg leading-relaxed">
                        Join the roster of forward-thinking brands who trust our architecture to deliver measurable results.
                    </p>

                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="btn-shine group inline-flex items-center gap-4 bg-white text-black px-10 py-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-zinc-100 transition-all outline-none cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center gap-4">Request a Concept <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                    </button>

                    <p className="text-xs font-mono text-zinc-700 mt-8 tracking-widest uppercase">Typically respond within 12 hours</p>
                </div>
            </section>

            {/* ============ FOOTER ============ */}
            <footer className="border-t border-white/[0.04] bg-zinc-950/50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-sm font-serif tracking-widest text-zinc-500">D.A. CREATIVES</div>

                        <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-600">
                            <a href="mailto:me@davidadebanwo.com" className="hover:text-white transition-colors duration-300 cursor-pointer outline-none flex items-center gap-2">
                                <Mail size={14} /> Email
                            </a>
                            <a href="https://www.linkedin.com/in/david-adebanwo/" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                                <Linkedin size={14} /> Linkedin
                            </a>                            
                        </div>
                    </div>

                    <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-mono tracking-widest text-zinc-700 uppercase">
                        <div>&copy; {new Date().getFullYear()} All Rights Reserved</div>
                        <div>Engineered with precision</div>
                    </div>
                </div>
            </footer>

            {/* ============ CONTACT MODAL ============ */}
            {isContactModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6" role="dialog" aria-modal="true">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
                        onClick={() => setIsContactModalOpen(false)}
                    ></div>

                    <div className="relative w-full sm:max-w-2xl max-h-[100dvh] sm:max-h-[90vh] bg-zinc-950 border-0 sm:border border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-bottom-8 sm:fade-in sm:zoom-in-95 duration-500 rounded-t-2xl sm:rounded-none">
                        {/* Header — sticky at top */}
                        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/5 shrink-0">
                            <span className="font-serif tracking-widest text-lg sm:text-xl text-white">Inquire</span>
                            <button
                                onClick={() => setIsContactModalOpen(false)}
                                className="text-zinc-500 hover:text-white transition-colors outline-none p-2 -mr-2"
                            >
                                <X strokeWidth={1} size={22} />
                            </button>
                        </div>

                        {/* Scrollable content */}
                        <div className="p-4 sm:p-6 md:p-10 overflow-y-auto flex-1">
                            {submitStatus === 'success' ? (
                                <div className="py-8 sm:py-12 text-center animate-in fade-in zoom-in-95 duration-500">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                                        <CheckCircle size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4 text-white">Concept Requested</h3>
                                    <p className="text-zinc-400 font-light tracking-wide max-w-sm mx-auto text-sm sm:text-base">
                                        Our studio has received your inquiry. We will contact you shortly to begin the architectural process.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleContactSubmit} className="space-y-5 sm:space-y-8 animate-in fade-in duration-500">
                                    {/* Error Message */}
                                    {submitStatus === 'error' && submitMessage && (
                                        <div className="p-3 sm:p-4 border border-red-500/20 bg-red-500/5 text-red-400 text-xs sm:text-sm font-light tracking-wide">
                                            {submitMessage}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2">
                                                <div className="w-3 h-[1px] bg-zinc-700"></div> Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/10 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder:text-zinc-800 focus:outline-none focus:border-white/40 transition-colors"
                                                placeholder="e.g. Naomi Campbell"
                                            />
                                        </div>
                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2">
                                                <div className="w-3 h-[1px] bg-zinc-700"></div> Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/10 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder:text-zinc-800 focus:outline-none focus:border-white/40 transition-colors"
                                                placeholder="studio@agency.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2">
                                            <div className="w-3 h-[1px] bg-zinc-700"></div> Your Craft
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.inquiryType}
                                            onChange={e => setFormState({ ...formState, inquiryType: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder:text-zinc-800 focus:outline-none focus:border-white/40 transition-colors"
                                            placeholder="e.g. Model, Photographer, Artist..."
                                        />
                                    </div>

                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2">
                                            <div className="w-3 h-[1px] bg-zinc-700"></div> Project Details
                                        </label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={formState.message}
                                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/10 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder:text-zinc-800 focus:outline-none focus:border-white/40 transition-colors resize-none"
                                            placeholder="Tell us about your current representation and digital goals..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 outline-none
                                            ${isSubmitting
                                                ? 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                                                : 'bg-white text-black hover:bg-black hover:text-white border border-white'}
                                        `}
                                    >
                                        {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ============ GALLERY MODAL ============ */}
            {selectedConcept && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center sm:p-6" role="dialog" aria-modal="true">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
                        onClick={() => setSelectedConcept(null)}
                    ></div>

                    <div
                        className="relative bg-zinc-950 border-0 sm:border border-white/10 w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-in fade-in zoom-in-95 duration-500"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedConcept(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white hover:text-black text-white rounded-full backdrop-blur-sm transition-all border border-white/10 outline-none"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {/* Left: Image Gallery */}
                        <div className="w-full lg:w-2/3 h-[50vh] sm:h-[60vh] lg:h-auto shrink-0 bg-black relative flex flex-col justify-between border-r border-white/10">
                            <div className="relative flex-1 w-full h-full flex items-center justify-center p-4">
                                {(() => {
                                    const allImages = [selectedConcept.image, ...(selectedConcept.gallery || [])];
                                    const currentImg = allImages[currentImageIndex] || selectedConcept.image;
                                    return (
                                        <>
                                            <img src={currentImg} alt={selectedConcept.title} className="max-w-full max-h-full object-contain filter hover:grayscale-0 transition-all duration-700" />
                                            {allImages.length > 1 && (
                                                <>
                                                    <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1)); }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-white hover:text-black text-white rounded-full backdrop-blur-sm border border-white/10 transition-all outline-none">
                                                        <ChevronLeft size={24} />
                                                    </button>
                                                    <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1)); }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-white hover:text-black text-white rounded-full backdrop-blur-sm border border-white/10 transition-all outline-none">
                                                        <ChevronRight size={24} />
                                                    </button>
                                                </>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>

                            {(() => {
                                const allImages = [selectedConcept.image, ...(selectedConcept.gallery || [])];
                                if (allImages.length <= 1) return null;
                                return (
                                    <div className="h-20 sm:h-24 bg-zinc-950 border-t border-white/5 p-3 sm:p-4 overflow-x-auto flex gap-3 snap-x scrollbar-thin scrollbar-thumb-zinc-700">
                                        {allImages.map((img, idx) => (
                                            <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`relative shrink-0 w-24 sm:w-32 h-full overflow-hidden transition-all snap-start outline-none border ${currentImageIndex === idx ? 'border-white opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}>
                                                <img src={img} alt="" className="w-full h-full object-cover grayscale" loading="lazy" decoding="async" />
                                            </button>
                                        ))}
                                    </div>
                                );
                            })()}
                        </div>

                        {/* Right: Project Details */}
                        <div className="w-full lg:w-1/3 p-6 sm:p-10 bg-zinc-950 overflow-y-auto flex flex-col">
                            <div className="mb-8">
                                
                                <h2 className="text-3xl sm:text-4xl font-serif text-white mb-2 leading-tight">{selectedConcept.title}</h2>
                                <div className="h-[1px] w-12 bg-white/30 mt-6"></div>
                            </div>


                            <div className="flex flex-col gap-4 mt-auto">
                                {selectedConcept.project_link && (
                                    <a href={selectedConcept.project_link} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-[0.2em] text-xs transition-colors outline-none" target="_blank" rel="noreferrer">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Creatives;
