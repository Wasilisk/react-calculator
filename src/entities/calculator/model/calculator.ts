export type OperatorType = "add" | "substract" | "equals";

export type CalcInput = { type: "numerical", value: number } | { type: "operator", operator: OperatorType }

export type CalcState = {
    displayValue: number
}

export type Operation = {
    operator: OperatorType,
    value: number
}

type OperationsBuilder = {
    operations: Operation[],
    working: Operation;
}

export class Calculator {

    private getOperationsBuilder(inputs: Array<CalcInput>): OperationsBuilder {
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

    private getTotal(operations: Array<Operation>) {
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

    getState(inputs: Array<CalcInput>): CalcState {
        const { operations, working } = this.getOperationsBuilder(inputs);
        const lastOperation = operations.length
            ? operations[operations.length - 1]
            : null;
        const lastInput = inputs.length ? inputs[inputs.length - 1] : null;
        const total = this.getTotal(operations);

        if (!lastOperation) return { displayValue: 0 }

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