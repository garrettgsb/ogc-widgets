import ProgressBar from './ProgressBar';

const BottomBar = ({ selections, appData }) => {

  // const pillList = Object.values(selections.filter((selected) => { return selected === true }));
  const pillList = [];
  for (const [key, value] of Object.entries(selections)) {
    if (value === true) {
      pillList.push(key);
    }
  };

  function sumSelectedPrices(appData, selections) {
    // let total = 0;
    // appData.forEach(item => {
    //   if (selections[item.title]) {
    //     total += item.price;
    //   }
    // });
    return appData.reduce((acc, item) => selections[item.title] ? acc + item.price : acc, 0);
  }

  return (
    <div>
      <h1>Total ${sumSelectedPrices(appData, selections)}</h1>
      <ProgressBar value={40} max={80} />
      <ProgressBar value={10} max={80} />
      <ProgressBar value={70} max={80} />

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