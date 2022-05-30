let a = 5;
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;
function find(a, b) {
    for (let i = 0; i < b.length; i++) {
        if (a == b[i]) {
            return i;
        }
    }return 'khong nam trong mang'
}
find(a, b);
console.log(find(a,b));