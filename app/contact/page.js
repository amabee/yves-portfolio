"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import '../../public/assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/aos.css';
import '../../public/assets/line-awesome.min.css';

import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Container, Row, Col } from "react-bootstrap";

const contact = () => {
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

                <section id="contact" className="full-height px-lg-5">
                    <Container>

                        <Row className="justify-content-center text-center">
                            <div className="col-lg-8 pb-4" data-aos="fade-up">
                                <h6 className="text-brand">CONTACT</h6>
                                <h1>SEND LANG UG EMAIL BAI! REPLY RAKO
                                </h1>
                            </div>

                            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                                <form action="#" className="row g-lg-3 gy-3">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Enter your name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Enter your email"/>
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" placeholder="Enter subject"/>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea name="" rows="4" className="form-control" placeholder="Enter your message"></textarea>
                                    </div>
                                    <div className="form-group col-12 d-grid">
                                        <Button type="button" className="btn btn-brand" variant="success">Contact me</Button>
                                    </div>
                                </form>
                            </div>
                        </Row>


                    </Container>
                </section>

            </div>

        </body >
    )
}

export default contact