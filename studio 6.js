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
    const combi_C = map((comb) => pair(headCoin, comb), combi_B);

    // Append combi_A and combi_C to get the final result.
    return append(combi_A, combi_C);
  }
}
makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
// list(1, 20, 1), list(1, 10, 5, 5, 1),
// list(1, 10, 5, 1, 5))
