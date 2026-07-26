class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0, r = arr.length - 1;

        while(r - l + 1 > k){
            let leftDist = Math.abs(arr[l] - x);
            let rightDist = Math.abs(arr[r] - x);

            if(leftDist > rightDist){
                l++
            } else r--;
        }
        return arr.slice(l, r+1);
    }
}
