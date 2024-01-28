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
    private level: number; // 進行度（必要ないかも）
    private Dialogues: Dialogue[]; // テキストやキャラなどの情報

    constructor(level: number, name: string) {
        this.level = level;
        this.Dialogues = [
            new Dialogue("おはよう1"+name, "", [emp], 0, myroom_day, 0),
            new Dialogue("おはよう2"+name, "", [emp], 0, entrance_day, 0), 
            new Dialogue("おはよう3"+name, "アナ", [chara1_normal], 0, schoolentrance_day, 0),
            new Dialogue("おはよう4"+name, "アナ", [chara1_evilsmile], 0, class_day, 0),
            new Dialogue("おはよう5"+name, "アナ", [chara1_smile, chara2_normal], 0, class_day, 0)
        ];

    }

    // 進行度をセット（必要ないかも）
    setLevel(level: number) {
        this.level = level;
        console.log("manager/level: " +this.level);
    }
    getLevel(): number {
        return this.level;
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