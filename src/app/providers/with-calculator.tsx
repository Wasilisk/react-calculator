import { ReactNode } from "react";

import { CalculatorProvider } from "shared/libs/context";

export const withCalculator = (component: () => ReactNode) => () => (
    <CalculatorProvider>
        {component()}
    </CalculatorProvider>
)