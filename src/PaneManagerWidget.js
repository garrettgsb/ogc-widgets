import { useState } from 'react';
import { data as appData, CATEGORIES as appCategories } from './appData.js';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
// import aTeam from './assets/ateam.jpeg';

const OneThirdTwoThirds = (props) => {
  return (
    <main className='one-third-two-thirds'>
      {props.children}
    </main>
  )
}

const LeftSideData = ({ items, setRightSideFocus, rightSideFocus, updateSelected, selections }) => {

  return (
    <aside className='one-third'>
      {items.map((item) => {
        // console.log("item: ", item);
        // console.log("selections", selections)
        const isSelected = item === rightSideFocus ? "selected" : "";
        const isChosen = selections[item.title] ? "having-chosen" : "";
        const classList = ["menu-item", isSelected, isChosen].join(" ");
        // const classList = item === rightSideFocus ? "menu-item selected" : "menu-item";
        return (
          <>
            <h3 className={classList} onClick={() => setRightSideFocus(item)}>{item.title}</h3>
            <p>${item.price}</p>
            {/* <img src={aTeam} alt="The A Team" className="small-image" /> */}
            <button onClick={() => updateSelected(item.title)}>Add {item.title} to Project</button>
          </>
        )
      })}
    </aside>
  )
}

const RightSideData = ({ rightSideFocus }) => {
  // console.log(rightSideFocus);
  return (
    <aside className='two-third'>

      {rightSideFocus.title === undefined ?
        <h1>Click for more info</h1> :
        <div>
          <h1>{rightSideFocus.title}</h1>
          <p>${rightSideFocus.price}</p>
          <h4>Pros/Cons</h4>
          <ul className="attribute-list" >
            {rightSideFocus.pros.map((pro) => {
              return (
                <li className='pro'>{pro}</li>
              )
            })}
            {rightSideFocus.cons.map((con) => {
              return (
                <li className='con'>{con}</li>
              )
            })}
          </ul>
          <ul className="cons"></ul>
          <h4>Description</h4>
          <p>{rightSideFocus.blurb}</p>
        </div>

      }

    </aside>
  )
}

const VansCategory = ({ items, rightSideFocus, setRightSideFocus, updateSelected, selections }) => {
  return (
    <OneThirdTwoThirds>
      <LeftSideData items={items} setRightSideFocus={setRightSideFocus} rightSideFocus={rightSideFocus} updateSelected={updateSelected} selections={selections} />
      <RightSideData rightSideFocus={rightSideFocus} />

    </OneThirdTwoThirds>
  )
}

// not being rendered yet
const WeaponsCategory = ({ items }) => (
  <OneThirdTwoThirds>
    <LeftSideData items={items} />
    <section className='two-third'></section>
  </OneThirdTwoThirds>
);

// two types of selected; chosen and added to project
const ContentArea = ({ items, updateSelected, selections }) => {
  const [rightSideFocus, setRightSideFocus] = useState([]);

  return (
    <section className="content-area">
      {true && <VansCategory items={items} rightSideFocus={rightSideFocus} setRightSideFocus={setRightSideFocus} updateSelected={updateSelected} selections={selections}></VansCategory>}
      {false && <WeaponsCategory items={items}></WeaponsCategory>}
    </section>
  )
}

const PaneManagerWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.values(appCategories)[0]);
  const [selections, setSelections] = useState([]);

  function getPriceByCategory(category, selections, appData) {
    const selectedItemsInCategory = getSelectedItemsByCategory(category, selections, appData)
    return selectedItemsInCategory.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  function getSelectedItemsByCategory(category, selections, appData) {
    return appData.filter(item => matchesCategory(item, category) && isSelected(item, selections))
  }

  function matchesCategory(item, category) {
    if (item.categories === category) {
      return true
    }
    return false;
  }

  function isSelected(item, selections) {
    if (selections[item.title]) {
      return true;
    }
    return false;
  }

  // function getCategoryOfSelected(category, selections, appData){
  //   filter by category = van;
  //   filter by selections = {mystery: true, partywa: true}

  //   return = [{mysterymachine object from appData}, {party wagon object from appData}]
  //   //return an array objects that are a part of that category
  // }

  // function gCOS(c, s, a) {
  //   return appData.filter(item => isInCategory(item, category) && isSelected(item, selections));
  // }

  // function computePrice(getCategorySelected) {
  //   // take in set and appData
  //   go over the obj and collect price
  //   // sum the price for every item in the set
  //   // return a total
  // }

  function updateSelected(selection) {
    if (selections[selection]) {
      setSelections({ ...selections, [selection]: !selections[selection] });
      // console.log(selections);
    } else {
      setSelections({ ...selections, [selection]: true });
      // console.log(selections);
    };
  }

  const items = appData.filter((item) => item.categories.includes(selectedCategory));
  return (
    <main className="layout-manager">
      {/* <p>{JSON.stringify(appData)}</p> */}
      <SideBar categories={appCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selections={selections} appData={appData} />
      <ContentArea items={items} updateSelected={updateSelected} selections={selections} />
      <BottomBar appCategories={appCategories} selections={selections} />
    </main>


  )
}

export default PaneManagerWidget;