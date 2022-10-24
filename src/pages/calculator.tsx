import {
    AddNumber,
    AddNumerical,
    ClearAll,
    DisplayValue,
    EqualsButton,
    SubstractNumber,
    UndoOperator
} from "features/calculator/"

import { Container } from "entities/calculator"

export const CalculatorPage = () => {
    return (
        <Container>
            <DisplayValue />
            <AddNumerical position={[2, 2]} number={9} />
            <AddNumerical position={[1, 2]} number={8} />
            <AddNumerical position={[0, 2]} number={7} />
            <AddNumerical position={[2, 3]} number={6} />
            <AddNumerical position={[1, 3]} number={5} />
            <AddNumerical position={[0, 3]} number={4} />
            <AddNumerical position={[2, 4]} number={3} />
            <AddNumerical position={[1, 4]} number={2} />
            <AddNumerical position={[0, 4]} number={1} />
            <AddNumerical position={[0, 5]} width={3} number={0} />
            <ClearAll />
            <UndoOperator />
            <SubstractNumber />
            <AddNumber />
            <EqualsButton />
        </Container>
    )
}