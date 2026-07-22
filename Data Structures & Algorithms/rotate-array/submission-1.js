class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length
        const n = nums.length - 1;
        const left = [...nums.slice(0, n - k + 1)]
        const right = [...nums.slice(n - k + 1, n + 1)]
        const answer = [...right, ...left];
        for(let i = 0; i < nums.length; i++){
            nums[i] = answer[i]
        }
    }
}
