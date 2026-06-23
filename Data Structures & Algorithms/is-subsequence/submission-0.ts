class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let i = 0;
        let j = 0;

        while (i < s.length && j < t.length) {
            if (s.charCodeAt(i) === t.charCodeAt(j)) {
                i++;
            }

            j++;
        }

        return i === s.length;
    }
}
