import { useState } from "react";
import "./App.css";
import Budget from "./components/Budget";
import Form from "./components/Form";
import BudgetKeeper from "./context/BudgetKeeper";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BudgetKeeper>
        <>
          <h1>Budget Planner</h1>
          <Budget />
          <Form />
          <List />
        </>
      </BudgetKeeper>
    </div>
  );
}

export default App;
