class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const scores = [];
        for(let i = 0; i < operations.length; i++){
            switch(operations[i]){
                case "+" : {
                    scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                    break;
                }
                case "C": {
                    scores.pop();
                    break
                }
                case "D": {
                    scores.push(scores[scores.length - 1] * 2);
                    break;
                }
                default: {
                    scores.push(Number(operations[i]));
                    break;
                }
            }
        }
        let total = 0;
        scores.forEach(each => {
            total += each
        })
        return total;
    }
}
