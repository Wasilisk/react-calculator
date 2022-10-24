import { useEffect } from "react";

import { Button } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks";

export const SubstractNumber = () => {
    const { setValue, addListener, handleSubstract } = useCalculator()

    useEffect(() => {
        addListener("substract", (value) => setValue(value));
    }, []);

    return (
        <Button
            buttonType="operation"
            position={[3, 2]}
            onClick={handleSubstract}
        >
            -
        </Button>
    )
}