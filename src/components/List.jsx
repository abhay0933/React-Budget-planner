import { useState } from "react";
import { Addthings } from "../context/BudgetKeeper";

const List = () => {
  // const [list, setList]= useState([]);
  const things = Addthings();

  const deleteItem = (index) => {
    things.deleteItem(index);
  };
  //    console.log(things.totalname);

  //    setList([...things])

  return (


    <>
     <div className="nameamountlist">
        
        <ul>
          {things.totalname.map((name, index) => (
            <li key={index}>
              <span>Name: {name}</span>
              <span className="listamount">Amount: {things.totalamount[index]} <button onClick={()=>deleteItem(index)} className="deletebtn"><img src="https://www.svgrepo.com/show/21045/delete-button.svg" className="deleteimage" /></button></span>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
