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
                <section id="services" className="full-height px-lg-5">
                    <div className="container">

                        <div className="row pb-4" data-aos="fade-up">
                            <div className="col-lg-8">
                                <h6 className="text-brand">SERVICES</h6>
                                <h1>Services That I Provide</h1>
                            </div>
                        </div>

                        <div className="row gy-4">

                            <div className="col-md-4" data-aos="fade-up">
                                <div className="service p-4 bg-base rounded-4 shadow-effect">
                                    <div className="iconbox rounded-4">
                                        <i className="las la-feather"></i>
                                    </div>
                                    <h5 className="mt-4 mb-2 text-brand">UX Design</h5>
                                    <p style={{ color: "lightgrey" }}>I craft simple UX Design using MsPaint</p>
                                   
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="service p-4 bg-base rounded-4 shadow-effect">
                                    <div className="iconbox rounded-4">
                                        <i className="las la-pencil-ruler"></i>
                                    </div>
                                    <h5 className="mt-4 mb-2 text-brand">Hacking</h5>
                                    <p style={{ color: "lightgrey" }}>I can help you hack/recover any account you want. Of course the harder the site is the more you pay.</p>
                               
                                </div>
                            </div>

                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="service p-4 bg-base rounded-4 shadow-effect">
                                    <div className="iconbox rounded-4">
                                        <i className="las la-laptop-code"></i>
                                    </div>
                                    <h5 className="mt-4 mb-2 text-brand">Web Designing</h5>
                                    <p style={{ color: "lightgrey" }}>I design and create websites depending on your requirements. But of course, the complicated the website is the more you pay.</p>
                                  
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>

        </body>
    );
}
