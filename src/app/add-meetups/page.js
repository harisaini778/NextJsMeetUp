"use client"

import { Card, Form } from "react-bootstrap";
import { useRef,Fragment } from "react";
import Head from "next/head";
//import { useDispatch } from "react-redux";
//import { addMeetup } from "../store/Features/slices/page";
import { BsArrowLeft } from "react-icons/bs";
import {Button} from "react-bootstrap";
import { Container,Stack } from "react-bootstrap";
import "./add-meetups.css";
import Link from "next/link";


const AddMeetUp = () => {

  //const dispatch = useDispatch();

  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const timeRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);

  const clearFormHandler = () => {
    nameRef.current.value = "";
    addressRef.current.value = "";
    timeRef.current.value = "";
    imageRef.current.value = "";
    descriptionRef.current.value = "";
  };

const addNewMeetUpHandler = async () => {
  const obj = {
    name: nameRef.current.value,
    address: addressRef.current.value,
    time: timeRef.current.value,
  };

  if (imageRef.current.value) {
    obj.image = imageRef.current.value;
  }
  if (descriptionRef.current.value) {
    obj.description = descriptionRef.current.value;
  }

  try {
    const response = await fetch("https://next-js-meet-up-two.vercel.app/api/FetchMeetUps", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    //dispatch(addMeetup(obj));

    clearFormHandler();
  } catch (error) {
    console.error("Error occurred while adding a new meetup: ", error);
  }
};



  return (
    <Fragment>
       <Head>
        <title>Next Js MeetUps</title>
        <meta name='description'
        content="Add New MeetUp"/>
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
  

  <Container className="add-meetup-container">
      <Card>
        <Card.Header
          style={{
            backgroundColor: "rgb(234, 88, 12)",
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          Add a new meetup
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label as="label" htmlFor="meetup-name">
                Name:
              </Form.Label>
              <Form.Control type="text" id="meetup-name" ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="label" htmlFor="meetup-address">
                Address:
              </Form.Label>
              <Form.Control type="text" id="meetup-address" ref={addressRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="label" htmlFor="meetup-time">
                Time:
              </Form.Label>
              <Form.Control type="time" id="meetup-time" ref={timeRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="label" htmlFor="meetup-image">
                Image:
              </Form.Label>
              <Form.Control type="url" id="meetup-image" ref={imageRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label as="label" htmlFor="meetup-description">
                Description:
              </Form.Label>
              <Form.Control
                type="text"
                id="meetup-description"
                ref={descriptionRef}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg"
            onClick={addNewMeetUpHandler}
          >
            Add meetup
          </button>
        </Card.Footer>
      </Card>
      </Container>
      </Fragment>
  );
};

export default AddMeetUp;
