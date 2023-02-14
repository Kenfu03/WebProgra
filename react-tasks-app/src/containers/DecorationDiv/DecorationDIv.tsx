import { randomFillSync } from 'crypto';
import React from 'react'
import "./DecorationDiv.css"

interface DecoTypers {
    width?: number;
    height?: number;
    firstCo: string;
    secondCo?: string; 
    flag?: boolean;
}

export const DecorationDiv = (props: DecoTypers) => {

  return (
    <div className='decorationDiv' style={{ height: props.height, width: props.width, backgroundColor: props.flag ? props.secondCo : props.firstCo }}></div>
  );
};
