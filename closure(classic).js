const varGlobal = 'x'

function outer(paramOuter){
  const varOuter ='y'

  function inner(paramInner){
    const varInner ='z'
    //print
    console.log(varGlobal) //x =>因為Lexical scoping，會向外找varGlobal
    console.log(varOuter) //y =>因為Lexical scoping，會向外找varOuter
    console.log(varInner) //z =>優先找到function scope內的varInner
    console.log(paramOuter) //a =>因為下面assign func=outer('c'), 所以印出帶入outer的'c'
    console.log(paramInner) //b =>因為func就代表inner這個函數，func('b')也就代表inner帶入的值是'b'
  }
  return inner //function也是個物件，可以把物件丟出去!
}

const func = outer('a'); //這邊outer()回傳的會是inner這個 function物件
// console.log(func); //[Function: inner] 
func('b');

