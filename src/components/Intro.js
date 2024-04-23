import { Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
  return (
    <div class="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div class="title">Nonton Dulu Bayar Nanti !!</div>
            <div class="title">Nonton Dulu Utang Gua Gebuk !!</div>
            <div className="IntroButton mt-4 text-center">
            <Button href="#film" variant="dark">Lihat Semua Film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
