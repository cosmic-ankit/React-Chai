import React from 'react'
import { useId } from 'react'

// use id is a react hook use to create a unique id, and we use this id to give this id to elemnet and to link elements like htmlFor and its id
// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// useId should not be used to generate keys in a list. Keys should be generated from your data.






function InputBox({
    className = "", // We are creating a industry standrd code, so we are adding it since if we want to add other className we could just type in the value here and it will be added to the element, by default it is empty.

    label, // Uisng label, we will pass "From" or "To" in it

    amount, // Amount is a variable which will contaun the amount put by the user
    onAmountChange, // Its a function to make the amount variable equal to the amount change by user in value
    amountDisabled = false, // If we ever want to diabe input option, by default its false
    CurrencyDisabled = false,
    selectCurrency = "usd", // It is a variabe which stores the currency selected by the user
    CurrencyOptions = [], // arry that will contain all the currencies which will be shown in the option
    onCurrencyChange, // This function will be there to change the currency selected by the user

    
}) {
    const amountInputId = useId() // Creating a variable in which we will store the id produce by use Id hook
    // Now, even if amountInputId appears multiple times on the screen, the generated IDs won’t clash.



    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
        {/* Givinh white bg making the div flex */}


            <div className="w-1/2">

                <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}  >
                    {label}
                </label>
                {/* adding label here */}


                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    type='Number'
                    value={amount}
                    onClick={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                    // The js take value input in string so we are converting it into a number
                    disabled={amountDisabled}
                    id = {amountInputId}
                />
                {/* Making input box */}
            </div>


            <div className="w-1/2 flex flex-wrap justify-end text-right">

                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
                 {/* creating a selct option */}
                 <select
                 className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                 value = {selectCurrency}
                 disabled = {CurrencyDisabled}

                 onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}

                 >
                    {/* creating options */}
                    {CurrencyOptions.map((Currency)=>{
                        <option key = {Currency} value={Currency}>
                            {Currency}
                        </option>
                    })
                    //Here we are using a loop to go through all yhe data available in the currency option array and create a  option from it
                    // we are using key in it so that react would know that each option which is created is a different option hence render it into the system.
                }


                    
                    
                 </select>

            </div>
        </div>





    )
}

export default InputBox

