class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let numOfBoats = 0;
        let left = 0, right = people.length - 1;
        while(left <= right){
            if(people[left] + people[right] <= limit){
                left++;
                right--;
                numOfBoats++;
            } else {
                right--;
                numOfBoats++;
            }
        }
        return numOfBoats;
    }
}
