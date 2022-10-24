import { useEffect, useState } from "react";
import * as functions from "../libs/functions";

const Posts = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setItems(json))
    })

    return <section>
    {items.map(item => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(2021, 0, item.id);
        const readTime = functions.readingTime(item.body);
        let readTimeIcons='';
        for (let i=0; i<readTime; i++) {
            readTimeIcons += '☕️';
        }
        return (<article key={item.id}>
            <h2>{item.title}</h2>
            <small>{monthNames[date.getMonth()]} {date.getDay()}, 2021 - {readTimeIcons} {readTime} min read</small>
            <article>{item.body}</article>
        </article>)
    })}
    </section>
}

export default Posts;