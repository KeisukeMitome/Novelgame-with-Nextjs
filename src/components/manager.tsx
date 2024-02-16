import Image, { StaticImageData } from "next/image"
import { useState } from 'react';
import React, { Component } from 'react';

import Dialogue from "../components/dialogue";

import chara1_normal from '/public/chara/chara1-normal.png';
import chara1_evilsmile from '/public/chara/chara1-evilsmile.png';
import chara1_smile from '/public/chara/chara1-smile.png';
import chara1_surprised from '/public/chara/chara1-surprised.png';
import chara1_sad from '/public/chara/chara1-sad.png';

import chara2_normal from '/public/chara/chara2-normal.png';
import chara2_evilsmile from '/public/chara/chara2-evilsmile.png';
import chara2_smile from '/public/chara/chara2-smile.png';
import chara2_surprised from '/public/chara/chara2-surprised.png';

import chara3_normal from '/public/chara/chara3-normal.png';
import chara3_smile from '/public/chara/chara3-smile.png';

import emp from '/public/emp.png';
import black from '/public/back/black.png';
import class_day from '/public/back/class_day.jpg';
import class_late_afternoon from '/public/back/class_late_afternoon.jpg';
import myroom_day from '/public/back/myroom_day.jpg';
import entrance_day from '/public/back/entrance_day.jpg';
import house_day from '/public/back/house_day.jpg';
import road_day from '/public/back/road_day.jpg';
import crossroad_day from '/public/back/crossroad_day.jpg';
import schoolentrance_day from '/public/back/schoolentrance_day.jpg';


class Manager {
    private level: number; // 進行度
    private levelPlus: number[]; // [進行度（選択肢毎）, フラッグ]
    private myName: string; // 自分の名前
    private savedDate: string; // セーブされた日時

    private Dialogues: Dialogue[]; // テキストやキャラなどの情報
    private Dialogues_commom_1c: Dialogue[][]; // 共通ルート1回目の選択肢の分岐先
    private Dialogues_commom_2: Dialogue[]; // 共通ルート2（共通ルート1回目の選択後）
    private Dialogues_commom_2c: Dialogue[][]; // 共通ルート2回目の選択肢の分岐先
    private Dialogues_commom_3: Dialogue[]; // 共通ルート3（共通ルート2回目の選択後）

    private Selection_commom_1: string[]; // 共通ルート1回目の選択肢
    private Selection_commom_2: string[]; // 共通ルート2回目の選択肢

    constructor(name: string) {
        this.level = 0;
        this.levelPlus = [0, 1]; // 分岐後はフラッグが1となる。フラッグを0にしてから++
        this.myName = name;
        this.savedDate = "空のスロット";

        // セリフ、喋るキャラ、キャラ[]、キャラの指数(誰もしゃべってない時と自分の時は-1)、背景、ルート
        this.Dialogues = [
            new Dialogue("「もう来週テストだなんて早いねー！」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「" + name + "は昨日どれくらい勉強した？」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「ええと、昨日の勉強時間は、」", name, [chara1_normal], -1, class_day),
            new Dialogue("「ええと、昨日の勉強時間は、」", name, [chara1_normal], -1, class_day)
        ];

        this.Selection_commom_1 = [
            "4時間14分",
            "33時間7分",
            "趣味に没頭してた"
        ];

        this.Dialogues_commom_1c = [
            // 選択肢1の分岐先
            [
                new Dialogue("「4時間14分勉強したよ」", name, [chara1_normal], -1, class_day),
                new Dialogue("「え、そんなに勉強したの！？」", "アナ", [chara1_surprised], 0, class_day),
                new Dialogue("「このままじゃ置いてかれちゃう、、、」", "アナ", [chara1_sad], 0, class_day),
                new Dialogue("「ねえ、この後わからないとこあったら聞いてもいい？」", "アナ", [chara1_normal], 0, class_day),
                new Dialogue("「おう、お安いご用さ！」", name, [chara1_normal], -1, class_day),
            ],
            // 選択肢2の分岐先
            [
                new Dialogue("「33時間7分！！」", name, [chara1_normal], -1, class_day),
                new Dialogue("「....？？？」", "アナ", [chara1_smile], 0, class_day),
                new Dialogue("「.........。」", name, [chara1_smile], -1, class_day),
                new Dialogue("「ちょっと何言ってるかわからない」", "アナ", [chara1_smile], 0, class_day),
                new Dialogue("「ほんとは？」", "アナ", [chara1_evilsmile], 0, class_day),
                new Dialogue("「0時間です...」", name, [chara1_evilsmile], -1, class_day),
                new Dialogue("「一緒に勉強しよっか」", "アナ", [chara1_smile], 0, class_day),
                new Dialogue("「はい、、お願いします、、、」", name, [chara1_normal], -1, class_day)
            ],
            // 選択肢3の分岐先
            [
                new Dialogue("「趣味に没頭してて、勉強してないな、、」", name, [chara1_normal], -1, class_day),
                new Dialogue("「"+name+"は音楽のミックスにはまってるんだっけ？」", "アナ", [chara1_surprised], 0, class_day),
                new Dialogue("「趣味に没頭するのはいいことだと思うけど、そろそろ勉強しはじめた方がいいんじゃない？」", "アナ", [chara1_sad], 0, class_day),
                new Dialogue("「そうだな。ちょうど1週間前だしちょうどいい機会か。」", name, [chara1_normal], -1, class_day),
                new Dialogue("「せっかくだし一緒に勉強しないか？」", name, [chara1_normal], -1, class_day),
                new Dialogue("「うん！もちろんいいよ！」", "アナ", [chara1_smile], 0, class_day),
                new Dialogue("「私のスパルタ授業に耐えられるかな？？」", "アナ", [chara1_evilsmile], 0, class_day),
                new Dialogue("「ス、スパルタは勘弁してくれ、、、」", "アナ", [chara1_evilsmile], -1, class_day),
                new Dialogue("「冗談！」", "アナ", [chara1_smile], 0, class_day)
            ]
        ];

        this.Dialogues_commom_2 = [
            new Dialogue("かくしておれはアナと一緒に勉強することになった。", "", [chara1_smile], -1, class_day),
            new Dialogue("「何からやる？」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「数学と物理が苦手だな、、、」", name, [chara1_normal], -1, class_day),
            new Dialogue("「それなら、その2つで決まりだね！」", "アナ", [chara1_smile], 0, class_day),
            new Dialogue("2人で勉強して20分くらい経った。", "", [chara1_normal], -1, class_day),
            new Dialogue("「この問題どうやって解くんだ、、、？」", name, [chara1_normal], -1, class_day),
            new Dialogue("「何この問題、今までのやり方じゃ全然通用しないね」", "アナ", [chara1_surprised], 0, class_day),
            new Dialogue("「詰んだな。まあ、こんな難しい問題解かなくても何とかなるんじゃないか？」", name, [chara1_normal], -1, class_day),
            new Dialogue("「うーん、、、でもあの先生のテストってこういう難問出てきそうじゃない？」", "アナ", [chara1_sad], 0, class_day),
            new Dialogue("「こういう問題に限って配点は高いしな」", name, [chara1_normal], -1, class_day),
            new Dialogue("「よし、誰かに助けてもらうか！」", name, [chara1_normal], -1, class_day),
            new Dialogue("「それならあの子に聞こう！」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「一緒に聞きに行こう！」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("2人で席を立ち、教室の前の方に行く。", "", [emp], -1, class_day),
            new Dialogue("「メイちゃん！」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「この問題教えて欲しいんだけど！」", "アナ", [chara1_smile], 0, class_day),
            new Dialogue("「いいよー」", "メイ", [chara1_normal, chara2_normal], 1, class_day),
            new Dialogue("彼女の名前は、細川メイ。小学校、中学校も同じだったが、同じクラスになるのは初めてだ。", "", [chara1_normal, chara2_normal], -1, class_day),
            new Dialogue("「あー、この問題ね」", "メイ", [chara1_normal, chara2_normal], 1, class_day),
            new Dialogue("「この問題は実はこの公式が使えて、」", "メイ", [chara1_normal, chara2_normal], 1, class_day),
            new Dialogue("「で、ここでこの計算をするとここがこうなって、」", "メイ", [chara1_surprised, chara2_normal], 1, class_day),
            new Dialogue("「あ！それでここをこうするんだ！」", "アナ", [chara1_surprised, chara2_normal], 0, class_day),
            new Dialogue("「そういうこと」", "メイ", [chara1_smile, chara2_smile], 1, class_day),
            new Dialogue("「すごい！簡単に理解できた！」", "アナ", [chara1_smile, chara2_smile], 0, class_day),
            new Dialogue("「やっぱり学年トップは格が違うね！」", "アナ", [chara1_normal, chara2_smile], 0, class_day),
            new Dialogue("「そんなに褒めても何も出ないよー」", "メイ", [chara1_normal, chara2_smile], 1, class_day),
            new Dialogue("学年トップ！？細川さんってそんなに優秀だったのか！？", "", [chara1_normal, chara2_normal], -1, class_day),
            new Dialogue("「"+name+"君も理解できた？」", "メイ", [chara1_normal, chara2_smile], 1, class_day),
            new Dialogue("「うん。すごく理解しやすかったよ。ありがとう！」", name, [chara1_normal, chara2_normal], -1, class_day),
            new Dialogue("「それにしても細川さんって学年トップだったのか。そんなすごい人が身近にいるなんて思いもしなかったよ。」", name, [chara1_normal, chara2_normal], -1, class_day),
            new Dialogue("「まあちゃんと勉強しはじめたのは高校受験の時だったからね。ちゃんとし始めたのは最近の話だよ」", "メイ", [chara1_normal, chara2_smile], 1, class_day),
            new Dialogue("「そういえば、小中学校一緒だったのに連絡先持ってなくない？」", "メイ", [chara1_normal, chara2_normal], 1, class_day),
            new Dialogue("「せっかくの機会だし交換しとこうよ」", "メイ", [chara1_normal, chara2_normal], 1, class_day),
            new Dialogue("「そうだね。これからもよろしくな」", name, [chara1_normal, chara2_normal], -1, class_day),
            new Dialogue("「はーい」", "メイ", [chara1_normal, chara2_smile], 1, class_day),
            new Dialogue("『チャイム』", "", [chara1_surprised, chara2_normal], -1, class_day),
            new Dialogue("「丁度1時間目終わったし解散しよっか」", "アナ", [chara1_normal, chara2_normal], 0, class_day),
            new Dialogue("「改めてありがとう細川さん」", name, [chara1_normal, chara2_normal], -1, class_day),
            new Dialogue("「いつでも聞いてねー」", "メイ", [chara1_normal, chara2_smile], 1, class_day),
            new Dialogue("この後の授業は全部退屈そうだな。数学Aに現代文に世界史か。帰りたい、、、。", "", [], -1, class_day),
            new Dialogue("「6 HOURS LATER」", "", [], -1, black),
            new Dialogue(".........。", "", [], -1, class_late_afternoon),
            new Dialogue("「今日の授業はもう終わりか。」", name, [], -1, class_late_afternoon),
            new Dialogue("授業を受ける前はあんなに嫌だったのに、いざ終えてみるとそこまで苦痛ではない上に、意外にためになることも学べる。", "", [], -1, class_late_afternoon),
            new Dialogue("なんとも不思議なものだ。", "", [], -1, class_late_afternoon),
            new Dialogue("さて、放課後になったことだし、この後は、", "", [], -1, class_late_afternoon),
            new Dialogue("さて、放課後になったことだし、この後は、", "", [], -1, class_late_afternoon)
        ];
        
        this.Selection_commom_2 = [
            "買い物に行く",
            "メイと一緒に帰る",
            "部活に行く"
        ];

        this.Dialogues_commom_2c = [
            // 選択肢1の分岐先
            [
                new Dialogue("「そういえば親からお使いを頼まれてたっけ。」", name, [], -1, class_late_afternoon),
                new Dialogue("「学校の近くの」", name, [], -1, class_late_afternoon)
            ],
            // 選択肢2の分岐先
            [
                new Dialogue("「小中学校が一緒ということは、メイとは通学路がほとんどなのか。」", name, [], -1, class_late_afternoon),
                new Dialogue("「一緒に帰ってみようかな」", name, [], -1, class_late_afternoon)
            ],
            // 選択肢3の分岐先
            [
                new Dialogue("「今日はバイトもないし、部活に行くか」", name, [], -1, class_late_afternoon),
                new Dialogue("俺の所属している軽音部は、出席が強制ではなく自主性である。", "", [], -1, class_late_afternoon)
            ]
        ];

        this.Dialogues_commom_3 = [
            new Dialogue("共通ルート3", "", [], -1, class_late_afternoon),
            new Dialogue("共通ルート3", "", [], -1, class_late_afternoon)
        ];

    }

    // 進行度をセット（必要ないかも）
    // setLevel(level: number) {
    //     this.level = level;
    // }
    getLevel(): number {
        return this.level;
    }
    getLevelPlus(): number[] {
        return this.levelPlus;
    }
    getMyName(): string {
        return this.myName;
    }
    getSavedDate(): string {
        return this.savedDate;
    }
    setSavedDate(date: Date) {
        // セーブされたときのDateを文字列にしてセットする
        this.savedDate = date.toLocaleString();
    }
    setSavedDateString(dateString: string) {
        // セーブされたときのDateを文字列にしてセットする
        this.savedDate = dateString;
    }
    getDialogues(): Dialogue[] {
        return this.Dialogues;
    }

    clicked() {

        // 現在のDialoguesがすべて表示されたとき
        if (this.level+1 >= this.Dialogues.length) {
            console.log("選択肢！");
        }
        else {
            this.level++;
        }
        
        console.log("manager/level: " + this.level);
    }

    // 選択が迫った時
    isSelect(): boolean{
        if (this.level+1 >= this.Dialogues.length) 
            return true;
        else
            return false;
    }

    // 選択肢が選ばれたとき
    Selected(choiceInd: number) {
        this.levelPlus[1] = 0; // フラッグを0にして選択かもう状態にする

        // 1回目の分岐点。フラッグが0なので変更可能
        if(this.levelPlus[0] == 0 && this.levelPlus[1] == 0) {
            this.Dialogues = this.Dialogues.concat(this.Dialogues_commom_1c[choiceInd]); 
            this.Dialogues = this.Dialogues.concat(this.Dialogues_commom_2); 
            // console.log("aaa"+this.Dialogues.length);
            this.levelPlus[0]++;
            this.levelPlus[1]=1;
            this.level++;
        }

        // 2回目の分岐点。フラッグが0なので変更可能
        if(this.levelPlus[0] == 1 && this.levelPlus[1] == 0) {
            this.Dialogues = this.Dialogues.concat(this.Dialogues_commom_2c[choiceInd]); 
            this.Dialogues = this.Dialogues.concat(this.Dialogues_commom_3);
            this.levelPlus[0]++;
            this.levelPlus[1]=1;
            this.level++;
        }
    }

    // テキストのgetter
    getText(): string {
        return this.Dialogues[this.level].getText();
    }

    // 名前のgetter
    getName(): string {
        return this.Dialogues[this.level].getWho();
    }
    // 名前の有無
    isName(): boolean {
        if(this.Dialogues[this.level].getWho() == "") return false;
        else return true;
    }

    // charactersのgetter
    getCharacters(): StaticImageData[] {
        return this.Dialogues[this.level].getCharacters();
    }

    // 喋ってるキャラのインデックスのgetter
    getTalking(): number {
        return this.Dialogues[this.level].getWhoIndex();
    }

    // backのgetter
    getBack(): StaticImageData {
        return this.Dialogues[this.level].getBack();
    }

    // 選択肢のgetter()
    getSelections(): string[]{
        console.log("levelplus: "+this.levelPlus);
        if(this.levelPlus[0] == 0) return this.Selection_commom_1;
        if(this.levelPlus[0] == 1) return this.Selection_commom_2;
        else return [""];
    }

    // インスタンスをコピー
    copyInstance(level:number, levelPlus:number[], dialogues:Dialogue[]){
        this.level = level;
        this.levelPlus[0] = levelPlus[0];
        this.levelPlus[1] = levelPlus[1];
        this.Dialogues = [];
        
        for (let i=0; i<dialogues.length; i++) {
            this.Dialogues = this.Dialogues.concat(dialogues[i]);
        }
    }

}

export default Manager;