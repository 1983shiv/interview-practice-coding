let nums1 = [5, 10, 3, 2, 50];
let nums2 = [1, 2, 3, 4];
// let nums3 = [1, 2, 3, 6, 8, 4, 2, 1];

let k1 = 8;
let k2 = 10;

// Optimized opproach
function FindRepeatElements(nums){
    let seen = {};

    for (let i = 0; i < nums.length; i++){
        if((nums[i]) in seen ){
            return seen[nums[i]];
        }
        seen[nums[i]] = i;
    }

    return -1;
}

function twoNumWithGivenDiff(nums, k){
    let diffMap = {};
    for (let i = 0; i < nums.length; i++){
        console.log(diffMap)
        if(nums[i] in diffMap){
            return true
        }
        
        diffMap[i] =  k + nums[i];
    }
    
    return false;
}

console.log(twoNumWithGivenDiff(nums2, k2))

