function giveItBackLater (value, callback) {
    setTimeout(() => {
        callback(value)
    }, 100)
}

function addSomePromises (somePromise) {
    const resolve = (value) => {
        return value + value;
    }
    const reject = (value) => {
        return value + value + value;
    }
    return somePromise.then(resolve, reject);
}

function promiseToGiveItBackLater (value) {
    const promise = new Promise((resolve) => {
        giveItBackLater(value, resolve)
    })
    return promise;
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}; 
