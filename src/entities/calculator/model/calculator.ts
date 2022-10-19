import { CalcInput } from "shared/types";

import { CalcState, Operation, OperationsBuilder } from "./types";

export class Calculator {
    private static getOperationsBuilder(inputs: Array<CalcInput>): OperationsBuilder {
        return inputs.reduce<OperationsBuilder>(
            (builder, input) => {
                switch (input.type) {
                    case "numerical": {
                        const prevValue = builder.working?.value || 0;
                        const newValue = prevValue * 10 + input.value;

                        return {
                            ...builder,
                            working: { ...builder.working, value: newValue }
                        }
                    };

                    case "operator": {
                        if (input.operator === "equals") {
                            return {
                                operations: [
                                    ...builder.operations,
                                    builder.working,
                                    { operator: "equals", value: 0 },
                                ],
                                working: { operator: "add", value: 0 }
                            };
                        } else {
                            return {
                                operations: [...builder.operations, builder.working],
                                working: { operator: input.operator, value: 0 }
                            }
                        }
                    }
                }
            },
            {
                operations: [],
                working: { operator: "add", value: 0 }
            }
        );
    }

    private static getTotal(operations: Array<Operation>) {
        return operations.reduce<number>((sum, operation) => {
            switch (operation.operator) {
                case "add": {
                    return sum + operation.value;
                };
                case "substract": {
                    return sum - operation.value;
                }
                case "equals": {
                    return sum
                }
            }
        }, 0)
    }

    static getState(inputs: Array<CalcInput>): CalcState {
        const { operations, working } = this.getOperationsBuilder(inputs);
        const lastOperation = operations.length
            ? operations[operations.length - 1]
            : null;
        const lastInput = inputs.length ? inputs[inputs.length - 1] : null;
        const total = this.getTotal(operations);

        if (!lastOperation) return { displayValue: working.value }

        if (lastOperation.operator === "equals") {
            return { displayValue: total }
        } else {
            return {
                displayValue: lastInput && lastInput.type === "numerical"
                    ? working.value
                    : total
            }
        }
    }
}