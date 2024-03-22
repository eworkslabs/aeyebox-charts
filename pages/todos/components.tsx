import React, {useState} from "react";

export const Container: React.FC<{ children: React.ReactNode}> = ({ children })  => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
};

export const Form: React.FC<{ onSubmit: (value: string) => void }> = ({ onSubmit}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return(
        <form onSubmit={handleSubmit}></form>
    )
};

export const List: React.FC<{ items: string[] }> = ({ items }) => {
    return (
        <ul className="list">
            {items.map((item, index)=> (
                <ListItem key={index} value={item}  />
            ))}
        </ul>
    );
};

export const ListItem: React.FC<{ value: string }> = ({  value }) =>  {
    return <li className="list-item">{value}</li>
}