import React from 'react'
import styles from "./account.module.css"
import { BsFillHandbagFill } from "react-icons/bs"
import { HiFolder } from "react-icons/hi"
import { BsFillPersonFill } from "react-icons/bs"
import { IoMdWallet } from "react-icons/io"
import { MdCardGiftcard } from "react-icons/md"
import { AiOutlineLogout } from "react-icons/ai"
import {MdAccountCircle} from "react-icons/md"
import AppSection from '../Products/AppSection';
import {useState,useEffect} from 'react'
import axios from "axios";
const Account = () => {
   const [updata,upsetdata]=useState(JSON.parse(localStorage.getItem('userdetail'))||{});
   const [userdata,setuserdata]=useState({email:updata.email});
   async function handlesave(event){
    event.preventDefault();
    console.log(userdata)
    let update = await axios.post("https://pharmeasy-backend.onrender.com/updateUser", userdata);
    console.log(update);
    localStorage.setItem('userdetail',JSON.stringify(userdata));
    window.location.reload(true)
   }


  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.leftdiv}>
          <div style ={{display:"flex", marginBottom:"10px", alignItems:"center"}}>
            <div>{<MdAccountCircle className ={styles.accountIcon} />}</div>
            <div className={styles.subheading}>{updata.username?updata.username:'user'}</div>
            </div>
          <div className={styles.leftmain}>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1}>
                <div style={{ marginLeft: "10px" }}>{<BsFillHandbagFill className={styles.icons} />}</div>
                <div className={styles.leftdivSubheading}>YOUR ORDERS</div>
              </div>
              <div className={styles.leftsubunder}>Medicine/Healthcare</div>
              <div className={styles.leftsubunder}>Lab Tests</div>
            </div>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1}>
                <div style={{ marginLeft: "10px" }}>{<BsFillHandbagFill className={styles.icons} />}</div>
                <div className={styles.leftdivSubheading}>REFILLS</div>
              </div>
              <div className={styles.leftsubunder}>Active</div>
              <div className={styles.leftsubunder}>Inactive</div>
            </div>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1}>
                <div style={{ marginLeft: "10px" }}>{<HiFolder color='rgb(118,118,118)' fontSize="23px" />}</div>
                <div className={styles.leftdivSubheading}>MEDICAL RECORDS</div>
              </div>
              <div className={styles.leftsubunder}>All</div>

            </div>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1}>
                <div style={{ marginLeft: "10px" }}>{<BsFillPersonFill className={styles.icons} />}</div>
                <div className={styles.leftdivSubheading}>PROFILE SETTINGS</div>
              </div>
              <div className={styles.leftsubunder}>Edit Profile</div>
              <div className={styles.leftsubunder}>Manage Address</div>
              <div className={styles.leftsubunder}>Manage Refunds</div>
            </div>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1} style={{}}>
                <div style={{ marginLeft: "10px" }}>{<IoMdWallet className={styles.icons} />}</div>
                <div className={styles.leftdivSubheading}>WALLET</div>
              </div>
            </div>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1}>
                <div style={{ marginLeft: "10px" }}>{<MdCardGiftcard className={styles.icons} />}</div>
                <div className={styles.leftdivSubheading}>REFER & EARN</div>
              </div>
            </div>
            <div className={styles.ordersDiv}>
              <div className={styles.orderSubdiv1}>
                <div style={{ marginLeft: "10px" }}>{<AiOutlineLogout className={styles.icons} />}</div>
                <div className={styles.leftdivSubheading}>LOG OUT</div>
              </div>
            </div>
          </div>


        </div>
        <div className={styles.rightdiv}>
          <div className={styles.subheading}>EDIT PROFILE</div><br/>
          <div className={styles.rightmain}>
            <form className={styles.form}>
              <div>
                <label for="name">
                  <span className={styles.spanName}>Name</span>
                  <span className={styles.star}>*</span>
                </label>
                <div className={styles.inputdiv}>
                  <input type="text" placeholder={updata.username?updata.username:"Enter your name"} onChange={(e)=>setuserdata({...userdata,username:e.target.value})} className={styles.input} />
                </div>
              </div>
              <div>
                <label for="mobilenumber">
                  <span className={styles.spanName}>Mobile Number</span>
                  <span className={styles.star}>*</span>
                </label>
                <div className={styles.inputdiv}>
                  <input type="number" placeholder={updata.number?updata.number:"Enter you number"} onChange={(e)=>setuserdata({...userdata,number:Number(e.target.value)})} className={styles.input} />
                </div>
              </div>
              <div>
                <label for="email">
                  <span className={styles.spanName}>Email</span>
                  <span className={styles.star}>*</span>
                </label>
                <div className={styles.inputdiv}>
                  <input type="text" value={updata.email} disabled={true} className={styles.input} />
                </div>
              </div>

              <button className={styles.savebutton} onClick={handlesave} >SAVE</button>
            </form>
          </div>
        </div>
      </div>
     <AppSection/>
    </>

  )
}

export default Account
