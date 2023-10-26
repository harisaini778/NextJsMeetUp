"use client"

// all-meetups/[showdetails]/page.js

import { useSelector } from "react-redux";
import { Card, Container } from "react-bootstrap";

const ShowDetails = ({ params }) => {
  const details = useSelector((state) => state.meetups.initialMeetups);
  const detailsArr = details.find((meetup) => meetup._id === params.showdetails);

  return (
    <Container className="mt-5">
      <h1 style={{textAlign:"center"}}>Meetup Details</h1>
      {detailsArr && (
        <Card className="m-5">
          <Card.Img
            src={detailsArr.image}
            alt={detailsArr.name}
            style={{ height: "20rem", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{detailsArr.name}</Card.Title>
            <Card.Text>Address: {detailsArr.address}</Card.Text>
            <Card.Text>Time: {detailsArr.time}</Card.Text>
            <Card.Text>Description: {detailsArr.description} </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ShowDetails;
