// pages/game.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from "next/image"
import emp from '/public/emp.png';
import class_day from '/public/back/class_day.jpg';
import myroom_day from '/public/back/myroom_day.jpg';
import entrance_day from '/public/back/entrance_day.jpg';
import house_day from '/public/back/house_day.jpg';
import road_day from '/public/back/road_day.jpg';
import crossroad_day from '/public/back/crossroad_day.jpg';
import schoolentrance_day from '/public/back/schoolentrance_day.jpg';
import chara1_normal from '/public/chara/chara1-normal.png';
import chara1_evilsmile from '/public/chara/chara1-evilsmile.png';
import chara1_smile from '/public/chara/chara1-smile.png';

import Characom from "../components/characom";
import Textcom from "../components/textcom";

import Manager from "../components/manager";



const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [ind, setInd] = useState(0); // セリフ番号
  const [indc, setIndc] = useState(0); // キャラの表情番号
  const [indb, setIndb] = useState(0); // 背景番号
  const [textToShow, setTextToShow] = useState("Welcome to the game!");
  const [charaToShow, setCharaToShow] = useState(emp);
  const [backToShow, setBackToShow] = useState(myroom_day);

  // セリフ集...
  const texts: string[] = [
    "「もう朝か。」",  //0
    "おれは虚ろな視界で時計を見る。", 
    "「げっ、もうこんな時間！？」",
    "「い、急げ！！」",
    "おれは慌てて部屋を飛び出す。",
    "「いってきまーす！」", //5 
    "「この時間なら走れば間に合う！」",//6
    "「ぜぇ、ぜぇ」",//7
    "正直言ってもう限界が近い。",
    "こんな思いはもう二度とごめんだと、この間のテストで学んだばかりじゃないか！",
    "「くそっ、なんでこんな時に限って赤信号なんだよ！」",//10
    "心にも余裕がなくなってきた。←キレてる",
    "「ギリギリセーフ！」",//12
    "おれは今日も朝の悪魔に打ち勝ったんだ！",
    "教室について一息ついた。",//14
    "「おはよ、"+name+"！」",
    "後ろから声が聞こえてきた。",
    "振り向くと、見るとなんだか安心する姿があった。",
    "「アナ、おはよー」",//18//
    "彼女の名前は穴見アナ。彼女はおれの信頼している友人で、気遣いができる上に、よく回復をしてくれる。",
    "「今日は寝坊？」",
    "「いいや、計算通りだよ。」",
    "「ふーん？」",
    "「なんだよ、疑ってんのか？」",
    "「おれは自分の足と体力を信じたまでだ！」",
    "「ほんとはママに起こしてもらえなかっただけでしょ？」",//25//
    "「ぅ、ばれた、」",
    "この娘の前では嘘は無意味らしい",//27//
    "《チャイム》",
    "null"
  ];
  
  const charas: StaticImageData[] = [chara1_normal, chara1_evilsmile, chara1_smile];
  const backs: StaticImageData[] = [myroom_day, entrance_day, house_day, road_day, crossroad_day, schoolentrance_day, class_day];

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };

  const textClick = () => {
    // テキストがクリックされたかどうか
    setInd((prevInd) => (prevInd + 1) % texts.length);
    setTextToShow(texts[ind]);
    if(ind==0){setBackToShow(backs[0]);}
    else if(ind==5){setBackToShow(backs[1]);}
    else if(ind==6){setBackToShow(backs[2]);}
    else if(ind==7){setBackToShow(backs[3]);}
    else if(ind==10){setBackToShow(backs[4]);}
    else if(ind==12){setBackToShow(backs[5]);}
    else if(ind==14){setBackToShow(backs[6]);}

    if(ind==18){setCharaToShow(charas[0]);}
    else if(ind==25){setCharaToShow(charas[1]);}
    else if(ind==27){setCharaToShow(charas[2]);}
    else if(ind==0){setCharaToShow(emp);}
    
    console.log("クリック！" + ind);
  };



  return (
    <main>



      <div className='overlay-base'>

        <Image className="image_back" src={backToShow} alt="back Image" />
        <Characom num={3} charas={[charaToShow,charaToShow,charaToShow]}/>
        {/* <Image className="overlay-image" src={charaToShow} alt="Overlay Image" /> */}
        

        <div className="center-text">



          {/* <p onClick={textClick} className='main-text'>{textToShow}</p> */}
          <p onClick={textClick} className='main-text'>
            <Textcom tex={textToShow}/>
          </p>


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
