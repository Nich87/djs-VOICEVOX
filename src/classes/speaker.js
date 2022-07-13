// TODO:MongoDBを使う。ラッパーをUtilに作成
// TODO:名前読み上げ有無

import db from '../../Util/db.js'
export class Speaker {
    constructor(message) {
        this.name = message.author.name;
        this.content = message.content;
        this.key = db.get(message.author.id, 'key') || process.env.APIKEY;
        this.VOXspeaker = db.get(message.author.id, 'speaker') || 1;
        this.pitch = db.get(message.author.id, 'pitch') || '';
        this.intonationScale = db.get(message.author.id, 'intonationScale') || '';
        this.speed = db.get(message.author.id, 'speed') || '';
    }

    synthesize() {
        const baseurl = 'https://api.su-shiki.com/v2/voicevox/audio/?'
    }
}