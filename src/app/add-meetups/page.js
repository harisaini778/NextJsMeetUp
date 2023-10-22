"use client"

import { Card, Container, Form } from "react-bootstrap";
import { useEffect, useRef,useState } from "react";

const AddMeetUp = () => {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const timeRef = useRef(null);
    const imageRef = useRef(null);
    const descriptionRef = useRef(null);
    const [isSmaller, setIsSmaller] = useState(window.innerWidth < 576);

    const handleResize = () => {
        setIsSmaller(window.innerWidth <= 576);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        }
     }, []);


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
                <Card
                    style={{
                        width: isSmaller ? "80vw" : "35vw",
                        justifyContent: "center",
                    }}
                >
                    <Card.Header style={{
                        backgroundColor: "rgb(234 88 12)",
                        padding: "20px",
                        textAlign: "center",
                    color:"white"}}>
                        Add a new meetup
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label as="label" htmlFor="meetup-name">
                                    Name:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="meetup-name"
                                    ref={nameRef}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label as="label" htmlFor="meetup-address">
                                    Address:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="meetup-address"
                                    ref={addressRef}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label as="label" htmlFor="meetup-time">
                                    Time:
                                </Form.Label>
                                <Form.Control
                                    type="time"
                                    id="meetup-time"
                                    ref={timeRef}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label as="label" htmlFor="meetup-image">
                                    Image:
                                </Form.Label>
                                <Form.Control
                                    type="url"
                                    id="meetup-image"
                                    ref={imageRef}
                                />
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
                        <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg">
                            Add meetup
                        </button>
                    </Card.Footer>
                </Card>
        </div>
    );
};

export default AddMeetUp;
