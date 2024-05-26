import React, { useState } from 'react'

export default function TodoList() {
    const [activity, setActivity]= useState("");

    const [listData, setListData]= useState([]);

    const removeActivity=(i)=>{
        const updatedListData= listData.filter((elem, id)=>{
            return i!==id;
        })
        setListData(updatedListData);
    }

    const addActivity=()=>{
        // setListData(...listData, activity);
        // console.log(listData);

        setListData((listData)=>{
            const updatedList=[...listData, activity];
            console.log(updatedList);
            setActivity("");
            return updatedList;
        })
    }
    const removeAll=()=>{
        setListData([]);
    }
    return (
        <>
            <div className='container'>
            <div className='header'>Todo List</div>
            <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>{
                setActivity(e.target.value)
            }} />
            <button onClick={addActivity}>Add</button>
            <p className='List-heading'>Here is your list : {")"}</p>
            {
                listData!==[] && listData.map((data, i)=>{
                    return(
                        <>
                            <p key={i}>
                                <div className='listData'>{data}</div>
                                <div className='.btn-position'>
                                    <button onClick={()=>removeActivity(i)}>Remove(-)</button>
                                </div>
                            </p>
                        </>
                    )
                })
            }
            {listData.length>=1 && <button onClick={removeAll}>Remove All</button> }
            </div>
        </>
    )
}
