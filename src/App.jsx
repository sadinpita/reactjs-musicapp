import React, { Component } from 'react';
import './App.css';
import MusicCard from './components/MusicCard';
import 'typeface-roboto';

// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class App extends Component {
     constructor (props) {
          super (props);
          this.state = {
               query: ''
          }
     }     

     search () {
          console.log('this.state: ', this.state);
          const BASE_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search?';
          const FETCH_URL = BASE_URL + 'q=' + this.state.query;
          console.log('FETCH_URL: ', FETCH_URL);
          fetch(FETCH_URL, {
               method: 'GET',
               headers: {
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                    'X-RapidAPI-Key': '54aa7e8bc6mshd812b154b8704c0p12b1b8jsn505667115014'
               }
          }).then (response => console.log('response: ', response));
     }

     render () {
          return (
               <div id="app-wrapper">
                    <div>
                         <form class="search-container" noValidate autoComplete="off">
                              <TextField
                                   id="standard-name"
                                   label="Search for song"
                                   margin="normal"
                                   value={this.state.query}
                                   onChange={event => { this.setState({query: event.target.value}) }}
                              />
                              <Button
                                   variant="contained"
                                   onClick={() => {this.search()}}
                                   className="search-btn">
                                   Search
                              </Button>
                         </form>
                         
                    </div>
                    <MusicCard></MusicCard>
               </div>
          )
     }
}

export default App;