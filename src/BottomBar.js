const BottomBar = ({ appCategories, chosenCategories, selections }) => {

  const catgegoryList = Object.keys(appCategories);
  // const pillList = Object.values(selections.filter((selected) => { return selected === true }));
  const pillList = [];
  for (const [key, value] of Object.entries(selections)) {
    if (value === true) {
      pillList.push(key);
    }
  };
  return (
    <aside className="bottombar">
      <h1>Progress</h1>
      {catgegoryList.map((category) => {
        const hasChosen = chosenCategories.includes(category) ? "chosen" : "not-chosen";
        return (
          <h3 className={hasChosen}>{category}</h3>
        )
      })}
      <h1>Item Pills</h1>
      {
        pillList.map((pill) => {
          return (
            <p>{pill}</p>
          )
        })
      }

    </aside>
  )
}

export default BottomBar;