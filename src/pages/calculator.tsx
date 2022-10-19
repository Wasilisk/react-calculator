import { Button, Container, Display, useCalculator } from "entities/calculator";

export const CalculatorPage = () => {
    const { displayValue, handleAllClear, handleUndo, handleNumerical, handleOperator } = useCalculator();

    return (
        <Container>
            <Display>{displayValue}</Display>
            <Button buttonType="operation" position={[0, 1]} width={2} onClick={handleAllClear}>AC</Button>
            <Button buttonType="operation" position={[2, 1]} width={2} onClick={handleUndo}>Undo</Button>
            <Button buttonType="operation" position={[3, 2]} onClick={handleOperator("substract")}>-</Button>
            <Button buttonType="operation" position={[3, 3]} onClick={handleOperator("add")}>+</Button>
            <Button buttonType="operation" position={[3, 4]} height={2} onClick={handleOperator("equals")}>=</Button>
            <Button position={[2, 2]} onClick={handleNumerical(9)}>9</Button>
            <Button position={[1, 2]} onClick={handleNumerical(8)}>8</Button>
            <Button position={[0, 2]} onClick={handleNumerical(7)}>7</Button>
            <Button position={[2, 3]} onClick={handleNumerical(6)}>6</Button>
            <Button position={[1, 3]} onClick={handleNumerical(5)}>5</Button>
            <Button position={[0, 3]} onClick={handleNumerical(4)}>4</Button>
            <Button position={[2, 4]} onClick={handleNumerical(3)}>3</Button>
            <Button position={[1, 4]} onClick={handleNumerical(2)}>2</Button>
            <Button position={[0, 4]} onClick={handleNumerical(1)}>1</Button>
            <Button position={[0, 5]} width={3} onClick={handleNumerical(0)}>0</Button>
        </Container>
    )
}