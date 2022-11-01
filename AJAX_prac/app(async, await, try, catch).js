function getData(name) {
  if (name == "Johnny") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "Johnny Lin", age: Math.floor(Math.random() * 10) }),
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
        resolve({text:"Anime movies."});
      }, 1000);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({text:"Teen movies."});
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
// async await try catch
async function showMovie() {
  try{  
  //把原本要執行的code放進try這個區塊裡，JS就會看懂裡面的code可能成功或失敗
  //想知道是否成功成功的話就把log設在try裡面
  //因為若失敗，JS會就做catch裡面的事
  const obj = await getData("Johnny"); 
  const movie = await getMovies(obj.age);
  console.log(obj);
  console.log(movie.text);
  } catch (err){
    console.log(err);
  }
}
showMovie();
