function middle(n) {
    return math_floor(n/2);
}
function take(xs,n) {
    function helper(xs,ys,n) {
        if(n === 0) {
            return ys;
        }
        else {
            return helper(tail(xs),append(ys,list(head(xs))),n-1);
        }
    }
    return helper(tail(xs),list(head(xs)),n-1);
}
function drop(xs,n) {
    if(n === 0) {
        return xs;
    }
    else {
        return drop(tail(xs),n-1);
    }
}
function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } 
    else if (is_null(ys)) {
        return xs;
    } 
    else {
        const x = head(xs);
        const y = head(ys);
        return x < y
        ? pair(x, merge(tail(xs), ys))
        : pair(y, merge(xs, tail(ys)));
    }
}
function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } 
    else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)),
        merge_sort(drop(xs, mid)));
    }
}
const lst = list(4,3,2,1);
//display(take(lst,3));
merge_sort(lst);