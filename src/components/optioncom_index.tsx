import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export interface optionProps {
    setShowOption: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptioncomIndex: React.FC<optionProps> = (props) => {

    const [fontSize, setFontSize] = useState<number>(17); // 初期フォントサイズを設定
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(parseInt(event.target.value, 10)); // スライダーの値でフォントサイズを変更
    };

    useEffect(() => {// ローカルストレージからオプションのデータを取得
        const optionJsonString = localStorage.getItem('optionData');
        if (optionJsonString) {
            // 文字列を JSON オブジェクトに変換
            const optionJson = JSON.parse(optionJsonString);
            setFontSize(parseInt(optionJson.fontSize, 10)); // フォントサイズをセット
        }

    }, []);

    const close_clicked = () => {

        // jsonに書き出したい
        const jsonOptioinData = {
            fontSize: fontSize
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
                value={fontSize}
                onChange={handleChange}
            />
            <label style={{ fontSize: `2.2vw` }}>大</label>
            <br />
            <p style={{ fontSize: `${fontSize * 0.1}vw` }} className='main-text-sample'>文字の大きさサンプル</p>
            <div className='menu_button' onClick={() => { props.setShowOption(false), close_clicked() }}>閉じる</div>
        </div>
    </div>

};

export default OptioncomIndex;