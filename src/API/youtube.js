import axios from 'axios';
const KEY = 'AIzaSyCVewmLCESsXksKD7Hv-gkQlonmEjELr9E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
});