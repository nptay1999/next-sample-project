/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';

import { getHello } from './../services/getHello';

export function useHelloQuery() {
  return useQuery(['hello'], getHello, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
