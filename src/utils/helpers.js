// for pagination
export const getRangeWithDots = (currentPage, pageTotal) => {
    let delta = 2,
        left = currentPage - delta,
        right = currentPage + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= pageTotal; i++) {
        if (i === 1 || i === pageTotal || (i >= left && i < right)) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    return rangeWithDots
}