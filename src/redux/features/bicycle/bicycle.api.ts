/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const bicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Bicycle
    getAllBicycle: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/bicycle",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bicycle"],
    }),
    // Get Specific Field
    getSpecificBicycleFields: builder.query({
      query: () => ({
        url: "/bicycle/specific",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),
    getSingleBicycle: builder.query({
      query: (arg) => ({
        url: `/bicycle/${arg}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),
    // Create New Bicycle
    addBicycle: builder.mutation({
      query: (data) => ({
        url: "/bicycle/create-bicycle",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bicycle"],
    }),
    // Update Bicycle
    updateBicycle: builder.mutation({
      query: (arg) => ({
        url: `/bicycle/${arg?.id}`,
        method: "PATCH",
        body: arg?.data,
      }),
      invalidatesTags: ["bicycle"],
    }),
    // Delete Bicycle
    deleteBicycle: builder.mutation({
      query: (id) => ({
        url: `/bicycle/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bicycle"],
    }),
  }),
});

export const {
  useGetAllBicycleQuery,
  useGetSingleBicycleQuery,
  useGetSpecificBicycleFieldsQuery,
  useAddBicycleMutation,
  useUpdateBicycleMutation,
  useDeleteBicycleMutation,
} = bicycleApi;
