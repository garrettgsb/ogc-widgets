const BottomBar = ({ selections, appData }) => {

  // const pillList = Object.values(selections.filter((selected) => { return selected === true }));
  const pillList = [];
  for (const [key, value] of Object.entries(selections)) {
    if (value === true) {
      pillList.push(key);
    }
  };

  function sumPrices(appData, selections) {
    let total = 0;
    appData.forEach(item => {
      if (selections[item.title]) {
        total += item.price;
      }
    });
    return total;
  }

  return (
    <div>
      <h1>Total ${sumPrices(appData, selections)}</h1>
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
    </div>
  )
}

export default BottomBar;