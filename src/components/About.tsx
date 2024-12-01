import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'm a passionate Full Stack Developer with 5+ years of experience in building
              modern web applications. I specialize in TypeScript, React, and Node.js,
              focusing on creating secure and performant solutions.
            </p>
            <p className="text-lg text-gray-300">
              My journey in tech started with a deep curiosity for how things work,
              leading me to explore various technologies and frameworks. Today, I help
              businesses build robust applications that scale.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;