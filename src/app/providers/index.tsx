import compose from "compose-function";

import { withCalculator } from "./with-calculator";

export const withProviders = compose(withCalculator);