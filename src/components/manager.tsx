import Image, { StaticImageData } from "next/image"
import { useState } from 'react';
import React, { Component } from 'react';

import Dialogue from "../components/dialogue";

import chara1_normal from '/public/chara/chara1-normal.png';
import chara1_evilsmile from '/public/chara/chara1-evilsmile.png';
import chara1_smile from '/public/chara/chara1-smile.png';

import chara2_normal from '/public/chara/chara2-normal.png';

import emp from '/public/emp.png';
import class_day from '/public/back/class_day.jpg';
import myroom_day from '/public/back/myroom_day.jpg';
import entrance_day from '/public/back/entrance_day.jpg';
import house_day from '/public/back/house_day.jpg';
import road_day from '/public/back/road_day.jpg';
import crossroad_day from '/public/back/crossroad_day.jpg';
import schoolentrance_day from '/public/back/schoolentrance_day.jpg';


class Manager {
    private level: number; // 進行度
    private levelPlus: number[]; // [進行度（選択肢毎）, フラッグ]
    private Dialogues: Dialogue[]; // テキストやキャラなどの情報
    private Dialogues_commom_1c: Dialogue[][]; // 共通ルート1回目の選択肢1分岐先
    private Dialogues_commom_2: Dialogue[]; // 共通ルート2（共通ルート1回目の選択後）

    private Selection_commom_1: string[]; // 共通ルート1回目の選択肢

    constructor(name: string) {
        this.level = 0;
        this.levelPlus = [0, 1]; // 分岐後はフラッグが1となる。フラッグを0にしてから++
        // セリフ、喋るキャラ、キャラ[]、キャラの指数、背景、ルート
        this.Dialogues = [
            new Dialogue("「もう来週テストだなんて早いねー！」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「" + name + "は昨日どれくらい勉強した？」", "アナ", [chara1_normal], 0, class_day),
            new Dialogue("「ええと、昨日の勉強時間は、」", name, [chara1_normal], 0, class_day),
            new Dialogue("「ええと、昨日の勉強時間は、」", name, [chara1_normal], 0, class_day)
        ];

        this.Selection_commom_1 = [
            "4時間14分",
            "33時間7分",
            "趣味に没頭してた"
        ];

        this.Dialogues_commom_1c = [
            // 選択肢1の分岐先
            [
                new Dialogue("「4時間14分勉強したよ」", name, [chara1_normal], 0, class_day)
            ],
            // 選択肢2の分岐先
            [
                new Dialogue("「33時間7分！！」", "アナ", [chara1_normal], 0, class_day)
            ],
            // 選択肢3の分岐先
            [
                new Dialogue("「趣味に没頭してて、勉強してないな、、」", "アナ", [chara1_normal], 0, class_day)
            ],
        ];

        this.Dialogues_commom_2 = [
            new Dialogue("共通ルート2", "", [chara1_smile], 0, class_day)
        ];

    }

    // 進行度をセット（必要ないかも）
    setLevel(level: number) {
        this.level = level;
    }
    getLevel(): number {
        return this.level;
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
        // 1回目の分岐点。フラッグが0なので変更可能
        if(this.levelPlus[0] == 0 && this.levelPlus[0] == 0) {
            this.Dialogues = this.Dialogues.concat(this.Dialogues_commom_1c[choiceInd]); 
            this.Dialogues = this.Dialogues.concat(this.Dialogues_commom_2); 
            console.log("aaa"+this.Dialogues.length);
            this.levelPlus[0]++;
            this.levelPlus[1]=1;
            this.level++;
        }
    }

    // テキストのgetter
    getText(): string {
        return this.Dialogues[this.level].getText();
    }

    // charactersのgetter
    getCharacters(): StaticImageData[] {
        return this.Dialogues[this.level].getCharacters();
    }

    // backのgetter
    getBack(): StaticImageData {
        return this.Dialogues[this.level].getBack();
    }

}

export default Manager;