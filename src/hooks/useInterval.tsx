import { useEffect } from 'react';

export const useInterval = (cb: () => any, ms: number) => {
  useEffect(() => {
    const intrv = setInterval(cb, ms);
    return () => clearInterval(intrv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
