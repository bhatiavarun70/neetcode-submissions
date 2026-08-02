class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const posSpeed = [];
        const fleet = [];
        for(let i = 0; i < position.length; i++){
            posSpeed.push([position[i], speed[i]]);
        }
        posSpeed.sort(([pos1, ], [pos2]) => pos2 - pos1);
        for(let i = 0; i < posSpeed.length; i++){
            let timeToTarget = (target - posSpeed[i][0]) / posSpeed[i][1];
            if(fleet.length === 0 || (fleet.length > 0 && timeToTarget > fleet[fleet.length - 1])){
                fleet.push(timeToTarget)
            }
        }
        return fleet.length
    }
}
