// pages/game.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const GamePage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };

  

  return (
    <main>
      <h1>Welcome to the game, {name}!</h1>

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


    </main>
  );
};

export default GamePage;
