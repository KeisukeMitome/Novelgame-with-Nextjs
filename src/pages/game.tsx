// pages/game.tsx
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from "next/image"
import emp from '/public/emp.png';

import Characom from "../components/characom";
import Textcom from "../components/textcom";
import Selectcom from "../components/selectcom";
import Loadcom from "../components/loadcom";
import Savecom from "../components/savecom";

import Manager from "../components/manager";



const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSelection, setShowSelection] = useState(false); // 選択肢表示・非表示
  const [showText, setShowText] = useState(true); // テキスト表示・非表示
  const [showName, setShowName] = useState(true); // 名前表示・非表示
  const [showLoad, setShowLoad] = useState(false); // ロード画面表示・非表示
  const [showSave, setShowSave] = useState(false); // セーブ画面表示・非表示

  const [choiceInd, setChoiceInd] = useState(-1); // 選択されたインデックス

  // 管理するクラス
  const [myManager, setMyManager] = useState(new Manager(String(name))); 
  // 管理するクラス 長さは3に指定
  const [saveData, setSaveData] = useState<Manager[]>(new Array(3).fill(null).map(() => new Manager("default")));

  const [textToShow, setTextToShow] = useState("Welcome to the game!");
  const [nameShow, setNameShow] = useState("");
  const [talkingShow, setTalkingShow] = useState(-1);
  const [charaToShow, setCharaToShow] = useState([emp]);
  const [backToShow, setBackToShow] = useState(emp);
  const [selectShow, setSelectShow] = useState([""]);


  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };


  const saveCliked = () => {
    setShowSave(true);
    setShowConfirmation(false);
    // セーブを押されるとsaveDataに新しいインスタンスができる
    // setSaveData(saveData.concat( new Manager(String(name)) ));
  };

  // useEffect(() => {
  //   console.log("saveData");
  // }, [saveData]);

  const loadCliked = () => {
    setShowLoad(true);
    setShowConfirmation(false);
  };


  const textClick = () => {
    setTextToShow(myManager.getText());
    setNameShow(myManager.getName());
    setTalkingShow(myManager.getTalking());
    setCharaToShow(myManager.getCharacters());
    setBackToShow(myManager.getBack());
    setSelectShow(myManager.getSelections());

    // テキストがクリックされたかどうか
    myManager.clicked();
    // 選択フェーズが来たときに選択肢を表示する
    setShowSelection(myManager.isSelect());
    setShowName(myManager.isName());
  };

  // choiceInd の値が変更されたときに実行される関数
  useEffect(() => {
    // ここに choiceInd の値が変更されたときに行いたい処理を書く
    if (choiceInd > -1) {
      console.log("game/choice: " + choiceInd);

      myManager.Selected(choiceInd);

      // 選択フェーズが来たときに選択肢を表示する
      setShowSelection(myManager.isSelect());

      setChoiceInd(-1);
    }

  }, [choiceInd]); // choiceInd が変更されたときに useEffect 内の関数が実行される

  // ロードしたときとかに発動する
  useEffect(() => {
    setShowSelection(myManager.isSelect());
    setShowName(myManager.isName());
    console.log("動作");
  }, [myManager]);


  return (
    <main>

      <div className='overlay-base'>


        {showSelection && (
          <Selectcom texts={myManager.getSelections()} setChoiceInd={setChoiceInd} />
        )}


        <Image className="image_back" src={myManager.getBack()} alt="back Image" />
        <Characom charas={myManager.getCharacters()} talking={myManager.getTalking()} />

        {showName && (
          <p className='main-text-name'>{myManager.getName()}</p>
        )}


        <div className="center-text">

          {showText && (
            <p onClick={textClick} className='main-text'>
              {myManager.getText()}
            </p>
          )}


          <div className='menu'>
            <button type="button" className="select_button" onClick={handleConfirmationButtonClick}>
              めにゅー
            </button>

            {showConfirmation && (
              <div className="confirmation_modal">
                <p>めにゅー</p>
                <button className='menu_button' onClick={() => saveCliked()}>せーぶ</button>
                <button className='menu_button' onClick={() => loadCliked()}>ろーど</button>
                <Link href="/option">
                  <button className='menu_button'>おぷしょん</button>
                </Link>
                <Link href="/..">
                  <button className='menu_button'>たいとるにもどる</button>
                </Link>
                <button className='menu_button' onClick={() => setShowConfirmation(false)}>めにゅーをとじる</button>
              </div>
            )}
          </div>


          {showSave && (
            <Savecom saveData={saveData} mymanager={myManager} setShowSave={setShowSave} Save={setSaveData} />
          )}


          {showLoad && (
            <Loadcom saveData={saveData} setShowLoad={setShowLoad} Load={setMyManager} />
          )}

          



        </div>

      </div>





    </main>
  );
};

export default GamePage;
