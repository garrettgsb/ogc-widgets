const BottomBar = ({ appCategories, selections }) => {

  // const pillList = Object.values(selections.filter((selected) => { return selected === true }));
  const pillList = [];
  for (const [key, value] of Object.entries(selections)) {
    if (value === true) {
      pillList.push(key);
    }
  };
  return (
    <aside className="bottombar">
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