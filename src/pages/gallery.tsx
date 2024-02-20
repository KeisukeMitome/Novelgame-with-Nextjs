import Link from "next/link";
import Image from "next/image"

import hazama from "/public/hazama.png";
import doughnut from "/public/doughnut.png";
import yo from "/public/yo.png";


export default function Home() {
  return (
    <main>
      <h1 className='h1_1'>ギャラリー</h1>

      <p>Coming soon...</p>

      <Link className='menu_button' href="/..">タイトルに戻る</Link>
    </main>
  );
}
