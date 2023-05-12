import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

import DashboardIcon from '@mui/icons-material/Dashboard';
import { useHistory } from 'react-router-dom';

function Base({tittle,describe,children}) {
   const history =useHistory();
  return (
    <div>
        <nav>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                       <div className='das'> 
                            <DashboardIcon/>
                            <div className='btn'>
                            <Button variant="contained"
                            onClick={()=>history.push("/")}
                            >Dashboard</Button>

                            <Button variant="contained"
                            onClick={()=>history.push("/teachers")}
                            >Teachers</Button>

                            <Button variant="contained"
                            onClick={()=>history.push("/students")}
                            >Students</Button>
                            
                            </div>
                       </div>
                       
                    </Typography>
                    </Toolbar>
                </AppBar>
        </Box>
        </nav>
        <div className='below'>
            <div className='children'>
              <h3 className='title'>{tittle}</h3>
              <p className='des'>{describe}</p>
            </div>

            <div>
              {children}
            </div>
        </div>

    </div>
  )
}

export default Base