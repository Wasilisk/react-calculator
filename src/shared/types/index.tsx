export type OperatorType = "add" | "substract" | "equals";

export type CalcInput = { type: "numerical", value: number } | { type: "operator", operator: OperatorType }
