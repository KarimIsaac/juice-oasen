// src/slices/juiceApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JUICES_URL } from '../constants';

export const juiceApiSlice = createApi({
  reducerPath: 'juiceApi',
  baseQuery: fetchBaseQuery({ baseUrl: JUICES_URL }),
  tagTypes: ['Juice'],
  endpoints: (builder) => ({
    getJuices: builder.query({
      query: () => '',
      providesTags: ['Juice'],
    }),
    getJuiceById: builder.query({
      query: (juiceId) => `/${juiceId}`,
      providesTags: ['Juice'],
    }),
  }),
});

export const { useGetJuicesQuery, useGetJuiceByIdQuery } = juiceApiSlice;
