/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react";
import Tables, { Person } from '../data/guests'
import { Table } from '../data/guests'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ContextType = {
  isShowModal: boolean,
  setIsShowModal: any,
  searchPerson: (name: string) => Person | undefined,
  searchTable: (name: string) => Table | undefined,
  currentPerson: any,
  setCurrentPerson: any,
  isPicture: boolean,
  setIsPicture: any,
  mainRef: any,
  setIsMainRef: any,
  setCurrentTable: any,
  currentTable: any,
}

const searchPerson = (name: string) => (
  Tables.map((table: Table) => {
   const searchedPerson = table.people.find((person: Person) => person.name === name)
   return searchedPerson
  }).find((result: Person | undefined) => result)
)

const searchTable = (name: string) => {
  for (let i = 0; i < Tables.length; i++) {
    const person = Tables[i].people.find((person: Person) => person.name === name)
    if (person) return Tables[i]
  }
}

const StoreContext = createContext<ContextType>({
  isShowModal: false,
  setIsShowModal: () => {},
  searchPerson,
  searchTable,
  currentPerson: '',
  setCurrentPerson: () => {},
  isPicture: false,
  setIsPicture: () => {},
  mainRef: null,
  setIsMainRef: () => {},
  currentTable: '',
  setCurrentTable: () => {},
});

const StoreProvider = (props: React.PropsWithChildren) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [currentPerson, setCurrentPerson] = useState('')
  const [currentTable, setCurrentTable] = useState('')
  const [isPicture, setIsPicture] = useState(false)
  const [mainRef, setIsMainRef] = useState(null)

  return(
    <StoreContext.Provider value={{
      isShowModal,
      setIsShowModal,
      searchPerson,
      searchTable,
      currentPerson,
      currentTable,
      setCurrentTable,
      setCurrentPerson,
      isPicture,
      setIsPicture,
      mainRef,
      setIsMainRef,
      }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export {StoreProvider, StoreContext};


