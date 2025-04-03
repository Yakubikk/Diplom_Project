import {ReactNode} from "react";

export interface LocaleSwitcherTypes {
    absolute?: boolean;
    children: ReactNode;
    defaultValue: string;
    label: string;
}