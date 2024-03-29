import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

import Image, { StaticImageData } from "next/image"
import title_back from '/public/back/title.png';

const NewGame: React.FC = () => {
  const [name, setName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAlertS, setShowAlertS] = useState(false);
  const [showAlertL, setShowAlertL] = useState(false);

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    if (name.length < 1) {
      setShowAlertS(true);
      // setShowConfirmation(false);
    }
    else if (name.length > 10) {
      setShowAlertL(true);
      // setShowConfirmation(false);
    }
    else {
      setShowConfirmation(true);
      // setShowAlert(false);
    }

  };

  const handleConfirmSubmit = () => {
    // ここでsubmitするための処理を追加
    console.log(`名前: ${name} で送信されました`);
  };



  return (
    <main>
      <div className='overlay-base'>
        <Image className="image_back" src={title_back} alt="back Image" />
        <div className="center-text">
          <h1 className='h1_1'>　あなたの名前は？　</h1>
          <input
            disabled={showAlertS || showAlertL || showConfirmation}
            className="input_text"
            type="text"
            id="name"
            name="name"
            placeholder="名前を入力してください"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <div className="select_button" onClick={handleConfirmationButtonClick}>
            決定
          </div>

          {showConfirmation && (
            <div className='load'>
              <div className="confirmation_modal">
                <p>{name} でよろしいですか？</p>
                <Link className='link' href={`/game?name=${encodeURIComponent(name)}`}>
                  <div className='yes_button'>はい</div>
                </Link>
                <div className='no_button' onClick={() => setShowConfirmation(false)}>いいえ</div>
              </div>
            </div>
          )}

          {showAlertS && (
            <div className='load'>
              <div className="confirmation_modal">
                <p>名前を入力してください！</p>
                <div className='menu_button' onClick={() => setShowAlertS(false)}>閉じる</div>
              </div>
            </div>
          )}
          {showAlertL && (
            <div className='load'>
              <div className="confirmation_modal">
                <p>名前が長すぎます！</p>
                <p>10文字以下にしてください</p>
                <div className='menu_button' onClick={() => setShowAlertL(false)}>閉じる</div>
              </div>
            </div>
          )}

          <br />
          <Link className='menu_button' href="/..">タイトルに戻る</Link>
        </div>
      </div>




    </main>
  );
}

export default NewGame;