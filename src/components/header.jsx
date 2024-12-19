import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import { Button, Col, Collapse, Row } from "react-bootstrap";

const HeaderComponent = () => {
  const [open, setOpen] = useState(true);
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 510) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-dark">
      <Navbar bg="dark" data-bs-theme="dark" className="h-20">
        <Container>
          <Row className="w-100 align-items-center">
            <Col xs={4} className="d-flex align-items-center">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Col>

            {/* Exibe o botão de colapsar em telas pequenas */}
            {!open && (
              <Col xs={4} className="d-flex justify-content-end ms-auto">
                <Button
                  onClick={() => setCollapseOpen(!collapseOpen)}
                  aria-controls="collapsible-navbar"
                  aria-expanded={collapseOpen}
                  variant="secondary"
                >
                  Menu
                </Button>
              </Col>
            )}

            {/* Exibe a navegação principal em telas grandes */}
            {open && (
              <Col xs={4} className="d-flex justify-content-center">
                <Nav>
                  <Nav.Link href="#about">Sobre</Nav.Link>
                  <NavDropdown title="Filtros" className="ms-3">
                    <NavDropdown.Item href="#assessment">
                      Avaliação
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/data">
                      Data
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#alphabetically">
                      Alfabeticamente
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#Favorites">
                      Favoritos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Col>
            )}

            {/* Exibe os links de redes sociais em telas grandes */}
            {open && (
              <Col xs={4} className="d-flex justify-content-end">
                <Nav>
                  <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
                  <Nav.Link href="#github" className="ms-3">
                    GitHub
                  </Nav.Link>
                </Nav>
              </Col>
            )}
          </Row>
        </Container>
      </Navbar>

      {/* Exibe o menu colapsável em telas pequenas */}
      {!open && (
        <Collapse in={collapseOpen}>
          <Navbar
            bg="dark"
            data-bs-theme="dark"
            className="h-20"
            id="collapsible-navbar"
          >
            <Container>
              <Row className="w-100">
                <Col className="d-flex">
                  <Nav className="d-flex gap-3">
                    <Nav.Link href="#about">Sobre</Nav.Link>
                    <NavDropdown title="Filtros">
                      <NavDropdown.Item href="#assessment">
                        Avaliação
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/data">
                        Data
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#alphabetically">
                        Alfabeticamente
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#Favorites">
                        Favoritos
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
                    <Nav.Link href="#github">GitHub</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </Collapse>
      )}
    </header>
  );
};

export default HeaderComponent;
