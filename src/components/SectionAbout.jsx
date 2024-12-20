import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const SectionAbout = () => {
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
    <section
      className="w-100 d-flex justify-content-center align-items-center mb-5"
      style={{ backgroundColor: "#ff4122" }}
    >
      <Card
        style={{ backgroundColor: "black" }}
        className={`text-white m-${open ? "5" : "3"} ${
          open ? "w-50" : "w-100"
        } ${open ? "p-5" : "p-2"}`}
      >
        <Card.Header>
          <h2>Querendo saber mais?</h2>
        </Card.Header>
        <Card.Body>
          Esse site é perfeito para os fãs do Cabeça de Teia que querem embarcar
          em uma maratona dos filmes do Homem-Aranha! Explore todos os filmes,
          desde os clássicos até os mais recentes, e use nossas ferramentas para
          ordenar e escolher o próximo da sua jornada. Com referências do
          universo Aranha, seja você fã do Peter Parker ou do Miles Morales,
          temos tudo para acertar na escolha do filme. Entre no &quot;Modo
          Aranha&quot; e aproveite a maratona! 🕷️🕸️
        </Card.Body>
      </Card>
    </section>
  );
};

export default SectionAbout;
