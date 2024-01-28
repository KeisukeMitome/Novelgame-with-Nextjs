// import Image, { StaticImageData } from "next/image"
// import { useState } from 'react';
// import React, { Component } from 'react';

// import Dialogue from "../components/dialogue";

// import chara1_normal from '/public/chara/chara1-normal.png';
// import chara1_evilsmile from '/public/chara/chara1-evilsmile.png';
// import chara1_smile from '/public/chara/chara1-smile.png';

// import chara2_normal from '/public/chara/chara2-normal.png';

// import emp from '/public/emp.png';
// import class_day from '/public/back/class_day.jpg';
// import myroom_day from '/public/back/myroom_day.jpg';
// import entrance_day from '/public/back/entrance_day.jpg';
// import house_day from '/public/back/house_day.jpg';
// import road_day from '/public/back/road_day.jpg';
// import crossroad_day from '/public/back/crossroad_day.jpg';
// import schoolentrance_day from '/public/back/schoolentrance_day.jpg';


// class Manager {
//     private level: number; // 進行度（必要ないかも）
//     private Dialogues: Dialogue[]; // テキストやキャラなどの情報

//     constructor(level: number, name: string) {
//         this.level = level;
//         // セリフ、喋るキャラ、キャラ[]、キャラの指数、背景、ルート
//         this.Dialogues = [
//             new Dialogue("「もう朝か。」", name, [emp], 0, myroom_day, 0),
//             new Dialogue("おれは虚ろな視界で時計を見る。", "", [emp], 0, myroom_day, 0), 
//             new Dialogue("「げっ、もうこんな時間！？」", name, [emp], 0, myroom_day, 0), 
//             new Dialogue("「い、急げ！！」", name, [emp], 0, myroom_day, 0), 
//             new Dialogue("おれは慌てて部屋を飛び出す。", "", [emp], 0, myroom_day, 0), 
//             new Dialogue("「いってきまーす！」", name, [emp], 0, entrance_day, 0), 
//             new Dialogue("「この時間なら走れば間に合う！」", name, [emp], 0, house_day, 0), 
//             new Dialogue("「ぜぇ、ぜぇ」", name, [emp], 0, road_day, 0), 
//             new Dialogue("正直言ってもう限界が近い。", name, [emp], 0, road_day, 0), 
//             new Dialogue("こんな思いはもう二度とごめんだと、この間のテストで学んだばかりじゃないか！", "", [emp], 0, road_day, 0), 
//             new Dialogue("「くそっ、なんでこんな時に限って赤信号なんだよ！」", name, [emp], 0, crossroad_day, 0), 
//             new Dialogue("心にも余裕がなくなってきた。←キレてる", "", [emp], 0, crossroad_day, 0), 
//             new Dialogue("「セーフ！」", name, [emp], 0, schoolentrance_day, 0), 
//             new Dialogue("おれは今日も朝の悪魔に打ち勝ったんだ！", "", [emp], 0, schoolentrance_day, 0), 
//             new Dialogue("教室について一息ついた。", "", [emp], 0, class_day, 0), 
//             new Dialogue("「おはよ、"+name+"！」", "???", [emp], 0, class_day, 0), 
//             new Dialogue("後ろから声が聞こえてきた。", "", [emp], 0, class_day, 0), 
//             new Dialogue("振り返ると、見るとなんだか安心する姿があった。", "", [emp], 0, class_day, 0), 
//             new Dialogue("「アナ、おはよー」", name, [chara1_normal], 0, class_day, 0), 
//             new Dialogue("彼女の名前は穴見アナ。彼女はおれの信頼している友人で、気遣いができる上に、よく回復をしてくれる。", "", [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「今日は寝坊？」", "アナ", [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「いいや、計算通りだよ。」", name, [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「ふーん？」", "アナ", [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「なんだよ、疑ってんのか？」", name, [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「おれは自分の足と体力を信じたまでだ！」", name, [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「ほんとはママに起こしてもらえなかっただけでしょ？」", "アナ", [chara1_evilsmile], 0, class_day, 0), 
//             new Dialogue("「ぅ、ばれた、」", name, [chara1_smile], 0, class_day, 0), 
//             new Dialogue("この娘の前では嘘は無意味らしい。", "", [chara1_smile], 0, class_day, 0), 
//             new Dialogue("《チャイム》", "", [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「皆さんおはようございます。これからホームルームをはじめます。」", "先生", [emp], 0, class_day, 0),
//             new Dialogue("こうして教室でホームルームを聞けるだけで頑張った甲斐があったと思える。", "", [emp], 0, class_day, 0),
//             new Dialogue("「今日の1時間目の総合は自主勉の時間だ。来週のテストに向けてしっかり勉強するように。」", "", [emp], 0, class_day, 0), 
//             new Dialogue("自主勉だなんて、、、最高じゃないか！", "", [emp], 0, class_day, 0), 
//             new Dialogue("1時間好きなことをできる自由時間だ。", "", [emp], 0, class_day, 0), 
//             new Dialogue("「手始めにゲームでもするか」", "", [emp], 0, class_day, 0), 
//             new Dialogue("「もう来週テストだなんて早いねー！」", "アナ", [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「"+name+"は昨日どれくらい勉強した？」", "アナ", [chara1_normal], 0, class_day, 0), 
//             new Dialogue("「ああ、昨日の勉強時間は、」", name, [chara1_normal], 0, class_day, 0), 





//             new Dialogue("おはよう3"+name, "アナ", [chara1_normal], 0, schoolentrance_day, 0),
//             new Dialogue("おはよう4"+name, "アナ", [chara1_evilsmile], 0, class_day, 0),
//             new Dialogue("おはよう5"+name, "アナ", [chara1_smile, chara2_normal], 0, class_day, 0)
//         ];

//     }

//     // 進行度をセット（必要ないかも）
//     setLevel(level: number) {
//         this.level = level;
//     }
//     getLevel(): number {
//         return this.level;
//     }

//     clicked(){
//         this.level++;
//         this.level = this.level % this.Dialogues.length;
//         console.log("manager/level: " + this.level); 
//     }

//     // テキストのgetter
//     getText(): string {
//         return this.Dialogues[this.level].getText();
//     }

//     // charactersのgetter
//     getCharacters(): StaticImageData[] {
//         return this.Dialogues[this.level].getCharacters();
//     }

//     // backのgetter
//     getBack(): StaticImageData {
//         return this.Dialogues[this.level].getBack();
//     }

// }

// export default Manager;