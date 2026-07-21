class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let answer = new Set();
        for(let i = 0; i < nums.length; i++){
            const set = new Set();
            for(let j = i + 1; j < nums.length; j++){
                const third = -(nums[i] + nums[j]);
                if(set.has(third)){
                    const temp = [nums[i], nums[j], third];
                    temp.sort();
                    answer.add(JSON.stringify(temp))
                }
                set.add(nums[j])
            }
        }
        answer = Array.from(answer).map(each => JSON.parse(each));
        return answer
    }
}
