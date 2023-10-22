"use client"
import { useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import { initialMeetups } from "../store/Features/slices/page";
import Link from "next/link";
import "../styles/styles.css";

const AllMeetUps = () => {
  const meet = useSelector((state) => state.meetups.initialMeetups);
  const meetups = meet ? Object.values(meet) : [];

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {meetups.map((meetup) => (
          <Col key={meetup.id}>
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
                <Link href={`/showdetails/${meetup.id}`} passHref>
                <button className="bg bg-orange-500 border-orange-500  hover:bg-orange-700 hover:border-orange-700
                   text-white p-2 rounded-lg" >Show Details</button>
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
