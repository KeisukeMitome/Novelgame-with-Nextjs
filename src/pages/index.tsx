import Link from "next/link";

export default function Home() {



  return (
    <main>
      <h1 className='h1_1'>ゲームしたい...🎮</h1>

      <div>
        <Link className='menu_button' href="/file_select">つづける</Link>
        <Link className='menu_button' href="/new_game">にゅうげーむ</Link>
        <Link className='menu_button' href="/gallery">ぎゃらりー</Link>
        <Link className='menu_button' href="/option">おぷしょん</Link>
      </div>

    </main>
  );
}
