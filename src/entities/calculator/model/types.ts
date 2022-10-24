import { CalcInput, OperatorType } from "shared/types"

export type CalcState = {
    inputs: CalcInput[]
}

export type Operation = {
    operator: OperatorType,
    value: number
}

export type OperationsBuilder = {
    operations: Operation[],
    working: Operation;
}

export type Events = OperatorType | "clear" | "undo" | "number";

export type SubscriptionsType = Record<Events, Array<SubscriptionCallback>>

export type SubscriptionCallback = (value: number) => void