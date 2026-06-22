class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard: string, word: string): number {
        const chars = keyboard.split('');
        const map = {};
        let count = 0;
        let previousPosition = 0;

        for (let i = 0; i < chars.length; i++) {
            map[chars[i]] = i;
        }

        for (let i = 0; i < word.length; i++) {
            const diff = Math.abs(previousPosition - map[word[i]]);
            count += diff;
            previousPosition = map[word[i]];
        }

        return count;
    }
}
