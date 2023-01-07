import { getDates } from "./dateHelpers";

async function selectDate() {
  var datesFound = await getDates();
  var incompleteDates = await filterCompletedDates(datesFound.data, false);
  var completeDates = await filterCompletedDates(datesFound.data, true);
  var incompleteDateCategoryCount = sortDatesByCategory(incompleteDates);
  var pickedCategory = pickACategory(incompleteDateCategoryCount, incompleteDates.length);
  var dateSelected = getDatesFromCategory(incompleteDates, pickedCategory);
  return dateSelected;
}
function filterCompletedDates(data: any[], completed: boolean) {
  var searchStatus = 'Incomplete';
  if (completed) 
    searchStatus = 'Complete'
  var filterCompletedDates = data.filter((i: { Status: string; }) => i.Status == searchStatus);
  return filterCompletedDates;
}
function sortDatesByCategory(data: any[]) {
  var categoryCounts = new Array();
  const uniqueCategories = Array.from(new Set(data.map((item: { DateCategory: any; }) => item.DateCategory)));
  let i = 0;
  while (i < uniqueCategories.length) {
    var categoryToAdd = uniqueCategories[i];
    var categoryCount = data.filter(i => i.DateCategory == categoryToAdd).length;
    categoryCounts.push([categoryToAdd,categoryCount]);
    i++;
  }
  return categoryCounts;
}
function getDatesFromCategory(data: any[], category: string) {
  var categoryDates = data.filter((i: {DateCategory: string; }) => i.DateCategory == category);
  var randomDateNumber = Math.ceil(Math.random() * categoryDates.length) - 1;
  if (randomDateNumber < 0)
    randomDateNumber = 0;
  var dateFound = categoryDates[randomDateNumber];
  return dateFound;
}
function pickACategory(data: any[], totalCount: number) {
  var currentCounter = 0;
  var i = 0;
  var randomStopper = Math.random() * totalCount;
  while (i < data.length) {
    currentCounter += data[i][1];
    if (randomStopper <= currentCounter)
      return data[i][0];
    i++;
  }
  //get a random number from 1 to totalCount
  //loop through array
  //if the random number is less than or equal to i.count + currentCounter, set that category as the important one and return, breaking the loop.
  //
}
export {
  selectDate
}
/*export {
  addDate,
  getMyDates
}*/