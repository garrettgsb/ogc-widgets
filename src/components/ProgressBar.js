const ProgressBar = ({ value, max }) => {
  let width = value / max * 100;
  let childBar = "child-bar";
  if (width > 100) {
    width = 100;
    childBar = "child-bar over-price";
  }
  return (
    <div className="parent-bar">
      <div className={childBar} style={{ width: `${width}%` }}>

      </div>
    </div>
  )
}
export default ProgressBar;