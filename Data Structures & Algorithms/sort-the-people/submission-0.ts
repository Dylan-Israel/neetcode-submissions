class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names: string[], heights: number[]): string[] {
        const people = names.map((value, index) => {
            return {
                name: value,
                height: heights[index]
            }
        });

        people.sort((a, b) => b.height - a.height);

        return people.map((person) => person.name);
    }
}
