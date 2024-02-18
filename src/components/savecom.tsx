import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Manager from "../components/manager";
import Dialogue from './dialogue';

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

    const [saved, setSaved] = useState(false); // セーブしました。

    const saveCliked = (choiceIndex: number) => {

        props.saveData[choiceIndex] = new Manager(props.mymanager.getMyName());
        props.saveData[choiceIndex].copyInstance(props.mymanager.getLevel(), props.mymanager.getLevelPlus(), props.mymanager.getDialogues());
        props.Save(props.saveData);

        props.saveData[choiceIndex].setSavedDate(new Date());
        // props.setShowSave(false);

        // 「セーブしました」を表示
        setSaved(true);


        // jsonに書き出したい
        const jsonData = {
            // 保存するデータをここに入力
            Name_0: props.saveData[0].getMyName(),
            Level_0: props.saveData[0].getLevel(),
            LevelPlus_0: props.saveData[0].getLevelPlus(),
            Dialogue_0: props.saveData[0].getDialogues(),
            Date_0: props.saveData[0].getSavedDate(),

            Name_1: props.saveData[1].getMyName(),
            Level_1: props.saveData[1].getLevel(),
            LevelPlus_1: props.saveData[1].getLevelPlus(),
            Dialogue_1: props.saveData[1].getDialogues(),
            Date_1: props.saveData[1].getSavedDate(),

            Name_2: props.saveData[2].getMyName(),
            Level_2: props.saveData[2].getLevel(),
            LevelPlus_2: props.saveData[2].getLevelPlus(),
            Dialogue_2: props.saveData[2].getDialogues(),
            Date_2: props.saveData[2].getSavedDate(),
        };

        // JSON オブジェクトを文字列に変換
        const jsonString = JSON.stringify(jsonData);

        // ローカルストレージに保存
        localStorage.setItem('userData', jsonString);
        console.log(jsonString);
        console.log(jsonData.Date_0);


    };

    useEffect(() => {
        // props.Save(props.saveData);
        console.log("セーブ");
    }, [props.saveData]);


    return <div className='load'>
        <div className="confirmation_modal">

            {saved && (
                <p>セーブしました</p>
            )}

            {!saved && (
                <div>
                    <p>せーぶ</p>

                    <div className="file_button" onClick={() => saveCliked(0)} >
                        <div className="slot_number">1{props.saveData[0].getMyName() !== "" ? '. ' + props.saveData[0].getMyName() : ''}</div>
                        <div className="savedDate">{props.saveData[0].getMyName() !== "" ? props.saveData[0].getSavedDate() : ''}</div>
                        <div className="progress_number">進行度: {props.saveData[0].getLevel()}</div>
                        <div className="pre_text">{props.saveData[0] && props.saveData[0].getMyName() !== "" ? props.saveData[0].getName() + props.saveData[0].getText() : '空のスロット'}</div>
                    </div>

                    <div className="file_button" onClick={() => saveCliked(1)} >
                        <div className="slot_number">2{props.saveData[1].getMyName() !== "" ? '. ' + props.saveData[1].getMyName() : ''}</div>
                        <div className="savedDate">{props.saveData[1].getMyName() !== "" ? props.saveData[1].getSavedDate() : ''}</div>
                        <div className="progress_number">進行度: {props.saveData[1].getLevel()}</div>
                        <div className="pre_text">{props.saveData[1] && props.saveData[1].getMyName() !== "" ? props.saveData[1].getName() + props.saveData[1].getText() : '空のスロット'}</div>
                    </div>

                    <div className="file_button" onClick={() => saveCliked(2)} >
                        <div className="slot_number">3{props.saveData[2].getMyName() !== "" ? '. ' + props.saveData[2].getMyName() : ''}</div>
                        <div className="savedDate">{props.saveData[2].getMyName() !== "" ? props.saveData[2].getSavedDate() : ''}</div>
                        <div className="progress_number">進行度: {props.saveData[2].getLevel()}</div>
                        <div className="pre_text">{props.saveData[2] && props.saveData[2].getMyName() !== "" ? props.saveData[2].getName() + props.saveData[2].getText() : '空のスロット'}</div>
                    </div>
                    
                </div>
            )}

            <button className='menu_button' onClick={() => props.setShowSave(false)}>とじる</button>
        </div>
    </div>


};

export default Characom;
