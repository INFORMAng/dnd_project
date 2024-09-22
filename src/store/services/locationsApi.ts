import { rtkApi } from "../../API/rtkApi";
import { ILocation } from "../../types/locations";

const locationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<ILocation[], null>({
      query: () => ({
        url: '/locations'
      }),
      providesTags: (result) => result 
            ? [
                ...result.map(({id}) => ({type: 'locations' as const, id})),
                {type: 'locations', id: 'LIST' as const},
            ]
            : [{type: 'locations', id: 'LIST' as const}],
    })
  })
}) 

export const useGetLocations = locationsApi.useGetLocationsQuery;