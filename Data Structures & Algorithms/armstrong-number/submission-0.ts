class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isArmstrong(n: number): boolean {
        const stringifiedNum = `${n}`;
        const length = stringifiedNum.length;
        const chars = stringifiedNum.split("");
        let product = 0;

        for (let char of chars) {
            product += Math.pow(parseInt(char), length);
        }

        return product === n;
    }
}
