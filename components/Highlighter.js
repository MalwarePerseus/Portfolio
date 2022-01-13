import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export const Highlighter = ({color, children}) => {
    const animationDuration = Math.floor(30 * children.length)
    
    return(
        <RoughNotation
            type='highlight'
            color={color}
            multiline={true}
            padding={[0,2]}
            iterations={1}
            animationDuration={animationDuration}
        >
            {children}
        </RoughNotation>
    );
};