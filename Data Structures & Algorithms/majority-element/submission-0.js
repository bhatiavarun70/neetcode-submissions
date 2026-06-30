class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {};
        for(let i = 0; i<nums.length; i++){
            if(!map[nums[i]]) map[nums[i]] = 1;
            else map[nums[i]]++;
        }
        return Object.keys(map).find(value => map[value] > nums.length / 2);
        
    }
}
