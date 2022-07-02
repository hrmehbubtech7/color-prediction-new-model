import { createContext, FC, useEffect, useState } from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import Loader from '../../components/common/Loader';

interface QueryLoaderContextType {
  isQueryLoading: boolean;
  isFetching: boolean;
  isMutating: boolean;
}

interface Props {
    children: React.ReactNode;
  }

export const QueryLoaderContext = createContext<QueryLoaderContextType>(null!);

export const QueryLoaderProvider: FC<Props> =({ children }) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const [isQueryLoading, setIsQueryLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsQueryLoading(!!isFetching || !!isMutating);
  }, [isFetching, isMutating]);

  const value = {
    isQueryLoading,
    isFetching: !!isFetching,
    isMutating: !!isMutating,
  };

  return (
    <QueryLoaderContext.Provider value={value}>
      {children}
      {isQueryLoading && <Loader />}
    </QueryLoaderContext.Provider>
  );
};
