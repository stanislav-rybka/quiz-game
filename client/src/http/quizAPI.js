import { $host } from "./index";


export const fetchQuizesByCategory = async (category) => {
  const response = await $host.get('api/quiz/');

  return response;
}


export const fetchQuizById = async (quizId) => {
  const response = await $host.get('api/quiz/' + quizId);

  return response;
}