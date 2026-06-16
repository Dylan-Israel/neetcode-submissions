class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        for(let i =0, j = s.length -1; i < j; i++, j--) {
            const strOfI = s[i];
            const strOfJ = s[j];

            s[i] = strOfJ;
            s[j] = strOfI;
        }
    }
}
