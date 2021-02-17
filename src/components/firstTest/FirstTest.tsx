import React, { useState } from 'react'

interface IProps{
    data :number;
}

enum pageMode {
    CREATE = "CREATE",
    UPDATE = "UPDATE"
}

const FirstTest =(props:IProps)=>{
    const [page, setpageMode] = useState(pageMode.CREATE)
let x:number = 0;
    const mySwt = {
        first:1,
        second : 2,
        third:3
    }


const changePageModes=()=>{
    try {
        if(page  === pageMode.CREATE){
            setpageMode(pageMode.UPDATE)
        }else{
            setpageMode(pageMode.CREATE)
        }
        
    } catch (error) {
        console.log(error)
    }
    
}
    const myCreate =()=>{
        return(
            <>
            <button>das</button>
            <input type="text"/>
            </>
        )
    }
    const myUpdate =()=>{
        return(
            <>
          <button>update</button>
            </>
        )
    }
    // switch (pagemode) {
    //     case pageMode.CREATE:
    //         alert("switch 1")
    //         break;
    //     case pageMode.UPDATE:
    //         alert("switch 2")
    //     break
    //     default:
    //         alert("switch 3")
    //         break;
    // }

    const handleChange=(e:any)=>{
        console.log(e,"12313")
    }
    return(
        <>
       {/* <input type="text " onChange={(e)=>{handleChange(e)}} /> */}

       {page === pageMode.CREATE ? myCreate() : myUpdate()}

       <button onClick={()=>{changePageModes()}}>change Page Mode</button>

       <div>
           {props.data}
           
       </div>
        </>
    )
}

export default FirstTest