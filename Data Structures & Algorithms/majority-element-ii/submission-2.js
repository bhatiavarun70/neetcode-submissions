class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = {};
        const answer = []
        for(let i = 0; i < nums.length; i++){
            if(!map[nums[i]]) map[nums[i]] = 1;
            else map[nums[i]]++;
        }
        Object.entries(map).forEach(([key, value]) => {
            if(value > Math.floor(nums.length / 3)) answer.push(Number(key))
        })
        return answer
    }
}
