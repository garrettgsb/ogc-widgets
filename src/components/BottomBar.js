import ProgressBar from './ProgressBar';
import { UserInputContext } from '../contexts';
import { useContext } from 'react';


const BottomBar = ({ selections, appData }) => {
  const { title } = useContext(UserInputContext);
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
    <div className="bottombar">
      <p>{title}</p>
      <h1 className="total-price">Total ${sumSelectedPrices(appData, selections)}</h1>
      <aside className="progress-bar">
        <ProgressBar value={40} max={80} />
        <ProgressBar value={10} max={80} />
        <ProgressBar value={70} max={80} />
      </aside>

      <h1 className="item-pill-title">Item Pills</h1>
      <div className="item-pill-box">
        {
          pillList.map((pill) => {
            return (
              <p >{pill}</p>
            )
          })
        }
      </div>


    </div>
  )
}

export default BottomBar;