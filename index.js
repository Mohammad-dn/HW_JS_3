const calculator = {
    leftNumber: +prompt("add fisrt number"),
    opration: prompt("add oprator"),
    rightNumber: +prompt("add secound number"),
    result: 0,
  
    jamee: () => {
      calculator.result = calculator.leftNumber + calculator.rightNumber;
      console.log(calculator.result);
    },
    zarb: ()=>{
      calculator.result=calculator.leftNumber*calculator.rightNumber
      console.log(calculator.result);
    },
    taghsim: ()=>{
      calculator.result=calculator.leftNumber/calculator.rightNumber
      console.log(calculator.result);
    },
    tafrigh:()=>{
      calculator.result=calculator.leftNumber-calculator.rightNumber
      console.log(calculator.result);
    },
    calcOpration:()=>{
  switch(calculator.opration){
      case "+":
           calculator.jamee()
          break;
              case "*":
           calculator.zarb()
                  break;
      case "/":
          calculator.taghsim()
          break;
          case "-":
              calculator.tafrigh()
              break
              default:
                  console.log("000")
  
  
          }
      }
  }
  calculator.calcOpration()