const BottomBar = ({ appCategories, chosenCategories }) => {

  const catgegoryList = Object.keys(appCategories);
  return (
    <aside className="bottombar">
      <h1>Progress</h1>
      {catgegoryList.map((category) => {
        const hasChosen = chosenCategories.includes(category) ? "chosen" : "not-chosen";
        return (
          <h3 className={hasChosen}>{category}</h3>
        )
      })}

    </aside>
  )
}

export default BottomBar;