import ProgressBar from './ProgressBar';
import { UserInputContext } from '../contexts';
import { useContext } from 'react';


const BottomBar = ({ selections, appData }) => {
  const { title, budget, updateSelected } = useContext(UserInputContext);
  // const pillList = Object.values(selections.filter((selected) => { return selected === true }));
  const pillList = [];
  const currentCost = sumSelectedPrices(appData, selections);
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
    <div className="bottombar">
      <h2>{title}</h2>
      <h3>${budget}</h3>
      <h1 className="total-price">Total ${currentCost}</h1>
      <aside className="progress-bar">
        <ProgressBar value={currentCost} max={budget} />
        <ProgressBar value={10} max={80} />
        <ProgressBar value={70} max={80} />
      </aside>

      <h2 className="item-pill-title">Item Pills</h2>
      <div className="item-pill-box">
        {
          pillList.map((pill) => {
            return (
              <p onClick={() => updateSelected(pill)}>{pill}  X </p>
            )
          })
        }
      </div>


    </div>
  )
}

export default BottomBar;