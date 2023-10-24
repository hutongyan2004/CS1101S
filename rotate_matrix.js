function swap (A,x1,y1,x2,y2)  {
    let t = A[x1][y1];
    A[x1][y1] = A[x2][y2];
    A[x2][y2] = t;
}
function rotate_matrix(A) {
    //const row = length(A);
    //const col = length(A[0]);
    const n = array_length(A);
    const half = math_floor(n/2);
    for(let i = 0; i < half; i = i + 1) {
        for(let j = 0; j < half; j = j + 1) {
                                            //4 corner A[0][0] A[0][n-1]
            swap(A,i,j,n-1-j,i); //1,3    // A[n-1][0] A[n-1][n-1]
            swap(A,n-1-j,i,n-1-i,n-1-j); // 3,4 //A[i][j] A[j][n-1-i]
            swap(A,j,n-1-i,n-1-i,n-1-j);// 2 4 A[n-1-i][j] A[n-1-i][n-1-j]
        }
    }
}
const M1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
const M2 = [[1,2],[3,4]];
rotate_matrix(M1);
M1;