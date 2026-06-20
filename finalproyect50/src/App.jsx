//import { useState } from 'react'
import './App.css'

function AddHabitForm() {
    return (
        <div className='mainForm'>
        <form className="habitform">

            <div className='formField'>
                <h1>New habit</h1>
                <p>Fill in all the required fields for saving an habit</p>
            </div>

            <label for="addHabitlab" className='sectionTitle'><b>Name</b></label> <br/>
            <input type="text" placeholder='Habit name'/><br/>

            <label for="habitTimesperWeek" className='sectionTitle'><b>Habit category</b></label> <br/>
            
            <label>Physic</label>
            <input type="checkbox"/>

            <label>Mental</label>
            <input type="checkbox"/>

            <label>Psycological</label>
            <input type="checkbox"/>

            <label>General</label>
            <input type="checkbox"/> <br/>

            <label for="frequencyHabitLab" className='sectionTitle'><b>Frequency of completition per week</b></label> <br/>

            <label for="1">1</label> <input type='radio'/>
            <label for="2">2</label> <input type='radio'/>
            <label for="3">3</label> <input type='radio'/>
            <label for="4">4</label> <input type='radio'/>
            <label for="5">5</label> <input type='radio'/>
            <label for="6">6</label> <input type='radio'/>
            <label for="7">7</label> <input type='radio'/>
            <label for="otherNum">Other number</label> <input type='radio'/>

            <br/>

            <input type='submit'/>
        </form>
        </div>    
    )
}









function App() {
    return (
        
        <AddHabitForm/>
        
    )
}

export default App
