import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Manager from "../components/manager";

// キャラの配列を受け取る
export interface loadProps {
    saveData: Manager[];
    // ロード一覧の表示・非表示のセッター
    setShowLoad: React.Dispatch<React.SetStateAction<boolean>>;
    // myManagerのセッター
    Load: React.Dispatch<React.SetStateAction<Manager>>;
}

// 受け取ったキャラの配列を左から順に表示する
const Characom: React.FC<loadProps> = (props) => {

    const [loaded, setLoaded] = useState(false); // ロードしました。

    const loadCliked = (choiceIndex: number) => {

        if (props.saveData[choiceIndex].getMyName() != "") {

            const newCopyManagerInstance = new Manager(props.saveData[choiceIndex].getMyName());
            newCopyManagerInstance.copyInstance(props.saveData[choiceIndex].getLevel(), props.saveData[choiceIndex].getLevelPlus(), props.saveData[choiceIndex].getDialogues());
            props.Load(newCopyManagerInstance);

            // props.setShowLoad(false);
            setLoaded(true); // ロードしましたを表示

        }
    };

    return <div className='load'>
        <div className="confirmation_modal">

            {loaded && (
                <p>ロードしました</p>
            )}

            {!loaded && (
                <div>
                    <p>ろーど</p>

                    <div className="file_button" onClick={() => loadCliked(0)} >
                        <div className="slot_number">1{props.saveData[0].getMyName() !== "" ? '. ' + props.saveData[0].getMyName() : ''}</div>
                        <div className="savedDate">{props.saveData[0].getMyName() !== "" ? props.saveData[0].getSavedDate() : ''}</div>
                        <div className="progress_number">進行度: {props.saveData[0].getLevel()}</div>
                        <div className="pre_text">{props.saveData[0] && props.saveData[0].getMyName() !== "" ? props.saveData[0].getName() + props.saveData[0].getText() : '空のスロット'}</div>
                    </div>

                    <div className="file_button" onClick={() => loadCliked(1)} >
                        <div className="slot_number">2{props.saveData[1].getMyName() !== "" ? '. ' + props.saveData[1].getMyName() : ''}</div>
                        <div className="savedDate">{props.saveData[1].getMyName() !== "" ? props.saveData[1].getSavedDate() : ''}</div>
                        <div className="progress_number">進行度: {props.saveData[1].getLevel()}</div>
                        <div className="pre_text">{props.saveData[1] && props.saveData[1].getMyName() !== "" ? props.saveData[1].getName() + props.saveData[1].getText() : '空のスロット'}</div>
                    </div>

                    <div className="file_button" onClick={() => loadCliked(2)} >
                        <div className="slot_number">3{props.saveData[2].getMyName() !== "" ? '. ' + props.saveData[2].getMyName() : ''}</div>
                        <div className="savedDate">{props.saveData[2].getMyName() !== "" ? props.saveData[2].getSavedDate() : ''}</div>
                        <div className="progress_number">進行度: {props.saveData[2].getLevel()}</div>
                        <div className="pre_text">{props.saveData[2] && props.saveData[2].getMyName() !== "" ? props.saveData[2].getName() + props.saveData[2].getText() : '空のスロット'}</div>
                    </div>
                </div>
            )}


            <div className='menu_button' onClick={() => props.setShowLoad(false)}>とじる</div>
        </div>
    </div>


};

export default Characom;
