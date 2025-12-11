import { type Task, deleteTask } from '../services/task.service';

interface TaskListProps {
  tasks: Task[];
  onTaskDeleted: () => void;
}

function TaskList({ tasks, onTaskDeleted }: TaskListProps) {
  const handleDelete = async (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(taskId);
        onTaskDeleted();
      } catch (error) {
        alert('Failed to delete task');
      }
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'todo':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatStatus = (status: string) => {
    return status.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  };

  if (tasks.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
        <p className="text-gray-500 text-lg">No tasks yet. Create your first task above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Tasks ({tasks.length})</h2>
      
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-600 hover:text-red-800 font-medium text-sm"
            >
              Delete
            </button>
          </div>

          {task.description && (
            <p className="text-gray-600 mb-4">{task.description}</p>
          )}

          <div className="flex flex-wrap gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority.toUpperCase()}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                task.status
              )}`}
            >
              {formatStatus(task.status)}
            </span>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;