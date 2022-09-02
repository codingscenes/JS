const fillHtml = (data) => {
  let htmlData = null;
  if (typeof data === 'object' && data.hasOwnProperty('length')) {
    htmlData = data;
  } else {
    htmlData = [data];
  }
  htmlData.forEach((eachOne, index) => {
    if (eachOne.hasOwnProperty('status')) {
      const box = document.getElementById(`id${index + 1}`);
      const statusElem = box.getElementsByClassName('status')[0];
      statusElem.textContent = eachOne.status;
    } else {
      const box = document.getElementById(`id${index + 1}`);
      const idElem = box.getElementsByClassName('userId')[0];
      const titleElem = box.getElementsByClassName('title')[0];
      const completedElem = box.getElementsByClassName('completed')[0];
      idElem.textContent = eachOne.id;
      titleElem.textContent = eachOne.title;
      completedElem.textContent = eachOne.completed
        ? 'Good Job'
        : 'Keep trying';
    }
  });
};

const fillCatch = (err) => {
  document.getElementById('error').textContent = 'ERROR';
};

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const fetchToDo = (url, timeMs = 0) => {
  return delay(timeMs)
    .then(() => {
      return fetch(url);
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject('An error occurred. Please try again!');
    });
};

const url1 = `https://jsonplaceholder.cypress.io/todos/1`;
const url2 = `https://jsonplaceholder.cypress.io/todos/2`;
const url3 = `https://jsonplaceholder.cypress.io/todos/3`;
const url4 = `https://jsonplaceholder.cypress.io/todos/4`;

const p1 = fetchToDo(url1);
const p2 = fetchToDo(url2);
const p3 = fetchToDo(url3);
const p4 = fetchToDo(url4);

// Using Promise static //.all.any

// .allSettled()
const resultPromise = Promise.all([p1, p2, p3, p4])
// extracting data from result promise
resultPromise.then((response) => {
  console.log('response', response);
  fillHtml(response)
}).catch((error) => {
  console.log('error', error);
  fillCatch(error)
})

