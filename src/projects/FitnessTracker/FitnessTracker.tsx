import React, { useState } from 'react';
import { Activity, Calendar, TrendingUp, Dumbbell, Clock, BarChart3, Plus, X } from 'lucide-react';

interface Workout {
  id: string;
  type: string;
  duration: number;
  calories: number;
  date: string;
}

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

const FitnessTracker = () => {
  const [workouts] = useState<Workout[]>([
    { id: '1', type: 'Strength Training', duration: 45, calories: 320, date: '2024-03-10' },
    { id: '2', type: 'Cardio', duration: 30, calories: 280, date: '2024-03-09' },
    { id: '3', type: 'HIIT', duration: 25, calories: 250, date: '2024-03-08' },
  ]);

  const [exercises] = useState<Exercise[]>([
    { id: '1', name: 'Bench Press', sets: 3, reps: 10, weight: 135 },
    { id: '2', name: 'Squats', sets: 4, reps: 8, weight: 185 },
    { id: '3', name: 'Deadlifts', sets: 3, reps: 8, weight: 225 },
  ]);

  const [showAddWorkout, setShowAddWorkout] = useState(false);

  const stats = [
    { title: 'Total Workouts', value: '24', icon: Activity, color: 'blue' },
    { title: 'Weekly Goal', value: '5/6', icon: TrendingUp, color: 'green' },
    { title: 'Active Days', value: '18', icon: Calendar, color: 'purple' },
    { title: 'Calories Burned', value: '8.5k', icon: BarChart3, color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className={`p-2 bg-${stat.color}-500/10 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Workouts */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Workouts</h2>
              <button
                onClick={() => setShowAddWorkout(true)}
                className="p-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-gray-700/30 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Dumbbell className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{workout.type}</h3>
                      <p className="text-sm text-gray-400">{workout.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration} min</span>
                      </div>
                      <p className="text-sm text-gray-400">{workout.calories} cal</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exercise Log */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Exercise Log</h2>
              <button className="p-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-gray-700/30 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">{exercise.name}</h3>
                    <button className="text-gray-400 hover:text-gray-300">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Sets</p>
                      <p className="text-white font-medium">{exercise.sets}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Reps</p>
                      <p className="text-white font-medium">{exercise.reps}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Weight</p>
                      <p className="text-white font-medium">{exercise.weight} lbs</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <h2 className="text-lg font-semibold text-white mb-6">Weekly Progress</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 75, 55, 85, 35, 95].map((height, i) => (
              <div key={i} className="w-full bg-gray-700 rounded-t-lg relative group">
                <div
                  className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-300 group-hover:bg-blue-400"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;