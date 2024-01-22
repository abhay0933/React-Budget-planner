import { useState } from "react";
import { Addthings } from "../context/BudgetKeeper";

const Form = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const things= Addthings();

  const changename= (e) =>{
    setName(e.target.value);
    // console.log(name);
  }

  const changeamount= (e) =>{
    setAmount(e.target.value);
    setAmount(parseFloat(e.target.value));

    // console.log(amount);
  }

  const Addnames= () => {
    things.setTotalname((prevNames) => [...prevNames, name]);
    things.setTotalamount((prevAmount) => [...prevAmount, amount]);
    
    // input("");
  }

  const onsumitform = (e) => {
    e.preventDefault();
    if(name===""){
      alert("Please enter name");
      return;
    }

    else if(amount===0){
      alert("Please enter valid amount");
      return;
    }
    Addnames();
    setName(""); 
    setAmount(0);
    // input("");
    // things.setTotalname(name);
  }

 

  return (
    <>
      <form onSubmit={onsumitform}>
        <label>
          Name: <input type='text' className="name" value={name} placeholder="Enter Name" onChange={changename}/>
        </label>
        <label className="amountlabel">
          Amount:
          <input type='number' className="amount" value={amount} onChange={changeamount} />
        </label>
        <button className="taskaddbtn">Add+</button>
      </form>
    </>
  );
};

export default Form;
