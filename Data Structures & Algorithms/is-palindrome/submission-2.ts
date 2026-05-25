class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // Edgecase Guard
        if(s.length <= 1) {
            return true;
        }

        // Handle capitalization
        const lowerCasesStr = s.toLowerCase();

        // Handle non ascii values
        const chars = lowerCasesStr.split('').filter((char) => {
            const charCode = char.charCodeAt(0);
            const isNumericCharCode = (charCode >= 48 && charCode <= 57);
            const isAlphabeticCharCode = (charCode >= 97 && charCode <= 122);

            return isNumericCharCode || isAlphabeticCharCode;
        });

        // Two pointers - one moving foward and one moving back
        for(let i = 0, j = chars.length - 1; i < chars.length; i++, j--) {
            if(chars[i] !== chars[j]) {
                return false;
            }

            if(i >= j) {
                return true;
            }
        }

        return true;
    }
}
