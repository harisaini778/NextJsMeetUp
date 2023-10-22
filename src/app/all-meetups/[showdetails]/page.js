"use client"

import { initialMeetups } from "../../store/Features/slices/page"

import { useSelector } from "react-redux";

import { Card, Container } from "react-bootstrap";

const ShowDetails = ({ params }) => {
    const details = useSelector((state) => state.meetups.initialMeetups);
    const detailsArr = details ? Object.values(details) : [];
    
    const meetDetails = {};


    detailsArr.forEach((item, index) => {
        meetDetails[index + 1] = {
            image: item.image,
            name: item.name,
            address: item.address,
            time: item.time,
            description: item.description
        }
    }
    );

    const meet = meetDetails[params.showdetails];

    return (
        <Container className="mt-5">
            <h1 className="flex justify-center">Meetup Details</h1>
            {meet && (
                <Card className="m-5">
                    <Card.Img
                        src={meet.image}
                        alt={meet.name}
                        style={{height:"20rem",objectFit:"cover"}}
                    /> 
                  <Card.Body>
                 <Card.Title>{meet.name}</Card.Title>
                 <Card.Text>Address: {meet.address}</Card.Text>
                 <Card.Text>Time: {meet.time}</Card.Text>
                 <Card.Text>Description : {meet.description} </Card.Text>
                  </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default ShowDetails;
