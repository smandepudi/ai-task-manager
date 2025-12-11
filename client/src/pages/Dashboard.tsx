import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../services/auth.service';
import { getAllTasks, type Task } from '../services/task.service';
import CreateTaskForm from '../components/CreateTaskForm';
import TaskList from '../components/TaskList';

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getAllTasks();
      setTasks(data);
      setError('');
    } catch (err: any) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  const handleTaskCreated = () => {
    fetchTasks(); // Refresh the task list
  };

  const handleTaskDeleted = () => {
    fetchTasks(); // Refresh the task list
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            AI Task Manager
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Dashboard! 🎉
          </h2>
          <p className="text-gray-600">
            Manage your tasks efficiently with AI-powered suggestions
          </p>
        </div>

        {/* Create Task Form */}
        <div className="mb-8">
          <CreateTaskForm onTaskCreated={handleTaskCreated} />
        </div>

        {/* Task List */}
        {loading ? (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
            <p className="text-gray-500">Loading tasks...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700">
            {error}
          </div>
        ) : (
          <TaskList tasks={tasks} onTaskDeleted={handleTaskDeleted} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;