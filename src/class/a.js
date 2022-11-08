exports.uniqid = (n = 1) => {

    if (n < 1) {
        throw new Error("n must be greater than 0");
    }

    let s = '';
    for (let i = 0; i < n; i++) {

        s += (Math.random()).toString(36).slice(2);
    }

    return s;
};