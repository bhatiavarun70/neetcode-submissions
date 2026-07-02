class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let element;
        let count = 0;
        for(let i = 0; i<nums.length; i++){
            if(count === 0){
                element = nums[i];
                count = 1;
            }
            else if(nums[i] === element){
                count++;
            } else {
                count--;
            }
        }
        let elCount = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i] === element){
                elCount++;
            }
        }
        return elCount > Math.floor(nums.length / 2) ? element : -1;
    }
}
