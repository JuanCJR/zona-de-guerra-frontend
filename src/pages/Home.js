import React from "react";
import { Container, Col, Row, Carousel, Card, Image } from "react-bootstrap";
import { PageTemplate } from "../components/PageTemplate";
export const Home = () => {
  return (
    <PageTemplate>
      {/* Carrusel */}
      <Carousel  variant="dark">
        <Carousel.Item >
          <img
            //className="d-block mx-auto"
            className="bd-placeholder-img shadowCard rounded-3"
            src="img/carrusel/img-c-2.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption style={{ color: "black" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item >
          <img
           
            //className="d-block mx-auto"
            className="bd-placeholder-img shadowCard rounded-3"
            src="img/carrusel/img-c-1.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption style={{ color: "black" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            //className="d-block mx-auto"
            className="bd-placeholder-img shadowCard rounded-3"
            src="img/carrusel/img-c-3.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption style={{ color: "black" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        
        <Carousel.Item >
          <img
            style={{ width: "100%" }}
            //className="d-block mx-auto"
            className="bd-placeholder-img shadowCard rounded-3"
            src="img/carrusel/img-c-4.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption style={{ color: "black" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item >
          <video controls preload="auto">
            <source src="img/carrusel/videos/video-c-1.mp4" />
          </video>
        </Carousel.Item>
      </Carousel>

      <Container>
        {/* informacion */}
        {/* <Row className="mt-2"> */}
          {/* Columa 1 */}
          {/* <Col lg={4} className="mb-3">
            <Card border="primary" className="shadowCard">
              <Card.Body>
                <Card.Title>
                  <Image src="img/home1.jpg" roundedCircle className="w-50" />
                </Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
          {/* Columa 2 */}
          {/* <Col lg={4} className="mb-3">
            <Card border="primary" className="shadowCard">
              <Card.Body>
                <Card.Title>
                  <Image src="img/home2.jpg" roundedCircle className="w-50" />
                </Card.Title>
                <Card.Text className="text-start">
                  Estamos ubicados en: El Olivar 2665 Paradero 47 Av. Santa Rosa
                  Entrada por la ferretería Pucoyam a 400mts. Te esperamos
                  sábados y domingos!!!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
          {/* Columa 3 */}
          {/* <Col lg={4} className="mb-3">
            <Card border="primary" className="shadowCard">
              <Card.Body>
                <Card.Title>
                  <Image src="img/home3.jpg" roundedCircle className="w-50" />
                </Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
        {/* </Row> */}

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="img/home6.jpeg"
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="img/home5.jpg"
            />
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one. <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
          <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="img/home2.jpg"
            />
          </div>
        </div>
        <hr className="featurette-divider"></hr>
      </Container>
    </PageTemplate>
  );
};
