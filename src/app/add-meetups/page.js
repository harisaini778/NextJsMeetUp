"use client"

import { Card, Form } from "react-bootstrap";
import { useRef } from "react";
//import { useDispatch } from "react-redux";
//import { addMeetup } from "../store/Features/slices/page";


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
    const response = await fetch("http://localhost:3000/api/FetchMeetUps", {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ width: "35vw", justifyContent: "center" }}>
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
    </div>
  );
};

export default AddMeetUp;
