import React from 'react';

let Person=(props)=>{

    return(
        <React.Fragment>

           <div>
               <h3 className="d-inline-block" >{props.personName.firstName}</h3> &nbsp;
               <h3 className="d-inline-block" >{props.personName.secondName}</h3>
           </div>

        </React.Fragment>
    )

}
export default Person;