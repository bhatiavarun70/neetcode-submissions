class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 1){
            return [nums[0]]
        }
        const map = {};
        nums.forEach(num => {
            if(!map[num]) map[num] = 1
            else map[num]++;
        })
        const sortedArray = Object.entries(map).sort(([, a], [, b]) => b - a);
        const result = sortedArray.slice(0, k).map(([key]) => Number(key));
        return result;
    }
}
