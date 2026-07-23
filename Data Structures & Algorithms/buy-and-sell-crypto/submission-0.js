class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buyPrice = prices[0];

        for(let i = 1; i < prices.length; i++){
            if(prices[i] < buyPrice){
                buyPrice = prices[i]
            }
            const profit = prices[i] - buyPrice;
            maxProfit = Math.max(profit, maxProfit)
        }

        return maxProfit;
    }
}
