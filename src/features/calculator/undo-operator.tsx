import { useEffect } from "react";

import { Button } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks";

export const UndoOperator = () => {
    const { setValue, addListener, handleUndo } = useCalculator()

    useEffect(() => {
        addListener("undo", (value) => setValue(value));
    }, []);

    return (
        <Button
            buttonType="operation"
            position={[2, 1]}
            width={2}
            onClick={handleUndo}
        >
            Undo
        </Button>
    )
}