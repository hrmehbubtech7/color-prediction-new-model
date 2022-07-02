import { createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQueryClient } from '../../config/queryInstance';
import { QueryLoaderProvider } from '../QueryLoaderContext';


interface QueryCustomContextType {
  queryClient: QueryClient;
}

export const QueryCustomContext = createContext<QueryCustomContextType>(null!);

interface QueryCustomProviderProps {
  children : React.ReactNode
}



export const QueryCustomProvider: React.FC<QueryCustomProviderProps> = ({
  children,
}) => {
  const { queryClient } = useQueryClient();
  const value: QueryCustomContextType = { queryClient };

  return (
    <QueryCustomContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <QueryLoaderProvider>{children}</QueryLoaderProvider>
      </QueryClientProvider>
    </QueryCustomContext.Provider>
  );
};
