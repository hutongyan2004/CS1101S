// EXTRA PRACTICAL ASSESSMENT
// QUESTION PAPER

/* PREDECLARED FUNCTIONS. DO NOT REMOVE THIS LINE */                                                                                                                function string_to_list(s) {function helper(pos) {return char_at(s, pos) === undefined? null: pair(char_at(s, pos), helper(pos + 1));}return helper(0);}function list_to_string(xs) {function helper(xs, result) {return is_null(xs)? result: helper(tail(xs), result + head(xs));}return helper(xs, "");}function string_length(s) {function helper(pos) {return char_at(s, pos) === undefined? pos: helper(pos + 1);}return helper(0);}function nth_term(sequence, n) {return stream_ref(sequence, n - 1);}



// TASK 1A: REFLECTING A STRING

function self_reflect(s) {
    let lst = string_to_list(s);
    const len = length(lst);
    let ss = null;
    for(let i = 0; i < 2*len ; i = i + 1) {
        if(i < len) {
            ss = append(ss,list(list_ref(lst,i)));
        }
        else {
            //ss[i] = lst[2*len -i];
            ss = append(ss,list(list_ref(lst,2*len-1-i)));
        }
    }
    return list_to_string(ss);
}
// TASK 1B: CHECK FOR PALINDROMES

function is_palindrome(s) {
    let lst = string_to_list(s);
    const len = length(lst);
    if(len%2 === 0) {
        let i = undefined;
        for(i = 0; i < len/2 ; i = i + 1) {
            if(list_ref(lst,i) !== list_ref(lst,len-1-i)) {
                break;
            }
            else {}
        }
        return i === len/2 ? true : false;
    }
    else {
        let i = undefined;
        for(i = 0; i < math_floor(len/2) ; i = i + 1) {
            if(list_ref(lst,i) !== list_ref(lst,len-1-i)) {
                break;
            }
            else {}
        }
        return i === math_floor(len/2) ? true : false;
    }
}

// TASK 1C: GENERATE PALINDROMES

function generate_palindrome(x) {
    const lst = string_to_list(x);
    const len = length(lst);
    function permutations(ys) { 
        return is_null(ys) 
        ? list(null) 
        : accumulate(append, null, 
        map(x => map(p => pair(x, p), 
        permutations(remove(x, ys))), ys)); 
    }
    function remove_duplicates(xs) {
        return is_null(xs)
        ? null
        : is_null(member(head(xs),tail(xs)))
        ? pair(head(xs),remove_duplicates(tail(xs)))
        : remove_duplicates(tail(xs));
    }
    if(len === 0) {
        return null;
    }
    else if (len === 1) {
        return list(x);
    }
    else {
        const t = map(y => list_to_string(y),
        filter(x => is_palindrome(list_to_string(x)),
        permutations(lst)));
        return remove_duplicates(t);
    }
}
//generate_palindrome("abb");

// TASK 2A: ARITHMETIC SEQUENCE
function add_streams(s1, s2) { return is_null(s1) ? s2 : is_null(s2) ? s1 : pair(head(s1) + head(s2), () => add_streams(stream_tail(s1), stream_tail(s2))); }
function arithmetic_sequence(a, d) {
    const aa = pair(a,() => stream_map(x => x+d,aa));
    return aa;
}
//eval_stream(arithmetic_sequence(1,2),10);
// TASK 2B: GEOMETRIC SEQUENCE

function geometric_sequence(a, r) {
    const aa = pair(a,() => stream_map(x => x*r,aa));
    return aa;
}


// TASK 2C: RECURRENCE RELATION
function recurrence(t1, t2, f) {
    const modified_f = (x,y) => 
        pair(f(head(x),head(y)),() =>modified_f(stream_tail(x),stream_tail(y)));
    const a = pair(t1,()=> pair(t2,() => modified_f(a,stream_tail(a))));
    return a;
}
const relation = recurrence(2, 3, (prev1, prev2) => prev1 * prev2); 
// generates a sequence 2, 3, 6, 18, 108, 1944,
//eval_stream(relation,5);
// TASK 2D: ZIP SEQUENCES

function zip_sequences(xs) {
    if(is_null(xs)) {
        return null;
    }
    else {
    return pair(head(head(xs)),
    () => zip_sequences(append(tail(xs),list(stream_tail(head(xs))))));
    }
}


// TASK 2E: SUM OF SEQUENCES

function sum_sequences(xs) {
    function add1 (ys) { // add the head of every stream
        return is_null(ys)
        ? 0
        : head(head(ys)) + add1(tail(ys));
    }
    function helper(ys) { // find tail of every stream
        return is_null(ys)
        ? null 
        : pair(stream_tail(head(ys)),helper(tail(ys)));
    }
    
    return is_null(xs)
    ? null
    : pair(add1(xs), () => sum_sequences(helper(xs)));
}

// TASK 3: TRAVERSE MATRIX DIAGONALLY

function traverse_diagonally(M) {
    if(is_null(M)) {
        return null;
    }
    else {
        const len = array_length(M);
        for(let i = 0; i < len ; i = i + 1) {
            for(let j = 0; j < len; j = j + 1) {
                if(i%2 === 0) {
                    
                }
                else {
                    
                }
            }
        }
    }
}


// TASK 4: FASTEST TO WIN

function find_shortest_path(M) {
    const r = array_length(M);
    const c = array_length(M[0]);
    let minn = Infinity;
    function dfs(i,j,sum) {
        if(i === r-1 && j === c-1) {
            //sum = sum + M[i][j];
            if(sum < minn) {
                minn = sum;
            }
            else {}
        }
        else if ( i >= r || j >= c || i < 0 || j < 0) {}
        else {
            //sum = sum + M[i][j];
            dfs(i+1,j,sum+M[i][j]);
            dfs(i,j+1,sum+M[i][j]);
        }
    }
    dfs(0,0,M[0][0]);
    return minn;
}
const rooms = [[1, 2, 3, 4], [5, 0, 7, 7], [9, 0, 1, 0], [5, 1, 7, 0], [6, 1, 1, 1]]; 
//find_shortest_path(rooms); // returns 5


























// TEST CASES ------------------------------------------------------------------

function test1A() {
    
    function util1() {
        if (self_reflect("simba") === "simbaabmis") {
            display("TEST 1A - 1: PASS [Normal input]");
        } else {
            display("TEST 1A - 1: FAIL [Normal input]");
        }
    }
    
    function util2() {
        if (self_reflect("") === "") {
            display("TEST 1A - 2: PASS [Empty String]");
        } else {
            display("TEST 1A - 2: FAIL [Empty String]");
        }
    }
    
    function util3() {
        if (self_reflect("Metacircular Evaluator") === "Metacircular EvaluatorrotaulavE ralucricateM") {
            display("TEST 1A - 3: PASS [Case-sensitive Input]");
        } else {
            display("TEST 1A - 3: FAIL [Case-sensitive Input]");
        }
    }
    
    util1();
    util2();
    util3();
}

function test1B() {
    
    function util1() {
        if (is_palindrome("simis") === true) {
            display("TEST 1B - 1: PASS [Odd Length Palindrome]");
        } else {
            display("TEST 1B - 1: FAIL [Odd Length Palindrome]");
        }
    }
    
    function util2() {
        if (is_palindrome("abccba") === true) {
            display("TEST 1B - 2: PASS [Even Length Palindrome]");
        } else {
            display("TEST 1B - 2: FAIL [Even Length Palindrome]");
        }
    }
    
    function util3() {
        if (is_palindrome("simba") === false) {
            display("TEST 1B - 3: PASS [Odd Length Non-Palindrome]");
        } else {
            display("TEST 1B - 3: FAIL [Odd Length Non-Palindrome]");
        }
    }
    
    function util4() {
        if (is_palindrome("simb") === false) {
            display("TEST 1B - 4: PASS [Even Length Non-Palindrome]");
        } else {
            display("TEST 1B - 4: FAIL [Even Length Non-Palindrome]");
        }
    }
    
    function util5() {
        if (is_palindrome("") === true) {
            display("TEST 1B - 5: PASS [Empty String]");
        } else {
            display("TEST 1B - 5: FAIL [Empty String]");
        }
    }
    
    function util6() {
        if (is_palindrome("a") === true) {
            display("TEST 1B - 6: PASS [Single Length String]");
        } else {
            display("TEST 1B - 6: FAIL [Single Length String]");
        }
    }
    
    util1();
    util2();
    util3();
    util4();
    util5();
    util6();
}

function test1C() {
    
    function util1() {
        if (equal(generate_palindrome("caabb"), list("abcba", "bacab"))) {
            display("TEST 1C - 1: PASS [Public Test Case: \"caabb\"]");
        } else {
            display("TEST 1C - 1: FAIL [Public Test Case: \"caabb\"]");
        }
    } 
    
    function util2() {
        if (is_null(generate_palindrome("jason"))) {
            display("TEST 1C - 2: PASS [Public Test Case: \"jason\"]");
        } else {
            display("TEST 1C - 2: FAIL [Public Test Case: \"jason\"]");
        }
    }
    
    function util3() {
        if (equal(generate_palindrome("a"), list("a"))) {
            display("TEST 1C - 3: PASS [String of length 1]");
        } else {
            display("TEST 1C - 3: FAIL [String of length 1]");
        }
    }
    
    function util4() {
        if (equal(generate_palindrome("aaaaaa"), list("aaaaaa"))) {
            display("TEST 1C - 4: PASS [Secret Test Case]");
        } else {
            display("TEST 1C - 4: FAIL [Secret Test Case]");
        }
    }
    
    util1();
    util2();
    util3();
    util4();
}

function test2A() {
    
    function util1() {
        const s = arithmetic_sequence(1, 1);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 2, 3, 4, 5))) {
            display("TEST 2A - 1: PASS [Sequence of Integers]");
        } else {
            display("TEST 2A - 1: FAIL [Sequence of Integers]");
        }
    }
    
    function util2() {
        const s = arithmetic_sequence(1, 0);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 1, 1, 1, 1))) {
            display("TEST 2A - 2: PASS [Sequence of Ones]");
        } else {
            display("TEST 2A - 2: FAIL [Sequence of Ones]");
        }
    }
    
    function util3() {
        const s = arithmetic_sequence(5, 0.5);
        if (is_pair(s) && equal(eval_stream(s, 5), list(5, 5.5, 6, 6.5, 7))) {
            display("TEST 2A - 3: PASS [Sequence of Rational Numbers]");
        } else {
            display("TEST 2A - 3: FAIL [Sequence of Rational Numbers]");
        }
    }
    
    function util4() {
        const s = arithmetic_sequence(-5, -1);
        if (is_pair(s) && equal(eval_stream(s, 5), list(-5, -6, -7, -8, -9))) {
            display("TEST 2A - 4: PASS [Sequence of Negative Numbers]");
        } else {
            display("TEST 2A - 4: FAIL [Sequence of Negative Numbers]");
        }
    }
    
    function util5() {
        const s = arithmetic_sequence(-5, -1);
        if (is_pair(s) && is_function(tail(s))) {
            display("TEST 2A - 5: PASS [Sequence uses streams]");
        } else {
            display("TEST 2A - 5: FAIL [Sequence should use streams]");
        }
    }
    
    util1();
    util2();
    util3();
    util4();
    util5();
}

function test2B() {
    
    function util1() {
        const s = geometric_sequence(1, 2);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 2, 4, 8, 16))) {
            display("TEST 2B - 1: PASS [Powers of 2]");
        } else {
            display("TEST 2B - 1: FAIL [Powers of 2]");
        }
    }
    
    function util2() {
        const s = geometric_sequence(1, 1);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 1, 1, 1, 1))) {
            display("TEST 2B - 2: PASS [Sequence of Ones]");
        } else {
            display("TEST 2B - 2: FAIL [Sequence of Ones]");
        }
    }
    
    function util3() {
        const s = geometric_sequence(1, 0.5);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 0.5, 0.25, 0.125, 0.0625))) {
            display("TEST 2B - 3: PASS [Sequence of Rational Numbers]");
        } else {
            display("TEST 2B - 3: FAIL [Sequence of Rational Numbers]");
        }
    }
    
    function util4() {
        const s = geometric_sequence(-5, -1);
        if (is_pair(s) && equal(eval_stream(s, 5), list(-5, 5, -5, 5, -5))) {
            display("TEST 2B - 4: PASS [Sequence of Negative Numbers]");
        } else {
            display("TEST 2B - 4: FAIL [Sequence of Negative Numbers]");
        }
    }
    
    function util5() {
        const s = geometric_sequence(1, 2);
        if (is_pair(s) && is_function(tail(s))) {
            display("TEST 2B - 5: PASS [Sequence uses streams]");
        } else {
            display("TEST 2B - 5: FAIL [Sequence should use streams]");
        }
    }
    
    util1();
    util2();
    util3();
    util4();
    util5();
}

function test2C() {
    
    function util1() {
        const s = recurrence(1, 1, (a, b) => a + b);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 1, 2, 3, 5))) {
            display("TEST 2C - 1: PASS [Normal Recurrence]");
        } else {
            display("TEST 2C - 1: FAIL [Normal Recurrence]");
        }
    }
    
    function util2() {
        const s = recurrence(1, 3, (a, b) => 2 * a + b);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 3, 5, 11, 21))) {
            display("TEST 2C - 2: PASS [Correct Order of Parameters]");
        } else {
            display("TEST 2C - 2: FAIL [Correct Order of Parameters]");
        }
    }
    
    function util3() {
        const s = recurrence(1, 0.5, (a, b) => a + b);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, 0.5, 1.5, 2, 3.5))) {
            display("TEST 2C - 3: PASS [Sequence of Rational Numbers]");
        } else {
            display("TEST 2C - 3: FAIL [Sequence of Rational Numbers]");
        }
    }
    
    function util4() {
        const s = recurrence(1, -1, (a, b) => a + b);
        if (is_pair(s) && equal(eval_stream(s, 5), list(1, -1, 0, -1, -1))) {
            display("TEST 2C - 4: PASS [Sequence of Negative Numbers]");
        } else {
            display("TEST 2C - 4: FAIL [Sequence of Negative Numbers]");
        }
    }
    
    function util5() {
        const s = recurrence(1, 2, (a, b) => a);
        if (is_pair(s) && is_function(tail(s))) {
            display("TEST 2C - 5: PASS [Sequence uses streams]");
        } else {
            display("TEST 2C - 5: FAIL [Sequence should use streams]");
        }
    }
    
    util1();
    util2();
    util3();
    util4();
    util5();
}

function test2D() {
    
    function dummy_sequences(a, b) {
        return pair(a, () => dummy_sequences(a + b, b));
    }
    
    const a = dummy_sequences(0, 1);
    const b = dummy_sequences(10, 1);
    const c = dummy_sequences(100, 1);
    
    function util1() {
        const s = zip_sequences(list(a, b, c));
        if (is_pair(s) && equal(eval_stream(s, 15), list(0, 10, 100, 1, 11, 101, 2, 12, 102, 3, 13, 103, 4, 14, 104))) {
            display("TEST 2D - 1: PASS [List of Sequences]");
        } else {
            display("TEST 2D - 1: FAIL [List of Sequences]");
        }
    }
    
    function util2() {
        const s = zip_sequences(list(a));
        if (is_pair(s) && equal(eval_stream(s, 5), list(0, 1, 2, 3, 4))) {
            display("TEST 2D - 2: PASS [Single Sequence in List]");
        } else {
            display("TEST 2D - 2: FAIL [Single Sequence in List]");
        }
    }
    
    function util3() {
        const s = zip_sequences(null);
        if (equal(s, null)) {
            display("TEST 2D - 3: PASS [Empty List]");
        } else {
            display("TEST 2D - 3: FAIL [Empty List]");
        }
    }
    
    util1();
    util2();
    util3();
}

function test2E() {
    
    function dummy_sequences(a, b) {
        return pair(a, () => dummy_sequences(a + b, b));
    }
    
    const a = dummy_sequences(0, 1);
    const b = dummy_sequences(10, 1);
    const c = dummy_sequences(100, 1);
    
    function util1() {
        const s = sum_sequences(list(a, b, c));
        if (is_pair(s) && equal(eval_stream(s, 5), list(110, 113, 116, 119, 122))) {
            display("TEST 2E - 1: PASS [List of Sequences]");
        } else {
            display("TEST 2E - 1: FAIL [List of Sequences]");
        }
    }
    
    function util2() {
        const s = sum_sequences(list(a));
        if (is_pair(s) && equal(eval_stream(s, 5), eval_stream(a, 5))) {
            display("TEST 2E - 2: PASS [Single Sequence in List]");
        } else {
            display("TEST 2E - 2: FAIL [Single Sequence in List]");
        }
    }
    
    function util3() {
        const s = sum_sequences(null);
        if (equal(s, null)) {
            display("TEST 2E - 3: PASS [Empty List]");
        } else {
            display("TEST 2E - 3: FAIL [Empty List]");
        }
    }
    
    util1();
    util2();
    util3();
}

function test3() {
    
    function util1() {
        const M = [[1,2,3],[4,5,6],[7,8,9]];
        const lst = traverse_diagonally(M);
        if (is_list(lst) && equal(lst, list(1, 2, 4, 7, 5, 3, 6, 8, 9))) {
            display("TEST 3 - 1: PASS [Public Test Case]");   
        } else {
            display("TEST 3 - 1: FAIL [Public Test Case]");
        }
    }
    
    function util2() {
        const M = [[1]];
        const lst = traverse_diagonally(M);
        if (is_list(lst) && equal(lst, list(1))) {
            display("TEST 3 - 2: PASS [Single Array Element]");
        } else {
            display("TEST 3 - 2: FAIL [Single Array Element]");
        }
    }
    
    function util3() {
        const M = [];
        if (is_null(traverse_diagonally(M))) {
            display("TEST 3 - 3: PASS [Empty Array]");
        } else {
            display("TEST 3 - 3: FAIL [Empty Array]");
        }
    }
    
    util1();
    util2();
    util3();
}

function test4() {
    
    function util1() {
        const rooms = [[1, 2, 3, 4], 
					     [5, 0, 7, 7], 
					     [9, 0, 1, 0], 
							 [5, 1, 7, 0], 
							 [6, 1, 1, 1]];
		const path = find_shortest_path(rooms);
		if (is_number(path) && path === 5) {
		    display("TEST 4 - 1: PASS [Public Test Case]");
		} else {
		    display("TEST 4 - 1: FAIL [Public Test Case]");
		}
    }
    
    function util2() {
        const rooms = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
		const path = find_shortest_path(rooms);
		if (is_number(path) && path === 5) {
		    display("TEST 4 - 2: PASS [Same Rooms Time]");
		} else {
		    display("TEST 4 - 2: FAIL [Same Rooms Time]");
		}
    }
    
    function util3() {
        const rooms = [[0, 0, 0, 0], [0, 0, 0, 0]];
		const path = find_shortest_path(rooms);
		if (is_number(path) && path === 0) {
		    display("TEST 4 - 3: PASS [Zero Matrix]");
		} else {
		    display("TEST 4 - 3: FAIL [Zero Matrix]");
		}
    }
    
    function util4() {
        const rooms = [[1]];
		const path = find_shortest_path(rooms);
		if (is_number(path) && path === 1) {
		    display("TEST 4 - 4: PASS [Single Element Array]");
		} else {
		    display("TEST 4 - 4: FAIL [Single Element Array]");
		}
    }
    
    util1();
    util2();
    util3();
    util4();
}

function test1() {
    test1A();
    test1B();
    test1C();
}

function test2() {
    test2A();
    test2B();
    test2C();
    test2D();
    test2E();
}

function test() {
    test1();
    test2();
    test3();
    test4();
}