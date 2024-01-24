import React, {useState} from "react"
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css";



export default function DatePicker(){
    return (
        <>
        <p>this is test</p>
        <Datetime value={new Date()} input={true} className="appearance-none shadow border rounded py-3 px-2 text-gray-darker "/>
        </>
    )
}