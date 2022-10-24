import { useEffect } from "react";

import { Button } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks";

export const ClearAll = () => {
    const { setValue, addListener, handleClearAll } = useCalculator()

    useEffect(() => {
        addListener("clear", (value) => setValue(value));
    }, []);

    return (
        <Button
            buttonType="operation"
            position={[0, 1]}
            width={2}
            onClick={handleClearAll}
        >
            Cleal All
        </Button>
    )
}