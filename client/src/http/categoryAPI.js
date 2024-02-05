import { $host } from "./index";


export const fetchAllCategories = async () => {
  const response = await $host.get('api/category/');

  return response;
}