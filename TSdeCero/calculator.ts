type Operation = "multiply" | "add" | "divide"
type Result = number

const calculator = (a: number, b: number, op: Operation): Result  =>{

  if (op == "multiply") return a * b
  if (op == "add") return a + b
  if (op == "divide") {
    if (b == 0) throw new Error ("Can't divide by 0!")
    return a / b
  }
  throw new Error ("Operation is not valid!")
}

console.log(calculator(4,3, "multiply"))