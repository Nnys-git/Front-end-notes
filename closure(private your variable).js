// 用閉包 (Closure) 模擬物件導向中的私有成員 (Private Member)
// 我們可以用 closure 的特性，模擬物件導向中的私有成員 (private member)。這個方法有時又被稱作 Module Pattern。
// 下面這個範例，我們創造一個 counter 物件，並提供三個方法存取物件內部的 count 變數。

function makeCounter() {
    let count = 0;
    function changeBy(val) {
      count += val;
    }
  
    return {
      increment: function() {
        changeBy(1)
      },
      decrement: function() {
        changeBy(-1)
      },
      value: function() {
        return count
      }
    };
  };
  
  const counter = makeCounter();
  
  console.log(counter.value()); // 0
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2
  counter.decrement();
  console.log(counter.value()); // 1

//   因為 closure 的特性，counter 物件的三個方法 increment()、decrement() 和 value() 能夠存取同一個語彙環境 (Lexical Environment)，所以這三個方法能夠存取 makeCounter() 中的同一個 count 變數及 changeBy() 函式。

// 透過呼叫這三個方法，我們能夠改變或讀取隱藏起來的 count 變數。

// 值得注意的是，除非透過 counter 物件上的 increment()、decrement() 或 value() 方法，我們沒辦法直接存取其內部的 count 變數。因此這裏的 count 就相當於物件導向中的私有成員變數 (private member)。

// 不僅如此，closure 還能夠達到資料隔離的效果。

// 延續上個例子，這裡利用 makeCounter() 函式產生了兩個物件 counter1 和 counter2:

const counter1 = makeCount();
const counter2 = makeCount();

counter1.increment();
counter1.increment();

counter2.decrement();

counter1.value(); // 2
counter2.value(); // -1

// 因為每次呼叫 makeCounter() 時都會產生新的一組環境，所以 counter1 和 counter2 擁有各自的 count 變數，不會互相干擾，達到資料互相隔離的效果。