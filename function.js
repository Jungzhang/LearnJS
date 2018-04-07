function fun(x) {
    for (var i = 0; i < arguments.length; ++i) {
        console.log(arguments[i])
    }
}

fun(1,2,3,4,5,6,7,8,9,0,1000,"hello", "world");