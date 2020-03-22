import React, { createContext, useReducer } from 'react';

export const DataContext = createContext()

interface IProduct {
  material: string | null,
  color: string | null,
  style: string | null,
  layout: string | null,
  neckline: string | null,
  photo: string | null,
  size: string | null,
  text: string | null,
  package: string | null
}

const initialState = {
  material: null,
  color: null,
  style: null,
  layout: null,
  neckline: null,
  photo: null,
  size: null,
  text: 'Good luck.',
  package: null,
  preview: null
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SELECT_MATERIAIL":
      return {...state, material: action.material }
    case "SELECT_COLOR":
      return {...state, color: action.color }
    case "SELECT_STYLE":
      return {...state, style: action.style }
    case "SELECT_LAYOUT":
      return {...state, layout: action.layout }
    case "SELECT_NECKLINE":
      return {...state, neckline: action.neckline }
    case "SELECT_PHOTO":
      return {...state, photo: action.photo }
    case "SELECT_SIZE":
      return {...state, size: action.size }
    case "SELECT_TEXT":
      return {...state, text: action.text }
    case "SELECT_PACKAGE":
      return {...state, package: action.package }
    case "SET_PREVIEW":
      return {...state, preview: action.preview }
    default:
      return state
  }
}

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
