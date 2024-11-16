import { makeVar, useReactiveVar } from "@apollo/client";

export const requestIdsVar = makeVar<string[]>([]);

export const useRequestIds = () => ({
  requestIds: useReactiveVar(requestIdsVar),
});
