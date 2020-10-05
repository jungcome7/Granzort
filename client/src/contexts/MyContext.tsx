import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { Book } from '../../../types';

type fetchedSearchDataState = Book[];

const FetchedSearchDataStateContext = createContext<
  fetchedSearchDataState | undefined
>(undefined);

type Action = { type: 'SET_FETCHED_SEARCH_DATA'; fetchedSearchData: Book[] };

type FetchedSearchDataDispatch = Dispatch<Action>;

const FetchedSearchDataDispatchContext = createContext<
  FetchedSearchDataDispatch | undefined
>(undefined);

const fetchedSearchDataReducer = (
  state: fetchedSearchDataState,
  action: Action
): fetchedSearchDataState => {
  switch (action.type) {
    case 'SET_FETCHED_SEARCH_DATA':
      return action.fetchedSearchData;
    default:
      throw new Error('Unhandled action');
  }
};

export const FetchedSearchDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fetchedSearchData, dispatch] = useReducer(
    fetchedSearchDataReducer,
    []
  );
  const setData = (payload:any) => {
    dispatch({ type: 'SET_FETCHED_SEARCH_DATA', fetchedSearchData: [{title:'gg', authors:['gg'], datetime:'2020-02-02'},...payload] });
  };

  return (
    <FetchedSearchDataDispatchContext.Provider value={setData}>
      <FetchedSearchDataStateContext.Provider value={fetchedSearchData}>
        {children}
      </FetchedSearchDataStateContext.Provider>
    </FetchedSearchDataDispatchContext.Provider>
  );
};

export const useFetchedSearchDataState = () => {
  const fetchedSearchData = useContext(FetchedSearchDataStateContext);
  if (!fetchedSearchData) throw new Error('TodosProvider not found');
  return fetchedSearchData;
};

export const useFetchedSearchDataDispatch = () => {
  const setData = useContext(FetchedSearchDataDispatchContext);
  if (!setData) throw new Error('TodosProvider not found');
  return setData;
};
