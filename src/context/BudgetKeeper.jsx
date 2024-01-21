import { useContext } from "react";
import { createContext,useState } from "react";

export const TotalBudget = createContext({});

const BudgetKeeper = (props) => {
    // console.log(props.children);

    const [totalname, setTotalname]= useState([]);
    const [totalamount, setTotalamount]= useState([]);

    return(
        <TotalBudget.Provider value={{totalname, setTotalname, totalamount, setTotalamount}}>
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
