import { ReactNode } from "react"

import { CalcInput } from "shared/types"

export type CalculatorContextType = {
    inputs: Array<CalcInput>,
    setInputs: React.Dispatch<React.SetStateAction<Array<CalcInput>>>,
    displayValue: number,
    setDisplayValue: React.Dispatch<React.SetStateAction<number>>,
}

export type CalculatorProviderProps = {
    children: ReactNode
}