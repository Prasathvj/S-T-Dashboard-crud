import logo from './logo.svg';
import './App.css';
import Base from './Base/Base';
import Dashboard from './Components/Dashboard';
import Teachers from './Components/Teachers';
import AddTeachers from './Components/AddTeachers';
import { useState } from 'react';
import data from './Data/Data';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UpdateTeachers from './Components/UpdateTeachers';
import Students from './Components/Students';
import data1 from './Data/Data1';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';

function App() {
  const [teachers,setTeachers]=useState(data);
  const [students,setStudents]=useState(data1);
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                <Dashboard/>
            </Route>

            <Route path="/teachers">
                <Teachers
                teachers={teachers}
                setTeachers={setTeachers}
                />
            </Route>

            <Route path="/addteach">
                <AddTeachers
                 teachers={teachers}
                 setTeachers={setTeachers}
                />
            </Route>

            <Route path="/editt/:id">
                <UpdateTeachers
                 teachers={teachers}
                 setTeachers={setTeachers}
                />
            </Route>

            <Route path="/students">
              <Students
                students={students}
                setStudents={setStudents}
                />

            </Route>

            <Route path="/addstud">
                <AddStudents
                students={students}
                setStudents={setStudents}
                />
            </Route>

            <Route path="/edits/:id">
                <UpdateStudents
                students={students}
                setStudents={setStudents}
                />
            </Route>

        </Switch>

        
    </div>
  );
}

export default App;
