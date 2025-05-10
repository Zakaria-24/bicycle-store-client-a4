import { baseApi } from "../../api/baseApi";

export const checkoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CreateOrder
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order/create-order",
        method: "POST",
        body: orderInfo,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = checkoutApi;
