import * as React from 'react';

export interface StyleContext {
    shades: {
        text: string;
        border: string;
        separation: string;
    };
    colors: {
        background: string;
        highlight: string;
    }
}

//https://www.schemecolor.com/blue-white-grey-and-black.php

export const defaultStyles: StyleContext = {
    shades: {
        text: '##1C1C1C',
        border: '#808080',
        separation: '##808080'
    },
    colors: {
        background: '#F1F1F1',
        highlight: '#3466AA'
    }
}

export const styleContext = React.createContext(defaultStyles) 