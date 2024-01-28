import React from 'react';
import Image, { StaticImageData } from "next/image"
import chara1_smile from '/public/chara/chara1-smile.png';

// キャラの配列を受け取る
export interface chaProps {
    charas: StaticImageData[];
}

// 受け取ったキャラの配列を左から順に表示する
const Characom: React.FC<chaProps> = (props) => {
// export function Characom() {

    if (props.charas.length == 1) {
        return (
            <div>
                <Image className="overlay-image" src={props.charas[0]} alt="Description of the image" />
            </div>
        );
    }
    else if (props.charas.length == 2) {
        return (
            <div>
                <Image className="overlay-image-L" src={props.charas[0]} alt="Description of the image" />
                <Image className="overlay-image-R" src={props.charas[1]} alt="Description of the image" />
            </div>
        );
    }
    else if (props.charas.length == 3) {
        return (
            <div>
                <Image className="overlay-image-3L" src={props.charas[0]} alt="Description of the image" />
                <Image className="overlay-image-3M" src={props.charas[1]} alt="Description of the image" />
                <Image className="overlay-image-3R" src={props.charas[2]} alt="Description of the image" />
            </div>
        );
    }
    else{
        
    }

};

export default Characom;
