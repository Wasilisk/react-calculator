import React, { ReactNode, useState } from "react"

import { CalcInput } from "shared/types";

import { CalculatorContextType, CalculatorProviderProps } from "./types";

export const CalculatorContext = React.createContext({} as CalculatorContextType)

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [inputs, setInputs] = useState([] as Array<CalcInput>);
  const [displayValue, setDisplayValue] = useState(0)

  return (
    <CalculatorContext.Provider value={{
        inputs,
        setInputs,
        displayValue,
        setDisplayValue
    }}>
    	{ children }
    </CalculatorContext.Provider>
  )
}