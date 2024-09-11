let nums = [2,7,11,15]
let target = 9

function twoSum(nums, target) {
    const hashTable = {};
    debugger
    for (let i = 0; i < nums.length; i++) {
        debugger
      const complement = target - nums[i];
      if (hashTable[complement] !== undefined) {
        debugger
        return [hashTable[complement], i];
      }
      hashTable[nums[i]] = i;
      debugger
    }
    return [];
  }

console.log(twoSum(nums,target))