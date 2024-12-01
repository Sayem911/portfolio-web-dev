import React from 'react';
import { ChevronDown, Code, Briefcase, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Hello, I'm MD SAYEM HOSSEN
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Full Stack Developer crafting beautiful & performant web experiences
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              View Projects
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-12">
            <div className="glass-effect p-4 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-1">5+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="glass-effect p-4 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-1">20+</div>
              <div className="text-sm text-slate-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce glass-effect p-3 rounded-full"
      >
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </a>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;