function mchoose(n, k) {
    if (read(n, k) !== undefined) {
        return read(n, k);
    } 
    else {
    const result = k > n
    ? 0
    : k === 0 || k === n
    ? 1
    : mchoose(n - 1, k) + mchoose(n - 1, k - 1);
    write(n, k, result);
    return result;
    }
}
/*
Draw the call tree for the evaluation of the function call mchoose(7, 4). Show only the
calls to mchoose, and for calls whose return values can be found in the table mem, indicate so.
What is the order of growth in time of mchoose(n, k)? o(nk)
What is the order of growth in space of mchoose(n, k)? o(nk)
*/
