class StockSpanner {
    constructor() {
        this.stack = [];
        this.temp = [];
        this.span = 0;
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 0;
        this.stack.push(price);
        while(this.stack[this.stack.length - 1] <= price){
            span++;
            const top = this.stack.pop();
            this.temp.push(top);
        }
        const lostItems = this.temp.reverse();
        this.stack = [...this.stack, ...lostItems]
        this.temp = [];
        this.span = span;
        return this.span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
