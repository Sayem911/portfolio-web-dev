import React, { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'inProgress' | 'done';
}

const TaskFlow = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Research API integration', status: 'todo' },
    { id: '2', title: 'Design user dashboard', status: 'inProgress' },
    { id: '3', title: 'Update documentation', status: 'done' },
  ]);

  const [newTask, setNewTask] = useState('');

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-red-500/10 text-red-500' },
    { id: 'inProgress', title: 'In Progress', color: 'bg-yellow-500/10 text-yellow-500' },
    { id: 'done', title: 'Done', color: 'bg-green-500/10 text-green-500' },
  ];

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), title: newTask, status: 'todo' },
      ]);
      setNewTask('');
    }
  };

  const moveTask = (taskId: string, newStatus: 'todo' | 'inProgress' | 'done') => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="bg-gray-900 p-4 h-[400px] overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add new task..."
          className="flex-1 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="p-1.5 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
        >
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 h-[calc(400px-80px)] overflow-hidden">
        {columns.map(column => (
          <div key={column.id} className="bg-gray-800/50 rounded-lg p-3 h-full overflow-auto">
            <h3 className={`text-sm font-medium mb-3 px-2 py-1 rounded-md inline-block ${column.color}`}>
              {column.title}
            </h3>
            <div className="space-y-2">
              {tasks.filter(task => task.status === column.id).map(task => (
                <div
                  key={task.id}
                  className="bg-gray-800 p-3 rounded-md shadow-sm group"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm text-gray-300">{task.title}</p>
                    <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:bg-gray-700 rounded-md">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                      <div className="absolute right-0 mt-1 w-32 bg-gray-800 border border-gray-700 rounded-md shadow-lg hidden group-hover:block">
                        {columns.map(col => (
                          col.id !== column.id && (
                            <button
                              key={col.id}
                              onClick={() => moveTask(task.id, col.id as any)}
                              className="w-full text-left px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700"
                            >
                              Move to {col.title}
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskFlow;