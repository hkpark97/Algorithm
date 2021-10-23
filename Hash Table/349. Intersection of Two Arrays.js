/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    
    let firstSet = new Set();
    
    for ( let num of nums1) {
        firstSet.add(num);
    }
    
    let interSectionNums = new Set();
    
    for ( let num of nums2) {
        if ( firstSet.has(num)) {
            interSectionNums.add(num);
        }
    }
    return Array.from(interSectionNums);
};

// 1.make variable for first number new set
// 2. loop through all the numbers in nums1
// 3. add all the numbers in firstSet
// 4. make variable for intersection number set
// 5. loop through nums2
// 6. if firstSet has same num >> add numbers into interSectionNums
// 7. return Array from interSectionNums