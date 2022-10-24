export type ButtonType = "number" | "operation"

export type ButtonProps = {
    buttonType?: ButtonType,
    position?: [x: number, y: number],
    width?: number,
    height?: number,
}