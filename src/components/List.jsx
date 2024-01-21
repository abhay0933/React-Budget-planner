import { useState } from "react";
import { Addthings } from "../context/BudgetKeeper";

const List = () => {
  // const [list, setList]= useState([]);
  const things = Addthings();
  //    console.log(things.totalname);

  //    setList([...things])

  return (
    <>
     <div className="nameamountlist">
        
        <ul>
          {things.totalname.map((name, index) => (
            <li key={index}>
              <span>Name: {name}</span>
              <span>Amount: {things.totalamount[index]}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
