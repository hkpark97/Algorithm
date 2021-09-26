/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    
    if(arr.length < 3) return false;

    let rise = false;
    let drop = false;

    let index = 1;

    while(arr[index] > arr[index-1]) {
        index++;
        rise = true;
    }

    if(arr[index] === arr[index+1]) return false;

    while(arr[index-1] > arr[index]) {
        index++;
        drop = true;
        }

        return rise&drop && index === arr.length;
};