import { useContext } from "react"

import { CalculatorContext } from "shared/libs/context";

export const useCalculator = () => {
    const calculatorContext = useContext(CalculatorContext);

    return calculatorContext
}