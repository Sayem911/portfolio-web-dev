import React, { useState } from 'react';
import { Book, Play, Clock, Award, Search, Filter, BarChart2, BookOpen, CheckCircle, Lock } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number;
  lessons: number;
  progress: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  isEnrolled: boolean;
}

const LearningPlatform = () => {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Advanced React Development',
      description: 'Master modern React with hooks, context, and advanced patterns.',
      instructor: 'Sarah Johnson',
      duration: 12,
      lessons: 24,
      progress: 75,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80',
      category: 'Web Development',
      level: 'Advanced',
      isEnrolled: true
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and experience design.',
      instructor: 'Michael Chen',
      duration: 8,
      lessons: 16,
      progress: 45,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80',
      category: 'Design',
      level: 'Beginner',
      isEnrolled: true
    },
    {
      id: '3',
      title: 'Data Science with Python',
      description: 'Explore data analysis, visualization, and machine learning.',
      instructor: 'Alex Thompson',
      duration: 15,
      lessons: 30,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      category: 'Data Science',
      level: 'Intermediate',
      isEnrolled: false
    },
    {
      id: '4',
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile apps with React Native.',
      instructor: 'Emily Davis',
      duration: 10,
      lessons: 20,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
      category: 'Mobile Development',
      level: 'Intermediate',
      isEnrolled: false
    },
    {
      id: '5',
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions.',
      instructor: 'David Wilson',
      duration: 14,
      lessons: 28,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
      category: 'Cloud Computing',
      level: 'Advanced',
      isEnrolled: false
    },
    {
      id: '6',
      title: 'Digital Marketing',
      description: 'Learn modern digital marketing strategies and tools.',
      instructor: 'Lisa Anderson',
      duration: 6,
      lessons: 12,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      category: 'Marketing',
      level: 'Beginner',
      isEnrolled: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Web Development', 'Design', 'Data Science', 'Mobile Development', 'Cloud Computing', 'Marketing'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const enrolledCourses = courses.filter(course => course.isEnrolled);
  const totalProgress = enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length;

  const stats = [
    { title: 'Enrolled Courses', value: enrolledCourses.length, icon: Book },
    { title: 'Hours Completed', value: '24', icon: Clock },
    { title: 'Certificates', value: '2', icon: Award },
    { title: 'Overall Progress', value: `${Math.round(totalProgress)}%`, icon: BarChart2 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-lg group">
              <div className="relative aspect-video">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-500' :
                    course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white`}>
                    {course.level}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                  {!course.isEnrolled && (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                </div>

                {course.isEnrolled && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-blue-400">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 rounded-full h-2 transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <span className="text-sm text-gray-400">{course.instructor}</span>
                  </div>
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    course.isEnrolled
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}>
                    {course.isEnrolled ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Continue
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Enroll Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;