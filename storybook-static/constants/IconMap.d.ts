import { default as React } from '../../node_modules/react';

export interface IconMap {
    [iconName: string]: React.FC<{
        size?: number;
        color?: string;
    }>;
}
export declare const IconMap: IconMap;
