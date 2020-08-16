import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';

const Recipe = () => {
    const [albums, setAlbums] = useState([]);
    

    const fetchData = () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
        fetch(apiUrl).then((response) => {
            response.json().then((res) => {
                console.log(res);
                setAlbums(res)
            })
            
        });
    }

    useEffect(()=> {
        fetchData();
    }, [])

    return (
        <div className="album-list">
        { albums.map((item, i) => {
            return i > 7 ? null : <Card>
                <Card.Img variant="top" src={`./assets/images/slide${i}.jpeg`} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
            </Card>
            })};
        </div>
    )
}

export default Recipe;