// 1. printMessage
function printMessage(message) {
    console.log(message)
}

// 2. addNumbers
function addNumbers(x, y) {
    return x + y
}

// 3. findLarger
function findLarger(x, y) {
    if(x > y) {
        return "x is larger"
    } else {
        return "y is larger"
    }
}

// 4. checkEven
function checkEven(x) {
    if(x % 2 == 0) {
        return true
    } else {
        return false
    }
}

// 5. sumList
function sumList(list) {
    let total = 0
    for(let i = 0; i < list.length; i++){
        total = total + list[i]
    }
    return total
}


// 6. reverseString
function reverseString(string) {
    let arr = []

    for(let i = string.length - 1; i >= 0; i--) {
        arr.push(string[i])
    }
    return arr.join('')
}

console.log(reverseString('hello world'))


// 7. countCharacter
function countCharacter(string) {
    let count = 0
    for(let i = 0; i < string.length; i ++) {
        count = count + 1
    }
    return count
}


// 8. checkDivisible
function checkDivisible(x, y) {
    if(x % y == 0) {
        return true
    } else {
        return false
    }
}

// 9. findAverage
function findAverage(list) {
    let jumlah = 0
    list.forEach((value) => {
        jumlah += value
    })
    return jumlah / list.length
}
