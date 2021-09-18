
import React from 'react';

export type MyButtonProps = {
    text: string;
}

/**
 * My Button
 */
export const MyButton: React.FC<MyButtonProps> = props => {
    return(<button type="button">Click Me! {props.text}</button>)
}