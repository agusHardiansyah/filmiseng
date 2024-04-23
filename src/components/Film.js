import { Card, Container, Row, Col, Image } from "react-bootstrap";
import indigoImage from "../assets/image/list/indigo.jpg";
import lockedImage from "../assets/image/list/lockedin.jpg";
import vinaImage from "../assets/image/list/vina.jpeg";
import wakandaImage from "../assets/image/trending/Wakanda Forever.jpeg";
import thorImage from "../assets/image/trending/Thor Love & Thunder.jpg";
import adultImage from "../assets/image/trending/loving.jpg";

const Film = () => {
  return (
    <div>
      <Container>
        <br></br>
        <h1 className="text-dark text-center">LIST MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="film">
            <Card className="movieImage">
              <Image src={indigoImage} alt="Top Gun" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center ">
                    Top Gun Maverick
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lockedImage} alt="Grey Man" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center ">
                    Top Gun Maverick
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={vinaImage}
                alt="Wakanda Forever"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center ">
                    Top Gun Maverick
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={thorImage}
                alt="Wakanda Forever"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center ">
                    Top Gun Maverick
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={adultImage}
                alt="Wakanda Forever"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center ">
                    Top Gun Maverick
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={wakandaImage}
                alt="Wakanda Forever"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center ">
                    Top Gun Maverick
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Film;
