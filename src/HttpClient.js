import axios from "axios"

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = process.env.REACT_APP_NASA_KEY;
let baseurl = 'https://api.nasa.gov/planetary/apod';
console.log(nasaEndpoint);
axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url;
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey;
    }

    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  getApod(setdate) {
    return fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${setdate}`
      ).then(res => res.json()).then((data)=>{
          console.log(data);
          return data;
      });
  },
}