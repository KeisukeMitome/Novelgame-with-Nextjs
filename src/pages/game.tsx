// pages/game.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from "next/image"
import emp from '/public/emp.png';

import Characom from "../components/characom";
import Textcom from "../components/textcom";

import Manager from "../components/manager";



const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [myManager, setMyManager] = useState(new Manager(0, String(name)));
  const [textToShow, setTextToShow] = useState("Welcome to the game!");
  const [charaToShow, setCharaToShow] = useState([emp]);
  const [backToShow, setBackToShow] = useState(emp);

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };

  const textClick = () => {
    
    setTextToShow(myManager.getText());
    setCharaToShow(myManager.getCharacters());
    setBackToShow(myManager.getBack());

    
    // テキストがクリックされたかどうか
    myManager.clicked();
  };



  return (
    <main>



      <div className='overlay-base'>

        <Image className="image_back" src={backToShow} alt="back Image" />
        <Characom charas={charaToShow}/>
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
