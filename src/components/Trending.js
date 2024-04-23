import { Card, Container, Row, Col, Image } from "react-bootstrap";
import topgunImage from "../assets/image/trending/Top Gun Maverick.jpeg";
import grayImage from "../assets/image/trending/The Gray Men.jpeg";
import wakandaImage from "../assets/image/trending/Wakanda Forever.jpeg";
import thorImage from "../assets/image/trending/Thor Love & Thunder.jpg";
import adultImage from "../assets/image/trending/loving.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br></br>
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={topgunImage} alt="Top Gun" className="images" />
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
              <Image src={grayImage} alt="Grey Man" className="images" />
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

export default Trending;
