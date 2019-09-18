import React from 'react';
import './App.css';
import MusicCard from './components/MusicCard';
import 'typeface-roboto';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
     container: {
          display: 'flex',
          flexWrap: 'wrap',
     },
     textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
     },
     dense: {
          marginTop: 19,
     },
     menu: {
          width: 200,
     },
}));



function App() {
     const classes = useStyles();
     const [values, setValues] = React.useState({
          name: '',
          age: '',
          multiline: 'Controlled',
     });

     const handleChange = name => event => {
          setValues({ ...values, [name]: event.target.value });
     };

     return (
          <div className="App">
               <header className="App-header">
                    <div>
                         <form className={classes.container} noValidate autoComplete="off">
                              <TextField
                                   id="standard-name"
                                   label="Search for song"
                                   className={classes.textField}
                                   value={values.name}
                                   onChange={handleChange('name')}
                                   margin="normal"
                              />
                         </form>
                    </div>
                    <MusicCard></MusicCard>
               </header>
          </div>
     );
}

export default App;