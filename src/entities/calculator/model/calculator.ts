import { CalcInput } from "shared/types";

import { CalcState, Events, Operation, OperationsBuilder, SubscriptionCallback } from "./types";

export class Calculator {
    state: CalcState = {
        inputs: []
    }

    subscriptions: any = {};

    public get value() {
        const value = this.getState();
        return value;
    }

    listen(event: Events, callback: (value: number) => void) {
        if (this.subscriptions[event]) {
            this.subscriptions[event] = [...this.subscriptions[event], callback];
        } else {
            this.subscriptions[event] = [callback];
        }

        const unlisnten = () =>
            this.subscriptions[event].filter((lcallback: SubscriptionCallback) => lcallback !== callback);

        return unlisnten;
    }

    add() {
        this.state.inputs = [...this.state.inputs, { type: "operator", operator: "add" }];

        this.subscriptions["add"]?.forEach((callback: SubscriptionCallback) => callback(this.value));

        return this;
    }

    substract() {
        this.state.inputs = [...this.state.inputs, { type: "operator", operator: "substract" }];
        
        this.subscriptions["substract"]?.forEach((callback: SubscriptionCallback) => callback(this.value));

        return this;
    }

    number(value: number) {
        this.state.inputs = [...this.state.inputs, { type: "numerical", value }];

        this.subscriptions["number"]?.forEach((callback:any) => callback(this.value));

        return this;
    }

    equals() {
        this.state.inputs = [...this.state.inputs, { type: "operator", operator: "equals" }];

        this.subscriptions["equals"]?.forEach((callback: SubscriptionCallback) => callback(this.value));

        return this;
    }

    clearAll() {
        this.state.inputs = [];

        this.subscriptions["clear"]?.forEach((callback:SubscriptionCallback) => callback(this.value));

        return this;
    }

    undo() {
        this.state.inputs = this.state.inputs.slice(0, -1);

        this.subscriptions["undo"]?.forEach((callback: SubscriptionCallback) => callback(this.value));

        return this;
    }

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

    private getState(): number {
        const inputs = this.state.inputs
        const { operations, working } = this.getOperationsBuilder(inputs);
        const lastOperation = operations.length
            ? operations[operations.length - 1]
            : null;
        const lastInput = inputs.length ? inputs[inputs.length - 1] : null;
        const total = this.getTotal(operations);

        if (!lastOperation) return working.value

        if (lastOperation.operator === "equals") {
            return total
        } else {
            return lastInput && lastInput.type === "numerical"
                ? working.value
                : total
        }
    }
}