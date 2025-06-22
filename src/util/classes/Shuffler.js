export class Shuffler {
    static baseDictionary = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~-";
    static shuffledIndicator = "_rhs";
    static generateDictionary() {
        let dict = "";
        let chars = Shuffler.baseDictionary.split("");
        while (chars.length > 0) {
            dict += chars.splice(Math.floor(Math.random() * chars.length), 1)[0];
        }
        return dict;
    }

    constructor(dictionary = Shuffler.generateDictionary()) {
        this.dictionary = dictionary;
    }

    // Helper for modular arithmetic
    static mod(n, m) {
        return ((n % m) + m) % m;
    }

    shuffle(str) {
        if (str.startsWith(Shuffler.shuffledIndicator)) return str;
        let out = "";
        for (let n = 0; n < str.length; n++) {
            let ch = str.charAt(n);
            let idx = Shuffler.baseDictionary.indexOf(ch);
            if (ch === "%" && str.length - n >= 3) {
                out += ch + str.charAt(++n) + str.charAt(++n);
            } else {
                out += idx === -1
                    ? ch
                    : this.dictionary.charAt(
                        Shuffler.mod(idx + n, Shuffler.baseDictionary.length)
                    );
            }
        }
        return Shuffler.shuffledIndicator + out;
    }

    unshuffle(str) {
        if (!str.startsWith(Shuffler.shuffledIndicator)) return str;
        str = str.slice(Shuffler.shuffledIndicator.length);
        let out = "";
        for (let n = 0; n < str.length; n++) {
            let ch = str.charAt(n);
            let idx = this.dictionary.indexOf(ch);
            if (ch === "%" && str.length - n >= 3) {
                out += ch + str.charAt(++n) + str.charAt(++n);
            } else {
                out += idx === -1
                    ? ch
                    : Shuffler.baseDictionary.charAt(
                        Shuffler.mod(idx - n, Shuffler.baseDictionary.length)
                    );
            }
        }
        return out;
    }
}