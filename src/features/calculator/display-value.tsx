import { Display } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks"

export const DisplayValue = () => {
    const {value} = useCalculator()

    return (
        <Display>{value}</Display>
    )
}