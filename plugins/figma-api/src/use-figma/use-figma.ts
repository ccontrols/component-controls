import { useState, useEffect } from 'react';
import { Client, ClientInterface, FileParams, FileResponse } from 'figma-js';

export interface FigmaAPIOptions {
  accessToken?: string;
  personalAccessToken?: string;
}
export const useFigmaClient = ({
  accessToken,
  personalAccessToken,
}: FigmaAPIOptions): ClientInterface => {
  const [client, setClient] = useState<ClientInterface>(
    Client({
      accessToken,
      personalAccessToken,
    }),
  );
  useEffect(() => {
    setClient(
      Client({
        accessToken,
        personalAccessToken,
      }),
    );
  }, [accessToken, personalAccessToken]);
  return client;
};
export interface useFigmaReturnValues<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
  cache: Map<string, any>;
}

const globalCache = new Map<string, any>();
export const useFigmaRequest = <T>(
  url: string,
  options: FigmaAPIOptions,
  params?: any,
): useFigmaReturnValues<T> => {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { client } = useFigmaClient(options);
  useEffect(() => {
    const fetchData = async () => {
      const cached = globalCache.get(url);
      if (cached) {
        setData(cached);
      } else {
        setIsLoading(true);
        try {
          try {
            const { data } = await client.get(url, params);
            globalCache.set(url, data);
            setData(data);
          } catch (e) {
            setError(e);
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [url, client, params]);
  return { data, error, isLoading, cache: globalCache };
};

export const useFigmaFile = (
  file: string,
  options: FigmaAPIOptions,
  params?: FileParams,
): useFigmaReturnValues<FileResponse> => {
  return useFigmaRequest<FileResponse>(`files/${file}`, options, params);
};
