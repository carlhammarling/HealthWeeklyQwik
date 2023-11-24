import { type Signal, createContextId, useStore } from "@builder.io/qwik";

export const SearchContext = createContextId<Search>('search-context');

export function useSearchStore() {

  const search = useStore<Search>({
    searchInput: "",
  });
  return search;
}
