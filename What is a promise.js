const promise = new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve("I'm a Promise!");
      }, 2000);
    },
    (reject) => {}
  );
  
  promise.then((value) => console.log(value));