import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 4px double cyan;
  background-color: blue;
  width: 500px;
  margin: 50px auto;
  box-shadow: 2px 2px 10px navy;
  h2 {
    font-size: 2rem;
    text-align: center;
    color: white;
    margin: 5px;

    h3 {
      font-size: 1.5rem;
      margin: 10px;
    }
  }
`;
const ContentDiv = styled.div`
  display: flex;
  align-content: top;
  div {
    width: 50%;
    text-align: cemter;
    padding: 0px 20px;
  }
`;
function CharCard(props) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (props.charInfo === undefined) return <h2>Loading...</h2>;

  return (
    <div className="cardList">
      {props.charInfo.map(item => {
        return (
          <Card key={item.name}>
            <h2>{item.name}</h2>
            <ContentDiv>
              <div>
                <h3>HEIGHT: {item.height}</h3>
                <h3>MASS: {item.mass}</h3>
                <h3>HAIR COLOR: {capitalize(item.hair_color)}</h3>
                <h3>SKIN COLOR: {capitalize(item.skin_color)}</h3>
              </div>
              <div>
                <h3>EYE COLOR: {capitalize(item.eye_color)}</h3>
                <h3>BIRTH YEAR: {item.birth_year}</h3>
                <h3>GENDER: {capitalize(item.gender)}</h3>
              </div>
            </ContentDiv>
          </Card>
        );
      })}
    </div>
  );
}

export default CharCard;
