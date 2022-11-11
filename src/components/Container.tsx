type ContainerProps={
    styles?:React.CSSProperties,
}

function Container(props:ContainerProps) {
    return (
        <div style={props.styles}>
            Text content
        </div>
    );
}

export default Container;