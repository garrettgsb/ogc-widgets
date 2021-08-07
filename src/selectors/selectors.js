function completeCategories(selections, appCategories, appData) {
  const categoryList = [];
  // add a check mark to every category in selections
  const itemTitles = [];
  //for each key in selections return a category
  // make into a filter
  for (const selection in selections) {
    if (selections[selection] === true) {
      itemTitles.push(selection);
    }
  }

  // make into a reduce
  const newItem = itemTitles.forEach((title) => { // title = 'Mystery Machine'
    const matchingItem = appData.find((item) => { // item = { title: 'Mystery Machine', ... }
      return item.title === title;
    })
    const found = matchingItem.categories;
    categoryList.concat(found);
  })

  return categoryList;
}

function garrettsCompleteCategories(selections, appCategories, appData) {
  const itemTitles = Object.entries(selections).filter(([k, v]) => v).map(([k, v]) => k);
  return itemTitles.reduce((acc, title) => [...acc, ...appData.find((item) => item.title === title).categories], []);
}

export default completeCategories;


// const selectors = {
//   'Mystery Machine': true,
//   'Party Wagon': false,
//   'Flamethrower': true,
// };

// const appCategories = {
//   vans: 'Vans',
//   weapons: 'Weapons',
//   sensors: 'Sensors',
// }

// const appData = [

// ];

// item = appData.find(item => item.title === 'Mystery Machine');
// item.categories;


// // should return...?
// ['Vans', 'Sensors', 'Vans', 'Vans', 'Sensors']; // No weapons because no weapons selected?
// {
//   Vans: true,
//   Weapons: false,
//   Sensors: true
// }; // Maybe that instead?

// {categories.map(category => <li>{categoriesWithSelections.includes(category) && "☑️"}</li>)}
// {categories.map(category => <li>{categoriesWithSelections[category] && "☑️"}</li>)}