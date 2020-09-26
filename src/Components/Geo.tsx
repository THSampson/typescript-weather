import React, { Component } from 'react';

const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather?lat=';
const api: string = '7c6eeb65b21ada074bcbf6e89326245c';


type Position = {
    lat: number,
    long: number,
    data: string,
  
}
interface IState {
    lat: number;
    long: number;
    data: string,


}

export default class Geo extends Component<{}, IState> {
    constructor(props: Position) {
        super(props)
        this.state = {
            lat: 0,
            long: 0,
            data: ''
 
        }
    }



componentDidMount() {
 navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude,
                long: position.coords.longitude
            })          
 })
 let url: string = baseURL + `${this.state.lat}&lon=${this.state.long}&appid=${api}`
 fetch(url)
 .then(res => res.json())
 .then((results) => {
    console.log(results)
    this.setState({
        data: results.weather[0].description
    })
  
})
 .catch(err => console.log(err)
)}


    render() {
        return(
            <div>
            <h2>Latitude: {this.state.lat}</h2>
            <h2>Longitude: {this.state.long}</h2>
            <h2>Weather: {this.state.data}</h2>
            </div>
        )
    }
}
   


