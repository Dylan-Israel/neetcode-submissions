class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const records = [];

        for (const op of operations) {
            if (op === "C") {
                records.pop();
            } else if (op === '+') {
                const value1 = records[records.length - 1];
                const value2 = records[records.length - 2];
                const sum = Number(value1) + Number(value2);
                records.push(`${sum}`);
            } else if (op === 'D') {
                const value1 = records[records.length - 1];
                const product = Number(value1) * 2;
                records.push(`${product}`);
            } else {
                records.push(op);
            }
        }
 
        return records.reduce((acc, value) => {
            return acc + Number(value);
        }, 0)
    }
}
