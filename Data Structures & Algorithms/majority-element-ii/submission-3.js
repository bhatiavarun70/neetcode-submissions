class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let el1, el2;
    let count1 = 0, count2 = 0;
    const minimum = Math.floor(nums.length / 3) + 1;
    for(let i = 0; i < nums.length; i++){
        if(count1 === 0 && nums[i] !== el2){
            el1 = nums[i];
            count1 = 1;
        } else if(count2 === 0 && nums[i] !== el1){
            el2 = nums[i];
            count2 = 1;
        } else if(el1 === nums[i]) count1++;
        else if(el2 === nums[i]) count2++;
        else {
            count1--;
            count2--;
        }
    }
    count1 = 0
    count2 = 0
    const result = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === el1) count1++;
        if(nums[i] === el2) count2++;
    }
    if(count1 >= minimum) result.push(el1)
    if(count2 >= minimum) result.push(el2)
    return result;
    }
}
