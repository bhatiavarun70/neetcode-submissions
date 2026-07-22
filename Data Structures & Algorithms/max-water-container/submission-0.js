class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1, answer = -Infinity;
        while(i < j){
            const height = (j - i) * Math.min(heights[j], heights[i]);
            answer = Math.max(answer, height);
            if(heights[i] < heights[j]){
                i++;
            }
            else{
                j--;
            }
        }
        return answer;
    }
}
