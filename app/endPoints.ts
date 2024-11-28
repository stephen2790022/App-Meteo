// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type GetLocationType = {
  latitude: number;
  longitude: number;
};

export const meteoApi = createApi({
  reducerPath: "meteoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.open-meteo.com/v1/" }),
  endpoints: (builder) => ({
    getLocation: builder.query<GetLocationType, any>({
      query: ({ latitude, longitude }) =>
        `forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`,
    }),
  }),
});

export const { useGetLocationQuery } = meteoApi;
