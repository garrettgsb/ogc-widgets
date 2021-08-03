// import React from React;
import { data as appData, CATEGORIES as appCategories } from './appData.js';

const SideBar = ({ categories }) => {
  return (
    <aside className="sidebar">
      {
        Object.values(categories).map((category) => {
          return (
            <h3>{category}</h3>
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
            <h3>{item.title}</h3>
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
  return (
    <main className="layout-manager">
      {/* <p>{JSON.stringify(appData)}</p> */}
      <SideBar categories={appCategories} />
      <ContentArea />
      <BottomBar />
    </main>


  )
}

export default PaneManagerWidget;