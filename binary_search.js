/*
method 1 recursion
function binary_search(A, v) {

    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            const mid = math_floor((low + high) / 2);
            return (v === A[mid]) ||
                   (v < A[mid] 
                    ? search(low, mid - 1)
                    : search(mid + 1, high));
        }
    }
    return search(0, array_length(A) - 1);
}
*/
/* 
method 2
function binary_search (A , v) {
    function search(l,r) {
        if(l > r) {
            return false;
        }
        else {
            const mid = math_floor((l + r) /2);
            if(v === A[mid]) {
                return true;
            }
            else {
                return v < A[mid] 
                ? search(l,mid-1)
                : search(mid+1,r);
            }
        }
    }
    return search(0,array_length(A)-1);
}
*/
/*
solution 3 using while loop
function binary_search(A , v) {
    let l = 0;
    let r = array_length(A) - 1;
    while(l <= r) {
        const mid = math_floor((l+r)/2);
        if(v === A[mid]) {
            break;
        }
        else if(v<A[mid]) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return l <= r;
}
*/
binary_search([1,2,3,4,5,6,7,8,9], 8);
