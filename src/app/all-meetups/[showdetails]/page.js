"use client"

// all-meetups/[showdetails]/page.js

import { useSelector } from "react-redux";
import { Card, Container,Button,Stack } from "react-bootstrap";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import "../../add-meetups/add-meetups.css"

const ShowDetails = ({ params }) => {
  const details = useSelector((state) => state.meetups.initialMeetups);
  const detailsArr = details.find((meetup) => meetup._id === params.showdetails);

    return (
      <Fragment>
            
     <Head>
            
                <title>{detailsArr.name}</title>
                <meta name="description" content={detailsArr.description} />

            </Head>

            <Container className="mt-4">
    <Link href="/">
    <Button className="go-back-btn m-1">
    <Stack direction="horizontal" gap="2">
    <BsArrowLeft/>
    <div>Go Back</div>
    </Stack>
      </Button>
    </Link>
   </Container>


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
                  </Fragment>
  );
};

export default ShowDetails;
