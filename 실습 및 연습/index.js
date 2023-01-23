var array1 = ['one', 'tow'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2); // concat 함수 배열이나 문자열을 합치는 함수 array1과 array2를 합침
var combined = [].concat(array1, array2); // 빈 배열에 array1과 array를 합침
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
function func(){
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1, args.length);
}
