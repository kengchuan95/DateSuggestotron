
function addDate() {

}
function getMyDates() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
let datesFound;
var result = fetch("https://v1.nocodeapi.com/ngoh95/google_sheets/gyztuhiFWHVuUmpy?tabId=Sheet1", {
  method: "get",
  headers: myHeaders,
  redirect: "follow",

})
.then(response => response.text())
.then(result => displayArray(result))
.catch(error => console.log('error', error));
}
function displayArray(result: string) {
  var parse = JSON.parse(result);
  console.log(parse);
}
export {
  addDate,
  getMyDates
}
/*export {
  addDate,
  getMyDates
}*/