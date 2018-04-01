var m = new Map();

m.set("hello", "world");
m.set(1, "hello");

var s = new Set();

s.add(1);
s.add("123");
s.add("hello");
s.add(true);

for (var x of m) {
    console.log(x)
}

for (var x of s) {
    console.log(x)
}
