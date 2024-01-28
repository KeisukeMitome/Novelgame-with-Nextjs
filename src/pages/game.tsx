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

import Manager from "../components/manager";



const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSelection, setShowSelection] = useState(false); // 選択肢表示・非表示
  const [showText, setShowText] = useState(true); // テキスト表示・非表示

  const [choiceInd, setChoiceInd] = useState(-1); // 選択されたインデックス

  const [myManager, setMyManager] = useState(new Manager(String(name)));
  const [textToShow, setTextToShow] = useState("Welcome to the game!");
  const [charaToShow, setCharaToShow] = useState([emp]);
  const [backToShow, setBackToShow] = useState(emp);

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };


  const textClick = () => {
    // setTextToShow(myManager.getText());
    // setCharaToShow(myManager.getCharacters());
    // setBackToShow(myManager.getBack());

    setTextToShow(myManager.getText());
    setCharaToShow(myManager.getCharacters());
    setBackToShow(myManager.getBack());

    // テキストがクリックされたかどうか
    myManager.clicked();
    // 選択フェーズが来たときに選択肢を表示する
    setShowSelection(myManager.isSelect());
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




  return (
    <main>

      <div className='overlay-base'>


        {showSelection && (
          <Selectcom texts={["選択肢0", "選択肢1", "選択肢3----------------------"]} setChoiceInd={setChoiceInd} />
        )}

        <Image className="image_back" src={myManager.getBack()} alt="back Image" />
        <Characom charas={myManager.getCharacters()} />



        <div className="center-text">

          {showText && (
            <p onClick={textClick} className='main-text'>
              <Textcom tex={myManager.getText()} />
            </p>
          )}


          <div className='menu'>
            <button type="button" className="select_button" onClick={handleConfirmationButtonClick}>
              めにゅー
            </button>

            {showConfirmation && (
              <div className="confirmation_modal">
                <p>めにゅー</p>
                <button className='menu_button'>せーぶ</button>
                <button className='menu_button'>ろーど</button>
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

        </div>

      </div>





    </main>
  );
};

export default GamePage;
