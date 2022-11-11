type RandomNumberType={
    value:number
}

type PositiveNumber=RandomNumberType & {
    isPositive:true
    isNegative?:never
    isZero?:never
}

type NegativeNumber=RandomNumberType & {
    isNegative:true
    isPositive?:never
    isZero?:never
}

type Zero=RandomNumberType & {
    isZero:true
    isNegative?:never
    isPositive?:never
}

type RandomNumberProps=PositiveNumber | NegativeNumber | Zero;

function RandomNumber({value,isPositive,isNegative,isZero}:RandomNumberProps) {
    return (
        <div>
            {value} { isPositive && "positive" } { isNegative && "negative" } {" "}
            { isZero && "zero" } 
        </div>
    );
}

export default RandomNumber;