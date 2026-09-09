function getArrayParams(...arr) {
  let avg = Number((arr.reduce((sum, currentValue) => sum + currentValue, 0)/arr.length).toFixed(2));
  return { min: Math.min(...arr), max: Math.max(...arr), avg: avg };
}

function summElementsWorker(...arr) {
    return arr.reduce((sum, currentValue) => sum + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length == 0) {
        return 0;
    }

    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = sumElementsByFilter((element) => element % 2 == 0, ...arr).sum;
    let sumOddElement = sumElementsByFilter((element) => element % 2 != 0, ...arr).sum;

    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = sumElementsByFilter((element) => element % 2 == 0, ...arr);

    if (sumEvenElement.length == 0) {
        return 0;
    }

    return Number((sumEvenElement.sum/sumEvenElement.length).toFixed(2));
}

function makeWork (arrOfArr, func) {
    let max = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        const arr = arrOfArr[i];
        let proceded = func(...arr);
        max = max < proceded? proceded : max; 
    }

    return max;
}

// Хэлпер, возвращает сумму отфильтрованного массива 
// и его количество элементов 
function sumElementsByFilter(filterFunc, ...arr) {
    let filtered = arr.filter(filterFunc);
    return {sum: summElementsWorker(...filtered), length: filtered.length};
}