import React, { Component } from 'react';
import './App.css';
import MusicCard from './components/MusicCard';
import 'typeface-roboto';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

let tracks = [];
let tracksPlaying = [];
let counter = 0;

class App extends Component {
     constructor (props) {
          super (props);
          this.state = {
               query: ''
          }
     }
     
     playTrack (val) {
          tracksPlaying.filter(n => n);
          for (let i = 0; i <= tracksPlaying.length - 1; i++) {
               tracksPlaying[i].pause();
               tracksPlaying[i].currentTime = 0;
          }
          tracksPlaying[counter] = new Audio(tracks[val].preview);
          tracksPlaying[counter].play();
          counter++;
     }

     listTracks (data) {
          this.gotTracks = true;
          this.tracks = data;
     }

     search () {
          const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://deezerdevs-deezer.p.rapidapi.com/search?';
          const FETCH_URL = BASE_URL + 'q=' + this.state.query;
          // console.log('FETCH_URL: ', FETCH_URL);
          fetch(FETCH_URL, {
               method: 'GET',
               query: this.state.query,
               headers: {
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                    'X-RapidAPI-Key': '54aa7e8bc6mshd812b154b8704c0p12b1b8jsn505667115014'
               }
          }).then(function(response) {
               return response.json();
          }).then(function(data) {
               tracks = data.data;
               // console.log('tracks: ', tracks);
          });
     }

     render () {
          const audioTracks = [];
          
          for (let i = 0; i <= tracks.length - 1; i++) {
               audioTracks.push(<div className="track" onClick={() => { this.playTrack(i) }}>{i}: {tracks[i].title}</div>);
          }

          return (
               <div id="app-wrapper">
                    <div className="cont">
                         <form className="search-container" noValidate autoComplete="off">
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
                         <Button
                              variant="contained"
                              onClick={() => {this.setState(this.state)}}
                              className="search-btn">
                              Refresh list
                         </Button>
                    </div>
                    <div>
                         <div className="">{audioTracks}</div>
                         {/* <MusicCard></MusicCard> */}
                    </div>                    
               </div>
          )
     }
}

export default App;