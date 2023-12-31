//studio6 Q1
function my_map(f,xs) {
    return accumulate((x,acc) => pair(f(x),acc),null,xs);
}
//my_map(x => x + 1, list(1, 2, 3));
// Result: list(2, 3, 4)


//studio6 Q2
/*
function remove_duplicates(lst) {
    function helper(xs,result) {
        if(is_null(xs)) {
            return result;
        }
        else {
            return helper(filter((x) => x !== head(xs),xs)
            ,append(result,list(head(xs))) );
        }
    }
    return helper(lst,null);
}*/
/* version 2
function remove_duplicates(lst) {
    return is_null(lst)
    ? null
    : pair(head(lst),remove_duplicates(filter(x => !equal(x,head(lst)),tail(lst)) ));
}*/
/*version 3 using accumulate */
function remove_duplicates(lst) {
    return accumulate(
        (x,xs) => is_null(member(x,xs)) ? pair(x,xs) : xs,
        null,
        lst);
}
//remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// Result: list(1, 2, 3, 4)
//remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// Result: list("a", "x", "b", "c", "d")
//studio 6 Q3
function makeup_amount(x, coins) {
  if (x === 0) {
    // If x is 0, we have found a valid combination.
    return list(null);
  } else if (x < 0 || is_null(coins)) {
    // If x is negative or we have no more coins to use, return null (invalid combination).
    return null;
  } else {
    // Head of the coin list.
    const headCoin = head(coins);

    // Combinations that do not use the head coin.
    const combi_A = makeup_amount(x, tail(coins));

    // Combinations that do not use the head coin for the remaining amount.
    const combi_B = makeup_amount(x - headCoin, tail(coins));

    // Combinations that use the head coin.
    const combi_C = map((c) => pair(headCoin, c), combi_B);

    // Append combi_A and combi_C to get the final result.
    return append(combi_A, combi_C);
  }
}
//makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))
// in-class Q2 list of all subsets
function makeup_subsets (lst) { //my solution
    if(is_null(lst)) {
        return list(null);
    }
    /*
    else if (length(lst) === 1) {
        return head(lst);
    }*/
    else {
        const coma = makeup_subsets(tail(lst));// no x
        const comc = map( (c) => pair(head(lst),c),coma);//x
       return append(coma,comc);
    }
}
function subsets(xs) {
    if(is_null(xs)) {
        return list(null);
    }
    else {
        const subsets_rest = subsets(tail(xs));
        const x = head(xs);
        const has_x = map(s => pair(x,s),subsets_rest);
        return append(subsets_rest,has_x);
    }
}
const lst1 = list(1,2,3,4);
//makeup_subsets(lst1);
//subsets(lst1);
// Q3 permutations 
//write a function permutation that 
//takes a list s as a argument and returns a list of all permutations of s
function permutations (xs) {
    if(is_null(xs)) {
        return list(null);
    }
    else {
        return accumulate(append,null,
        map(x => map(p => pair(x,p),permutations(remove(x,xs))),xs));
    }
}
permutations(lst1);


