
import React from 'react';

export type HelloWorldProps = {
    name: string;
}

/**
 * Hello World
 */
export const HelloWorld: React.FC<HelloWorldProps> = props => {
    return(
    <div>
        <a>Hello {props.name}!</a>
    </div>)
}