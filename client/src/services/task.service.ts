import api from './api';

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  dueDate: string | null;
  estimatedTime: number | null;
  tags: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskData {
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  dueDate?: string;
  estimatedTime?: number;
  tags?: string[];
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  dueDate?: string;
  estimatedTime?: number;
  tags?: string[];
}

/**
 * Get all tasks
 */
export const getAllTasks = async (): Promise<Task[]> => {
  const response = await api.get('/api/tasks');
  return response.data.tasks;
};

/**
 * Get single task by ID
 */
export const getTaskById = async (id: string): Promise<Task> => {
  const response = await api.get(`/api/tasks/${id}`);
  return response.data.task;
};

/**
 * Create a new task
 */
export const createTask = async (data: CreateTaskData): Promise<Task> => {
  const response = await api.post('/api/tasks', data);
  return response.data.task;
};

/**
 * Update a task
 */
export const updateTask = async (id: string, data: UpdateTaskData): Promise<Task> => {
  const response = await api.put(`/api/tasks/${id}`, data);
  return response.data.task;
};

/**
 * Delete a task
 */
export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/api/tasks/${id}`);
};