import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { Highlighter } from './Highlighter';

export default function Header() {
    const colors = ["#f59e0b", "#10b981", "#8a2be2", "#3b82f6"];
    return(
        <div className=''>
            <div>
                <RoughNotationGroup show={true}>
                    <Highlighter color={colors[0]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Developer
                        </h1>
                    </Highlighter>
                    <Highlighter color={colors[1]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Speaker
                        </h1>
                    </Highlighter>
                    <Highlighter color={colors[2]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Hacker
                        </h1>
                    </Highlighter>
                    <Highlighter color={colors[3]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                            Writer
                        </h1>
                    </Highlighter>
                </RoughNotationGroup>
            </div>
        </div>
    )
}