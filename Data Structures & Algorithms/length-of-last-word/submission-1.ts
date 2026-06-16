class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const word = s.trim();
        let length = 0;    

        for(let i= word.length -1; i >= 0; i--){
            if(word[i]=== " ") {
                break;
            }

            length++;
        }

        return length;
    }
}
