/// <reference types="node" />
/// <reference types="prop-types" />
/// <reference types="react" />
/// <reference types="scheduler" />
/**
 * Hello World
 */
export declare const HelloWorld: React.FC<HelloWorldProps>;
/**
 * My Button
 */
export declare const MyButton: React.FC<MyButtonProps>;
export declare type HelloWorldProps = {
	name: string;
};
export declare type MyButtonProps = {
	text: string;
};