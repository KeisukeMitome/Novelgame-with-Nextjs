import React from 'react';
import Image, { StaticImageData } from "next/image"
import crst from '../styles/charaStyle.module.css'; // CSS ファイルをインポート

// キャラの配列を受け取る
export interface chaProps {
    charas: StaticImageData[];
    talking: number;
}

// 受け取ったキャラの配列を左から順に表示する
const Characom: React.FC<chaProps> = (props) => {
    // export function Characom() {

    if (props.charas.length == 1) {
        return (
            <div>
                <Image className={crst.overlay_image} src={props.charas[0]} alt="Description of the image" />
            </div>
        );

    }
    else if (props.charas.length == 2) {
        return (
            <div>
                <Image className={crst.overlay_image_L} src={props.charas[0]} alt="Description of the image" />
                <Image className={crst.overlay_image_R} src={props.charas[1]} alt="Description of the image" />
            </div>
        );
    }
    else if (props.charas.length == 3) {
        return (
            <div>
                <Image className={crst.overlay_image_3L} src={props.charas[0]} alt="Description of the image" />
                <Image className={crst.overlay_image_3M} src={props.charas[1]} alt="Description of the image" />
                <Image className={crst.overlay_image_3R} src={props.charas[2]} alt="Description of the image" />
            </div>
        );
    }
    else {

    }

};

export default Characom;
