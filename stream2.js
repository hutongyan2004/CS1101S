const x = stream_map(display, enum_stream(0, 10));
/*
function stream_map_optimized(f, s) {
    return is_null(s)
    ? null
    : pair(f(head(s)),
    memo_fun( () => stream_map_optimized(f, stream_tail(s)) ));
}*/
//stream_ref(x, 3);
//stream_ref(x, 5);
function zip_list_of_stream(ss) {
    return pair(head(head(ss)),
    () => zip_list_of_stream(
            append(tail(ss),
                    list(stream_tail(head(ss))))));
}
function add_streams(s1, s2) {
    return is_null(s1)
    ? s2
    : is_null(s2)
    ? s1
    : pair(head(s1) + head(s2),
    () => add_streams(stream_tail(s1),stream_tail(s2)));
}
function partial_sums(s) {
    return pair(head(s),
    () =>add_streams(stream_tail(s),partial_sums(s)));
}
const ones = pair(1,() => ones);
const twos = pair(2,() => twos);
const threes = pair(3,() => threes);
const integers =integers_from(1);
eval_stream(partial_sums(integers),10);
/*
stream_ref(ones,1000);
eval_stream(zip_list_of_stream(list(ones,twos,threes)),10);
*/
