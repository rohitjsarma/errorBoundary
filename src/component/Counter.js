import React, {useState} from 'react';
import {useErrorHandler} from "react-error-boundary";

const Max_Count_Allowed=5
let Counter=()=>{
    let[count,setCount]= useState(0)
    const errorHandle=useErrorHandler()
    let incCounter=()=>{
        try{
            if (count===Max_Count_Allowed){
                throw new Error('Count Limit Exceeded')
            } else {
                setCount(count+1);
            }
        } catch (e){
           // console.log('click counter',e)
            errorHandle(e)
        }

    }
    return(
        <React.Fragment>

            <h3 className="text-danger">Total Count is <b className="text-primary">{count}</b> </h3>
            <button className="btn btn-sm btn-primary" onClick={incCounter}>Click</button>
        </React.Fragment>
    )

}
export default Counter;