import { axiosService, baseURL } from './axios.service';
export async function apiGetPeoples<T>(pageUrl: string | undefined | null) {
  return new Promise((resolve, reject) => {
    axiosService
      .get(pageUrl != null ? pageUrl : 'people')
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

export function apiGetPeopleDetail(id: string) {
  return new Promise((resolve, reject) => {
    axiosService
      .get(`${baseURL}/people/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
