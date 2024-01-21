import { useState,useEffect } from "react";
import { Addthings } from "../context/BudgetKeeper";

const Budget = () => {

    const spentamount= Addthings();
   
    const [budget, setBudget]= useState(0);
    const[totalbudget, setTotalbudget] = useState(0);
    const [remainingbudget, setremainingbudget]= useState(0);
    const [spent, setspent]= useState(0);

    // setspent(spentamount.totalamount);
 
    const totalBudget = (e) => {
        setBudget(e.target.value);
  }
    

    const onsubmitbudget = () => {
        setTotalbudget(budget);
    }

    useEffect(() => {
        // Parse totalBudget to ensure it's a number
        const numericTotalBudget = parseFloat(totalBudget);
      
        // Calculate the total spent amount from the context
        const totalSpent = spentamount.totalamount.reduce((acc, amount) => acc + amount, 0);
      
        // Parse totalSpent to ensure it's a number
        const numericTotalSpent = parseFloat(totalSpent);
      
        // Calculate the remaining budget
        const remaining = numericTotalBudget - numericTotalSpent;
      
        // Set spent and remainingBudget as numbers with two decimal places
        setspent(numericTotalSpent.toFixed(2));
        setremainingbudget(remaining.toFixed(2));
      }, [spentamount.totalamount, totalBudget]);
      


    return (
        <>
        <input type="text" placeholder="Enter Your Budget" onChange={totalBudget} />
        <button onClick={onsubmitbudget}>Submit</button>
        <div className="budget">
        <h3>Your Budget: <span>{totalbudget}</span></h3>
        <h3>Remaining Budget: <span>{parseInt(totalbudget-spent)}</span></h3>
        <h3>Spent: <span>{spent}</span></h3>
        </div>
        </>
    );
};

export default Budget;