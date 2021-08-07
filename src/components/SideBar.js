import getCategoriesHavingChosen from '../selectors/selectors';

const SideBar = ({ categories, selectedCategory, setSelectedCategory, selections, appData }) => {

  const categoriesHavingChosen = getCategoriesHavingChosen(selections, appData);
  console.log(categoriesHavingChosen);
  return (
    <aside className="sidebar">
      {
        Object.values(categories).map((category) => {
          // const classList = selectedCategory === category ? "menu-item selected" : "menu-item";

          // let classList = 'menu-item';
          // classList += selectedCategory === category ? ' selected' : '';
          // classList += categoriesHavingChosen.includes(category) ? ' having-chosen' : '';

          const selectedClass = selectedCategory === category ? 'selected' : '';
          const hasChosenClass = categoriesHavingChosen.includes(category) ? 'having-chosen' : '';
          const classList = ['menu-item', selectedClass, hasChosenClass].join(' ');

          const count = categoriesHavingChosen.filter(c => c === category).length;

          return (
            <>
              <h3 className={classList} onClick={() => setSelectedCategory(category)} >{category}</h3>
              <p style={{ margin: 0, padding: 0 }}><small style={{ margin: 0, padding: 0 }}>$2000 ({count} selected)</small></p>
            </>
          );
        })
      }

    </aside>
  )
}

export default SideBar;