import { useState } from 'react';
import { data as appData, CATEGORIES as appCategories } from './appData.js';
import SideBar from './SideBar';
import BottomBar from './BottomBar';

const OneThirdTwoThirds = (props) => {
  return (
    <main className='one-third-two-thirds'>
      { props.children}
    </main>
  )
}

const LeftSideData = ({ items, setRightSideFocus }) => {
  return (
    <aside className='one-third'>
      {items.map((item) => {
        return (
          <>
            <h3 className="menu-item" onClick={() => setRightSideFocus(item)}>{item.title}</h3>
            {/* <img /> */}
          </>
        )
      })}
    </aside>
  )
}

const RightSideData = ({ rightSideFocus }) => {
  console.log(rightSideFocus);
  return (
    <aside className='two-third'>

      { rightSideFocus.title === undefined ? <h1>Click for more info</h1> : <h1>{rightSideFocus.title}</h1>}

    </aside>
  )
}

const VansCategory = ({ items, rightSideFocus, setRightSideFocus }) => {
  return (
    <OneThirdTwoThirds>
      <LeftSideData items={items} setRightSideFocus={setRightSideFocus} />
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
const ContentArea = ({ items }) => {
  const [rightSideFocus, setRightSideFocus] = useState([]);

  return (
    <section className="content-area">
      { true && <VansCategory items={items} rightSideFocus={rightSideFocus} setRightSideFocus={setRightSideFocus}></VansCategory>}
      { false && <WeaponsCategory items={items}></WeaponsCategory>}
    </section>
  )
}

const PaneManagerWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.values(appCategories)[0]);

  const items = appData.filter((item) => item.categories.includes(selectedCategory));
  return (
    <main className="layout-manager">
      {/* <p>{JSON.stringify(appData)}</p> */}
      <SideBar categories={appCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ContentArea items={items} />
      <BottomBar />
    </main>


  )
}

export default PaneManagerWidget;