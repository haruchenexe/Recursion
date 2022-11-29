// write a iteration function which takes a number and returns an array containing that many numbers from the fibonacci sequence
function fibs(num) {
    
    let array = []
    let firstNum = 0;
    let secondNum = 1;

    for (let i=0; i<num; i++) {
        if (i === 0 || i === 1) {
            array.push(i);
        } else {
            let thirdNum = firstNum + secondNum
            array.push(thirdNum);

            firstNum = secondNum
            secondNum = thirdNum
        }
    }
    return array
}

fibs(8)


// write a fibonacci sequence usiing recursive logic
function fibsRec(num) {

    if (num === 0) {
        return [0]
    }
    else if (num === 1) {
        return [0, 1]
    } else {
        const sequence = fibsRec(num - 1)
        const final =  [...sequence, sequence[num - 1] + sequence[num - 2]]
        return final
    }
}

fibsRec(8)