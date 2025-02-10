import React, { useState } from 'react'
import img1 from '../asset/img/cart.jpeg'
import del from '../asset/img/delete.jpeg'
import edit from '../asset/img/edit.jpeg'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {
    const myExpenses = [100,200,300,600,700,800];

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const [showdata, setShowData] = useState(false)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const addExpense = (event) => {
        event.preventDefault();
        console.log("Clicked", inputs);
        setShowData(true)
    }
    return (
        <div className='container'>
            {showdata ?
            <div className='leftcontainor'>
                <p>Total expenses : 1000</p>
                <div style={{backgroundColor:'lightgray',width:'100%',overflowY:'scroll',marginBottom:'50px',justifyContent:'center',justifyItems:'center',padding:'20px'}}>
                {myExpenses.map((val) =>
            <div className='expenseCard'>
                <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                            <img style={{width:'20px',height:'20px'}} src={edit} />
                            <img style={{width:'20px',height:'20px',marginLeft:'4px'}} src={del} />
                            </div>
                <p>Title</p>
                <p>Amount {val}</p>
                <p>Data</p>
                <p>Type</p>
                </div>
            )}
            </div>
                </div>
                :
            
            <div className='leftcontainer'>
                <p>Please add your expenses</p>
                <img src={img1} />
            </div>
}
            <div className='rightcontainer'>
                <div className='formcard'>
                    <div>
                        <h2 style={{ alignSelf: 'center' }}>Add Expense</h2>
                    </div>
                    <form onSubmit={addExpense}>
                        <div>
                            <label>
                                Title
                            </label>
                            <input
                                required
                                type="text"
                                placeholder='Enter your expense title'
                                value={inputs.title || ''}
                                onChange={handleChange}
                                name='title'

                            />
                        </div>
                        <div>
                            <label>
                                Amount
                            </label>
                            <input
                                required
                                type="number"
                                placeholder='Enter your Expense amount'
                                value={inputs.expense || ''}
                                onChange={handleChange}
                                name='expense'

                            />
                        </div>
                        <div>
                            <label>
                                 Type
                            </label>
                            <select
      value={inputs.type}
      onChange={handleChange}
      name='type' 
      >
      <option value="apple">Cash</option>
      <option value="banana">UPI</option>
      <option value="orange">Card</option>
    </select>
                            
                        </div>
                        <div>
                            <label>
                                Date
                            </label>
                            <input
                                required
                                type="date"
                                placeholder='Enter date'
                                value={inputs.expense || ''}
                                onChange={handleChange}
                                name='date'

                            />
                        </div>

                        <div>
                            <button>Add</button>
                        </div>
                        
                    </form>
                </div>

            </div>



        </div>
    )
}

export default Dashboard