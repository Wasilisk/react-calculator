import { useContext, useEffect } from "react"

import { CalculatorContext } from "shared/libs/context";

import { CalcInput, OperatorType } from "shared/types";

import { Calculator } from "./calculator";

export const useCalculator = () => {
    const {inputs, setInputs, displayValue, setDisplayValue} = useContext(CalculatorContext);

    useEffect(() => {
        setDisplayValue(Calculator.getState(inputs).displayValue)
    }, [inputs])

    const appendInput = (input: CalcInput) => {
        setInputs((previousValues) => [...previousValues, input]);
    }

    const handleAllClear = () => {
        setInputs([]);
    }

    const handleUndo = () => {
        setInputs((previousValues) => previousValues.slice(0, -1))
    }

    const handleNumerical = (value: number) => () => {
        appendInput({ type: "numerical", value });
    }

    const handleOperator = (operator: OperatorType) => () => {
        appendInput({ type: "operator", operator })
    }

    return {
        displayValue,
        handleAllClear,
        handleUndo,
        handleNumerical,
        handleOperator
    }
}