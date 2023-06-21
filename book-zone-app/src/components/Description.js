import React from "react";
import Imagen_1 from "../images/imagen_1.png";
import { Typography, Container } from "@mui/material";

function Description() {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fcf3cf ",
        borderRadius: "15px",
        border: "3px solid #353333",
        marginTop: "10px",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <Typography
        variant="body1"
        textAlign="center"
        fontFamily="Yanone Kaffeesatz"
      >
        “BookZone” es nuestro negocio de e-commerce de venta de libros, nos
        encargamos de ofrecer una amplia variedad de títulos para satisfacer los
        gustos y necesidades de nuestros clientes. Contamos con un catálogo de
        libros en diferentes géneros, como novelas, ciencia ficción, biografías,
        entre otros. Brindaremos una experiencia de compra fácil, cómoda y
        segura, ofreciendo un sitio web con una interfaz amigable, en donde
        nuestros clientes podrán visualizar los libros que ofrecemos desde
        cualquier lugar y cualquier momento. También ofrecemos opciones de pago
        seguras y confiables. En nuestro negocio de e-commerce de ventas de
        libros, estamos comprometidos con fomentar la lectura, por lo que
        ofrecemos una gran variedad de títulos, autores y géneros, lo que
        permite a nuestros clientes encontrar libros que quizás no estén
        disponibles en las librerías de su zona.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img width="50%" src={Imagen_1} alt="Mi imagen" />
      </div>
    </Container>
  );
}

export default Description;
