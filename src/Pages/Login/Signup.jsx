import React, { useState } from 'react'
import styles from "./signup.module.css"
import SignupNavbar from './SignupNavbar'

const Signup = () => {
  const [mobNo, setMobNo] = useState("")

  return (
    <div className= {styles.main}>
      <SignupNavbar />
      <div className={styles.login}>
        <p>Quick Login /Register</p>
      </div>
      <div className = {styles.entry}>
        <input type="text" placeholder="Enter your Mobile NUmber" onChange={(e) => setMobNo(e.target.value)} />
        <button className={styles.go}>Send OTP</button>
      </div>
      <div className={styles.foot}>
        By clicking continue, you agree with our <a style ={{color:"rgb(16,132,126)", textDecoration:"none", fontWeight:"bold"}} href="/#">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Signup