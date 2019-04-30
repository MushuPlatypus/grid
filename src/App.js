import React from "react";
import "./scss/App.scss";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Container>
          <Row>
            <Col>
              <div className="nav">Navigation</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="hero">Hero block</div>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <div className="contentblock">Content block</div>
          </Col>
          <Col>
            <div className="contentblock">Content block</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="textAndImage">
              <Row>
                <Col xs={{ span: 8, order: 1 }} md={{ span: 8, order: 2 }}>
                  <img
                    className="img-fluid textAndImage__image"
                    src="//images.ctfassets.net/mivicpf5zews/4E6KpMRIOQGW2mmsisYAEE/516f72cc5b60e83371fb2cc85d46ad2a/Group-on-Deck_1200x600px.jpg?w=950"
                    alt="Group of friends on deck "
                    title="Group of friends on deck "
                  />
                </Col>
                <Col xs={{ span: 4, order: 2 }} md={{ span: 4, order: 1 }}>
                  <div className="textAndImage__text">
                    <p>
                      Båtturer är perfekta för grupper. Du kan resa på en av
                      våra paketerade minisemester med dina vänner eller vara
                      värd för en affärskonferens.{" "}
                    </p>
                    <p>
                      Oavsett vilken typ av resa du söker, kan vårt team som är
                      ansvarigt för gruppresor hjälpa dig att organisera den. Då
                      får du exakt det du vill ha till ett bra pris.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="contentblock">Content block</div>
          </Col>
          <Col>
            <div className="contentblock">Content block</div>
          </Col>
          <Col>
            <div className="contentblock">Content block</div>
          </Col>
        </Row>
      </Container>
      <div className="footer-container">
        <Container>
          <Row>
            <Col>
              <div className="footer">Footer</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
