// import React from React;

const SideBar = () => {
  return (
    <aside className="sidebar">

    </aside>
  )
}
const ContentArea = () => {
  return (
    <section className="content-area">

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