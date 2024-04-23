import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="white">
            <Container>
                <Navbar.Brand href="/">Film Iseng Aja</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">Trending</Nav.Link>
                <Nav.Link href="#film">Film</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar