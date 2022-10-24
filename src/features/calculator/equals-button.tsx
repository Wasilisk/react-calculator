import { useEffect } from "react";

import { Button } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks";

export const EqualsButton = () => {
    const { setValue, addListener, handleEquals } = useCalculator()

    useEffect(() => {
        addListener("equals", (value) => setValue(value));
    }, []);

    return (
        <Button
            buttonType="operation"
            position={[3, 4]}
            height={2}
            onClick={handleEquals}
        >
            =
        </Button>
    )
}