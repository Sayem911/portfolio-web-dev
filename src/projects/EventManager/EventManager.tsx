import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, Plus, Ticket, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  price: number;
  category: string;
  image: string;
  organizer: string;
  isRegistered: boolean;
}

const EventManager = () => {
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Tech Conference 2024',
      description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative talks.',
      date: '2024-04-15',
      time: '09:00 AM',
      location: 'San Francisco Convention Center',
      capacity: 1000,
      registered: 750,
      price: 299,
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80',
      organizer: 'TechEvents Inc.',
      isRegistered: true
    },
    {
      id: '2',
      title: 'Digital Marketing Workshop',
      description: 'Learn the latest digital marketing strategies and tools in this hands-on workshop.',
      date: '2024-04-20',
      time: '10:00 AM',
      location: 'Online',
      capacity: 100,
      registered: 45,
      price: 149,
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
      organizer: 'Digital Growth Academy',
      isRegistered: false
    },
    {
      id: '3',
      title: 'Startup Networking Night',
      description: 'Connect with fellow entrepreneurs and investors in this exclusive networking event.',
      date: '2024-04-25',
      time: '06:00 PM',
      location: 'Innovation Hub, New York',
      capacity: 200,
      registered: 180,
      price: 0,
      category: 'Networking',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80',
      organizer: 'Startup Network',
      isRegistered: true
    },
    {
      id: '4',
      title: 'UX Design Masterclass',
      description: 'Master the art of user experience design with industry experts.',
      date: '2024-05-01',
      time: '02:00 PM',
      location: 'Design Center, Seattle',
      capacity: 50,
      registered: 35,
      price: 199,
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
      organizer: 'Design Guild',
      isRegistered: false
    },
    {
      id: '5',
      title: 'AI & Machine Learning Summit',
      description: 'Explore the latest developments in AI and machine learning technologies.',
      date: '2024-05-05',
      time: '09:00 AM',
      location: 'Tech Campus, Boston',
      capacity: 500,
      registered: 425,
      price: 399,
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
      organizer: 'AI Research Institute',
      isRegistered: false
    },
    {
      id: '6',
      title: 'Web Development Bootcamp',
      description: 'Intensive training in modern web development technologies and practices.',
      date: '2024-05-10',
      time: '10:00 AM',
      location: 'Online',
      capacity: 150,
      registered: 98,
      price: 249,
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80',
      organizer: 'Code Academy',
      isRegistered: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const categories = ['All', 'Technology', 'Marketing', 'Networking', 'Design', 'Development'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];

  const nextMonth = () => {
    setSelectedMonth(new Date(selectedMonth.setMonth(selectedMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setSelectedMonth(new Date(selectedMonth.setMonth(selectedMonth.getMonth() - 1)));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Calendar Header */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Event Calendar</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-white font-medium">
                {monthNames[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
              </span>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-gray-400 text-sm py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square border border-gray-700 rounded-lg p-1"
              >
                <div className="w-full h-full rounded-lg hover:bg-gray-700/50 transition-colors p-2">
                  <span className="text-sm text-gray-400">{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
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

            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors">
              <Plus className="w-5 h-5" />
              Create Event
            </button>
          </div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-lg group">
              <div className="relative aspect-video">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.price === 0 ? 'bg-green-500' : 'bg-blue-500'
                  } text-white`}>
                    {event.price === 0 ? 'Free' : `$${event.price}`}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs">
                    {event.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{event.registered}/{event.capacity}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    By {event.organizer}
                  </div>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      event.isRegistered
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    <Ticket className="w-4 h-4" />
                    {event.isRegistered ? 'Registered' : 'Register Now'}
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

export default EventManager;