import React from 'react'
import {Wrapper} from './Filter.styled'
import CheckBoxInput from '../../shared/CheckBoxInput/CheckBoxInput.index';

export const Filter = ({filter,setFilter}) => {
  const statusArray=['','pending','closed','approved','funded'];
    return (
        <Wrapper>
            { 
            statusArray.map((status,index)=>(  
              <CheckBoxInput key={index} label={status===''?'All':status} checked={filter===status} name={index} value={filter ||''} onChange={() => setFilter(status)} >
              </CheckBoxInput>
             ))
              }
        </Wrapper>
    )
}

