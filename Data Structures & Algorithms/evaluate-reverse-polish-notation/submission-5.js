class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let answer = null
        for(let i = 0; i < tokens.length; i++){
            switch(tokens[i]){
                case '+': {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(b + a);
                    break;
                }
                case '*': {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(b * a);
                    break;
                }
                case '-': {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(b - a);
                    break;
                }
                case '/': {
                    const a = stack.pop();
                    const b = stack.pop();
                    const result = b / a
                    answer = result < 0 ? Math.ceil(result) : Math.floor(result);
                    stack.push(answer);
                    break;
                }
                default: {
                    stack.push(Number(tokens[i]))
                }
            }
        }
        return stack[stack.length - 1];
    }
}
