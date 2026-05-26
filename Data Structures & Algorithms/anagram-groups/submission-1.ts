class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Guard
        if(!strs.length) {
            return [];
        }

        const response = {};

        for(const str of strs) {
            // make array for bucket sort key
            const chars = new Array(26).fill(0);

            for(const char of str) {
                const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
                chars[charIndex]++; 
            }

            const key = chars.join(',');

            if(response[key]) {
                response[key].push(str);
            } else {
                response[key] = [str];
            }
        }
        console.log('response', response)
        return Object.values(response);
    }
}
