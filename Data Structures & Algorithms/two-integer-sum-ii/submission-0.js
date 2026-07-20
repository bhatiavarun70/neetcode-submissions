class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const result = [];
        for(let i = 0; i < numbers.length; i++){
            for(let j = 0; j < numbers.length; j++){
                if(i !== j && numbers[i] + numbers[j] === target && !result.includes(i+1) && !result.includes(j+1)){
                    result.push(i+1)
                    result.push(j+1)
                }
            }
        }
        return result;
    }
}
