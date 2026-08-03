class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        for(const ch of s){
            if(ch !== ']'){
                stack.push(ch)
            } else {
                let string = ''
                while(stack[stack.length - 1] !== '['){
                    string = stack.pop() + string;
                }
                stack.pop() // remove [
                let number = ''
                    while(stack.length && stack[stack.length - 1] >= '0' && stack[stack.length - 1] <= '9'){
                        number = stack.pop() + number;
                    }
                string = string.repeat(Number(number))
                stack.push(string)
            }
        }
        return stack.join('');
    }
}
