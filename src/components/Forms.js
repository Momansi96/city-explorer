import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Image } from 'react-bootstrap'
import AlertBox from './AlertBox'

export class Forms extends Component {

    constructor(props){
        super(props); 
        this.state= {
            cityName: "",
            cityData: {}, 
            display: false, 
            alert: false, 
            error: "", 
        }
    }
    updateCity=(e)=>{
        console.log(e.target.value);
        this.setState({
            cityName: e.target.value
        });
        console.log(this.state); 
    }
     getData = async (e)=>{
         e.preventDefault(); 
         try {
             const axiosData= await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.91236cc3e8901fb78ab9cc83588e7780&q=${this.state.cityName}&format=json`);
             console.log(axiosData); 
             this.setState({
                 cityData: axiosData.data[0], 
                 display: true, 
                 alert: false, 
                 error: "Error! Enter correct city name! "
             })
         }
         catch(error){
             this.setState({
                error: error.message, 
                alert: true, 
                display: false, 
             })
         }
     }

    render() {
        return (
            <div>
                <AlertBox alert= {this.state.alert} error= {this.state.error} />
                <Form onSubmit= {this.getData}>
                    <Form.Group className= "mb-3" controlId= "form BasicEmail" >
                     <Form.Label> City Name </Form.Label>
                     <Form.Control type= "text" placeholder= "Enter city name" onChange= {this.updateCity} size= {'sm'} ></Form.Control>
                    </Form.Group>
                    <Button type= "submit" variant= "danger" > Explore </Button>
                </Form>
                {this.state.display && 
                <div>
                 <p>
                     {this.state.cityData.display_name}
                 </p>
                 <Image src= {`https://maps.locationiq.com/v3/staticmap?key=pk.91236cc3e8901fb78ab9cc83588e7780&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} rounded />
                  <p>
                      {`latitude: ${this.state.cityData.lat} , longitude: ${this.state.cityData.lon}`}
                  </p>
                </div>
                }
            </div>
        )
    }
}

export default Form
