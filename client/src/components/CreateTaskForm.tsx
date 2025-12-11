import { useState } from 'react';
import { createTask } from '../services/task.service';
import { getSubtaskSuggestions } from '../services/ai.service';

interface CreateTaskFormProps {
  onTaskCreated: () => void;
}

function CreateTaskForm({ onTaskCreated }: CreateTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('todo');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // AI Features
  const [aiLoading, setAiLoading] = useState(false);
  const [suggestedSubtasks, setSuggestedSubtasks] = useState<string[]>([]);
  const [showSubtasks, setShowSubtasks] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createTask({
        title,
        description: description || undefined,
        priority,
        status,
      });

      // Reset form
      setTitle('');
      setDescription('');
      setPriority('medium');
      setStatus('todo');
      setSuggestedSubtasks([]);
      setShowSubtasks(false);

      // Notify parent to refresh task list
      onTaskCreated();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  const handleAIBreakdown = async () => {
    if (!title) {
      setError('Please enter a task title first');
      return;
    }

    setAiLoading(true);
    setError('');

    try {
      const subtasks = await getSubtaskSuggestions(title, description);
      setSuggestedSubtasks(subtasks);
      setShowSubtasks(true);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to get AI suggestions');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Create New Task</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="e.g., Complete project documentation"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Add more details about this task..."
          />
        </div>

        {/* AI Breakdown Button */}
        <div>
          <button
            type="button"
            onClick={handleAIBreakdown}
            disabled={aiLoading || !title}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
          >
            {aiLoading ? (
              <>
                <span className="animate-spin">🤖</span>
                AI is thinking...
              </>
            ) : (
              <>
                🤖 Break Down with AI
              </>
            )}
          </button>
        </div>

        {/* AI Suggested Subtasks */}
        {showSubtasks && suggestedSubtasks.length > 0 && (
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-sm font-semibold text-purple-900 mb-2">
              🤖 AI Suggested Subtasks:
            </h3>
            <ul className="space-y-2">
              {suggestedSubtasks.map((subtask, index) => (
                <li key={index} className="text-sm text-purple-800 flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>{subtask}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-purple-600 mt-3">
              💡 These subtasks will help you break down your task into manageable steps!
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {loading ? 'Creating...' : 'Create Task'}
        </button>
      </form>
    </div>
  );
}

export default CreateTaskForm;