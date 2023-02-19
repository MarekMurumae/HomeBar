import React from "react";

export interface Person {
    name:string;
    age?:number;
}

export const HelloWorld = ({name,age}:Person) => {
    return (
        <p>Hello {name}</p>
    )
}