import React , {useEffect, useState , useCallback} from 'react'
import Overview from './Overview';
import './Home.css'
import Transaction from './Transaction';
const HomeComponent = () => {
  
  const [transanction, setTransanction] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0)
  const addTransaction = (payload) =>{
    const transanctionArray = [...transanction];
    transanctionArray.push(payload);
    setTransanction(transanctionArray);
  }

  const addCalculation = useCallback(() => {
    let exp = 0;
    let inc = 0;
    transanction.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amt)
        : (inc = inc + payload.amt);
      return null;
    });
    setExpense(exp);
    setIncome(inc);
  }, [transanction]);
  

    // We are using useEffect bcz we are creating a dependenicy that 
    // addCalculation will only take place if there is change is 
    // transanction
    useEffect(()=> addCalculation() , [transanction , addCalculation ]);
  return (
    <div className='container'>
       
      <Overview addTransaction={addTransaction} expense={expense} income={income}/>
      <Transaction transanction={transanction}/>

    </div>
  )
}

export default HomeComponent;
