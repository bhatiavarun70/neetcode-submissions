class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        for(const asteroid of asteroids){
            let alive = true;

            while(alive && stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0){
                const top = stack[stack.length - 1];
                if(Math.abs(top) < Math.abs(asteroid)){
                    stack.pop();
                } else if(Math.abs(top) === Math.abs(asteroid)){
                    stack.pop();
                    alive = false;
                } else {
                    alive = false;
                }
            }
            if(alive){
                stack.push(asteroid)
            }
        }
        return stack
    }
}
