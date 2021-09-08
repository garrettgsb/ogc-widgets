import getCategoriesHavingChosen from '../selectors/selectors';

const SideBar = ({ categories, selectedCategory, setSelectedCategory, selections, appData, getPriceByCategory }) => {
  const categoriesHavingChosen = getCategoriesHavingChosen(selections, appData);

  return (
    <aside className="sidebar">
      {
        Object.values(categories).map((category) => {
          const selectedClass = selectedCategory === category ? 'selected' : '';
          const hasChosenClass = categoriesHavingChosen.includes(category) ? 'having-chosen' : '';
          const classList = ['menu-item', selectedClass, hasChosenClass].join(' ');
          const count = categoriesHavingChosen.filter(c => c === category).length;
          const categoryPrice = selections.length === 0 ? 0 : getPriceByCategory(category, selections, appData);

          return (
            <>
              <h3 className={classList} onClick={() => setSelectedCategory(category)} >{category}</h3>
              {
                category === "Personalize" ?
                  <small>Enter Project Info</small>
                  :
                  <p style={{ margin: 0, padding: 0 }}><small style={{ margin: 0, padding: 0 }}>${categoryPrice} ({count} selected)</small></p>
              }
            </>
          );
        })
      }

    </aside>
  )
}

export default SideBar;