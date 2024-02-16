import React, { useState, useEffect } from "react";
import Link from "next/link";

interface UserData {
  id: string;
  name: string;
  level: number;
}


const Home: React.FC = () => {

  


  return (
    <main>

      <div className='overlay-base'>


        <div className='image_back_title'>

          {/* <h1 className='h1_1'>ゲームしたい...🎮</h1> */}

          <div className="center-text">
            <Link className='menu_button' href="/file_select">つづける</Link>
            <Link className='menu_button' href="/new_game">にゅうげーむ</Link>
            <Link className='menu_button' href="/gallery">ぎゃらりー</Link>
            <Link className='menu_button' href="/option">おぷしょん</Link>
          </div>

        </div>



      </div>


    </main>
  );
}

export default Home;
