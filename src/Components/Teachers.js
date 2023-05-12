import React, { useState } from 'react'
import Base from '../Base/Base'
import data from '../Data/Data'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import AddTeachers from './AddTeachers';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Teachers({teachers,setTeachers}) {
const history= useHistory();

function deleteteacher(teach){
    const remainteacher= teachers.filter((teacher,idx)=>(idx !== teach ))
    setTeachers(remainteacher)

    }
  return (
    <Base
    tittle={'TEACHERS LIST'}
    describe={'You can edit and delete your details anytime'}
    >

       
     <div className='teach-card'>
         {teachers.map((teach,idx)=>(
            <Card  key={idx}>
           
            <CardContent sx={{width:150,backgroundColor:'#DEEBEE'}}>
                <div className='card'>
                <AccountCircleIcon  fontSize="large" color="primary"/>
                    <Typography gutterBottom variant="h5" component="div">
                    {teach.name}
                    </Typography>
                    <Typography>
                    {teach.batch}
                    </Typography>
                    <Typography >
                    {teach.gender}
                    </Typography>
                    <Typography >
                    {teach.qualification}
                    </Typography>
                </div>
            </CardContent>
            
            <CardActions sx={{backgroundColor:' rgb(171, 221, 239)'}}>
                <Button size="small"
                onClick={()=>history.push(`/editt/${idx}`)}
                ><EditIcon/></Button>
                <Button size="small"
                onClick={()=>deleteteacher(idx)}
                ><DeleteIcon/></Button>
            </CardActions>
         </Card>
         ))}
     </div>
    </Base>
  )
}

export default Teachers