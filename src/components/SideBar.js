const SideBar = ({ categories, selectedCategory, setSelectedCategory }) => {

  return (
    <aside className="sidebar">
      {
        Object.values(categories).map((category) => {
          const classList = selectedCategory === category ? "menu-item selected" : "menu-item";
          return (
            <h3 className={classList} onClick={() => setSelectedCategory(category)} >{category}</h3>
          );
        })
      }

    </aside>
  )
}

export default SideBar;