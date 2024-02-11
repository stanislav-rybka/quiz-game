import { $host } from "./index";


export const fetchQuizesByCategoryId = async (categoryId) => {
  const response = await $host.get('api/quiz?categoryId=' + categoryId);

  return response;
}


export const fetchQuizById = async (quizId) => {
  const response = await $host.get('api/quiz/' + quizId);

  return response;
}