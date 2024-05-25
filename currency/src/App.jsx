// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [amt,setAmt]=useState(1)
  const [frmcur,setFrmcur]=useState("INR")
  const [tocurr,setTocurr]=useState("USD")
  const [convert,setConvert]=useState(null)
  const [exchange,setExchange]=useState(null)

 
  const frmchange=((event)=>{
    setFrmcur(event.target.value)
  });
  const toexchange=((event)=>{
    setTocurr(event.target.value)
  });
  const amtchage=((event)=>{
    const value=parseFloat(event.target.value);
    setAmt(isNaN(value) ? 0 : value)

  })
  useEffect (()=> {
    const getExc= async () => {
      try{
      const url=`https://v6.exchangerate-api.com/v6/46d2d286f827a87005a27870/latest/${frmcur}`;
      const res=await axios.get(url)
      // console.log(res)
      setExchange(res.data.conversion_rates[tocurr]
      )

    // console.log(res)
   
  }
      
      catch (error){
        console.log(error)
      }
    };
    getExc();
  },[frmcur,tocurr])
  
  useEffect (() => {
    if (exchange !== null){
      setConvert((amt * exchange).toFixed(3))
    }
  },[amt,exchange])

  return (
    <>
    <div className='title'>
   <h2> currency converter</h2>
    </div>
      <div className="container">
        <div className="box">
        </div>
        <div className="head">
          <h1>currency converter</h1>
        </div>
        <div className="amount">
          <label htmlFor="amounts">Amount :</label>
          <input type="number" name="" id="amounts" value={amt} onChange={amtchage} />
        </div>
        <div className="fromCur">
          <label htmlFor="fc">From Currency : </label>
          <select id="currency" name="currency" value={frmcur} onChange={frmchange}> 
          <option value="USD">USD - United States</option>
          <option value="INR">INR - India</option>
          <option value="EUR">EUR - Eurozone</option>
          <option value="JPY">JPY - Japan</option>
          <option value="GBP">GBP - United Kingdom</option>
          <option value="AUD">AUD - Australia</option>
          <option value="CAD">CAD - Canada</option>
          <option value="CHF">CHF - Switzerland</option>
          <option value="CNY">CNY - China</option>
          <option value="SEK">SEK - Sweden</option>
          <option value="NZD">NZD - New Zealand</option>
          <option value="MXN">MXN - Mexico</option>
          <option value="SGD">SGD - Singapore</option>
          <option value="HKD">HKD - Hong Kong</option>
          <option value="NOK">NOK - Norway</option>
          <option value="KRW">KRW - South Korea</option>
          <option value="TRY">TRY - Turkey</option>
          <option value="RUB">RUB - Russia</option>
          <option value="BRL">BRL - Brazil</option>
          <option value="ZAR">ZAR - South Africa</option>
          <option value="MYR">MYR - Malaysia</option>
          <option value="THB">THB - Thailand</option>
        </select>

        </div>
        <div className="toCur">
          <label htmlFor="tc">To Currency :</label>
          <select id="currency" name="currency" value={tocurr} onChange={toexchange}>
            <option value="INR">INR - India</option>
            <option value="USD">USD - United States</option>
            <option value="EUR">EUR - Eurozone</option>
            <option value="JPY">JPY - Japan</option>
            <option value="GBP">GBP - United Kingdom</option>
            <option value="AUD">AUD - Australia</option>
            <option value="CAD">CAD - Canada</option>
            <option value="CHF">CHF - Switzerland</option>
            <option value="CNY">CNY - China</option>
            <option value="SEK">SEK - Sweden</option>
            <option value="NZD">NZD - New Zealand</option>
            <option value="MXN">MXN - Mexico</option>
            <option value="SGD">SGD - Singapore</option>
            <option value="HKD">HKD - Hong Kong</option>
            <option value="NOK">NOK - Norway</option>
            <option value="KRW">KRW - South Korea</option>
            <option value="TRY">TRY - Turkey</option>
            <option value="RUB">RUB - Russia</option>
            <option value="BRL">BRL - Brazil</option>
            <option value="ZAR">ZAR - South Africa</option>
            <option value="MYR">MYR - Malaysia</option>
            <option value="THB">THB - Thailand</option>
          </select>

        </div>
        <div className="result">
          <p>{amt} {frmcur} is Equal to {convert} {tocurr}</p>
        </div>

      </div>

      <div className="indTousd">
        <tbody>
          <table>
            <tr>
              <th>INR</th>
              <th>USD</th>
            </tr>
            <tr>
              <td>1 INR</td>
              <td>0.0120388 USD</td>
            </tr>
            <tr>
              <td>5 INR</td>
              <td>0.060194 USD</td>
            </tr>
            <tr>
              <td>10 INR</td>
              <td>0.0120388 USD</td>
            </tr>
            <tr>
              <td>25 INR</td>
              <td>0.30097 USD</td>
            </tr>
            <tr>
              <td>50 INR</td>
              <td>0.60194 USD</td>
            </tr>
            <tr>
              <td>100 INR</td>
              <td>1.20388 USD</td>
            </tr>
            <tr>
              <td>500 INR</td>
              <td>6.0194 USD</td>
            </tr>
            <tr>
              <td>1000 INR</td>
              <td>12.0388 USD</td>
            </tr>
          </table>
        </tbody>
      </div>
    </>
  )
}

export default App
