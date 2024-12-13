import axios from 'axios'
import {
  InvalidateOptions,
  InvalidateQueryFilters,
  QueryClient,
  RefetchOptions,
  RefetchQueryFilters
} from '@tanstack/react-query'

export const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

export const invalidateQueries = (
  filters?: InvalidateQueryFilters | undefined,
  options?: InvalidateOptions | undefined
): Promise<void> => queryClient.invalidateQueries(filters, options)

export const refetchQueries = (
  filters?: RefetchQueryFilters | undefined,
  options?: RefetchOptions | undefined
): Promise<void> => queryClient.refetchQueries(filters, options)

/**
 * This is general api client which will be used for most of the stuff
 */
export const userClient = axios.create()

/**
 * This is general api client which will be used for most of the stuff
 */
export const apiClient = axios.create()

// apiClient.interceptors.response.use(
//   resp => resp,
//   async error => {
//     if (error.response.status === 500 || error.response.status === 401) {
//       localStorage.removeItem(USER_DATA_KEY)
//       localStorage.removeItem(ACCESS_TOKEN_KEY)

//       return Promise.reject(error)
//     }
//   }
// )
