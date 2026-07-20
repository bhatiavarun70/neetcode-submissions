class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const map = {};
        const answer = [];
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] = (map[nums[i]] || 0) + 1;
            if(map[nums[i]] <= 1){
                answer.push(nums[i])
            }
        }
        for(let i = 0; i < answer.length; i++){
            nums[i] = answer[i]
        }
        return answer.length
    }
}
