import React, { useState } from 'react'
import Base from '../Base/Base'
import data1 from '../Data/Data1'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Students({students,setStudents}) {
    
    const history = useHistory();
function deletestudents(studx){
    const remainstudents= students.filter((stud,idx)=>(studx !==idx))
    setStudents(remainstudents)
}
  return (
   <Base
   tittle={'STUDENTS LIST'}
   describe={'You can edit and delete your details anytime'}
   >
     <div className='teach-card'>
        {students.map((stud,idx)=>(
            <Card  key={idx}>
           
                <CardContent sx={{width:150,backgroundColor:'#DEEBEE'}}>
                    <div className='card'>
                        <AccountCircleIcon  fontSize="large" color="secondary"/>
                            <Typography gutterBottom variant="h5" component="div">
                                {stud.name}
                            </Typography>
                            <Typography>
                                {stud.batch}
                            </Typography>
                            <Typography >
                                {stud.gender}
                            </Typography>
                                <Typography >
                                {stud.qualification}
                            </Typography>
                    </div>
                </CardContent>
                        
                <CardActions sx={{backgroundColor:'rgb(171, 221, 239)'}}>
                           <Button size="small" 
                            onClick={()=>history.push(`/edits/${idx}`)}
                            ><EditIcon color="secondary"/></Button>
                            <Button size="small"
                            onClick={()=>deletestudents(idx)}
                            ><DeleteIcon color="secondary"/></Button>
                 </CardActions>
             </Card>
        ))}
     </div>
   </Base>
  )
}

export default Students