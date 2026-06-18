class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        const map = magazine.split('').reduce((acc, char) => {
            if (acc[char]) {
                acc[char]++;
            } else {
                acc[char] = 1;
            }

            return acc;
        }, {});
        const ransomNoteChar = ransomNote.split('');

        for (let char of ransomNoteChar) {
            if (map[char] >= 1) {
                map[char] -= 1;
                continue;
            }

            return false;
        }

        return true;
    }
}
