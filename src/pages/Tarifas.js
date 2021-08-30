import React from "react-router-dom";
import { PageTemplate } from "../components/PageTemplate";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Tarifas = () => {

  let history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };


  return (
    <PageTemplate>
      <Container >
        {/* Tarifas */}
          <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading text-start">
              Tarifa del Servicio
            </h2>
            {/*<Card>
            <Card.Header>
                  <h4>Estandar</h4>
                </Card.Header>
              <Card.Body> */}
            <p className="lead text-start mt-4">
                <h1 className="card-title pricing-card-title">
                    $9.000<small className="text-muted fw-light">/por persona</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>1 hora de juego</li>
                  <li>100 balas</li>
                  <li>Min. 8 personas</li>
                  <li>Recarga $3.000<small className="text-muted fw-light">/100 balas</small></li>
                </ul>
                <Button className="w-100 text-white" onClick={()=>handleClick("/reservar")}>Reservar</Button>
                </p>

              {/* </Card.Body>
            </Card> */}
          </div>
          <div className="col-md-5">
            <img
              className="rounded-3 bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="img/home6.jpeg"
            />
          </div>
        </div>
        <hr className="featurette-divider"></hr>
      </Container>
    </PageTemplate>
  );
};
