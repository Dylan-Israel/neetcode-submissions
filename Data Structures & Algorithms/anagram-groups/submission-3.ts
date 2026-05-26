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
                // find out what index our character is
                const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
                chars[charIndex]++; 
            }

            // create our hash map key based off of indexed letters
            const key = chars.join(',');

            if(response[key]) {
                response[key].push(str);
            } else {
                response[key] = [str];
            }
        }
 
        return Object.values(response);
    }
}
