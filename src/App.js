import React from 'react';

import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import coronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        try{
            const fetchedData = await fetchData();
            this.setState({ data: fetchedData });
        } catch(error) {
            console.log(error);
        }
    }
    handleCountryChange = async (country) => {
        try{
            const fetchedData = await fetchData(country)
            this.setState({ data: fetchedData, country });
        } catch(error) {
            console.log(error);
        }
    }
    render() {
        const { data, country } = this.state;

        return(
            <div className='container'>
                <img src={coronaImage} className='image' alt='Covid-19'/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;