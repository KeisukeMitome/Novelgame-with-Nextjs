import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import Link from "next/link";

interface UserData {
  id: string;
  name: string;
  level: number;
}


const Home: React.FC = () => {

  const [user, setUser] = useState<any>(null);
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    // ユーザーの認証状態が変化したら実行
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    // });

    // return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     // ログイン時
  //     const fetchData = async () => {
  //       // データをフェッチ
  //       const dataSnapshot = await getDocs(
  //         collection(db, "data", user.uid, "user_data")
  //       );
  //       const dataData = dataSnapshot.docs.map(
  //         (doc) => ({ id: doc.id, ...doc.data() } as UserData)
  //       );
  //       setData(dataData);
  //     };

  //     fetchData();
  //   }
  // }, [user]); // userが変化したら実行


  

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

export default Home;
