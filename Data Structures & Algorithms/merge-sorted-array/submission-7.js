class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let temp = [];
        let i = 0;
        let j = 0;
        if(m === 0){
            for(let i = 0; i < nums1.length; i++){
                nums1[i] = nums2[i]
            }
            
        } else if(m > 0 && n > 0 ){
            const tempArr1 = nums1.slice(0, m)
            console.log(tempArr1.length, nums2.length)
            while(i < nums2.length && j < tempArr1.length){
                console.log(i, j)
                if(nums2[i] < tempArr1[j]){
                    temp.push(nums2[i])
                    i++;
                } else{
                    temp.push(tempArr1[j])
                    j++;
                }
            }
            while(i < nums2.length){
                temp.push(nums2[i])
                i++
            }
            while(j < tempArr1.length){
                temp.push(tempArr1[j])
                j++
            }
            for(let i = 0; i < nums1.length; i++){
                nums1[i] = temp[i]
            }
        }
    }
}
