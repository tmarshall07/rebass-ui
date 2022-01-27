/// <reference types="react" />
import { BoxProps } from 'rebass';
export declare type CardProps = BoxProps & {
    boxShadow?: 'small' | 'large';
};
declare const Card: (props: CardProps) => JSX.Element;
export default Card;
