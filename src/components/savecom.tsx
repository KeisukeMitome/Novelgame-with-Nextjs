import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Manager from "../components/manager";

// キャラの配列を受け取る
export interface saveProps {
    saveData: Manager[];
    // myManager
    mymanager: Manager;
    // saveDataのセッター(setSaveData)
    Save: React.Dispatch<React.SetStateAction<Manager[]>>;
    // セーブ一覧の表示・非表示のセッター
    setShowSave: React.Dispatch<React.SetStateAction<boolean>>;
}


// 受け取ったキャラの配列を左から順に表示する
const Characom: React.FC<saveProps> = (props) => {

    const saveCliked = (choiceIndex: number) => {

        props.saveData[choiceIndex] = new Manager(props.mymanager.getMyName());
        props.saveData[choiceIndex].copyInstance(props.mymanager.getLevel(), props.mymanager.getLevelPlus(), props.mymanager.getDialogues());
        props.Save(props.saveData);

        props.saveData[choiceIndex].setSavedDate(new Date());
        // props.setShowSave(false);
    };

    useEffect(() => {
        // props.Save(props.saveData);
        console.log("セーブ");
    }, [props.saveData]);


    return <div className='load'>
        <div className="confirmation_modal">
            <p>せーぶ</p>


            <button onClick={() => saveCliked(0)} >1. {props.saveData[0] && props.saveData[0].getText() !== null ? props.saveData[0].getText() : '空のスロット1'}</button>
            <p className='savedDate'>{props.saveData[0].getSavedDate()}</p>
            <button onClick={() => saveCliked(1)} >2. {props.saveData[1] && props.saveData[1].getText() !== null ? props.saveData[1].getText() : '空のスロット2'}</button>
            <p className='savedDate'>{props.saveData[1].getSavedDate()}</p>
            <button onClick={() => saveCliked(2)} >3. {props.saveData[2] && props.saveData[2].getText() !== null ? props.saveData[2].getText() : '空のスロット3'}</button>
            <p className='savedDate'>{props.saveData[2].getSavedDate()}</p>

            <button className='menu_button' onClick={() => props.setShowSave(false)}>とじる</button>
        </div>
    </div>


};

export default Characom;
