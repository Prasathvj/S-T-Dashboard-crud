import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function UpdateTeachers({teachers,setTeachers}) {
    const history=useHistory();
    const {id} = useParams();
    const editteachers =teachers[id]
    const [name,setName]=useState('');
    const [batch,setBatch]=useState('');
    const [gender,setGender]=useState('');
    const [qualification,setQualification]=useState('');
    
    useEffect(()=>{
      setName(editteachers.name)
      setBatch(editteachers.batch)
      setGender(editteachers.gender)
      setQualification(editteachers.qualification)
   
    },[editteachers])

    function editTeacher(){
        const newTeacher={
            name,
            batch,
            gender,
            qualification,   
        }
        teachers[id]= newTeacher
        setTeachers([...teachers])
        history.push("/teachers")
    }
    
  return (
    <Base
    tittle={''}
    describe={''}
    >
        <div className='inp1'>
            <div className='inp'>
            <TextField sx={{ width: '50ch' }}
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Batch" 
            variant="outlined"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Gender" 
            variant="outlined" 
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Qualification" 
            variant="outlined" 
            
            value={qualification}
            onChange={(e)=>setQualification(e.target.value)}
            />
            </div>
            <div className='a-btn'>
            <Button variant="contained" color="primary" 
            onClick={editTeacher}
            >
            Submit</Button>
            </div>
        </div>
    
    </Base>
  )
}

export default UpdateTeachers