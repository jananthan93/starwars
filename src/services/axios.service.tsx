import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
export const baseURL = 'https://swapi.py4e.com/api/';
const client = axios.create({
  baseURL,
});

const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
  } as RawAxiosRequestHeaders,
};

function get(url: string) {
  return new Promise((resolve, reject) => {
    client
      .get(url, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export const axiosService = { get };
