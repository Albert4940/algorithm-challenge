/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //Concat and sort two arrays
    const newArr = [...nums1, ...nums2].sort((a,b) => a-b)

    const newArrLength = newArr.length;

    let result  = 0;
    let startIndex = 0;

    //If the number of array item is pair
    if(newArrLength % 2 == 0){
        /*
            [1,2,3,4] newArrLength = 4, 4/2 - 1 = 1
        */
        startIndex = (newArrLength / 2) - 1;
        const firstNum = newArr[startIndex]//2
        const secondNum = newArr[startIndex + 1]// 3

        result = (firstNum + secondNum) / 2;
    }else{
        /* [1,2,3,4,5] newArrLength = 5, 5 - 1/2 = 2 */
        startIndex = (newArrLength - 1) / 2;// 2
        result = newArr[startIndex] // median = 3
    }

    return result;
};