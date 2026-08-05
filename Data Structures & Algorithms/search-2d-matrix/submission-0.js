class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rowLen = matrix.length;
        let colLen = matrix[0].length;
        let left = 0;
        let right = rowLen * colLen - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid / colLen);
            let col = mid % colLen;
            if(matrix[row][col] === target){
                return true;
            } else if(matrix[row][col] > target){
                right = mid - 1;
            } else left = mid + 1;
        }
        return false;
    }
}
