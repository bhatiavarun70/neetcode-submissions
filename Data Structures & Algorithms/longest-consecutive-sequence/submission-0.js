class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLen = 0;
        for(let i = 0; i < nums.length; i++){
            let number = nums[i];
            let seqLen = 0;
            for(let j = 0; j < nums.length; j++){
                let seqElement = number + j;
                if(!nums.includes(seqElement)){
                    break;
                } else {
                    seqLen++;
                }
            }
            maxLen = Math.max(seqLen, maxLen)
        }
        return maxLen;
    }
}
