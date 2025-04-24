import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  apiGetPeopleDetail,
  apiGetPeoples,
} from '../../../services/people.service';

export type People = {
  id: string;
  url: string;
  name: string;
  birthYear: string;
  homeworld: string;
  gender: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  height: string;
  mass: string;
};

type PeopleResponse = {
  id: string;
  url: string;
  name: string;
  birth_year: string;
  homeworld: string;
  gender: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  height: string;
  mass: string;
};
export type PeopleState = {
  loading: boolean;
  allPeoples: People[];
  favPeoples: string[];
  peopleDetail: People | null;
  next: string | null;
  previous: string | null;
};
type GetPeoplesResponse = {
  count: number;
  next: string | null;
  results: PeopleResponse[];
  previous: string | null;
};

export const SLICE_NAME = 'people';
export const getAllPeoples = createAsyncThunk(
  SLICE_NAME + '/getAllPeoples',
  async (page: string | undefined | null) => {
    return (await apiGetPeoples(page)) as GetPeoplesResponse;
  }
);

export const getPeopleDetail = createAsyncThunk(
  SLICE_NAME + '/getPeopleDetail',
  async (id: string) => {
    const people = (await apiGetPeopleDetail(id)) as PeopleResponse;
    return {
      id,
      url: people.url,
      name: people.name,
      birthYear: people.birth_year,
      homeworld: people.homeworld,
      gender: people.gender,
      hairColor: people.hair_color,
      height: people.height,
      mass: people.mass,
      eyeColor: people.eye_color,
      skinColor: people.skin_color,
    };
  }
);

const initialState: PeopleState = {
  loading: false,
  allPeoples: [],
  favPeoples: [],
  peopleDetail: null,
  previous: null,
  next: null,
};
function removeItemOnce(arr: string[], value: any) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
const peopleSlice = createSlice({
  name: `${SLICE_NAME}/state`,
  initialState,
  reducers: {
    likePeople: (state, action) => {
      state.favPeoples = [...state.favPeoples, action.payload];
    },
    unLikePeople: (state, action) => {
      state.favPeoples = removeItemOnce(state.favPeoples, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPeoples.fulfilled, (state, action) => {
        state.allPeoples = action.payload.results.map((people) => {
          let id = people.url
            .replace('https://swapi.py4e.com/api/people/', '')
            .replace('/', '');
          return {
            id,
            url: people.url,
            name: people.name,
            birthYear: people.birth_year,
            homeworld: people.homeworld,
            gender: people.gender,
            hairColor: people.hair_color,
            height: people.height,
            mass: people.mass,
            eyeColor: people.eye_color,
            skinColor: people.skin_color,
          };
        });
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.loading = false;
      })
      .addCase(getAllPeoples.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPeopleDetail.fulfilled, (state, action) => {
        state.peopleDetail = action.payload;
        state.loading = false;
      })
      .addCase(getPeopleDetail.pending, (state) => {
        state.loading = true;
      });
  },
});
export const { likePeople, unLikePeople } = peopleSlice.actions;
export default peopleSlice.reducer;
