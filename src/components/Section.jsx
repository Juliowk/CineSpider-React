import { Carousel, Container } from "react-bootstrap";
import CarouselImage from "./carouselComponents/CarouselImage";

// Images do carousel
import banner from "../images/carouselImages/OEspetacularHomemAranhaBanner.jpg";
import { useEffect, useState } from "react";

const SectionBanner = () => {
  const [open, setOpen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 770) {
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
    <section style={{ backgroundColor: "black", color: "white" }}>
      {open ? (
        <Carousel className="text-white" controls={false}>
          <Carousel.Item>
            <CarouselImage src={banner} alt="First slide" />
            <Carousel.Caption
              className="d-flex flex-column justify-content-center align-items-start h-100 w-50
            text-start px-3"
            >
              <h1>
                Procurando um Filme?
                <br /> Veja o nosso Cabeça de Teia Favorito!
              </h1>
              <p className="fs-6">
                Se você está em busca de um filme que te leve a uma teia de
                aventuras emocionantes, nós temos a solução! Escolha entre os
                melhores filmes do Homem-Aranha e se prepare para mergulhar no
                universo do nosso super-herói favorito. Seja enfrentando vilões
                icônicos, explorando multiversos ou vivendo grandes dilemas
                pessoais, Peter Parker sempre tem algo novo para nos
                surpreender. Vamos te ajudar a escolher o melhor filme para uma
                maratona de teia e ação!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Container bg="dark" data-bs-theme="dark" className="pt-5" fluid>
          <div
            className="d-flex flex-column justify-content-center align-items-start h-100 w-100
            text-start px-3"
          >
            <h2>
              Procurando um Filme? <br />
              Veja o nosso Cabeça de Teia Favorito! 🤘
            </h2>
            <p className="fs-6 pt-3 pb,-3">
              Se você está em busca de um filme que te leve a uma teia de
              aventuras emocionantes, nós temos a solução! Escolha entre os
              melhores filmes do Homem-Aranha e se prepare para mergulhar no
              universo do nosso super-herói favorito. Seja enfrentando vilões
              icônicos, explorando multiversos ou vivendo grandes dilemas
              pessoais, Peter Parker sempre tem algo novo para nos surpreender.
              Vamos te ajudar a escolher o melhor filme para uma maratona de
              teia e ação!
            </p>
          </div>
        </Container>
      )}
    </section>
  );
};

export default SectionBanner;
