let nums1 = [1, 2, 3, 2, 1];
let nums2 = [5, 6, 7, 8];
let searchMap = {}

// brute force approach, but it takes O(n^2)
function findRepeatEle(nums){
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j] && i !== j){
                return [i,j]
            }
        }
    }
    return -1;
}



console.log(findRepeatEle(nums2))

