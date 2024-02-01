import React from 'react';
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

    const loadCliked = (choiceIndex: number) => {

        const newCopyManagerInstance = new Manager(props.saveData[choiceIndex].getMyName());
        newCopyManagerInstance.copyInstance(props.saveData[choiceIndex].getLevel(), props.saveData[choiceIndex].getLevelPlus(), props.saveData[choiceIndex].getDialogues());
        props.Load(newCopyManagerInstance);

        props.setShowLoad(false);
        
    };

    return <div className='load'>
        <div className="confirmation_modal">
            <p>ろーど</p>

            {/* {props.managers.map((item, index) => (
                // マップ関数内で各要素の描画
                <div key={index}>
                    <button>{item.getText()}</button>
                </div>
            ))} */}

            <button onClick={()=>loadCliked(0)} >1. {props.saveData[0] && props.saveData[0].getText() !== null ? props.saveData[0].getText() : '空のスロット1'}</button>
            <p>{props.saveData[0].getSavedDate()}</p>
            <button onClick={()=>loadCliked(1)} >2. {props.saveData[1] && props.saveData[1].getText() !== null ? props.saveData[1].getText() : '空のスロット2'}</button>
            <p>{props.saveData[1].getSavedDate()}</p>
            <button onClick={()=>loadCliked(2)} >3. {props.saveData[2] && props.saveData[2].getText() !== null ? props.saveData[2].getText() : '空のスロット3'}</button>
            <p>{props.saveData[2].getSavedDate()}</p>

            <button className='menu_button' onClick={() => props.setShowLoad(false)}>とじる</button>
        </div>
    </div>


};

export default Characom;
