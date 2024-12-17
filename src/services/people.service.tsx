import { axiosService } from './axios.service';

export async function apiGetPeoples<T>(page: number) {
  return new Promise((resolve, reject) => {
    let url = page > 1 ? `people/?page=${page}` : `people`;
    axiosService
      .get(url)
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
      .get(`people/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
