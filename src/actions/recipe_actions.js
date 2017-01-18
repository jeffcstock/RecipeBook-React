import axios from 'axios';

export const fetchData = () => {
  const url = 'http://localhost:3000/api/v1/recipes.json';
  const request = axios.get(url);

  console.log('Request:', request);
  return {
    type: 'FETCH_DATA',
    payload: request
  };
};
