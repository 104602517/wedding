/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react";
import Tables, { Person } from '../data/guests'
import { Table } from '../data/guests'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ContextType = {
  isShowModal: boolean,
  setIsShowModal: any,
  searchPerson: (name: string) => Person | undefined,
  currentPerson: any,
  setCurrentPerson: any,
}

const searchPerson = (name: string) => (
  Tables.map((table: Table) => {
   const searchedPerson = table.people.find((person: Person) => person.name === name)
   return searchedPerson
  }).find((result: Person | undefined) => result)
)

const StoreContext = createContext<ContextType>({
  isShowModal: false,
  setIsShowModal: () => {},
  searchPerson,
  currentPerson: '',
  setCurrentPerson: () => {}
});

const StoreProvider = (props: React.PropsWithChildren) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [currentPerson, setCurrentPerson] = useState('')

  return(
    <StoreContext.Provider value={{
      isShowModal,
      setIsShowModal,
      searchPerson,
      currentPerson,
      setCurrentPerson,
      }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export {StoreProvider, StoreContext};


