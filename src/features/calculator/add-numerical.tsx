import { useEffect } from "react";

import { Button, ButtonProps } from "entities/calculator"

import { useCalculator } from "shared/libs/hooks";

type AddNumericalProps = Omit<ButtonProps, "buttonType"> & {
    number: number
}

export const AddNumerical = ({ number, ...props }: AddNumericalProps) => {
    const { setValue, addListener, handleNumerical } = useCalculator()

    useEffect(() => {
        addListener("number", (value) => setValue(value));
    }, []);

    const handleClick = () => handleNumerical(number);

    return (
        <Button
            buttonType="number"
            onClick={handleClick}
            {...props}
        >
            {number}
        </Button>
    )
}