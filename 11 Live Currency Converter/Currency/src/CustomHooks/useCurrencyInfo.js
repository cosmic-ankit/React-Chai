import React from 'react'
// Here we are using js instead of jsx because in react hooks usually return js instead of jsx

import { useEffect, useState } from "react"

function useCurrencyInfo (currency) {

    const[data, setData] = useState({}) //using useStatae to update the value of data everywhere and render the component as data changes
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //fetching the data here
        .then((res)=>{res.json}) // Chnaging the response into the json, usually we get the data from the api in the form of the string, so we convert it into json
        .then((res)=>{setData(res[currency])}) 
        //setting the data here using of the response we got
        
    }, [currency])
    console.log(data);

    return data;

}
export default useCurrencyInfo;
//here we are exporting the data so that we can use the setData, data and currency in itz