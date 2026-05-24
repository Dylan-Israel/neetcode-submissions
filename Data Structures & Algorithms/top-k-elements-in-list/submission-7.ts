class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Guard
        if(nums.length === 0) {
            return [];
        }

        // Count Map
        const numsCountMap = nums.reduce((acc, value) => {
            if(acc.has(value)) {
                acc.set(value, acc.get(value) + 1);
            } else {
                acc.set(value, 1);
            }
            return acc;
        }, new Map<number, number>());
        console.log(numsCountMap)
        const buckets: number[][] = [];

        numsCountMap.forEach((count, key) => {
            if(buckets[count]) {
                buckets[count].push(key);
            } else {
                buckets[count] = [key];
            }
        })

        console.log(buckets)

        const answer = [];

        for(let i = buckets.length -1; i > 0; i--){
            if(answer.length === k) {
                break;
            }

            if(buckets[i]) {
                answer.push(...buckets[i]);
            }
        }
 
        return answer;
    }
}
