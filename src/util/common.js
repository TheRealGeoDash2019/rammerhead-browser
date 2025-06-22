function executeAsyncStep(generator, resolve, reject, next, _throw, key, arg) {
    try {
        var info = generator[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(next, _throw);
    }
}
function asyncToGenerator(generatorFn) {
    return function () {
        var self = this;
        var args = arguments;
        return new Promise(function (resolve, reject) {
            var generator = generatorFn.apply(self, args);
            function next(value) {
                executeAsyncStep(generator, resolve, reject, next, _throw, "next", value);
            }
            function _throw(err) {
                executeAsyncStep(generator, resolve, reject, next, _throw, "throw", err);
            }
            next(undefined);
        });
    };
}
function assertIsArray(arr) {
    if (Array.isArray(arr)) return arr;
}
function arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) {
        len = arr.length;
    }
    const result = new Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
    }
    return result;
}
function unsupportedIterableToArray(source, len) {
    if (!source) return;
    if (typeof source === "string") {
        return arrayLikeToArray(source, len);
    }
    let className = Object.prototype.toString.call(source).slice(8, -1);
    if (className === "Object" && source.constructor) {
        className = source.constructor.name;
    }
    if (className === "Map" || className === "Set") {
        return Array.from(source);
    }
    if (className === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(className)) {
        return arrayLikeToArray(source, len);
    }
}
function throwNonIterableError() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function destructureToArray(iterable, limit) {
    // Helper to handle standard iterators
    function iterateAndSlice(iter, limit) {
        const iterableSymbol = (typeof Symbol !== "undefined" && iter[Symbol.iterator]) || iter["@@iterator"];
        if (iterableSymbol == null) return;

        const iterator = iterableSymbol.call(iter);
        const result = [];
        let isDone = false;
        let hasError = false;
        let error;

        try {
            let step;
            while (!(isDone = (step = iterator.next()).done)) {
                result.push(step.value);
                if (limit && result.length === limit) break;
            }
        } catch (err) {
            hasError = true;
            error = err;
        } finally {
            try {
                if (!isDone && iterator.return != null) {
                    iterator.return();
                }
            } finally {
                // eslint-disable-next-line no-unsafe-finally
                if (hasError) throw error;
            }
        }
        return result;
    }

    return (
        assertIsArray(iterable) ||
        iterateAndSlice(iterable, limit) ||
        unsupportedIterableToArray(iterable, limit) ||
        throwNonIterableError()
    );
}

export { asyncToGenerator, destructureToArray, assertIsArray, arrayLikeToArray, unsupportedIterableToArray, throwNonIterableError };