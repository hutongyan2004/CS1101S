// PA 1617
//1a
function is_nucleobase(ch) {
    if(ch === "A"|| ch === "G"|| ch === "C" || ch === "T") {
        return true;
    }
    else {
        return false;
    }
}
//is_nucleobase("Otto"); // false
//1b
function is_dna_strand(lst) {
    const len = length(lst);
    let flag = true;
    for(let i = 0; i < len; i = i + 1) {
        if(!is_nucleobase(list_ref(lst,i))) {
            flag = false;
        }
    }
    return flag;
}
//is_dna_strand(list("T", "G", "C")); // true
//is_dna_strand(list("T", "G", "Otto")); // false
//1c
function combine(lst) {
    const len = length(lst);
    let ans = null;
    for(let i = lst; !is_null(i); i = tail(i)) {
        const t = head(i);
        ans = append(ans, t);
    }
    return ans;
}
//combine(list(list("G"), list("T"), list("C", "A", "A", "A"), list("G")));
// returns list("G", "T", "C", "A", "A", "A", "G")
//1d
function oxoguanine_repair(lst) {
    const len = length(lst);
    let ans = null;
    for(let i = 0; i < len; i = i + 1) {
        if(list_ref(lst,i) === "8") {
            ans = append(ans,list("G"));
        }
        else {
            ans = append(ans,list(list_ref(lst,i)));
        }
    }
    return ans;
}
//oxoguanine_repair(list("A", "8", "A", "8", "C", "T", "A", "C"));
// returns list("A", "G", "A", "G", "C", "T", "A", "C")
//1e
function find_gene_start(lst) {
    const len = length(lst);
    let flag = false;
    if(list_ref(lst,len-3)==="A"&&
    list_ref(lst,len-2)==="T"&&list_ref(lst,len-1)==="G") {
        return list(null);
    }
    else {
    for(let i = lst; !is_null(i); i = tail(i)){
        if(head(i)=== "A"&& head(tail(i)) === "T"&&head(tail(tail(i)))=== "G") {
            flag = true;
            return tail(tail(tail(i)));
        }
        else {}
    }
    if(flag === false) {
        return null;
    }
    else {}
    }
}
//find_gene_start(list("A", "C", "A", "T", "G", "T", "A", "C"));
// returns list(list("T", "A", "C"))
//find_gene_start(list("A", "T", "A", "G", "T", "A", "T", "G"));
// returns list(null)
//1f
function find_gene_end(lst) {
    function check_end(i) { // TAG, TAA and TGA
        if(list_ref(lst,i)=== "T") {
            if(list_ref(lst,i+1)=== "A"&&list_ref(lst,i+2)==="G") {
                return true;
            }
            else if(list_ref(lst,i+1)=== "A"&&list_ref(lst,i+2)==="A") {
                return true;
            }
            else if(list_ref(lst,i+1)=== "G"&&list_ref(lst,i+2)==="A") {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    if(check_end(0)) {
        return list(null);
    }
    else {
        let flag = false;
        const len = length(lst);
        let k = undefined;
        for(let i = 0; i < len - 3; i = i + 1 ) {
            if(check_end(i)) {
                k = i;
                flag = true;
                break;
            }
            else {}
        }
        if(!flag) {
            return null;
        }
        else {
            let ans = null;
            for(let i = 0; i < k ; i = i + 1) {
                ans = append(ans,list(list_ref(lst,i)));
            }
            return ans;
        }
    }
}
//find_gene_end(list("A", "T", "A", "C", "T", "A", "G", "A", "T", "A", "A"));
// returns list(list("A", "T", "A", "C"))
//find_gene_end(list("T", "G", "A", "A", "T", "A", "C"));
// returns list(null)
//find_gene_end(list("A", "T", "A", "C", "C", "A", "G","A", "T"));
// returns null
//1G
function all_genes(lst) {
    let ans = null;
    const len = length(lst);
    let flag = false;
    function check_st(i) {  //ATG
        if(list_ref(lst,i)==="A"&&
        list_ref(lst,i+1)==="T"&&list_ref(lst,i+2)==="G") {
            return true;
        }
        else {
            return false;
        }
    }
    function check_end(i) { // TAG, TAA and TGA
        if(list_ref(lst,i)=== "T") {
            if(list_ref(lst,i+1)=== "A"&&list_ref(lst,i+2)==="G") {
                return true;
            }
            else if(list_ref(lst,i+1)=== "A"&&list_ref(lst,i+2)==="A") {
                return true;
            }
            else if(list_ref(lst,i+1)=== "G"&&list_ref(lst,i+2)==="A") {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    let i = 0;
    while(i < len - 3) {
        if(check_st(i)) {
            let dna = null;
            let j = 0;
            for(j = i + 3; !check_end(j); j = j + 1) {
                dna = append(dna,list(list_ref(lst,j)));
            }
            if(flag === false) {
                ans = dna;
                i = j + 3;
                flag = true;
            }
            else {
                ans = pair(ans,dna);
                i = j + 3;
            }
        }
        else {
            i = i + 1;
        }
    }
    return ans;
}
//all_genes(list("T", "A", "T", "G", "C", "A", "T","A", "A", "G", "T", "A", "G", "A","T", "G", "A", "T", "G", "A", "T"));
// returns list(list("C", "A"), list("A"))
//2A
function all_different(x) {
    function smallest(xs) {
        return accumulate((x, y) => (x < y ? x : y), head(xs), tail(xs));
    }

    function selection_sort(xs) {
        if (is_null(xs)) {
            return xs;
        } else {
            const x = smallest(xs);
            return pair(x, selection_sort(remove(x, xs)));
        }
    }
    let flag = true;
    let lst = selection_sort(x);
    const len = length(lst);
    for(let i = 0; i < len - 1;i = i + 1) {
        if(list_ref(lst,i) === list_ref(lst,i+1)) {
            flag = false;
        }
        else {}
    }
    return flag;
}
//all_different(list(2, 6, 1, 7, 6, 4, 3));
// returns false
//all_different(list(2, 5, 1, 6, 7, 4, 3));
// returns true
//2B
function  is_valid_toto_set(nums, n, min, max) {
    const len = length(nums);
    if(n !== len) {
        return false;
    }
    else {
        function smallest(xs) {
            return accumulate((x, y) => (x < y ? x : y), head(xs), tail(xs));
        }

        function selection_sort(xs) {
            if (is_null(xs)) {
                return xs;
            } else {
                const x = smallest(xs);
                return pair(x, selection_sort(remove(x, xs)));
            }
        }
        let lst = selection_sort(nums);
        if(head(lst) < min || list_ref(lst,len-1) > max||(!all_different(lst))) {
            return false;
        }
        else {
            return true;
        }
    }
}
/*
const nums = list(25, 13, 8, 14, 30, 3, 8);
const n = 7;
const min = 3;
const max = 30; 
is_valid_toto_set(nums, n, min, max);
*/
//2C
function  num_of_matches(x, y) {
    function smallest(xs) {
            return accumulate((x, y) => (x < y ? x : y), head(xs), tail(xs));
        }
    function selection_sort(xs) {
            if (is_null(xs)) {
                return xs;
            } else {
                const x = smallest(xs);
                return pair(x, selection_sort(remove(x, xs)));
            }
    }
    let xs = selection_sort(x);
    let ys = selection_sort(y);
    let sum = 0;
    for(let i = 0; i < length(xs); i = i + 1) {
        for(let j = 0; j < length(ys); j = j + 1) {
            if(list_ref(xs,i) === list_ref(ys,j)) {
                sum = sum + 1;
                break;
            }
            else {}
        }
    }
    return sum;
}
/*
const numsA = list(23, 21, 30, 15, 40); 
const numsB = list(3, 40, 15, 20 );
num_of_matches(numsA, numsB); */
// returns 2
//2D
function check_winning_group(bet_nums, draw_nums, extra_num) {
    function smallest(xs) {
            return accumulate((x, y) => (x < y ? x : y), head(xs), tail(xs));
        }
    function selection_sort(xs) {
            if (is_null(xs)) {
                return xs;
            } else {
                const x = smallest(xs);
                return pair(x, selection_sort(remove(x, xs)));
            }
    }
    let n = length(draw_nums);
    let num1 = num_of_matches(bet_nums,draw_nums);
    let num2 = 0;
    for(let i = 0; i < length(bet_nums); i = i + 1) {
        if(list_ref(bet_nums,i) === extra_num) {
            num2 = num2 + 1;
        }
    }
    return num1 === n 
    ? 1
    : num1 === n -1
    ? num2 === 1
    ? 2
    : 3
    :num1 === n-2
    ? num2 === 1
    ? 4
    : 5
    : 0;
}
/*
const bet_nums = list(40, 30, 1, 49, 27, 15);
const draw_nums = list(23, 1, 30, 15, 40, 49);
const extra_num = 27;
check_winning_group(bet_nums, draw_nums, extra_num);
*/
// returns 2
// 3A
function evaluate_BAE_tree(bae_tree) {
    if(is_number(bae_tree)) {
        return bae_tree;
    }
    else {
        const l = list_ref(bae_tree,0);
        const op = list_ref(bae_tree,1);
        const r = list_ref(bae_tree,2);
        if(op === "+") {
            return evaluate_BAE_tree(l) + evaluate_BAE_tree(r);
        }
        else if(op === "-") {
            return evaluate_BAE_tree(l) - evaluate_BAE_tree(r);
        }
        else if(op === "*") {
            return evaluate_BAE_tree(l) * evaluate_BAE_tree(r);
        }
        else if(op === "/") {
            return evaluate_BAE_tree(l) / evaluate_BAE_tree(r);
        }
        else {}
    }
}
//const bae_tree = list( list(2, "+", 5), "*", 100 );
//evaluate_BAE_tree(bae_tree);
// returns 700
//3B
function build_BAE_tree(lst) {
    if(is_number(head(lst))) {
        return head(lst);
    }
    let ans = null;
    let layer = 0;
    lst = tail(lst);
    function load(to, item, lay) {
        if(is_null(to)) {
            ans = pair(item, null);
            return 0;
        }
        while(!is_null(tail(to))) {
            to = tail(to);
        }
        if(lay === 0) {
            set_tail(to, pair(item, null));
        } else {
            if(is_null(head(to))) {
                set_head(to, pair(item, null));
            } else {
                load(head(to), item, lay - 1);
            }
        }
    }
    while(!is_null(lst)){
        let char = head(lst);
        if(char === "("){
            load(ans, null, layer);
            layer = layer + 1;
        } else if (char === ")"){
            layer = layer - 1;
        } else {
            load(ans, char, layer);
        }
        lst = tail(lst);
    }
    return ans;
}
const bae_list = list("(", "(", 2, "+", 5, ")", "*", 100, ")");
build_BAE_tree(bae_list);
// returns a result equal to
// list( list(2, "+", 5), "*", 100 )
//3C
function evaluate_BAE(bae_list) {
    return evaluate_BAE_tree(build_BAE_tree(bae_list));
}
//3D
function check_parentheses(paren_list) {
    const len = length(paren_list);
    let s = [];
    let next = 0;
    let cnt = 0;
    for(let i = 0; i < len; i = i + 1) {
        const p = list_ref(paren_list,i);
        if(p === "(") {
            //s[next] ="(";
            cnt = cnt + 1;
        }
        else {
            cnt = cnt -1;
        }
    }
    return cnt === 0 ? true :false;
}
//const paren_list = list("(", "(", ")", "(");
//check_parentheses(paren_list);
// returns false