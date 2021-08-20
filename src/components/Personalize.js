import { useContext } from "react";
import { UserInputContext } from "../contexts";

const Personalize = () => {
  const { title, updateTitle, budget, updateBudget } = useContext(UserInputContext);
  return (
    <div>
      <h1>Hello,</h1>
      <h1>{title}</h1>
      <h4>Project Name</h4>
      <input type="text" style={{ zIndex: 1 }} onChange={(e) => updateTitle(e.target.value)} />
      <h4>Budget ${budget}</h4>
      <input type="text" onChange={(e) => updateBudget(e.target.value)} />
      <p>offgrid?(y/n), terrain, typical trip length, full build?, </p>
    </div>
  )
}

export default Personalize;