import { QueryClient, QueryCache, MutationCache } from 'react-query';
import { AxiosError } from 'axios';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as _ from 'lodash';
import { useToastMessage } from '../hooks/useToastMessage';
import httpStatus  from 'http-status-codes';


export const useQueryClient = () => {
  const navigate = useNavigate();
  const showToast = useToastMessage();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: error => {
            (!(error as AxiosError).response ||
              (error as AxiosError).response?.status ===
                httpStatus.INTERNAL_SERVER_ERROR) &&
              showToast({
                title: 'Server Error',
                description: 'Please contact the administrator',
                status: 'error',
              });

            if (
              (error as AxiosError).response?.status === httpStatus.FORBIDDEN
            ) {
              navigate('/unauthorized', {
                replace: true,
              });
            }
          },
        }),
        defaultOptions: {
          queries: {
            retry: (index, error) => {
              return (
                !_.includes(
                  [httpStatus.UNAUTHORIZED, httpStatus.FORBIDDEN],
                  (error as AxiosError).response?.status,
                ) && index < 3
              );
            },
            refetchOnWindowFocus: false,
          },
        },
        mutationCache: new MutationCache({
          onError: error => {
            (error as AxiosError).response?.status ===
              httpStatus.INTERNAL_SERVER_ERROR &&
              showToast({
                title: 'Server Error',
                description: 'Please contact the administrator',
                status: 'error',
              });
            return error;
          },
        }),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { queryClient };
};
