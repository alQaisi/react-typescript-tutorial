type ButtonProps= Omit<React.ComponentProps<"button">,"children">& {
    variant:"primary" | "secondary",
    children:string
} 

function CustomButton({variant,children,...rest}:ButtonProps) {
    return (
        <button {...rest} className={`class-with-${variant}`}>
            {children}
        </button>
    );
}

export default CustomButton;