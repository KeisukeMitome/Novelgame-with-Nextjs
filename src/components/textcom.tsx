import React from 'react';
import Image, { StaticImageData } from "next/image"
import chara1_smile from '/public/chara/chara1-smile.png';

// 表示するテキストを受け取る
export interface textProps {
    tex: string;
}

// 受け取ったキャラの配列を左から順に表示する
const Textcom: React.FC<textProps> = (props) => {
// export function Characom() {

    if (props.tex) {
        return (
            props.tex
        );
    }
    else{
        
    }

};

export default Textcom;
