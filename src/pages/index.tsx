import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loadcom from "../components/loadcom";
import Manager from "../components/manager";
import Dialogue from "../components/dialogue";



const Home: React.FC = () => {

  // 管理するクラス 長さは3に指定
  const [saveData, setSaveData] = useState<Manager[]>(new Array(3).fill(null).map(() => new Manager("")));
  const [showLoad, setShowLoad] = useState(false); // ロード画面表示・非表示

  const loadButtonCliked = () => {
    setShowLoad(true);
  };

  // コンポーネントがマウントされた時にローカルストレージからデータを読み込む
  useEffect(() => {
    // ローカルストレージからデータを取得
    const savedJsonString = localStorage.getItem('userData');

    if (savedJsonString) {
      // 文字列を JSON オブジェクトに変換
      const savedData = JSON.parse(savedJsonString);

      var dialogues_0: Dialogue[] = [];
      var dialogues_1: Dialogue[] = [];
      var dialogues_2: Dialogue[] = [];

      // 文字列化されたダイアログをクラスに戻して配列にする（セーブスロット1）
      for (const data of savedData.Dialogue_0) {
        const dialogue = new Dialogue(data.text, data.who, data.characters, data.whoIndex, data.back);
        dialogues_0 = dialogues_0.concat(dialogue);
        // console.log(dialogue.getText());
      }

      // 文字列化されたダイアログをクラスに戻して配列にする（セーブスロット1）
      for (const data of savedData.Dialogue_1) {
        const dialogue = new Dialogue(data.text, data.who, data.characters, data.whoIndex, data.back);
        dialogues_1 = dialogues_1.concat(dialogue);
      }

      // 文字列化されたダイアログをクラスに戻して配列にする（セーブスロット1）
      for (const data of savedData.Dialogue_2) {
        const dialogue = new Dialogue(data.text, data.who, data.characters, data.whoIndex, data.back);
        dialogues_2 = dialogues_2.concat(dialogue);
      }

      saveData[0] = new Manager(savedData.Name_0);
      saveData[0].copyInstance(savedData.Level_0, savedData.LevelPlus_0, dialogues_0);
      saveData[0].setSavedDateString(savedData.Date_0);
      saveData[1] = new Manager(savedData.Name_1);
      saveData[1].copyInstance(savedData.Level_1, savedData.LevelPlus_1, dialogues_1);
      saveData[1].setSavedDateString(savedData.Date_1);
      saveData[2] = new Manager(savedData.Name_2);
      saveData[2].copyInstance(savedData.Level_2, savedData.LevelPlus_2, dialogues_2);
      saveData[2].setSavedDateString(savedData.Date_2);
      setSaveData(saveData);
    }
  }, []); // 一度だけ実行されるため、依存リストに空の配列を渡す




  return (
    <main>

      <div className='overlay-base'>


        <div className='image_back_title'>

          <div className="center-text">


            {showLoad && (
              <div className='load'>
                <div className="confirmation_modal">
                  <p>ろーど</p>

                  {saveData[0].getMyName() !== "" && (
                    <>
                      <Link href={`/game?loadSlot=${encodeURIComponent(0)}`}>
                        <div className="file_button">
                          <div className="slot_number">1{saveData[0].getMyName() !== "" ? '. ' + saveData[0].getMyName() : ''}</div>
                          <div className="savedDate">{saveData[0].getMyName() !== "" ? saveData[0].getSavedDate() : ''}</div>
                          <div className="progress_number">進行度: {saveData[0].getLevel()}</div>
                          <div className="pre_text">{saveData[0] && saveData[0].getMyName() !== "" ? saveData[0].getName() + saveData[0].getText() : '空のスロット'}</div>
                        </div>
                      </Link>
                    </>
                  )}

                  {saveData[1].getMyName() !== "" && (
                    <>
                      <Link href={`/game?loadSlot=${encodeURIComponent(1)}`}>
                        <div className="file_button">
                          <div className="slot_number">2{saveData[1].getMyName() !== "" ? '. ' + saveData[1].getMyName() : ''}</div>
                          <div className="savedDate">{saveData[1].getMyName() !== "" ? saveData[1].getSavedDate() : ''}</div>
                          <div className="progress_number">進行度: {saveData[1].getLevel()}</div>
                          <div className="pre_text">{saveData[1] && saveData[1].getMyName() !== "" ? saveData[1].getName() + saveData[1].getText() : '空のスロット'}</div>
                        </div>
                      </Link>
                    </>
                  )}

                  {saveData[2].getMyName() !== "" && (
                    <>
                      <Link href={`/game?loadSlot=${encodeURIComponent(2)}`}>
                        <div className="file_button">
                          <div className="slot_number">3{saveData[2].getMyName() !== "" ? '. ' + saveData[2].getMyName() : ''}</div>
                          <div className="savedDate">{saveData[2].getMyName() !== "" ? saveData[2].getSavedDate() : ''}</div>
                          <div className="progress_number">進行度: {saveData[2].getLevel()}</div>
                          <div className="pre_text">{saveData[2] && saveData[2].getMyName() !== "" ? saveData[2].getName() + saveData[2].getText() : '空のスロット'}</div>
                        </div>
                      </Link>
                    </>
                  )}

                  <button className='menu_button' onClick={() => setShowLoad(false)}>とじる</button>
                </div>
              </div>
            )}

            {/* <Link className='menu_button' href="/file_select">つづける</Link> */}
            <button className='menu_button' onClick={() => loadButtonCliked()}>つづける</button>
            <button className='menu_button' onClick={() => window.location.href = "/new_game"}>にゅうげーむ</button>
            <button className='menu_button' onClick={() => window.location.href = "/gallery"}>ぎゃらりー</button>
            <button className='menu_button' onClick={() => window.location.href = "/option"}>おぷしょん</button>
          </div>

        </div>



      </div>


    </main>
  );
}

export default Home;
