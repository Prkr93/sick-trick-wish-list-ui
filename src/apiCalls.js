
const fetchData = (url) => {
  return fetch(url).then(response => response.json())
}


const trickData = fetchData('http://localhost:3001/api/v1/tricks')

export {trickData}
