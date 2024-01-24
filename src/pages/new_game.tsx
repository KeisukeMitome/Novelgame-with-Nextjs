import { useState } from 'react';
import Link from 'next/link';


export default function NewGame() {
  const [name, setName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmationButtonClick = () => {
    // ここで確認ウィンドウを表示するための処理を追加
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    // ここでsubmitするための処理を追加
    console.log(`名前: ${name} で送信されました`);
  };



  return (
    <main>
      <h1 className='h1_1'>にゅうげーむ🎮</h1>


      <label>あなたのなまえは？</label>
      <input
        className="input_text"
        type="text"
        id="name"
        name="name"
        placeholder="なまえをにゅうりょくしてください"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <button type="button" className="select_button" onClick={handleConfirmationButtonClick}>
        けってい
      </button>

      {showConfirmation && (
        <div className="confirmation_modal">
          <p>{name} でよろしいですか？</p>
          <Link href={`/game?name=${encodeURIComponent(name)}`}>
            <button className='yes_button'>はい</button>
          </Link>
          <button className='no_button' onClick={() => setShowConfirmation(false)}>いいえ</button>
        </div>
      )}



      <Link className='menu_button' href="/..">たいとるにもどる</Link>
    </main>
  );
}

