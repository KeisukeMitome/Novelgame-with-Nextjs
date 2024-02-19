import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export interface optionProps {
    fontSize: number;
    // フォントサイズのセッター
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setShowOption: React.Dispatch<React.SetStateAction<boolean>>;
}

const Optioncom: React.FC<optionProps> = (props) => {

    const close_clicked = () => {

        // jsonに書き出したい
        const jsonOptioinData = {
            fontSize: props.fontSize
        };

        // JSON オブジェクトを文字列に変換
        const jsonString = JSON.stringify(jsonOptioinData);
        // ローカルストレージに保存
        localStorage.setItem('optionData', jsonString);
    }

    

    return <div className='load'>
        <div className="confirmation_modal">
            <p>オプション</p>
            <label>文字の大きさ　</label>
            <label style={{ fontSize: `1.4vw` }}>小</label>
            <input
                type="range"
                min="14"
                max="22"
                value={props.fontSize}
                onChange={props.handleChange}
            />
            <label style={{ fontSize: `2.2vw` }}>大</label>
            <br />
            <p style={{ fontSize: `${props.fontSize * 0.1}vw` }}>文字の大きさサンプル</p>
            <div className='menu_button' onClick={() => {props.setShowOption(false), close_clicked()}}>閉じる</div>
        </div>
    </div>

};

export default Optioncom;