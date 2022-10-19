import { useEffect, useState } from "react"
import { CalcInput, Calculator, OperatorType } from "./calculator";

export const useCalculator = () => {
    const calculator = new Calculator();

    const [inputs, setInputs] = useState<Array<CalcInput>>([]);
    const [displayedValue, setDisplayedValue] = useState<number>(0)

    useEffect(() => {
        setDisplayedValue(calculator.getState(inputs).displayValue)
    }, [inputs])

    const appendInput = (input: CalcInput) => {
        setInputs((previousValues) => [...previousValues, input]);
    }

    const handleAllClear = () => setInputs([]);

    const handleDelete = () => setInputs((previousValues) => previousValues.slice(0, -1))

    const handleNumerical = (value: number) => () => {
        appendInput({ type: "numerical", value });
    }

    const handleOperator = (operator: OperatorType) => () => {
        appendInput({ type: "operator", operator })
    }

    return {
        displayedValue,
        handleAllClear,
        handleDelete,
        handleNumerical,
        handleOperator
    }
}