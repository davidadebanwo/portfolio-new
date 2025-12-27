import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Server,
  Database,
  Globe,
  Terminal,
  Cpu,
  Menu,
  X,
  ChevronRight,
  Rocket,
  Zap,
  BarChart,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Calendar,
  Layout,
  Settings,
  Quote,
  ChevronLeft
} from 'lucide-react';
import { Project, Service } from './types';

// --- Data ---

const TECH_STACK = [
  {
    category: "Frontend Ecosystem",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend Infrastructure",
    skills: ["Node.js", "PostgreSQL", "Redis", "SQL","MySQL", "MongoDB", "Express.js"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Jest"]
  }
];

const SERVICES: Service[] = [
  {
    id: 1,
    title: "SaaS Application Development",
    description: "I build robust, scalable SaaS products for founders. From initial MVP to full-scale application, I handle the entire stack—database, backend logic, and responsive frontend.",
    icon: "Server"
  },
  {
    id: 2,
    title: "High-Converting Landing Pages",
    description: "Landing pages designed to sell. I combine psychological design principles with blazing fast code to maximize your conversion rates and ROI.",
    icon: "Rocket"
  },
  {
    id: 3,
    title: "Internal Systems & Tools",
    description: "Streamline your organization. I build custom dashboards, CRMs, and automation tools that save your team hours of manual work every week.",
    icon: "Settings"
  },
  {
    id: 4,
    title: "Fractional CTO & Team Lead", // Stronger title than "Audit"
    description: "I don't just write code; I lead teams. Whether you have existing developers who need direction or need to build a squad from scratch, I provide the architectural blueprints and mentorship to keep your engineering team moving fast.",
    icon: "BarChart"
  } 
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Tony Cletus",
    role: "CEO, Programmify",
    // This text highlights reliability and your ability to handle volume
    text: "As our Head of Engineering, David leads the architecture of our entire academy platform. He built the systems that currently handle our 1,000+ applicants and manage daily workflows for all our mentors and students. He is a critical asset.",
    metric: "1,000+ Applicants Processed"
  },
  {
    id: 2,
    name: "William Enzor",
    role: "CEO, Ascendvice Enterprise",
    text: "David has become my go-to technical partner. After he successfully built and launched our course platform, AscendvicePaws, I immediately brought him on for our next ventures. He handles the entire project lifecycle. I just give him the vision, and he delivers the product.",
    metric: "2 Projects Delivered" 
  },
];

const PORTFOLIO_ITEMS: Project[] = [
  {
    id: 1,
    title: "Programmify Academy",
    description: "As Head of Engineering, I architected a multi-role EdTech platform. Features include a complex RBAC system for Admins, Mentors, and Students, and an automated application processing pipeline that handled 1,000+ candidates.",
    tags: ["Node.js", "Express.js", "MySQL", "EdTech", "RBAC System"],
    image: "/images/programmify-academy/programmify-academy-2.png",
    gallery: [
      "/images/programmify-academy/programmify-academy-1.png",
      "/images/programmify-academy/programmify-academy-3.png",
      "/images/programmify-academy/programmify-academy-4.png",
      "/images/programmify-academy/programmify-academy-5.png"
    ],
    project_link: "https://academy.programmify.org"
  },
  {
    id: 2,
    title: "ESTAM University Portal",
    description: "Enterprise admission system with automated letter generation and applicant tracking dashboard using robust SQL architecture.",
    tags: ["Enterprise", "MySQL", "Express"],
    image: "./images/estam-uni/estam-uni1.png",
    gallery: [
      "/images/estam-uni/estam-uni2.png",
      "/images/estam-uni/estam-uni3.png"
    ],
    project_link: "https://estamuni.net"
  },
  {
    id: 3,
    title: "StrategizeAI",
    description: "An AI-powered tool that helps SMBs generate content calendars based on their goals, business objectives, target audience, social media platforms, and strategy duration.",
    tags: ["AI", "Content Marketing", "SaaS"],
    image: "/images/strategize-ai/strategize-ai1.png",
    gallery: [
      "/images/strategize-ai/strategize-ai2.png",
      "/images/strategize-ai/strategize-ai3.png",
      "/images/strategize-ai/strategize-ai4.png",
      "/images/strategize-ai/strategize-ai5.png",
      "/images/strategize-ai/strategize-ai6.png",
      "/images/strategize-ai/strategize-ai7.png"
    ]
  },
  {
    id: 4,
    title: "FlowState",
    description: "A goal-oriented application that accepts user goals and generates personalized timetables to help achieve those goals efficiently.",
    tags: ["Productivity", "Time Management", "SaaS"],
    image: "/images/flow-state/flow-state1.png",
    gallery: [
      "/images/flow-state/flow-state2.png",
      "/images/flow-state/flow-state3.png",
      "/images/flow-state/flow-state4.png",
      "/images/flow-state/flow-state5.png"
    ]
  },
  {
    id: 5,
    title: "ascendvicePaws",
    description: "A full-stack E-Learning platform featuring secure user authentication, payment gateway integration, and a progress-tracking dashboard. I handled the end-to-end development, ensuring a seamless experience for students and easy content management for the admin",
    tags: ["E-Learning", "Dashboard", "Course Management", "E-Learning"],
    image: "/images/ascendvice-paws/ascendvice-paws1.png",
    gallery: [
      "/images/ascendvice-paws/ascendvice-paws2.png",
      "/images/ascendvice-paws/ascendvice-paws3.png",
      "/images/ascendvice-paws/ascendvice-paws4.png",
      "/images/ascendvice-paws/ascendvice-paws5.png",
      "/images/ascendvice-paws/ascendvice-paws6.png"
    ],
    project_link: "https://paws.ascendvice.com"
  },
  {
    id: 6,
    title: "Shawarma House",
    description: "Created a fast food restaurant site with responsive design and exceptional visual aesthetic, delivering an intuitive and engaging user experience across all devices.",
    tags: ["Landing page", "UI/UX"],
    image: "/images/shawarma-house/shawarma-house1.png",
    gallery: [
      "/images/shawarma-house/shawarma-house2.png",
      "/images/shawarma-house/shawarma-house3.png",
      "/images/shawarma-house/shawarma-house4.png",
      "/images/shawarma-house/shawarma-house5.png",
      "/images/shawarma-house/shawarma-house6.png",
      "/images/shawarma-house/shawarma-house7.png"
    ],
    project_link: "https://shawarmahouse.netlify.app"
  }
];

// --- Components ---

const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ href, children, mobile, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${mobile ? 'block py-4 text-xl border-b border-tertiary' : 'text-sm uppercase tracking-wider font-semibold'} text-zinc-400 hover:text-accent transition-colors`}
  >
    {children}
  </a>
);

const SectionHeading: React.FC<{ title: string; subtitle: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl mx-auto`}>
    <span className="text-accent font-mono text-xs font-bold uppercase tracking-widest mb-3 block">
      // {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
  </div>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket': return <Rocket className="w-6 h-6 text-accent" />;
      case 'Server': return <Server className="w-6 h-6 text-accent" />;
      case 'Zap': return <Zap className="w-6 h-6 text-accent" />;
      case 'BarChart': return <BarChart className="w-6 h-6 text-accent" />;
      case 'Settings': return <Settings className="w-6 h-6 text-accent" />;
      default: return <Code2 className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <div className="group p-8 bg-secondary border border-tertiary hover:border-accent transition-colors duration-300">
      <div className="mb-6 bg-primary w-12 h-12 flex items-center justify-center border border-tertiary rounded-sm group-hover:bg-accent/10 transition-colors">
        {getIcon(service.icon)}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="w-8 h-[2px] bg-tertiary group-hover:bg-accent transition-colors"></div>
    </div>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  onSelect: (project: Project) => void
}> = ({ project, onSelect }) => (
  <div
    className="group relative bg-secondary border border-tertiary hover:border-zinc-600 transition-colors cursor-pointer"
    onClick={() => onSelect(project)}
  >
    <div className="aspect-[16/9] overflow-hidden bg-primary relative">
      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono uppercase text-accent border border-accent/20 px-2 py-1 bg-accent/5 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {project.description}
      </p>
      <div className="inline-flex items-center text-white text-xs font-bold uppercase tracking-wider hover:text-accent gap-2 border-b border-transparent hover:border-accent pb-0.5 transition-all">
        View Project <ArrowRight size={14} />
      </div>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactTab, setContactTab] = useState<'form' | 'calendar'>('form');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Handle Scroll Transparency
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Body Scroll Lock when Modal is Open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle Keyboard Navigation for Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      const allImages = [selectedProject.image, ...(selectedProject.gallery || [])];
      
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') setCurrentImageIndex(prev => (prev === allImages.length - 1 ? 0 : prev + 1));
      if (e.key === 'ArrowLeft') setCurrentImageIndex(prev => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (contactTab === 'calendar') {
      setIframeLoaded(false);
    }
  }, [contactTab]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Validate form fields
      if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
        setSubmitMessage({
          type: 'error',
          text: 'Please fill in all fields.'
        });
        return;
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setSubmitMessage({
          type: 'error',
          text: 'Please enter a valid email address.'
        });
        return;
      }

      // Send data to backend API
      const response = await fetch('http://api.davidadebanwo.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim()
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Your message has been sent successfully!'
        });
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'An error occurred while sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = (tab: 'form' | 'calendar') => {
    setContactTab(tab);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-primary selection:bg-accent selection:text-black font-sans">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-primary/95 backdrop-blur-sm border-tertiary py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Logo" className="w-8 rounded-sm group-hover:opacity-80 transition-opacity" />
            <span className="text-lg font-bold text-white tracking-tight">David Adebanwo</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <button
              onClick={() => scrollToContact('form')}
              className="px-6 py-2.5 bg-highlight hover:bg-highlightHover text-primary font-bold text-sm rounded-sm transition-all transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-tertiary p-6 flex flex-col h-screen animate-in slide-in-from-top-5">
            <NavLink href="#services" mobile onClick={() => setIsMenuOpen(false)}>Services</NavLink>
            <NavLink href="#work" mobile onClick={() => setIsMenuOpen(false)}>Work</NavLink>
            <NavLink href="#about" mobile onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#contact" mobile onClick={() => { setIsMenuOpen(false); scrollToContact('form'); }}>Contact Us</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 border-b border-tertiary bg-grid-bg overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left Column: The Pitch */}
            <div className="flex-1 text-center lg:text-left">
              
              {/* Scarcity Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/30 bg-accent/5 rounded-full mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-accent text-xs font-mono font-bold tracking-wide">
                  ACCEPTING CONSULTING CLIENTS FOR Q1
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                I Build SaaS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                  That Actually Scales.
                </span>
              </h1>

              {/* Subheadline with Authority Hook */}
              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Currently the <strong className="text-white">Head of Engineering at Programmify</strong> (1,000+ users). 
                I help non-technical founders launch MVPs fast, fix scalability issues, and build 
                revenue-generating platforms.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToContact('calendar')} 
                  className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold rounded-sm transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  Book Strategy Call <Calendar size={18} />
                </button>
                <a 
                  href="#work" 
                  className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-white text-white font-semibold rounded-sm transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  View Proven Work <ArrowRight size={18} />
                </a>
              </div>

              {/* Social Proof / Trust Signals */}
              {/* <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-xs font-mono uppercase tracking-wider">Active Head of Eng.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-xs font-mono uppercase tracking-wider">1,000+ Users Managed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span className="text-xs font-mono uppercase tracking-wider">Systems Architect</span>
                </div>
              </div> */}
            </div>

            {/* Right Column: The "Control Center" Graphic */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
              
              {/* Main Card (Terminal/Code) */}
              <div className="relative z-10 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-2xl p-1 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500 ease-out">
                
                {/* Header */}
                <div className="bg-zinc-900/50 border-b border-white/5 p-3 flex items-center justify-between rounded-t-md">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">production_server — node</div>
                </div>

                {/* Content */}
                <div className="p-4 font-mono text-xs sm:text-sm space-y-2 leading-relaxed">
                  <div className="flex gap-2">
                    <span className="text-zinc-600">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-zinc-400">deploy</span>
                    <span className="text-white">--production</span>
                  </div>
                  <div className="text-zinc-500 pt-2">Initializing build pipeline...</div>
                  <div className="text-zinc-500">Optimizing assets...</div>
                  <div className="text-zinc-500">Running database migrations...</div>
                  <div className="flex items-center gap-2 text-green-400 pt-2">
                    <CheckCircle2 size={14} />
                    <span>Deployment Successful (v2.4.0)</span>
                  </div>
                  <div className="pl-4 text-zinc-400 text-[10px] mt-1 border-l border-zinc-800">
                    <div>Latency: <span className="text-white">24ms</span></div>
                    <div>Uptime: <span className="text-white">99.99%</span></div>
                  </div>
                </div>

                {/* Floating "Growth" Card (Overlay) */}
                <div className="absolute -right-6 -bottom-6 w-48 bg-zinc-900 border border-white/10 rounded-md p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Total Users</span>
                    <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-1.5 rounded-sm">+12.5%</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">1,248</div>
                  {/* Fake Mini Graph */}
                  <div className="flex items-end gap-1 h-8">
                    <div className="w-1/5 h-[30%] bg-zinc-700 rounded-t-[1px]"></div>
                    <div className="w-1/5 h-[50%] bg-zinc-700 rounded-t-[1px]"></div>
                    <div className="w-1/5 h-[40%] bg-zinc-700 rounded-t-[1px]"></div>
                    <div className="w-1/5 h-[70%] bg-zinc-700 rounded-t-[1px]"></div>
                    <div className="w-1/5 h-[100%] bg-accent rounded-t-[1px]"></div>
                  </div>
                </div>

                {/* Floating "Status" Card (Overlay) */}
                <div className="absolute -left-4 -top-4 bg-zinc-900 border border-white/10 rounded-md py-2 px-3 shadow-xl flex items-center gap-3 animate-in fade-in zoom-in duration-700 delay-500">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">System Healthy</span>
                    <span className="text-[8px] text-zinc-500 font-mono">All services operational</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Background Elements behind the graphic */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
              
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading
            subtitle="Expertise"
            title="Professional Services"
          />

          <div className="grid md:grid-cols-2 gap-px bg-tertiary border border-tertiary max-w-5xl mx-auto">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-secondary border-y border-tertiary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Case Studies"
            title="Selected Projects"
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => {
                  setSelectedProject(proj);
                  setCurrentImageIndex(0);
                }}
              />
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1 font-mono text-sm">
              <Github size={16} /> view_all_repositories_on_github
            </a>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left Column: Narrative & Philosophy */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
                <div className="relative shrink-0 group">
                  <div className="absolute inset-0 bg-accent/20 rounded-md translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                  <img
                    src="/images/profile-pic.jpg"
                    alt="David Adebanwo"
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-md object-cover border border-tertiary grayscale-0 group-hover:grayscale transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="text-accent font-mono text-xs font-bold uppercase tracking-widest mb-4 block">// THE OPERATOR</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Technical Leader & <br /> Product Architect.
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
                <p>
                  I am <strong className="text-white font-medium">David Adebanwo</strong>. 
                  For the past 2+ years, I have served as the <strong className="text-white font-medium">Head of Engineering at Programmify</strong>, architecting the systems that power a thriving EdTech ecosystem with over 1,000 active applicants.
                </p>
                <p>
                  My value goes beyond just writing code. <strong className="text-white">Fluent in both English and Spanish</strong>, I specialize in bridging the gap between technical complexity and business goals. I manage distributed workflows, ensuring that architecture decisions align perfectly with revenue targets.
                </p>
                <p>
                  I don't need hand-holding. I take a vague concept, design the database schema, build the API, craft the frontend, and deploy it to production. I build "Growth Engines," not just websites.
                </p>
              </div>

              {/* Core Competencies Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-secondary border border-tertiary p-4 rounded-sm hover:border-accent/50 transition-colors duration-300">
                  <div className="text-accent mb-2"><Database size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">System Architecture</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Designing scalable DB schemas (SQL/NoSQL) that don't crumble under load.</p>
                </div>
                <div className="bg-secondary border border-tertiary p-4 rounded-sm hover:border-accent/50 transition-colors duration-300">
                  <div className="text-accent mb-2"><Layout size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">Complex UI/UX</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Building dashboards & interactive flows that feel instant and intuitive.</p>
                </div>
                <div className="bg-secondary border border-tertiary p-4 rounded-sm hover:border-accent/50 transition-colors duration-300">
                  <div className="text-accent mb-2"><Terminal size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">DevOps & CI/CD</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Automating deployment pipelines so new features ship daily, not weekly.</p>
                </div>
                <div className="bg-secondary border border-tertiary p-4 rounded-sm hover:border-accent/50 transition-colors duration-300">
                  <div className="text-accent mb-2"><Briefcase size={20} /></div>
                  <h4 className="text-white font-bold text-sm mb-1">Product Strategy</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">Defining MVP scope to minimize wasted dev time and maximize ROI.</p>
                </div>
              </div>
            </div>

            {/* Right Column: The Toolkit & Communication */}
            <div className="flex-1 lg:pl-10">
              
              {/* Language & Communication Badge (New Addition) */}
              <div className="mb-10 flex items-center gap-4 p-4 border border-tertiary bg-zinc-900/50 rounded-sm">
                <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 flex items-center justify-center rounded-full text-accent shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Global Communication</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 mt-1">
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-accent"/> English (Native)</span>
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-accent"/> Spanish (Fluent)</span>
                  </div>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
                <Cpu size={20} className="text-accent" /> The Toolkit
              </h3>

              <div className="space-y-10 relative">
                {/* Vertical Line for timeline effect */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-tertiary"></div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-primary"></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Frontend Ecosystem</h4>
                  <p className="text-zinc-500 text-xs mb-3 max-w-sm">
                    Focus on React performance patterns, accessibility, and state management for complex dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React.js", "Next.js", "Tailwind"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-secondary border border-tertiary rounded-sm text-xs text-zinc-300 font-mono hover:border-zinc-500 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-600 bg-primary group-hover:border-accent"></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Backend Infrastructure</h4>
                  <p className="text-zinc-500 text-xs mb-3 max-w-sm">
                    Building REST & GraphQL APIs that are secure, documented, and fully tested.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Express.js"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-secondary border border-tertiary rounded-sm text-xs text-zinc-300 font-mono hover:border-zinc-500 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-zinc-600 bg-primary"></div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Tools & DevOps</h4>
                  <p className="text-zinc-500 text-xs mb-3 max-w-sm">
                    Ensuring code quality and seamless delivery to production environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Git/GitHub", "AWS S3/EC2", "Vercel", "Jest", "CI/CD Actions"].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-secondary border border-tertiary rounded-sm text-xs text-zinc-300 font-mono hover:border-zinc-500 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Call to Action in About */}
              <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-sm">
                <h5 className="text-white font-bold mb-2">Need a technical partner?</h5>
                <p className="text-zinc-400 text-sm mb-4">
                  I bring the same level of rigor to client work that I bring to Programmify.
                </p>
                <button 
                  onClick={() => scrollToContact('calendar')}
                  className="text-accent text-sm font-bold uppercase tracking-wide hover:underline flex items-center gap-2"
                >
                  Let's discuss your architecture <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Testimonials & Metrics Section */}
      <section className="py-24 bg-secondary border-t border-tertiary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Social Proof"
            title="Testimonials"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map(item => (
              <div key={item.id} className="bg-primary/50 border border-tertiary p-8 relative">
                <Quote className="absolute top-8 right-8 text-tertiary w-8 h-8 opacity-50" />
                <div className="mb-6">
                  <div className="text-accent font-bold font-mono text-sm mb-2">{item.metric}</div>
                  <div className="w-12 h-[1px] bg-tertiary"></div>
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6 text-sm">"{item.text}"</p>
                <div>
                  <div className="text-white font-bold">{item.name}</div>
                  <div className="text-zinc-500 text-xs">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-grid-bg relative border-t border-tertiary">
        {/* Changed px-6 to px-4 on mobile to give more width */}
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading title="Book a Free Meeting" subtitle="Get Started" />

          {/* Wrapper */}
          <div className="max-w-5xl mx-auto bg-primary border border-tertiary shadow-2xl relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-full bg-highlight/10 transform rotate-45 translate-x-10 -translate-y-10"></div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row">
              
              {/* Left Column: Info (Added padding p-6 for mobile) */}
              <div className="flex-1 p-6 md:p-12 space-y-8 border-b lg:border-b-0 lg:border-r border-tertiary">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to elevate your business?</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    I'm currently accepting new projects for Q1. Whether you need a full SaaS build, a high-converting landing page, or a system overhaul, let's talk.
                  </p>
                </div>
                
                {/* ... (Keep your existing Contact Info Icons/Details here) ... */}
                <div className="space-y-6">
                   <div className="flex items-center gap-3 text-zinc-400">
                    <div className="w-8 h-8 bg-tertiary flex items-center justify-center rounded-sm">
                      <Briefcase size={16} />
                    </div>
                    <span className="text-sm">Available for Fractional CTO & Strategic Partnership</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary border border-tertiary flex items-center justify-center rounded-sm shrink-0 text-accent">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">SaaS & Startups</h4>
                      <p className="text-zinc-500 text-sm">Validating ideas and building MVPs that scale.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary border border-tertiary flex items-center justify-center rounded-sm shrink-0 text-accent">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Conversion Engines</h4>
                      <p className="text-zinc-500 text-sm">Landing pages designed to maximize revenue and leads.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary border border-tertiary flex items-center justify-center rounded-sm shrink-0 text-accent">
                      <Settings size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">System Architecture</h4>
                      <p className="text-zinc-500 text-sm">Streamlining operations with custom internal tools.</p>
                    </div>
                  </div>

                </div>

                <div className="pt-6 border-t border-tertiary/50">
                  <a href="mailto:me@davidadebanwo.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <Mail size={18} /> me@davidadebanwo.com
                  </a>
                </div>
              </div>

              {/* Right Column: Form (Reduced padding to p-4 on mobile) */}
              <div className="flex-1 w-full bg-secondary p-4 sm:p-8">

                {/* Tabs - Optimized for Width */}
                <div className="flex flex-col sm:flex-row p-1 bg-primary border border-tertiary rounded-sm mb-6 gap-2 sm:gap-0">
                  <button
                    onClick={() => setContactTab('form')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-2 text-sm font-medium transition-all rounded-sm ${
                      contactTab === 'form' 
                        ? 'bg-zinc-800 text-white shadow-sm ring-1 ring-white/10' 
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                    }`}
                  >
                    <Mail size={16} /> Send Message
                  </button>
                  <button
                    onClick={() => setContactTab('calendar')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-2 text-sm font-medium transition-all rounded-sm ${
                      contactTab === 'calendar' 
                        ? 'bg-accent text-primary font-bold shadow-sm' 
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                    }`}
                  >
                    <Calendar size={16} /> Book Strategy Call
                  </button>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                  {contactTab === 'form' ? (
                    <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Your Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-primary border border-tertiary px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm rounded-sm placeholder:text-zinc-700"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-primary border border-tertiary px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm rounded-sm placeholder:text-zinc-700"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">I'm interested in...</label>
                        <div className="relative">
                          <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full bg-primary border border-tertiary px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm rounded-sm appearance-none">
                            <option value="">Select an option</option>
                            <option>New Product Build (MVP)</option>
                            <option>Scaling Existing Product</option>
                            <option>Technical Audit & Architecture</option>
                            <option>General Consulting</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                            <ChevronLeft className="-rotate-90" size={14} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Project Details</label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-primary border border-tertiary px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm resize-none rounded-sm placeholder:text-zinc-700"
                          placeholder="Tell me about your project context, timeline, and goals..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full ${isSubmitting ? 'bg-zinc-600' : 'bg-white hover:bg-zinc-200'} text-primary font-bold py-4 transition-all uppercase tracking-wider text-xs rounded-sm mt-2 shadow-lg`}>
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </button>

                      {/* Display submission message */}
                      {submitMessage && (
                        <div className={`mt-4 p-3 rounded-sm text-sm ${
                          submitMessage.type === 'success'
                            ? 'bg-green-900/30 text-green-400 border border-green-900/50'
                            : 'bg-red-900/30 text-red-400 border border-red-900/50'
                        }`}>
                          {submitMessage.text}
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className="w-full h-[650px] sm:h-[500px] animate-in fade-in slide-in-from-bottom-2 duration-300 bg-primary border border-tertiary rounded-sm overflow-hidden relative">
                      {!iframeLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary z-10 p-6 text-center">
                          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-zinc-400 text-sm font-mono animate-pulse">Loading calendar...</p>
                        </div>
                      )}
                      <iframe
                        src="https://calendly.com/davidadebanwo/30min"
                        onLoad={() => setIframeLoaded(true)}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Select a Date & Time - Calendly"
                        className={`w-full h-full transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                      ></iframe>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary border-t border-tertiary">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} David Adebanwo.
          </div>
          <div className="flex gap-6">
            <a href="mailto:me@davidadebanwo.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/david-adebanwo" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="https://twitter.com/dave_O_A" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="https://github.com/davidadebanwo" className="text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
          </div>
        </div>
      </footer>

   

      {/* --- Professional Project Modal (Responsive) --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div 
            className="relative bg-zinc-900 border-0 sm:border border-zinc-800 w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl shadow-2xl sm:rounded-xl overflow-hidden flex flex-col lg:flex-row animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Absolute) */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-accent text-white rounded-full backdrop-blur-sm transition-all border border-white/10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* --- Left Column: Image Gallery --- */}
            {/* Mobile: Fixed Height | Desktop: Auto Width/Height */}
            <div className="w-full lg:w-2/3 h-[40vh] sm:h-[50vh] lg:h-auto shrink-0 bg-black relative flex flex-col justify-between">
              
              {/* Main Image Stage */}
              <div className="relative flex-1 w-full h-full flex items-center justify-center p-4 bg-zinc-950/50">
                {(() => {
                  const allImages = [selectedProject.image, ...(selectedProject.gallery || [])];
                  const currentImg = allImages[currentImageIndex] || selectedProject.image;
                  
                  return (
                    <>
                      <img
                        src={currentImg}
                        alt={selectedProject.title}
                        className="max-w-full max-h-full object-contain shadow-lg rounded-sm"
                      />
                      
                      {/* Navigation Arrows */}
                      {allImages.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
                            }}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-accent text-white rounded-full backdrop-blur-sm border border-white/10 transition-all"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
                            }}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-accent text-white rounded-full backdrop-blur-sm border border-white/10 transition-all"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Thumbnails Strip */}
              {(() => {
                const allImages = [selectedProject.image, ...(selectedProject.gallery || [])];
                if (allImages.length <= 1) return null;
                
                return (
                  <div className="h-16 sm:h-20 bg-zinc-900 border-t border-zinc-800 p-2 sm:p-3 overflow-x-auto flex gap-2 sm:gap-3 snap-x scrollbar-thin scrollbar-thumb-zinc-700">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative shrink-0 w-20 sm:w-24 h-full rounded-sm overflow-hidden border-2 transition-all snap-start ${
                          currentImageIndex === idx ? 'border-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* --- Right Column: Project Details --- */}
            {/* Scrollable area for content */}
            <div className="w-full lg:w-1/3 p-5 sm:p-8 bg-zinc-900 overflow-y-auto lg:border-l border-zinc-800 flex flex-col">
              
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase text-accent border border-accent/20 px-2 py-1 bg-accent/5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">{selectedProject.title}</h2>
                <div className="h-1 w-16 sm:w-20 bg-accent rounded-full mt-2"></div>
              </div>

              <div className="prose prose-invert prose-sm max-w-none text-zinc-400 leading-relaxed mb-8 flex-1">
                <p>{selectedProject.description}</p>
                {/* <p className="mt-4">
                  This project was architected to solve specific business problems. The focus was on scalability, 
                  maintainability, and providing a superior user experience.
                </p> */}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-zinc-800 pb-safe">
                {selectedProject.project_link && (
                  <a 
                    href={selectedProject.project_link}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {/* <a 
                  href="#" 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-500 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors"
                >
                  <Github size={16} /> View Source Code
                </a> */}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default App;