import Link from "next/link";
import Image from "next/image"

import hazama from "/public/hazama.png";
import doughnut from "/public/doughnut.png";
import yo from "/public/yo.png";


export default function Home() {
  return (
    <main>
      <h1 className='h1_1'>ぎゃらりー🖼</h1>

      <Image className='image_gallery' src={hazama} alt="hazama" width={16*20} height={9*20} />
      <Image className='image_gallery' src={doughnut} alt="hazama" width={16*20} height={9*20} />
      <Image className='image_gallery' src={yo} alt="hazama" width={16*20} height={9*20} />

      <Link className='menu_button' href="/..">たいとるにもどる</Link>
    </main>
  );
}
