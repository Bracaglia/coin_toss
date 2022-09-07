function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return attempts
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        if (fiveHeadsSync() < 100) {
            resolve("Good Job!");
        } else {
            reject("Better Luck Next Time!")
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
