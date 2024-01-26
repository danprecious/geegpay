"use client"

import React, { createContext, useState } from "react";

export const StateContext = React.createContext();


export const ContextProvider = ({children}) => {

    const [titleState, setTitleState] = useState(false)


    return(
        <StateContext.Provider value={{titleState, setTitleState}}>
            {children}
        </StateContext.Provider>
    )

}



