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
all_genes(list("T", "A", "T", "G", "C", "A", "T",
 "A", "A", "G", "T", "A", "G", "A",
 "T", "G", "A", "T", "G", "A", "T"));
// returns list(list("C", "A"), list("A"))