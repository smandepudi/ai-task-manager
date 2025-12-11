import { GoogleGenerativeAI } from '@google/generative-ai';

console.log('🔑 API Key loaded:', process.env.GOOGLE_AI_API_KEY ? 'YES' : 'NO');
console.log('🔑 Key length:', process.env.GOOGLE_AI_API_KEY?.length || 0);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

/**
 * Break down a task into smaller subtasks using AI
 */
export const breakdownTask = async (
  title: string,
  description?: string
): Promise<string[]> => {
  try {
const model = genAI.getGenerativeModel({ model: 'gemini-flash-lite-latest' });
const prompt = `You are a task management assistant. Break down the following task into 3-5 specific, actionable subtasks.

Task Title: ${title}
${description ? `Task Description: ${description}` : ''}

Provide only the subtask titles, one per line. Make them clear, specific, and actionable.
Do not include numbering or bullet points.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Split by newlines and filter empty lines
    const subtasks = text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && line.length < 200);

    return subtasks.slice(0, 5); // Max 5 subtasks
  } catch (error) {
    console.error('AI breakdown error:', error);
    throw new Error('Failed to generate subtasks');
  }
};

/**
 * Suggest priority for a task using AI
 */
export const suggestPriority = async (
  title: string,
  description?: string
): Promise<string> => {
  try {
const model = genAI.getGenerativeModel({ model: 'gemini-flash-lite-latest' });
const prompt = `
You are a task management assistant. Analyze this task and suggest a priority level.

Task Title: ${title}
${description ? `Task Description: ${description}` : ''}

Respond with ONLY one word: low, medium, high, or urgent
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().toLowerCase().trim();

    // Validate response
    const validPriorities = ['low', 'medium', 'high', 'urgent'];
    if (validPriorities.includes(text)) {
      return text;
    }

    return 'medium'; // Default fallback
  } catch (error) {
    console.error('AI priority error:', error);
    throw new Error('Failed to suggest priority');
  }
};

/**
 * Estimate time needed for a task using AI
 */
export const estimateTime = async (
  title: string,
  description?: string
): Promise<number> => {
  try {
const model = genAI.getGenerativeModel({ model: 'gemini-flash-lite-latest' });
const prompt = `
You are a task management assistant. Estimate how many minutes this task will take.

Task Title: ${title}
${description ? `Task Description: ${description}` : ''}

Respond with ONLY a number representing minutes (e.g., 30, 60, 120).
Be realistic and consider typical work scenarios.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    const minutes = parseInt(text, 10);

    // Validate and cap the estimate
    if (minutes && minutes > 0 && minutes < 10000) {
      return minutes;
    }

    return 60; // Default to 1 hour
  } catch (error) {
    console.error('AI estimate error:', error);
    throw new Error('Failed to estimate time');
  }
};