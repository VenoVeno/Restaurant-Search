import React from 'react';

import { Properties } from '../../global.properties';

import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        console.log(Properties.URL)

        fetch(`${Properties.URL}/getAllRestaurant`, { method: "GET" })
            .then(response => response.json())
            .then(responseJSON => {
                console.log("Restaurants List", responseJSON)

                this.setState({
                    restaurants: responseJSON.restaurants
                })
            })
    }

    render() {
        const { restaurants } = this.state;
        console.log(restaurants)

        return (
            <div>

            </div>
        )
    }
}

export default HomePage;