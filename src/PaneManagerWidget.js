import { useState } from 'react';
import { data as appData, CATEGORIES as appCategories } from './appData.js';
import SideBar from './SideBar';
import BottomBar from './BottomBar';
import aTeam from './assets/ateam.jpeg';

const OneThirdTwoThirds = (props) => {
  return (
    <main className='one-third-two-thirds'>
      { props.children}
    </main>
  )
}

const LeftSideData = ({ items, setRightSideFocus, rightSideFocus, updateSelected }) => {

  return (
    <aside className='one-third'>
      {items.map((item) => {
        const classList = item === rightSideFocus ? "menu-item selected" : "menu-item";
        return (
          <>
            <h3 className={classList} onClick={() => setRightSideFocus(item)}>{item.title}</h3>
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

      { rightSideFocus.title === undefined ?
        <h1>Click for more info</h1> :
        <div>
          <h1>{rightSideFocus.title}</h1>
          <h4>Pros</h4>
          <ul>{rightSideFocus.pros.map((pro) => {
            return (
              <li>{pro}</li>
            )
          })}</ul>
          <h4>Cons</h4>
          <ul>{rightSideFocus.cons.map((con) => {
            return (
              <li>{con}</li>
            )
          })}</ul>
          <h4>Description</h4>
          <p>{rightSideFocus.blurb}</p>

        </div>

      }

    </aside>
  )
}

const VansCategory = ({ items, rightSideFocus, setRightSideFocus, updateSelected }) => {
  return (
    <OneThirdTwoThirds>
      <LeftSideData items={items} setRightSideFocus={setRightSideFocus} rightSideFocus={rightSideFocus} updateSelected={updateSelected} />
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
const ContentArea = ({ items, updateSelected }) => {
  const [rightSideFocus, setRightSideFocus] = useState([]);

  return (
    <section className="content-area">
      { true && <VansCategory items={items} rightSideFocus={rightSideFocus} setRightSideFocus={setRightSideFocus} updateSelected={updateSelected}></VansCategory>}
      { false && <WeaponsCategory items={items}></WeaponsCategory>}
    </section>
  )
}

const PaneManagerWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.values(appCategories)[0]);
  const [chosenCategories, setChosenCategories] = useState([]);
  const [selections, setSelections] = useState([]);

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
      <SideBar categories={appCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ContentArea items={items} updateSelected={updateSelected} />
      <BottomBar appCategories={appCategories} chosenCategories={chosenCategories} selections={selections} />
    </main>


  )
}

export default PaneManagerWidget;