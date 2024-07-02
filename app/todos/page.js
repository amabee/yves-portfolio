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

const todos = () => {
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

                <section id="blog" className="full-height px-lg-5">

                    <Container>
                        <Row className="pb-4" data-aos="fade-up">
                            <div className="col-lg-8">
                                <h6 className="text-brand">TODOS</h6>
                                <h1>My TODOS</h1>
                            </div>
                        </Row>
                        <Row className="gy-4">
                            <div className="col-md-4" data-aos="fade-up">
                                <div className="card-custom rounded-4 bg-base shadow-effect">
                                    <div className="card-custom-image rounded-4">
                                        <Image className="rounded-4" src={"/images/kafka.png"} width={150} height={150}></Image>

                                    </div>
                                    <div className="card-custom-content p-4">
                                        <p className="text-brand mb-2">Due: Today</p>
                                        <h5 className="mb-4" style={{ color: "lightgrey" }}>App Dev Assignment: Personal Website</h5>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-custom rounded-4 bg-base shadow-effect">
                                    <div className="card-custom-image rounded-4">
                                    <Image className="rounded-4" src={"/images/pika.png"} width={200} height={200}></Image>
                                    </div>
                                    <div className="card-custom-content p-4">
                                        <p className="text-brand mb-2">Due: Tomorrow</p>
                                        <h5 className="mb-4" style={{ color: "lightgrey" }}>System Administration Activity</h5>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="card-custom rounded-4 bg-base shadow-effect">
                                    <div className="card-custom-image rounded-4">
                                    <Image className="rounded-4" src={"/images/bg.png"} width={200} height={200}></Image>
                                    </div>
                                    <div className="card-custom-content p-4">
                                        <p className="text-brand mb-2">Due: July 5, 2025</p>
                                        <h5 className="mb-4" style={{ color: "lightgrey" }}>MIR: Reporting and Q&A</h5>

                                    </div>
                                </div>
                            </div>

                        </Row>
                    </Container>
                </section>
            </div>

        </body >
    )
}

export default todos