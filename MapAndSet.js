var m = new Map([["name", "Raiden"], ["score", 10]]); // 创建map

var m1 = new Map(); // 空Map
m.set("sex", "nam");  // 添加元素
m.has("sex");   // 是否有该元素
m.get("name");  // 获取键为name的值
m.delete("score"); // 删除键为score的键值对

var s = new Set(); // 空set
var s1 = new Set(["a", 1, 3, 6]);
s.add("q"); // 添加
s.delete("q"); // 删除
s.has("q"); // 是有否该元素
