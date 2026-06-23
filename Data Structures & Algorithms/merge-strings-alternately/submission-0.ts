class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let word = '';
        let i = 0;
        let j = 0;

        while (i < word1.length || j < word2.length) {
            if (word1[i]) {
                word += word1[i];
                i++;
            }

            if (word2[j]) {
                word += word2[j];
                j++;
            }
        }

        return word;
    }
}
