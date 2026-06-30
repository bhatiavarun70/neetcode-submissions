class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(left, right){
        const result = [];
        let i = 0, j = 0;
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        while(i < left.length){
            result.push(left[i]);
            i++;
        }
        while(j < right.length){
            result.push(right[j]);
            j++;
        }
        return result;
    }
    mergeSort(arr){
        if(arr.length <= 1){
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        const leftSorted = this.mergeSort(left);
        const rightSorted = this.mergeSort(right);

        return this.merge(leftSorted, rightSorted);
    }
    sortArray(nums) {
        return this.mergeSort(nums);
    }
}
