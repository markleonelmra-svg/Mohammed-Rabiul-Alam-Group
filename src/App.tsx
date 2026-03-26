import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronRight, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 flex items-center justify-center border ${isScrolled ? 'border-ink-900 text-ink-900' : 'border-white text-white'}`}>
            <span className="font-serif font-bold text-lg leading-none">M</span>
          </div>
          <span className={`font-serif text-xl tracking-widest uppercase ${isScrolled ? 'text-ink-900' : 'text-white'}`}>
            Rabiul Alam Group
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Philosophy', 'Expertise', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className={`px-6 py-2 text-sm uppercase tracking-widest border transition-colors ${
            isScrolled 
              ? 'border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-ink-900'
          }`}>
            Inquire
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-ink-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-ink-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Philosophy', 'Expertise', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif uppercase tracking-widest text-ink-900 border-b border-gray-100 pb-4"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-3 text-sm uppercase tracking-widest bg-ink-900 text-white mt-4">
              Inquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/hero-bg.jpeg" 
          alt="Architectural Ceiling Fit-Out" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink-900/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Mohammed Rabiul Alam Group
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 font-light">
            Premier Gypsum & <br className="hidden md:block" />
            <span className="italic">Interior Fit-Out</span> Specialists
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light mb-12">
            A leading Fit-out and Interior specialist creating bespoke, high-end environments for residential and commercial spaces
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-ink-900 overflow-hidden transition-all hover:bg-transparent hover:text-white border border-white">
            <span className="relative z-10 text-sm uppercase tracking-widest font-medium flex items-center gap-3">
              Explore Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30">
          <div className="w-full h-1/2 bg-white"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-paper-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/1.jpeg" 
                alt="Architectural detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-white p-4 hidden md:block shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Interior detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-ink-900"></div>
              <span className="text-sm uppercase tracking-widest font-medium">Our Professional Standards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              A cornerstone of the UAE’s <span className="italic text-gray-500">gypsum and interior fit-out</span> industry.
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Founded in 2009 by Mr. Mohammed Rabiul Alam, our group has established itself as a cornerstone of the UAE’s gypsum and interior fit-out industry. With over 17 years of operational excellence, we have cultivated a reputation for delivering high-specification interior environments under a unified management structure.
              </p>
              <p>
                Our group operates through three specialized legal entities, ensuring comprehensive service coverage across the Emirates:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mohammed Rabiul Alam General Contracting LLC</li>
                <li>Mohammed Rabiul Alam Technical Works LLC – OPC</li>
                <li>Rabiul Alam Technical Services Est.</li>
              </ul>
              <p>
                Leveraging extensive industry experience and a client-centric methodology, we provide end-to-end interior solutions including sophisticated false ceilings, gypsum partitions, and bespoke decorative installations. Our brand is a hallmark of reliability, quality assurance, and adherence to rigorous project timelines.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif mb-2">17+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">3</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Specialized Entities</p>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="text-xl font-serif mb-3">Corporate Mission</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  To deliver world-class gypsum and interior solutions that exceed international benchmarks of quality. We are committed to fostering long-term strategic partnerships through professional integrity, transparent value, and a foundation of mutual trust.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Corporate Vision</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  To remain the preferred partner for interior and gypsum works across the UAE, recognized for our commitment to innovative craftsmanship and a refined, client-focused approach in every undertaking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const services = [
    {
      title: "Architectural Gypsum False Ceilings",
      desc: "High-performance ceiling systems designed for modern aesthetics.",
      img: "/2.jpeg"
    },
    {
      title: "Specialized Gypsum Partition Walls",
      desc: "Scalable spatial solutions for commercial and residential sectors.",
      img: "/3.jpeg"
    },
    {
      title: "Bulkheads, Feature Ceilings & Light Coves",
      desc: "Precision-engineered decorative elements.",
      img: "/4.jpeg"
    },
    {
      title: "Integrated Interior Finishing",
      desc: "Meticulous attention to detail in high-end surface finishes.",
      img: "/5.jpeg"
    },
    {
      title: "Professional Maintenance Services",
      desc: "Comprehensive upkeep and structural repairs.",
      img: "/6.jpeg"
    }
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/50"></div>
              <span className="text-sm uppercase tracking-widest text-white/70">Service Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-2xl">
              Comprehensive solutions for <span className="italic text-white/50">interior environments.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white/70 transition-colors pb-2 border-b border-white/30">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-white/80 transition-colors">{service.title}</h3>
                  <p className="text-white/60 font-light max-w-sm">{service.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-ink-900 transition-all">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "The Azure Residence",
      location: "Coastal Cliffs",
      img: "/7.jpeg",
      aspect: "aspect-[4/5]"
    },
    {
      title: "Lumina Tower",
      location: "Financial District",
      img: "/8.jpeg",
      aspect: "aspect-[4/3]"
    },
    {
      title: "Oakwood Estate",
      location: "Highland Valley",
      img: "/9.jpeg",
      aspect: "aspect-[4/3]"
    },
    {
      title: "Vertex Pavilion",
      location: "Arts District",
      img: "/10.jpeg",
      aspect: "aspect-[4/5]"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-ink-900"></div>
            <span className="text-sm uppercase tracking-widest font-medium">Selected Works</span>
            <div className="w-8 h-[1px] bg-ink-900"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif">A legacy built in stone.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-8 md:space-y-16">
            {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className={`relative ${project.aspect} overflow-hidden mb-6`}>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500">{project.location}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-8 md:space-y-16 md:mt-32">
            {projects.filter((_, i) => i % 2 !== 0).map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className={`relative ${project.aspect} overflow-hidden mb-6`}>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <p className="text-sm uppercase tracking-widest text-gray-500">{project.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white transition-colors text-sm uppercase tracking-widest">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-ink-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 flex items-center justify-center border border-white/30">
                <span className="font-serif font-bold text-xl leading-none">M</span>
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase">
                Rabiul Alam
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-8 max-w-md">
              Ready to build your next masterpiece?
            </h3>
            <a href="mailto:mohdrabiulalamtechworks2009@gmail.com" className="inline-flex items-center gap-3 text-lg border-b border-white/30 pb-2 hover:border-white transition-colors">
              mohdrabiulalamtechworks2009@gmail.com <ArrowRight className="w-5 h-5 -rotate-45" />
            </a>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">Office Location</h4>
            <ul className="space-y-4 font-light text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Omer Bin Yossef Building, First Floor</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+971505495657</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6">Connect</h4>
            <ul className="space-y-4 font-light text-white/80">
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" /> www.mragroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} Mohammed Rabiul Alam Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-paper-50 selection:bg-ink-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Expertise />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
