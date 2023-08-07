import { createContext, useContext } from "react";

type CacheKeysValue = {
  postsKey: string;
}

export const CacheKeyContext = createContext<CacheKeysValue>({
  postsKey: '/api/posts'
})

export const useCacheKeys = () => useContext(CacheKeyContext);