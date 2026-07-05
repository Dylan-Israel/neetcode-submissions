class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words: string[], pref: string): number {
        const prefixLength = pref.length;
        let count = 0;

        for (const word of words) {
            const prefix = word.slice(0, prefixLength);

            if (prefix === pref) {
                count++;
            }
        }

        return count;
    }
}
