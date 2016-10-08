function select(){
    var from = document.getElementById("fromList").value;
    var to = document.getElementById("toList").value;
    var num = document.getElementById("fromText").value;
    //binary to decimal
    if (from == 1 && to == 2) {
        document.getElementById("toText").value = binaryToDecimal(num);
    }
    //decimal to binary
    else if (from == 2 && to == 1){
        document.getElementById("toText").value = decimalToBinary(num);
    }
    //binary to Fibonacci
    else if (from == 1 && to == 3) {
        document.getElementById("toText").value = binaryToFib(num);
    }
    //Fibonacci to binary
    else if (from == 3 && to == 1) {
        document.getElementById("toText").value = "WIP";
    }
    //decimal to Fibonacci
    else if (from == 2 && to == 3){
        document.getElementById("toText").value = binaryToFib(decimalToBinary(num));
    }
    //Fibonacci to decimal
    else if (from == 3 && to == 2){
        document.getElementById("toText").value = "WIP";
    }

}

function fib(n){
    var a = 1;
    var b = 1;
    var temp;
    for (var i=0; i<n-1; i++){
        temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}

function binaryToDecimal(num){
    num = num.split("").reverse().join("");

    var count = 0.0;
    var pos = 0;
    for (var i=0; i<num.length; i++){
        if(num[i] == "1")
            count += Math.pow(2, pos);
        pos += 1;
    }
    return count.toString();
}

function decimalToBinary(num){
    var result = "";
    while (num != 0){
        if (num % 2 == 0)
            result += "0";
        else{
            result += "1";
        }
        num = Math.floor(num/2);
    }
    return result.split("").reverse().join("");
}

function binaryToFib(num) {
    num = num.split("").reverse().join("");
    var pos = 1;
    var count = 0;
    for (var i=0, len=num.length; i<len; i++) {
        if (num[i] == "1") {
            count += fib(pos);
        }
        pos += 1;

    }
    return count;
}

function reset() {
    document.getElementById("fromList").value = 0;
    document.getElementById("toList").value = 0;
    document.getElementById("fromText").value = "";
    document.getElementById("toText").value = "";
}
