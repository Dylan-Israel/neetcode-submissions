class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let count = 0;

        for (const detail of details) {
            const age: number = parseInt(detail.slice(11, 13));

            if (age > 60) {
                count++;
            }
        }

        return count;
    }
}
