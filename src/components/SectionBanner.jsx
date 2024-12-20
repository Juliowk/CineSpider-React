import { Carousel, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CarouselImage from "./carouselComponents/CarouselImage";

// Images do carousel
import banner from "../images/carouselImages/OEspetacularHomemAranhaBanner.jpg";

const SectionBanner = () => {
  const [open, setOpen] = useState(true);

  const handleResize = () => {
    setOpen(window.innerWidth > 770);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section style={{ backgroundColor: "black", color: "white" }}>
      {open ? (
        <Carousel className="text-white" controls={false}>
          <Carousel.Item>
            <div style={{ position: "relative" }}>
              <CarouselImage src={banner} alt="Banner Spider-Man" />
              <div
                className="d-flex flex-column justify-content-center align-items-start h-100 w-50
            text-start px-3"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "30%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <h1>
                  Procurando um Filme?
                  <br /> Veja o nosso Cabeça de Teia Favorito!
                </h1>
                <p className="fs-6">
                  Se você está em busca de um filme que te leve a uma teia de
                  aventuras emocionantes, nós temos a solução! Escolha entre os
                  melhores filmes do Homem-Aranha e se prepare para mergulhar no
                  universo do nosso super-herói favorito. Seja enfrentando
                  vilões icônicos, explorando multiversos ou vivendo grandes
                  dilemas pessoais, Peter Parker sempre tem algo novo para nos
                  surpreender. Vamos te ajudar a escolher o melhor filme para
                  uma maratona de teia e ação!
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Container bg="dark" data-bs-theme="dark" className="" fluid>
          <Carousel className="text-white" controls={false}>
            <div style={{ position: "relative" }}>
              <CarouselImage
                src={banner}
                alt={"First slide"}
                height={300}
                objectFit={"scale-down"}
              />
              <div
                className="d-flex flex-column justify-content-center align-items-start h-100 w-80
            text-start px-3"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "31%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <h6>
                  Procurando um Filme?
                  <br /> Veja o nosso Cabeça de Teia Favorito!
                </h6>
              </div>
            </div>
            <Carousel.Item></Carousel.Item>
          </Carousel>
        </Container>
      )}
    </section>
  );
};

export default SectionBanner;
