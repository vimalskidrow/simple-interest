import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

   const [pamount, setPamount] = useState(0)
   const [rate, setRate] = useState(0)
   const [years, setYears] = useState(0)
   const [result, setResult]=useState(0)

   const [validpamount, setvalidpamount] = useState(false)
   const [validrate, setvalidrate] = useState(false)
   const [validyers, setvalidyears] = useState(false)


   const validInput = (e) => 
   {
      const { name, value } = e.target
      console.log(name, value);

           if (value.match(/^[0-9]*.?[0-9]+$/)) {

               if (name == 'pamount') {
                  setPamount(value)
                  setvalidpamount(true)
               }
               else if (name == 'rate') {
                  setRate(value)
                  setvalidrate(true)
               }
               else {
                  setYears(value)
                  setvalidyears(true)
               }
           }
           else {
               if (name == 'pamount') {
                  setPamount(0)
                  setvalidpamount(false)

               }
                else if (name == 'rate') {
                  setRate(0)
                  setvalidrate(false)
               }
               else {
                  setYears(0)
                  setvalidyears(false)
               }

            }

   }

   console.log(pamount, rate, years);

   const submitted = (e) => 
   {
      e.preventDefault()
      const res=(pamount*rate*years)/100
      setResult(res)



   }

   const resetAll = ()=>{
      setPamount(0)
      setRate(0)
      setYears(0)
      setResult(0)

      setvalidpamount(false)
      setvalidrate(0)
      setvalidyears(0)
      
      
   }




   return (
      <>
         <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

            <div className='bg-light w-50 shadow rounded p-5'>

               <h4 className='text-center py-2' style={{ textDecoration: "underline" }}> Simple Interest Calculator</h4>

               <div className='text-white d-flex justify-content-center p-5 border shadow mt-3' style={{ background: "#3a4452" }}>
                  ₹ {result}
               </div>

               <form onSubmit={(e) => { submitted(e) }} >

                  <div className='my-3'>
                     <TextField name='pamount' value={pamount} id="outlined-basic" onChange={(e) => { validInput(e) }} label="Principal Amount" variant="outlined" style={{ width: "100%" }} />
                     {
                        !validpamount &&
                        <div className='text-danger'>
                           Invalid Principal Amount
                        </div>

                     }

                  </div>

                  <div className='my-3'>
                     <TextField name='rate' value={rate} id="outlined-basic" onChange={(e) => { validInput(e) }} label="Rate of Interest" variant="outlined" style={{ width: "100%" }} />
                     {
                        !validrate &&
                        <div className='text-danger'>
                           Invalid Rate
                        </div>

                     }
                  </div>

                  <div className='my-3'>
                     <TextField name='years' value={years} id="outlined-basic" onChange={(e) => { validInput(e) }} label="Number of Years" variant="outlined" style={{ width: "100%" }} />

                     {
                        !validyers &&
                        <div className='text-danger'>
                           Invalid Duration
                        </div>

                     }
                  </div>

                  <Stack spacing={2} direction="row">
                     <Button variant="contained" disabled={validpamount && validrate && validyers ? false : true} type='submit' className='bg-success' style={{ height: "50px", width: "50%" }}>Calculate</Button>
                     <Button variant="contained" onClick={resetAll} className='bg-danger' style={{ height: "50px", width: "50%" }} type='reset'>Clear All</Button>
                  </Stack>

               </form>

            </div>

         </div>
      </>
   )
}

export default App
