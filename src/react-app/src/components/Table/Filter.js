import React from 'react'

export const Filter = ({filter,setFilter}) => {
  const statusArray=['','pending','closed','opened','suspended'];
    return (
        <div>
            <div className="radio-buttons-wrapper">
                {
                statusArray.map((status,index)=>(
                  <label key={index} className="wrapper">
                  <input  
                          value={filter ||''}
                          checked={filter==status}
                          type="checkbox" 
                          name={index}
                          onChange={() => setFilter(status)} />
                        <span className="checkmark"><span>{status}</span></span>
                      </label>
                      ))
                  }
            </div>
        </div>
    )
}
