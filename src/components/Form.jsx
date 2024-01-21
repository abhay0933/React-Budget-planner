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
    setName(""); // Clear the name input field
    setAmount(0);
    // input("");
  }

  const onsumitform = (e) => {
    e.preventDefault();
    Addnames();
    // things.setTotalname(name);
  }

 

  return (
    <>
      <form onSubmit={onsumitform}>
        <label>
          Name: <input type='text' placeholder="Enter Task" onChange={changename}/>
        </label>
        <label>
          Amount:
          <input type='number' onChange={changeamount} />
        </label>
        <button>Add+</button>
      </form>
    </>
  );
};

export default Form;
