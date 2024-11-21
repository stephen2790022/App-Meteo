// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetLocationType = {
  latitude: number;
  longitude: number;
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.open-meteo.com/v1/" }),
  endpoints: (builder) => ({
    getLocation: builder.query<GetLocationType, any>({
      query: ({ latitude, longitude }) =>
        `forecast?latitude=${latitude}&longitude=${longitude}`,
    }),
  }),
});

export const { useGetLocationQuery } = pokemonApi;
