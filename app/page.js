"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import '../public/assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/aos.css';
import '../public/assets/line-awesome.min.css';

import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Container, Row, Col } from "react-bootstrap";


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <body data-bs-spy="scroll" data-bs-target=".navbar" style={{ backgroundColor: "yellowgreen" }}>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
          <Link className="navbar-brand mx-lg-auto mb-lg-4" href="#">
            <span className="h3 fw-bold d-block d-lg-none">Yves Owen Bonita</span>
            <Image src="/images/yves.png" width={150} height={180} className="d-none d-lg-block rounded-circle" alt="ogims!"></Image>
          </Link>

          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">

              <li className="nav-item">
                <Link className="nav-link" href={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/services"}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/about"}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/todos"}>My Todos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/contact"}>Contact</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      <div id="content-wrapper">
        <section id="home" className="full-height px-lg-5">

          <Container className="container">
            <Row>
              <div className="col-lg-10">
                <h1 className="display-4 fw-bold" data-aos="fade-up">HEY THERE! I'M <span className="text-brand">YVES OWEN BONITA</span> FROM CAGAYAN DE ORO CITY, <span className="text-brand">PHILIPPINES</span></h1>
              </div>
            </Row>

          </Container>


        </section>
      </div>

    </body>
  );
}
