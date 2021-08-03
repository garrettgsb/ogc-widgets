// import React from React;

const SideBar = () => {
  return (
    <aside className="sidebar">


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

const VansCategory = () => {
  return (
    <OneThirdTwoThirds>
      <aside></aside>
      <section></section>
    </OneThirdTwoThirds>
  )
}

const WeaponsCategory = () => (
  <OneThirdTwoThirds>
    <aside></aside>
    <section></section>
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

      <SideBar />
      <ContentArea />
      <BottomBar />
    </main>


  )
}

export default PaneManagerWidget;