class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const answer = [...nums, ...nums];
        return answer;
    }
}
