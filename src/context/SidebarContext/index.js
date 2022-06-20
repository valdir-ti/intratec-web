import { createContext, useReducer } from 'react'

import sidebarReducer from '../SidebarReducer'

const initialState = {
    open: true
}

export const SidebarContext = createContext(initialState)

export const SidebarProvider = ({ children }) => {

    const [state, dispatch] = useReducer(sidebarReducer, initialState)

    return (
        <SidebarContext.Provider value={{ state, dispatch }}>
            {children}
        </SidebarContext.Provider>
    )
}
