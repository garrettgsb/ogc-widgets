import { useState } from 'react';
import { data as appData, CATEGORIES as appCategories } from './appData.js';

const SideBar = ({ categories, selectedCategory, setSelectedCategory }) => {

  return (
    <aside className="sidebar">
      {
        Object.values(categories).map((category) => {
          const classList = selectedCategory === category ? "menu-item selected" : "menu-item";
          return (
            <h3 className={classList} onClick={() => setSelectedCategory(category)} >{category}</h3>
          );
        })
      }

    </aside>
  )
}

const OneThirdTwoThirds = (props) => {
  return (
    <main className='one-third-two-thirds'>
      { props.children}
    </main>
  )
}

const LeftSideData = ({ itemList }) => {
  return (
    <aside className='one-third'>
      {itemList.map((item) => {
        return (
          <>
            <h3 className="menu-item selected" >{item.title}</h3>
            {/* <img /> */}
          </>
        )
      })}
    </aside>
  )
}

const VansCategory = () => {
  return (
    <OneThirdTwoThirds>
      <LeftSideData itemList={appData} />
      <section className='two-third'>

      </section>
    </OneThirdTwoThirds>
  )
}

const WeaponsCategory = () => (
  <OneThirdTwoThirds>
    <aside className='one-third'></aside>
    <section className='two-third'></section>
  </OneThirdTwoThirds>
);

const ContentArea = () => {
  return (
    <section className="content-area">
      { true && <VansCategory></VansCategory>}
      { false && <WeaponsCategory></WeaponsCategory>}
    </section>
  )
}
const BottomBar = () => {
  return (
    <aside className="bottombar">

    </aside>
  )
}
const PaneManagerWidget = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.values(appCategories)[0]);

  return (
    <main className="layout-manager">
      {/* <p>{JSON.stringify(appData)}</p> */}
      <SideBar categories={appCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ContentArea />
      <BottomBar />
    </main>


  )
}

export default PaneManagerWidget;