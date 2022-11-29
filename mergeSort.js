function mergeSort(array) {

    // 1. if the array is empty simply return an empty list
    if (array === null) {
        return;
    }
    
    // 2. if the array is larger than 1 then split the array in half
    if (array.length > 1) {
    
        // 3. split the array in half
        var mid = Math.floor(array.length / 2);
    
        // 4. fill left array with 0 & fill in left side of the array from index 0 to mid
        var left = Array(mid).fill(0);

        for (let i=0; i<mid; i++) {
            left[i] = array[i]
        }

        // 5. fill right array with 0 & fill in right side of the array from index mid to the end
        var right = Array(array.length - mid).fill(0)
    
        for (let i=mid; i<array.length; i++) {
            right[i - mid] = array[i]
        }

        // 6. repeat until array length is at 1
        mergeSort(left);
        mergeSort(right)


        // 7. set 3 new variables. i represents "left-side", j represents "right-side", and k represents "new-array indexes"
        var i = 0;
        var j = 0;
        var k = 0;

        // 8. left index vs. right index value. Whichever has the lower index will be pushed into the new array first. 
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                array[k] = left[i];
                i++
            } else {
                array[k] = right[j];
                j++
            }
            k++
        }
        
        // 8. If array is not an even length then push remaining value to the end of the array
        while (i < left.length) {
            array[k] = left[i];
            i++
            k++
        }

        while (j < right.length) {
            array[k] = right[j];
            j++
            k++
        }
    }
    // 9. return the new array
    return array
}

const testArray = [ 12, 11, 13, 5, 6, 7 ]
mergeSort(testArray)


// ------------------------------------------------------------------------------------------------------------------------

