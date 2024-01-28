// 選択肢
class Selection {
    private texts: string[]; // 選択肢


    constructor(texts: string[]) {
        this.texts = texts;
    }

    // テキストのgetter
    getText(): string[] {
        return this.texts;
    }



}

export default Selection;