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

const about = () => {
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

                <section id="about" className="full-height px-lg-5">

                    <Container>
                        <div className="row pb-4" data-aos="fade-up">
                            <div className="col-lg-8">
                                <h6 className="text-brand">ABOUT</h6>
                                <h1>EDUCATION</h1>
                            </div>
                        </div>

                        <div className="row gy-5">
                            <div className="col-lg-6">
                                <div className="row gy-4">

                                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                        <div className="bg-base p-4 rounded-4 shadow-effect">
                                            <h4 style={{ color: "lightgrey" }}>ELEMENTARY</h4>
                                            <p className="text-brand mb-2">West City Central School
                                                (2007 - 2011)
                                            </p>
                                            <p className="mb-0" style={{ color: "lightgrey" }}>I went to West City Central School. I was an honor student from grade 1 to grade 6. I graduated as the valedectorian of the school.</p>
                                        </div>
                                    </div>

                                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                        <div className="bg-base p-4 rounded-4 shadow-effect">
                                            <h4 style={{ color: "lightgrey" }}>HIGHSCHOOL</h4>
                                            <p className="text-brand mb-2">Misamis Oriental General Comprehensive High School
                                                (2011 - 2015)</p>
                                            <p className="mb-0" style={{ color: "lightgrey" }}>I went to SKWELAHAN SA Misamis Oriental General Comprehensive High School. I was an honor student from grade 7 to grade 10. I graduated as the valedectorian of the school.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <div className="row gy-4">

                                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                        <div className="bg-base p-4 rounded-4 shadow-effect">
                                            <h4 style={{ color: "lightgrey" }}>COLLEGE</h4>
                                            <p className="text-brand mb-2">Cagayan de Oro College PHINMA (PRESENT)</p>
                                            <p className="mb-0" style={{ color: "lightgrey" }}>Currently taking Bachelor of Science in Information Technology at Cagayan de Oro College</p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>


                    </Container>

                </section>
            </div>

        </body >
    )
}

export default about