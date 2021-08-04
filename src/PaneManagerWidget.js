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

const LeftSideData = ({ items }) => {
  return (
    <aside className='one-third'>
      {items.map((item) => {
        return (
          <>
            <h3 className="menu-item" >{item.title}</h3>
            {/* <img /> */}
          </>
        )
      })}
    </aside>
  )
}

const RightSideData = ({ items }) => {
  return (
    <h1>Right Side</h1>
  )
}

const VansCategory = ({ items }) => {
  return (
    <OneThirdTwoThirds>
      <LeftSideData items={items} />
      <RightSideData items={items} />


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
  return (
    <section className="content-area">
      { true && <VansCategory items={items}></VansCategory>}
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