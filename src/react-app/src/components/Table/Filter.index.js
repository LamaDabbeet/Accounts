import React from 'react'
import {Wrapper,Input,Label} from './Filter.styled'


export const Filter = ({filter,setFilter}) => {
  const statusArray=['','pending','closed','opened','suspended'];
    return (
        <Wrapper>
            {
            statusArray.map((status,index)=>(
              <Label key={index} className="wrapper">
              <Input  
                  value={filter ||''}
                  checked={filter==status}
                  type="checkbox" 
                  name={index}
                  onChange={() => setFilter(status)} />
                <span className="checkmark"><span>{status}</span></span>
              </Label>
                  ))
              }
        </Wrapper>
    )
}

