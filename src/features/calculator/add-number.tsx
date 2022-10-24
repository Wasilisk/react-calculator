import { useEffect } from "react";

import { Button } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks";

export const AddNumber = () => {
    const { setValue, addListener, handleAdd } = useCalculator()

    useEffect(() => {
        addListener("add", (value) => setValue(value));
    }, []);
    
    return (
        <Button buttonType="operation" position={[3, 3]} onClick={handleAdd}>+</Button>
    )
}