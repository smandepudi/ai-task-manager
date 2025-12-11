import api from './api';

export interface SubtaskSuggestion {
  subtasks: string[];
}

export interface PrioritySuggestion {
  priority: string;
}

export interface TimeEstimate {
  estimatedTime: number;
}

/**
 * Get AI-generated subtasks for a task
 */
export const getSubtaskSuggestions = async (
  title: string,
  description?: string
): Promise<string[]> => {
  const response = await api.post('/api/ai/breakdown', {
    title,
    description,
  });
  return response.data.subtasks;
};

/**
 * Get AI priority suggestion for a task
 */
export const getPrioritySuggestion = async (
  title: string,
  description?: string
): Promise<string> => {
  const response = await api.post('/api/ai/priority', {
    title,
    description,
  });
  return response.data.priority;
};

/**
 * Get AI time estimate for a task
 */
export const getTimeEstimate = async (
  title: string,
  description?: string
): Promise<number> => {
  const response = await api.post('/api/ai/estimate', {
    title,
    description,
  });
  return response.data.estimatedTime;
};