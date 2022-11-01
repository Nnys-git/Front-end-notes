function getData(name) {
  if (name == "Johnny") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "Johnny Lin", age: Math.floor(Math.random() * 300) }),
          2000;
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Error: You have not allowed to access!")), 2000;
      });
    });
  }
}

function getMovies(age) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      //別忘了setTimeout()裡的parameter也是個callback function
      setTimeout(() => {
        resolve("Anime movies.");
      }, 1000);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Teen movies.");
      }, 1000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Sorry too old"));
      }, 1000);
    });
  }
}

getData("Johnny")
  .then((obj) =>{
    console.log(obj);
    return getMovies(obj.age);//我先從getData取得return 回來的Promise物件從中取得age
    //再把age帶入getMovies()執行
    //透過把兩個then串在一起可以有效改善Callback hell問題
  })
  .then((mes) => {
    //getMovies()執行後的結果再印出來
    console.log(mes);
  })
  .catch((err) => {
    console.log(err);
    //注意: 這邊的catch()抓到的error端看哪個reject先發生而決定!
  });

  /**
   * getData("Johnny").then((obj) => {
    return getMovies(obj.age);
    })
    注意: arrow function 裡面的code
    如果有return需求，可以把大括號拿掉，return刪掉
    只留下那行code 他會自動執行return
    
    getData("Johnny").then(obj => getMovies(obj.age))
    這樣的方式就跟上面那行一樣的(但要注意 obj不能再加括號, 裡面的code不能有 ;)
   * 
   */