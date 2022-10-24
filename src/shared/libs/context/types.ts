import { Dispatch, ReactNode } from "react"

import { Calculator } from "entities/calculator"
import { Events } from "entities/calculator/model/types"

export type CalculatorContextType = {
    value: number,
    setValue: Dispatch<React.SetStateAction<number>>,
    addListener: (event: Events, callback: (value: number) => void) => void,
    handleNumerical: (value: number) => Calculator,
    handleAdd: () => Calculator,
    handleSubstract: () => Calculator,
    handleEquals: () => Calculator,
    handleClearAll: () => Calculator,
    handleUndo: () => Calculator
}

export type CalculatorProviderProps = {
    children: ReactNode
}