import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseURL = "https://663ba99ffee6744a6ea27c66.mockapi.io/";

// Set base query and headers
const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authentication", `Bearer ${token}`);
    }
    return headers;
  },
});

// Set retry
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

// Create API
export const api = createApi({
  reducerPath: "backendApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Posts", "AnotherTag"],
  endpoints: () => ({}),
});
