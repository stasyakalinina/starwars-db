const getResourse = async (url) => {
  let res = await fetch(url);
  let body = await res.json();
  return body;
};

getResourse('https://swapi.co/api/people/5/')
  .then((body) => {
    console.log(body);
  });