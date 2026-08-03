class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const pathArr = path.split('/');
        for(let i = 0; i < pathArr.length; i++){
            switch(pathArr[i]){
                case '' : break;
                case '.' : break;
                case '..': {
                    stack.pop();
                    break;
                }
                default: {
                    stack.push(pathArr[i])
                }
            }
        }
        return '/' + stack.join('/');
    }
}
