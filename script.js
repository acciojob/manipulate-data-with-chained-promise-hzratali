const arr = [1, 2, 3, 4];
function promise(arr, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, time);
  });
}
const op = document.getElementById("output");
promise(arr, 3000)
  .then((res) => {
    const evenArr = res.filter((num) => {
      return num % 2 === 0;
    });
    return promise(evenArr, 1000);
  })
  .then((res) => {

    op.innerText = res;
    const multiplyBy2 = res.map((num) => {
      return num * 2;
    });

    return promise(multiplyBy2, 2000);
  })
  .then((res) => {
    op.innerText = res;
  });