async function getDates() {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  return await fetch(
    'https://v1.nocodeapi.com/ngoh95/google_sheets/gyztuhiFWHVuUmpy?tabId=Sheet1',
    {
      method: 'get',
      headers,
      redirect: 'follow'
    }
  )
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

function addDate() {

}

export {
  getDates,
  addDate
}
