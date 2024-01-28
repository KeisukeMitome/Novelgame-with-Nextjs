import Image, { StaticImageData } from "next/image"
import { useState } from 'react';

import chara1_normal from '/public/chara/chara1-normal.png';
import chara1_evilsmile from '/public/chara/chara1-evilsmile.png';
import chara1_smile from '/public/chara/chara1-smile.png';

import chara2_normal from '/public/chara/chara2-normal.png';

// セリフ、喋るキャラ、キャラ、背景、ルートなど
class Dialogue {
    private text: string; // セリフ・表示する文
    private who: string; // 喋っているキャラの名前
    private characters: StaticImageData[]; // キャラデータ
    private whoIndex: number; // 喋ってるキャラのインデックス
    private back: StaticImageData; // 背景データ


    constructor(
        text: string,
        who: string,
        characters: StaticImageData[],
        whoIndex: number,
        back: StaticImageData) {
        this.text = text;
        this.who = who;
        this.characters = characters;
        this.whoIndex = whoIndex;
        this.back = back;
    }

    // テキストのgetter
    getText(): string {
        return this.text;
    }

    // whoのgetter
    getWho(): string {
        return this.who;
    }

    // charactersのgetter
    getCharacters(): StaticImageData[] {
        return this.characters;
    }

    // whoIndexのgetter
    getWhoIndex(): number {
        return this.whoIndex;
    }

    // backのgetter
    getBack(): StaticImageData {
        return this.back;
    }



}

export default Dialogue;