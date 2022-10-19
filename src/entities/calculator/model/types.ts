import { OperatorType } from "shared/types"

export type CalcState = {
    displayValue: number
}

export type Operation = {
    operator: OperatorType,
    value: number
}

export type OperationsBuilder = {
    operations: Operation[],
    working: Operation;
}