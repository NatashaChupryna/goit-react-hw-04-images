import axios from 'axios';
import toast from 'react-hot-toast';

const KEY = `31735095-684ab1f66144313a79ef81b6d`;
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const getImage = async (query, page) => {
  const responce = await axios.get(
    `?key=${KEY}&q=${query}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
  );
  if (responce.data.hits.length > 0) {
    return responce.data.hits;
  } else {
    toast.error('We don`t have pictures for this request. Please try another word');
  }
};

