const randomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const shuffleArray = (arr) => {
    const len = arr.length;

    for(let index = len - 1; index > 0; index--) {
        let randomIndex = randomFromRange(0, index);

        if (randomIndex === index) {
            continue;
        } else {
            let temp = arr[index];
            arr[index] = arr[randomIndex];
            arr[randomIndex] = temp;
        }
    }

    return arr;
}

export { shuffleArray, };