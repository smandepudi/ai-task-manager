import { useNavigate } from 'react-router-dom';
import { removeToken } from '../services/auth.service';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/login');
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
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard! 🎉
          </h2>
          <p className="text-gray-600 mb-6">
            You're successfully logged in! Task management features coming soon...
          </p>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              ✅ What's Working:
            </h3>
            <ul className="space-y-2 text-indigo-700">
              <li>• User registration</li>
              <li>• User login with JWT authentication</li>
              <li>• Protected routes</li>
              <li>• Token storage in localStorage</li>
              <li>• Logout functionality</li>
            </ul>
          </div>

          <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              🚀 Coming Next:
            </h3>
            <ul className="space-y-2 text-green-700">
              <li>• Create and manage tasks</li>
              <li>• AI-powered task suggestions</li>
              <li>• Task prioritization</li>
              <li>• Subtasks management</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;