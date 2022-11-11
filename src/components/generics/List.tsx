import { Children } from "react";


type ListProps<T>={
  items: T[],
  onClick: (value: T) => void,
}

function List<T extends {id:number}>({items,onClick}:ListProps<T>){
    return (
        <div>
            <h2>List of items</h2>
            { Children.toArray(items.map((item)=><div onClick={()=>onClick(item)}>{`${item.id}`}</div>)) }
        </div>
    );
}

export default List;