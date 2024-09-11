let nums = [2,7,11,15]
let target = 9

function twoSum(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (hashTable[complement] !== undefined) {
        return [hashTable[complement], i];
      }
      hashTable[nums[i]] = i;
    }
    return [];
  }

console.log(twoSum(nums,target))