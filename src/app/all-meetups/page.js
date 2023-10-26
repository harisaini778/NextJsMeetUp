"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import { fetchAllMeetUps } from "../store/Features/slices/page";
import Link from "next/link";
import "../styles/styles.css";

const AllMeetUps = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMeetUps());
  }, []);

  const meetups = useSelector((state) => state.meetups.initialMeetups) || [];
  //const meetups = meet ? meet : [];
  //console.log("Meetups:", meetups);

  const extractId = (meetup) => {
    if (meetup && meetup._id && meetup._id.$oid) {
      console.log(meetup._id.$oid);
      return meetup._id.$oid;
    }
    return null;
  };

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {meetups.length===0 ? <div style={{fontWeight:"bold"}}>There are no meetups for you, click to add your meetups!</div>
          : meetups.map((meetup) => (
          <Col key={extractId(meetup)}>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={meetup.image}
                alt={meetup.name}
                style={{ height: '15rem', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{meetup.name}</Card.Title>
                <Card.Text>Address: {meetup.address}</Card.Text>
                <Card.Text>Time: {meetup.time}</Card.Text>
                <Link href={`/all-meetups/${extractId(meetup)}`}>
                  <button className="bg bg-orange-500 border-orange-500  hover:bg-orange-700 hover:border-orange-700 text-white p-2 rounded-lg">Show Details</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllMeetUps;
