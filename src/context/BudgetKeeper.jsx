import { useContext } from "react";
import { createContext,useState } from "react";

export const TotalBudget = createContext({});

const BudgetKeeper = (props) => {
    // console.log(props.children);

    const [totalname, setTotalname]= useState([]);
    const [totalamount, setTotalamount]= useState([]);

    const addNameAndAmount = (name, amount) => {
        setTotalname((prevNames) => [...prevNames, name]);
        setTotalamount((prevAmount) => [...prevAmount, amount]);
      };
    
      const deleteItem = (index) => {
        const updatedNames = [...totalname];
        const updatedAmounts = [...totalamount];
        updatedNames.splice(index, 1);
        updatedAmounts.splice(index, 1);
        setTotalname(updatedNames);
        setTotalamount(updatedAmounts);
      };

    return(
        <TotalBudget.Provider value={{totalname, setTotalname, totalamount, setTotalamount, deleteItem}}>
        {props.children}
        
    </TotalBudget.Provider>
    )
    // console.log(totalname);
   
};

export const Addthings = () => {
    const Ctx= useContext(TotalBudget);
    return Ctx;
}

export default BudgetKeeper;
