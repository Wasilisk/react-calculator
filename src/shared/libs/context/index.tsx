import React, { useState } from "react"

import { Calculator, Events, SubscriptionCallback } from "entities/calculator";

import { CalculatorContextType, CalculatorProviderProps } from "./types";

export const CalculatorContext = React.createContext({} as CalculatorContextType)

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [calculator] = useState(new Calculator())
  const [value, setValue] = useState(calculator.value);
  return (
    <CalculatorContext.Provider value={{
      value,
      setValue,
      addListener: (event: Events, callback: SubscriptionCallback) => calculator.listen(event, callback),
      handleNumerical: (number: number) => calculator.number(number),
      handleAdd: () => calculator.add(),
      handleSubstract: () => calculator.substract(),
      handleEquals: () => calculator.equals(),
      handleClearAll: () => calculator.clearAll(),
      handleUndo: () => calculator.undo()
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}