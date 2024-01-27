// pages/game.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from "next/image"
import emp from '/public/emp.png';
import chara1_normal from '/public/chara/chara1-normal.png';
import chara1_evilsmile from '/public/chara/chara1-evilsmile.png';
import chara1_smile from '/public/chara/chara1-smile.png';




const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);

  // セリフ番号
  const [ind, setInd] = useState(0);
  const [indc, setIndc] = useState(0);
  const [textToShow, setTextToShow] = useState("Welcome to the game!");
  const [charaToShow, setCharaToShow] = useState(emp);

  // セリフ集...
  const texts: string[] = ["おはよう、" + name + "!", "こんにちは、" + name, "こんばんは、" + name];
  const charas: StaticImageData[] = [chara1_normal, chara1_evilsmile, chara1_smile];

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };

  const textClick = () => {
    // テキストがクリックされたかどうか
    setInd((prevInd) => (prevInd + 1) % texts.length);
    setTextToShow(texts[ind]);
    setCharaToShow(charas[ind]);
    console.log("クリック！" + ind);
  };



  return (
    <main>



      <div className='overlay-base'>
        <div className='image_back_class'>

          <Image className="overlay-image" src={charaToShow} alt="Overlay Image" />

          <div className="center-text">



            <p onClick={textClick} className='main-text'>{textToShow}</p>


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

      </div>





    </main>
  );
};

export default GamePage;
