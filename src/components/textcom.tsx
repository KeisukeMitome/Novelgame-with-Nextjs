import React from 'react';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from "next/image"
import chara1_smile from '/public/chara/chara1-smile.png';

// 表示するテキストを受け取る
export interface textProps {
    text: string;
    isSelect: boolean;
    textSpeed: number;
}

// 受け取ったキャラの配列を左から順に表示する
const Textcom: React.FC<textProps> = (props) => {

    const [displayedText, setDisplayedText] = useState('');
    let currentIndex = 0;

    useEffect(() => {
        currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(props.text.substring(0, currentIndex));
            currentIndex++;
            if (currentIndex > props.text.length) {
                clearInterval(intervalId);
            }
        }, props.textSpeed); // ミリ秒単位で表示速度を調整
        return () => clearInterval(intervalId);
    }, [props.text, props.textSpeed]);

    if (!props.isSelect && currentIndex < props.text.length) {
        return <div>
            {displayedText}
        </div>
    }
    else {
        return <div>
            {props.text}
        </div>
    }


};

export default Textcom;
