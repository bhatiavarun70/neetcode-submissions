class MinStack {
    constructor() {
        this.stack = [];
        this.min = null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.min = Math.min(...this.stack)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min = Math.min(...this.stack)
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
