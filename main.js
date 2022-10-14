let result = []
const defaultValue = 50;
document.querySelector(".default-value").innerText = defaultValue

const statistics = ()=> {
    const fizzCount = result.filter(item => item === "Fizz")
    const buzzCount = result.filter(item => item === "Buzz").length
    const fizBuzzzCount = result.filter(item => item === "FizzBuzz").length
    
    document.querySelector(".fizz-count span").innerText = fizzCount.length
    document.querySelector(".buzz-count span").innerText = buzzCount
    document.querySelector(".fizzbuzz-count span").innerText = fizBuzzzCount

    result = []
}

function fizzBuzz() {
    let total = document.querySelector("#total")
    let totalValue = total.value  // 60

    // 1 = true
    // 10 = true
    // true = true
    // true = !false
    // true = !!!false
    
    // "" = false
    // "0" = true
    // 0 = false

    // false = false
    // false = !true
    // false = !!!true
    // let condition = (1 == 1)
    // let condition2 = !condition

    // let string = "word"
    // true = !!string


    if (!totalValue) {
        totalValue = defaultValue
        total.value = defaultValue
    }

    for (let i = 1; i <= totalValue; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            result.push("Fizz")
        }
        else if (i % 5 === 0) {
            result.push("Buzz")
        }
        else{
           // console.log(i);
        }
    }; 

    statistics();

    alert("Yippe!! Programme Done!")
};