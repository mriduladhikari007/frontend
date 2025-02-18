import React, { useState,useEffect } from 'react'
import img1 from '../asset/img/cart.jpg'
import del from '../asset/img/delete.jfif'
import edit from '../asset/img/edit.jfif'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const [showdata, setShowData] = useState(false)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const myExpenses = [100, 200, 300, 600, 700, 800];
    useEffect(() => {

    },[showdata])
   
  

    const deleteExpense = () => {
        closeModal1()
    }
    const openModal1 = () => {
      
        var modal1 = document.getElementById("myModal");
        console.log("AA")
        modal1.style.display = "block";
    }
    const closeModal1 = () => {
    
        var modal1 = document.getElementById("myModal");
        console.log("BB")
        modal1.style.display = "none";
    }
    const editExpense = () => {
        closeModal2()
    }
    const openModal2 = () => {
     
        var modal2 = document.getElementById("myModal2");
        console.log("CC")
        modal2.style.display = "block";
    }
    const closeModal2 = (event) => {
 
   
        var modal2 = document.getElementById("myModal2");
        console.log("DD")
        modal2.style.display = "none";
    }
    const addExpense = (event) => {
        event.preventDefault();
        console.log("Clicked", inputs);
        setShowData(true)
    }
    return (
        <div className='container'>
            {showdata ?
                <div className='leftcontainer'>
                    <p>Total Expenses : 1000</p>

                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <p>Do you want to delete this expense?</p>
                            <button onClick={deleteExpense}>Yes</button>
                            <button onClick={closeModal1}>No</button>
                        </div>
                    </div>
                    <div id="myModal2" className="modal2">
                        
                            <div className='formcard'>
                                <div>
                                    <h2 style={{ alignSelf: 'center' }}>Edit Expense</h2>
                                </div>
                                <form onSubmit={editExpense}>
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
                                            placeholder='Enter your expense amount'
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
                                            value={inputs.type || ''}
                                            onChange={handleChange}
                                            name='type'
                                            required

                                        >
                                            <option disabled value=''>Please Select Payment Type</option>
                                            <option value="cash">Cash</option>
                                            <option value="upi">UPI</option>
                                            <option value="card">Card</option>
                                        </select>

                                    </div>
                                    <div>
                                        <label>
                                            Date
                                        </label>
                                        <input
                                            required
                                            type="date"
                                            placeholder='Enter Date'
                                            value={inputs.date || ''}
                                            onChange={handleChange}
                                            name='date'

                                        />
                                    </div>


                                    <div>
                                        <button>Edit Expense</button>
                                    </div>
                                    <div>
                                        <button onClick={closeModal2}>Cancel</button>
                                    </div>

                                </form>
                            </div>
                    
                    </div>
                    <div style={{ backgroundColor: 'lightgray', width: '100%', overflowY: 'scroll', marginBottom: '50px', justifyContent: 'center', justifyItems: 'center', padding: '20px' }}>
                        {myExpenses.map((key,val) =>
                            <div className='expenseCard' key={key}>
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', justifyItems: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <img onClick={openModal2} style={{ width: '30px', height: '30px' }} src={edit} />
                                    <img onClick={openModal1} style={{ width: '20px', height: '20px', marginLeft: '4px' }} src={del} />
                                </div>
                                <p>Title</p>
                                <p>Amount {val}</p>
                                <p>Date</p>
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
                                placeholder='Enter your expense amount'
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
                                value={inputs.type || ''}
                                onChange={handleChange}
                                name='type'
                                required

                            >
                                <option disabled value=''>Please Select Payment Type</option>
                                <option value="cash">Cash</option>
                                <option value="upi">UPI</option>
                                <option value="card">Card</option>
                            </select>

                        </div>
                        <div>
                            <label>
                                Date
                            </label>
                            <input
                                required
                                type="date"
                                placeholder='Enter Date'
                                value={inputs.date || ''}
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