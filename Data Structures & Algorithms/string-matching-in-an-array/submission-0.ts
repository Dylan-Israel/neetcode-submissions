class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words: string[]): string[] {
        const matchingWords = [];

        for(let i = 0; i < words.length; i++) {
            const hasMatchingWord = words.some((word) => {
                return words[i] !== word && word.includes(words[i])
            })

            if(hasMatchingWord){
                matchingWords.push(words[i]);
            } 
        }

        return matchingWords;
    }
}
