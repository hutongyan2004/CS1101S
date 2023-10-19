// selection sort
function find_min_pos(A,l,r) {
    let min_pos = l;
    for(let i = l+1 ; i <= r; i = i +1) {
        if(A[i] < A[min_pos]) {
            min_pos = i;
        }
    }
    return min_pos;
}
function swap (A, x, y) {
    const t = A[x];
    A[x] = A[y];
    A[y] = t;
}
function selection_sort(A) {
    const len = array_length(A);
    for(let i = 0 ; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A,i,len-1);
        swap(A, i ,min_pos);
    }
}
function insertion_sort1(A) {
    const len = array_length(A);
    for(let i = 1; i < len ; i = i + 1) {
        let j = i - 1;
        while(j >= 0 && A[j+1] < A[j]) {
            swap(A,j,j+1);
            j = j - 1;
        }
    }
}
function insertion_sort2(A) {
    const len = array_length(A);
    for(let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while( j >= 0 && A[j] > x) {
            A[j+1] = A[j];
            j = j - 1;
        }
        A[j+1] = x;
    }
}
function merge_sort(A) {
    return merge_sort_helper(A,0,array_length(A)-1);
}
function merge_sort_helper(A,low,high) {
    if(low < high) {
        const mid = math_floor((low+high)/2);
        merge_sort_helper(A,low,mid);
        merge_sort_helper(A,mid+1,high);
        merge(A,low,mid,high);
    }
}
function merge(A,low,mid,high) {
    let B = [];
    let l = low;
    let r = mid+1;
    let b_index = 0;
    while(l <= mid && r <= high) {
        if(A[l] <= A[r]) {
            B[b_index] = A[l];
            l = l + 1;
        }
        else {
            B[b_index] = A[r];
            r = r + 1;
        }
        b_index = b_index + 1;
    }
    while(l <= mid) {
        B[b_index] = A[l];
        b_index = b_index + 1;
        l = l + 1;
    }
    while(r <= high) {
        B[b_index] = A[r];
        b_index =b_index + 1;
        r = r + 1;
    }
    for(let k = 0; k < high-low+1;k = k + 1) {
        A[low+k] = B[k];
    }
}
let B = [8,7,5,6,4,3,2,1];
//selection_sort(B);
//insertion_sort1(B);
//insertion_sort2(B);
merge_sort(B);
display(B);