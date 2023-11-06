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
  isPicture: boolean,
  setIsPicture: any,
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
  setCurrentPerson: () => {},
  isPicture: false,
  setIsPicture: () => {},
});

const StoreProvider = (props: React.PropsWithChildren) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [currentPerson, setCurrentPerson] = useState('')
  const [isPicture, setIsPicture] = useState(false)

  return(
    <StoreContext.Provider value={{
      isShowModal,
      setIsShowModal,
      searchPerson,
      currentPerson,
      setCurrentPerson,
      isPicture,
      setIsPicture,
      }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export {StoreProvider, StoreContext};


