
// Assets
// import logo from './logo.svg';
import './App.css'
import React from 'react'

// data
// import candidates from './components/candidates';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  
  /**
   * Parent State `formData`, function for changing state `setFormData`
   * 
   * React.useState - accepts an object and returns the state of the form
   * 
   * {} = an Object that represents all the current data in the form,
   *      default values are set upon declaration
   */

  const [formData, setFormData] = React.useState({    
    email: "",
    password:"",
    confirmPassword: "",
    isCheckedNewsletter: false 
  })
  
  /**
   * handleSubmit() - function that handles the submitted form
   */

  function handleSubmit(event) {
    event.preventDefault() // prevents the page to refresh upon submission
    console.log(formData)
    
    let alertMessage = ""

    if (formData.password !== formData.confirmPassword){
      alertMessage = alertMessage.concat("Passwords do not match!\n")
    } else {
      alertMessage = alertMessage.concat("Successfully signed up!\n")
      formData.isCheckedNewsletter ? alertMessage = alertMessage.concat("Thanks for signing up for our newsletter!\n") : alertMessage = alertMessage.concat(" ")
    }
    
    console.log(alertMessage)
  }

  /**
   * handleOnChange(event) - function that handles that changes in input type forms
   */
  function handleOnChange(event){

    const {type, value, name, checked} = event.target    

    /** 
     * State that listens to the event happening on input then change the formData
     * prevFormData - an Object that contains the previous data of the state 
     */ 

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div className="main">
      <Navbar />
      
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleOnChange} 
        />
        
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleOnChange} 
        />
        
        <input 
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleOnChange} 
        />

        <input 
          type='checkbox'
          name='isCheckedNewsletter'
          checked={formData.isCheckedNewsletter}
          onChange={handleOnChange} 
        />
        <label htmlFor='isCheckedNewsletter'>I want to join the newsletter</label>

        <button>Sign up</button>
      </form>
  
      <Footer />
    </div>
  )
}

export default App;
