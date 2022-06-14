import React from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
 

export default class PokeDetail extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const items = this.props.pokemon.items.map( (item) => {
            <li key={item.id}>
                <span>Item Name: {item.name}</span>
                <span>Item Price: {item.price}</span>
            </li>
        })

        return (
            <section className="pokedetail">
                <ul>
                    {items}
                </ul>
            </section>
        )
    }
}