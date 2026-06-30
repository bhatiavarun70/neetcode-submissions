class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const answer = []
        nums.forEach(each => {
            if(each !== val){
                answer.push(each)
            }
        })
        for(let i = 0; i<answer.length; i++){
            nums[i] = answer[i];
        }
        return answer.length;
    }
}
