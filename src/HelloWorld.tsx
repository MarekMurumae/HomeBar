import React from "react";

export interface Person {
    name:string;
    age?:number;
}

export const HelloWorld = ({name,age}:Person) => {
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!, {name}
        </h1>
    )
}