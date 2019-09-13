import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
// import CardImage from './CardImage';

const StyledCard = styled.div`
    height: 30em;
    width: 20em;
    margin: 1em;
    background: black;
    border-radius: 5px;
    color: white;
    opacity: 0.7;

    h1 {
        opacity: 1;
    }

    img {
        opacity: 1;
        height: 150px;
    }
`

function Card(props) {

    const {num} = props;

    const [name, setName] = useState('');
    const [formattedName, setFormattedName] = useState('');
    const [birth, setBirth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [homeWorld, setHomeWorld] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    function format(nameStr) {
        return nameStr.split(' ').join('+');
    }

    const starWarsApi = useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/${num}/`)
        .then(response => {
          setName(response.data.name);
          setFormattedName(format(response.data.name));
          setBirth(response.data.birth_year);
          setHeight(`${response.data.height}cm`);
          setWeight(`${response.data.mass}kg`);
          // will fix this request to run earlier if i get time
          axios.get(response.data.homeworld).then(secondResponse => setHomeWorld(secondResponse.data.name));
          axios.get(`https://pixabay.com/api/?key=13607075-ec74584ffac8a1f4eceb3653b&q=${format(response.data.name)}&image_type=photo`)
            .then(imgResponse => setImgUrl(imgResponse.data.hits[0].webformatURL))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }, []);

   /*  const pixabayApi = useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=13607075-ec74584ffac8a1f4eceb3653b&q=luke+skywalker&image_type=photo`)
          .then(response => console.log(response.data.hits[0]));
      }, []); */

    return (
        <div className = "card-container">
        <StyledCard>
            <h1>{name}</h1>
            <h3>Birth Year: {birth}</h3>
            <h3>Height: {height}</h3>
            <h3>Weight: {weight}</h3>
            <h3>Homeworld: {homeWorld}</h3>
            <img className ="card-image" src={imgUrl} alt="character"/>
        </StyledCard>   
        </div>
    )
}

export default Card;