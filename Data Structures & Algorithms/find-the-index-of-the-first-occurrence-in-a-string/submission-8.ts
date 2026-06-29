class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack: string, needle: string): number {
        const needleLength = needle.length;

        for (let i = 0; i <= haystack.length - needleLength; i++) {
            if (haystack.slice(i, i + needleLength) === needle) {
                return i;
            }
        }

        return -1;
    }
}
