class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text: string): number {
        const chars = text.split('');
        const map: Map<string, number> = new Map();
        let count = 0;

        for (let char of chars) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }

        while (this.hasRelevantBallonChars(map)) {
            count++;
            this.reduceRelevantBallonChars(map);
        }

        return count;
    }

    private hasRelevantBallonChars(map: Map<string, number>): boolean {
        return !!(map.get('b') && map.get('a') && (map.get('l') >= 2) && (map.get('o') >= 2) && map.get('n'));
    }

    private reduceRelevantBallonChars(map: Map<string, number>): void {
        map.set('b', map.get('b') - 1);
        map.set('a', map.get('a') - 1);
        map.set('l', map.get('l') - 2);
        map.set('o', map.get('o') - 2);
        map.set('n', map.get('n') - 1);
    }
}
