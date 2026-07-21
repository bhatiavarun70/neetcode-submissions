class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let answer = new Set();
        nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1;
            let k = nums.length - 1;
            while(j < k){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum < 0){
                    j++
                } else if(sum > 0){
                    k--;
                } else{
                    const temp = [nums[i], nums[j], nums[k]]
                    answer.add(JSON.stringify(temp))
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j - 1]) j++;
                    while(j < k && nums[k] === nums[k + 1]) k--;
                }
            }
        }
        answer = Array.from(answer).map(each => JSON.parse(each));
        return answer
    }
}
