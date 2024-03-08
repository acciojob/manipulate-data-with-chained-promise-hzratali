//your JS code here. If required.
function manipulateData(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

const outputElement = document.getElementById('output');

manipulateData([1, 2, 3, 4])
  .then((array) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then((result) => {
    outputElement.textContent = result.join(', ');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
