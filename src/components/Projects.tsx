import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'AI Chat Assistant',
      description: 'Interactive AI chat assistant powered by OpenAI GPT-3.5.',
      tech: ['React', 'OpenAI API', 'TypeScript'],
      demoUrl: '/ai-chat',
      features: ['Real-time chat', 'Natural language processing']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      tech: ['React', 'D3.js', 'WebSocket'],
      demoUrl: '/dashboard',
      features: ['Real-time metrics', 'Interactive charts']
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with payment integration.',
      tech: ['React', 'Stripe', 'Redux'],
      demoUrl: '/ecommerce',
      features: ['Payment processing', 'Cart management']
    },
    {
      title: 'Code Collaboration',
      description: 'Real-time collaborative code editor.',
      tech: ['React', 'WebRTC', 'Monaco'],
      demoUrl: '/code-collab',
      features: ['Real-time editing', 'Syntax highlighting']
    },
    {
      title: '3D Product Viewer',
      description: 'Interactive 3D product customization tool.',
      tech: ['Three.js', 'React Three Fiber'],
      demoUrl: '/product-customizer',
      features: ['3D rendering', 'Color customization']
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard.',
      tech: ['React', 'Weather API'],
      demoUrl: '/weather-dashboard',
      features: ['Location tracking', 'Forecast data']
    },
    {
      title: 'DevNote Editor',
      description: 'Markdown editor with live preview.',
      tech: ['React', 'Markdown'],
      demoUrl: '/dev-note',
      features: ['Live preview', 'Syntax highlighting']
    },
    {
      title: 'Task Management',
      description: 'Kanban-style task management board.',
      tech: ['React', 'DnD Kit'],
      demoUrl: '/task-flow',
      features: ['Drag-n-drop', 'Task tracking']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media management dashboard.',
      tech: ['React', 'Social APIs'],
      demoUrl: '/social-dashboard',
      features: ['Analytics', 'Post scheduling']
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform.',
      tech: ['React', 'Maps API'],
      demoUrl: '/real-estate',
      features: ['Property search', 'Virtual tours']
    },
    {
      title: 'Fitness Tracker',
      description: 'Personal fitness and workout tracking app.',
      tech: ['React', 'Charts.js'],
      demoUrl: '/fitness',
      features: ['Progress tracking', 'Workout plans']
    },
    {
      title: 'Recipe Manager',
      description: 'Recipe collection and meal planning app.',
      tech: ['React', 'Firebase'],
      demoUrl: '/recipe',
      features: ['Recipe storage', 'Meal planning']
    },
    {
      title: 'Budget Tracker',
      description: 'Personal finance and budget management app.',
      tech: ['React', 'D3.js'],
      demoUrl: '/budget',
      features: ['Expense tracking', 'Budget analysis']
    },
    {
      title: 'Learning Platform',
      description: 'Online learning management system.',
      tech: ['React', 'Video API'],
      demoUrl: '/learning',
      features: ['Course management', 'Progress tracking']
    },
    {
      title: 'Job Board',
      description: 'Job listing and application platform.',
      tech: ['React', 'API'],
      demoUrl: '/jobs',
      features: ['Job search', 'Application tracking']
    },
    {
      title: 'Event Manager',
      description: 'Event planning and management platform.',
      tech: ['React', 'Calendar API'],
      demoUrl: '/events',
      features: ['Event scheduling', 'Ticket management']
    }
  ];

  const handleViewLive = (demoUrl: string) => {
    navigate(demoUrl);
  };

  return (
    <section id="projects" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-effect rounded-lg overflow-hidden project-card h-[280px] flex flex-col"
            >
              <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-xs text-slate-300 space-y-1 mb-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border-t border-gray-700/50">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewLive(project.demoUrl)}
                    className="flex-1 btn-primary text-xs py-1.5"
                  >
                    <span className="flex items-center justify-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      View Live
                    </span>
                  </button>
                  <button className="flex-1 btn-secondary text-xs py-1.5">
                    <span className="flex items-center justify-center gap-1">
                      <Github className="w-3 h-3" />
                      Source
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;