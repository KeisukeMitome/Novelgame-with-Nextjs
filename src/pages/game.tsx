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
import Optioncom from "../components/optioncom";

import Dialogue from "../components/dialogue";
import Manager from "../components/manager";



const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const { loadSlot } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSelection, setShowSelection] = useState(false); // 選択肢表示・非表示
  const [showText, setShowText] = useState(true); // テキスト表示・非表示
  const [showName, setShowName] = useState(true); // 名前表示・非表示
  const [showLoad, setShowLoad] = useState(false); // ロード画面表示・非表示
  const [showSave, setShowSave] = useState(false); // セーブ画面表示・非表示
  const [showConf, setShowConf] = useState(false); // タイトルに戻る確認画面表示・非表示
  const [showOption, setShowOption] = useState(false); // オプション画面表示・非表示
  const [showCautionGame, setShowCautionGame] = useState(false); // 最初の注意画面表示・非表示

  const [choiceInd, setChoiceInd] = useState(-1); // 選択されたインデックス

  // 管理するクラス
  const [myManager, setMyManager] = useState(new Manager(String(name)));
  // 管理するクラス 長さは3に指定
  const [saveData, setSaveData] = useState<Manager[]>(new Array(3).fill(null).map(() => new Manager("")));

  const [textToShow, setTextToShow] = useState("Welcome to the game!");
  const [nameShow, setNameShow] = useState("");
  const [talkingShow, setTalkingShow] = useState(-1);
  const [charaToShow, setCharaToShow] = useState([emp]);
  const [backToShow, setBackToShow] = useState(emp);
  const [selectShow, setSelectShow] = useState([""]);

  const [fontSize, setFontSize] = useState<number>(17); // 初期フォントサイズを設定
  const fontHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(event.target.value, 10)); // スライダーの値でフォントサイズを変更
  };

  const [textSpeed, setTextSpeed] = useState<number>(150); // 初期フォントサイズを設定
  const speedHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSpeed(parseInt(event.target.value, 10)); // スライダーの値でテキストの表示速度を変更
  };

  const cautionGameClicked = () => {
    setShowCautionGame(false);

    // jsonに書き出したい
    const jsonCautionGameData = {
      CautionGame: false,
    };

    // JSON オブジェクトを文字列に変換
    const jsonString = JSON.stringify(jsonCautionGameData);
    // ローカルストレージに保存
    localStorage.setItem('cautionGameData', jsonString);
  }


  // コンポーネントがマウントされた時にローカルストレージからデータを読み込む
  useEffect(() => {

    console.log("最初　名前 :" + name + "  ロードスロット :" + loadSlot);////////////////////////////////////////////////////////////
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

      // console.log("Level_0: " + savedData.Level_0);
      // console.log("LevelPlus_0: " + savedData.LevelPlus_0);
      // console.log("Dialogues_0: " + dialogues_0[23].getText());

      // 「つづける」を押された場合のロード
      switch (loadSlot) {
        case "0":
          const data0 = new Manager(saveData[0].getMyName());
          data0.copyInstance(saveData[0].getLevel(), saveData[0].getLevelPlus(), saveData[0].getDialogues());
          setMyManager(data0);
          break;

        case "1":
          const data1 = new Manager(saveData[1].getMyName());
          data1.copyInstance(saveData[1].getLevel(), saveData[1].getLevelPlus(), saveData[1].getDialogues());
          setMyManager(data1);
          break;

        case "2":
          const data2 = new Manager(saveData[2].getMyName());
          data2.copyInstance(saveData[2].getLevel(), saveData[2].getLevelPlus(), saveData[2].getDialogues());
          setMyManager(data2);
          break;

        default:
          console.log("新規データ");
      }

    }

    // ローカルストレージからオプションのデータを取得
    const optionJsonString = localStorage.getItem('optionData');
    if (optionJsonString) {
      // 文字列を JSON オブジェクトに変換
      const optionJson = JSON.parse(optionJsonString);
      setFontSize(parseInt(optionJson.fontSize, 10)); // フォントサイズをセット
      setTextSpeed(parseInt(optionJson.textSpeed, 10)); // テキストの表示速度をセット
    }

    // ローカルストレージから注意データを取得
    const cautionGameJsonString = localStorage.getItem('cautionGameData');
    if (cautionGameJsonString) {
      // 文字列を JSON オブジェクトに変換
      const cautionGameData = JSON.parse(cautionGameJsonString);
      setShowCautionGame(cautionGameData.CautionGame);
    }
    else {
      setShowCautionGame(true);
    }

  }, []); // 一度だけ実行されるため、依存リストに空の配列を渡す




  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    if (showConfirmation)
      setShowConfirmation(false);
    else
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

    // 注意文を消す
    if(showCautionGame) cautionGameClicked();
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
    console.log("名前 :" + name + "  ロードスロット :" + loadSlot);////////////////////////////////////////////////////////////

    console.log("動作");
  }, [myManager, myManager.getName()]);



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
            <div onClick={() => textClick()} className='main-text' style={{ fontSize: `${fontSize * 0.1}vw` }}>
              {/* {myManager.getText()} */}
              <Textcom text={myManager.getText()} isSelect={myManager.isSelect()} textSpeed={201 - textSpeed} />
            </div>
          )}



          <div className='menu'>
            <div className="select_button" onClick={handleConfirmationButtonClick}>
              ≡メニュー
            </div>

            {showConfirmation && (
              <div className="confirmation_modal">
                <div className='menu_button' onClick={() => saveCliked()}>セーブ</div>
                <br />
                <div className='menu_button' onClick={() => loadCliked()}>ロード</div>
                <br />
                <div className='menu_button' onClick={() => { setShowOption(true), setShowConfirmation(false) }}>オプション</div>
                <br />
                <div className='menu_button' onClick={() => { setShowConf(true), setShowConfirmation(false) }} >タイトルに戻る</div>
                <br />
                <div className='menu_button' onClick={() => setShowConfirmation(false)}>メニューを閉じる</div>

              </div>
            )}
          </div>


          {showSave && (
            <Savecom saveData={saveData} mymanager={myManager} setShowSave={setShowSave} Save={setSaveData} />
          )}


          {showLoad && (
            <Loadcom saveData={saveData} setShowLoad={setShowLoad} Load={setMyManager} />
          )}

          {showConf && (
            <div className='load'>
              <div className="confirmation_modal">
                <p>タイトルに戻りますか？</p>
                <Link href="/..">
                  <div className='yes_button'>はい</div>
                </Link>
                <div className='no_button' onClick={() => setShowConf(false)}>いいえ</div>
              </div>
            </div>
          )}

          {showOption && (
            <Optioncom
              fontSize={fontSize}
              textSpeed={textSpeed}
              fontHandleChange={fontHandleChange}
              speedHandleChange={speedHandleChange}
              setShowOption={setShowOption} />
          )}

          {showCautionGame && (
            <div className='balloon_con'>
              <div className='balloon'>会話を進めるにはテキストボックスをクリックしてください</div>
            </div>
          )}





        </div>

      </div>





    </main >
  );
};

export default GamePage;
