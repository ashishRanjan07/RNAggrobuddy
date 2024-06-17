import axios from 'axios';
import {NewApiKey} from '../constant';

//  const url = `${https://newsapi.org/v2/everything?q=agriculture+OR+farming&language=hi&apiKey=${}}`
const Url = `https://newsapi.org/v2/everything?q=agriculture+OR+farming&language=en&apiKey=${NewApiKey}`;
export const NewsAPI = async lang => {
  const url = `https://newsapi.org/v2/everything?q=agriculture+OR+farming&language=${lang}&apiKey=${NewApiKey}`;
  const response = await axios
    .get(url)
    .then(res => res?.data)
    .catch(error => error?.response?.data);
  return response;
};
