// 数组
var arr = [1, 2, 3, "Hello", "World"];
console.log(arr[3]);
console.log(arr.length);

// 直接改变大小
arr.length = 6;
console.log(arr);

// 越界也会改变大小
arr[6] = "23333";
console.log(arr.length);

// indexOf
console.log(arr.indexOf(3));
console.log(arr.indexOf("world"));

// 切片(左闭右开区间)
console.log(arr.slice(1, 4));

// 删除元素
arr.push(1, 2, 3); // 向尾部添加
console.log(arr);
arr.pop();    // 从尾部删除一个元素
console.log(arr);
arr.unshift(9, 8, 7); // 向头部添加
console.log(arr);
arr.shift(); // 从头部删除一个元素 空数组返回undefined
console.log(arr);

// 排序
var numArr = [2, 6, 3, 2, 6, 9, 0, -1, 34];
numArr.sort();
console.log(numArr); // 默认,升序
// 降序
numArr.sort(function (a, b) {
    return a < b;
});
numArr;

// 反转
numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numArr);
numArr.reverse();
numArr;

// splice: 从指定的索引开始删除若干元素，然后再从该位置添加若干元素，返回删除的元素
// 可以控制删除和插入的个数等来达到对数组的"万能"操作
numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numArr.splice(1, 3, 1, 1, 1));
numArr;


