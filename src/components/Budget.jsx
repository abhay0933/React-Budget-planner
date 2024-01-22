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
        // setTotalbudget(0);
    }

    useEffect(() => {
        const numericTotalBudget = parseFloat(totalBudget);
      
        const totalSpent = spentamount.totalamount.reduce((acc, amount) => acc + amount, 0);
      
        const numericTotalSpent = parseFloat(totalSpent);
      
        const remaining = numericTotalBudget - numericTotalSpent;
      
        setspent(numericTotalSpent.toFixed(2));
        setremainingbudget(remaining.toFixed(2));
      }, [spentamount.totalamount, totalBudget]);
      


    return (
        <>
        <input type="number" placeholder="Enter Your Budget" className="totalbudget" onChange={totalBudget} />
        <button onClick={onsubmitbudget} className="budgetsubmitbtn">Submit</button>
        <div className="budget">
        <h3 className="greenbox">Your Budget: <span>{totalbudget}</span></h3>
        <h3 className="orange">Remaining Budget: <span>{parseInt(totalbudget-spent)}</span></h3>
        <h3 className="salmon">Spent: <span>{spent}</span></h3>
        </div>
        </>
    );
};

export default Budget;