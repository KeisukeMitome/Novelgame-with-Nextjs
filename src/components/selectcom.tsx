import React, { SetStateAction } from 'react';


// 表示するテキストを受け取る
export interface selectProps {
    texts: string[];
    setChoiceInd: React.Dispatch<React.SetStateAction<number>>; // 選択肢をGamePageに返すためのセッター
}

// 受け取ったキャラの配列を左から順に表示する
const Selectcom: React.FC<selectProps> = (props) => {

    const selectionClicked = (choiceIndex: number) => {
        console.log(`Choice ${choiceIndex} clicked!`);
        // ここでクリックされた選択肢に対する処理を追加する
        props.setChoiceInd(choiceIndex);
    };

    // 選択肢が2つの場合
    if (props.texts.length == 2) {
        return (
            <div className='choices-container'>
                <p onClick={() => selectionClicked(0)} className='choice-container'>{props.texts[0]}</p>
                <p onClick={() => selectionClicked(1)} className='choice-container'>{props.texts[1]}</p>
            </div>
        );
    }
    // 選択肢が3つの場合
    else if (props.texts.length == 3) {
        return (
            <div className='choices-container'>
                <p onClick={() => selectionClicked(0)} className='choice-container'>{props.texts[0]}</p>
                <p onClick={() => selectionClicked(1)} className='choice-container'>{props.texts[1]}</p>
                <p onClick={() => selectionClicked(2)} className='choice-container'>{props.texts[2]}</p>
            </div>
        );
    }
    else {
        console.log("選択肢なし！");
    }

};

export default Selectcom;
