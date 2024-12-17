import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiGetPeoples } from '../../../services/people.service';

export type People = {
  name: string;
  birthYear: string;
  homeworld: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
};

export type PeopleState = {
  loading: boolean;
  allPeoples: People[];
  favPeoples: People[];
  peopleDetail: People | null;
  next: string | null;
  previous: string | null;
};
type GetPeoplesResponse = {
  count: number;
  next: string | null;
  results: any[];
  previous: number | null;
};

export const SLICE_NAME = 'people';
export const getAllPeoples = createAsyncThunk(
  SLICE_NAME + '/getAllPeoples',
  async (page: number) => {
    const response = (await apiGetPeoples(page)) as GetPeoplesResponse;
    return response.results.map((people) => {
      return {
        name: people.name,
        birthYear: people.birth_year,
        homeworld: people.homeworld,
        gender: people.gender,
        hairColor: people.hair_color,
        height: people.height,
        mass: people.mass,
      };
    });
  }
);
export const getPeopleDetail = createAsyncThunk(
  SLICE_NAME + '/getPeopleDetail',
  async (id: string) => {
    return null;
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

const peopleSlice = createSlice({
  name: `${SLICE_NAME}/state`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPeoples.fulfilled, (state, action) => {
        state.allPeoples = action.payload;
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

export default peopleSlice.reducer;
