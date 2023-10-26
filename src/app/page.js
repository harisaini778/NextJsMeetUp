"use client"

import React, { useState,Fragment } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AllMeetUps from './all-meetups/page';
import Head from "next/head";


export default function Home() {
  const [meetUpIsVisible, setMeetUpIsVisible] = useState(true);

  const showMeetUpHandler = () => {
    setMeetUpIsVisible((prevState) => !prevState);
  };

  return (
    <Fragment>

     <Head>
        <title>Next Js MeetUps</title>
        <meta name='description' content="Add amazing meetups and explore new opportunities" />
      </Head>

    <div>
      <Navbar expand="lg" variant="dark" className="p-4 bg-orange-500">
        <Container>
        <Navbar.Brand>NextJsMeetUps</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="mr-2">
              <button
                onClick={showMeetUpHandler}
                className=" bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white p-2 rounded-lg"
              >
                Show All Meetups
              </button>
            </div>
            <div>
              <Link href="/add-meetups">
                <button
                  className=" bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white p-2 rounded-lg"
                >
                  Add a new meetup
                </button>
              </Link>
            </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        {meetUpIsVisible && <AllMeetUps />}
      </Container>
      </div>
          </Fragment>
  );
}
