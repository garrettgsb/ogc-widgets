const ProgressBar = ({ value, max }) => {
  const width = value / max * 100;
  return (
    <div className="parent-bar">
      <div className="child-bar" style={{ width: `${width}%` }}>

      </div>
    </div>
  )
}
export default ProgressBar;