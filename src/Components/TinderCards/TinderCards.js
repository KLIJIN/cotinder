import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import database from "../config/firebase"
import "./TinderCards.css";



const TinderCards = () => {
  const [people, setPeople] = useState(
    []
  )


  useEffect(() => {
    database.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);


  return (
    <div>
      <div className="card__container">
        {people.map((person) => {
          const { url, name } = person;
          return (
            <TinderCard className="swipe" preventSwipe={["up", "down"]} key={name} >
              <div className="card__image" style={{ backgroundImage: `url(${url})` }} >
                <h3 className="card__title"  >{name}</h3>
              </div>
            </TinderCard>
          )
        })}
      </div>
    </div>
  )
}


export default TinderCards;