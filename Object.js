// 对象, JS的对象类似JSON，就是一堆键值的集合，如：
var xiaoming = {
    name: 'xiaoming',
    sex: 'nan',
    age: 16,
    'mid-school': 'xinhua'
};
// 访问：
xiaoming.age = 20;
xiaoming["mid-school"] = '蓝翔';

// 新增属性
xiaoming.score = 100;
console.log(xiaoming.aaa); // undefined
delete xiaoming.sex;  // 删除属性

'name' in xiaoming; // 是否在对象中
