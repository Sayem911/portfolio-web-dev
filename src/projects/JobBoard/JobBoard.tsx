import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, Search, Filter, Building2, GraduationCap, Bookmark, ExternalLink } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  logo: string;
  isSaved: boolean;
}

const JobBoard = () => {
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      salary: '$120k - $150k',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are seeking a talented Senior Frontend Developer to join our growing team...',
      requirements: [
        'Expert knowledge of React and TypeScript',
        'Experience with modern frontend tools and practices',
        'Strong problem-solving abilities'
      ],
      posted: '2 days ago',
      logo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=100&q=80',
      isSaved: true
    },
    {
      id: '2',
      title: 'Backend Engineer',
      company: 'DataFlow Systems',
      location: 'Remote',
      salary: '$100k - $130k',
      type: 'Remote',
      experience: '3+ years',
      description: 'Join our backend team to build scalable microservices...',
      requirements: [
        'Strong Node.js and Python experience',
        'Knowledge of distributed systems',
        'Experience with AWS'
      ],
      posted: '1 week ago',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100&q=80',
      isSaved: false
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'Creative Studios',
      location: 'New York, NY',
      salary: '$90k - $120k',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Design beautiful and intuitive user interfaces...',
      requirements: [
        'Proficiency in Figma and Adobe Creative Suite',
        'Strong portfolio of web and mobile designs',
        'Understanding of user-centered design principles'
      ],
      posted: '3 days ago',
      logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=100&q=80',
      isSaved: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      company: 'CloudScale',
      location: 'Seattle, WA',
      salary: '$130k - $160k',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Help us build and maintain our cloud infrastructure...',
      requirements: [
        'Experience with Kubernetes and Docker',
        'Strong knowledge of CI/CD practices',
        'AWS/Azure certification preferred'
      ],
      posted: '1 day ago',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&q=80',
      isSaved: false
    },
    {
      id: '5',
      title: 'Mobile Developer',
      company: 'AppWorks',
      location: 'Austin, TX',
      salary: '$95k - $125k',
      type: 'Contract',
      experience: '3+ years',
      description: 'Develop cross-platform mobile applications...',
      requirements: [
        'React Native expertise',
        'iOS and Android development experience',
        'Understanding of mobile UI/UX principles'
      ],
      posted: '5 days ago',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&q=80',
      isSaved: false
    },
    {
      id: '6',
      title: 'Data Scientist',
      company: 'AI Innovations',
      location: 'Boston, MA',
      salary: '$140k - $180k',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Apply machine learning to solve complex business problems...',
      requirements: [
        'Advanced degree in Computer Science or related field',
        'Experience with ML frameworks',
        'Strong mathematical background'
      ],
      posted: '1 week ago',
      logo: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?auto=format&fit=crop&w=100&q=80',
      isSaved: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');

  const types = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote'];
  const experiences = ['All', 'Entry Level', '1-3 years', '3-5 years', '5+ years'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesExperience = selectedExperience === 'All' || job.experience === selectedExperience;
    return matchesSearch && matchesType && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {experiences.map(exp => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-start gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className={`p-2 rounded-lg transition-colors ${
                          job.isSaved
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-700/50 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        <Bookmark className="w-5 h-5" fill={job.isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      {job.experience}
                    </span>
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-400 text-sm line-clamp-2">{job.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/30 text-gray-300 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;