import React, { useState} from "react";
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';

function AdminAuthorForm() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("http://3.231.54.223:8000/autors", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {})
      .catch(function (error) {});
  };
  const handleShow = () => {
    setShowSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "10px",
        backgroundColor: "#fae5d3",
        borderRadius: "15px",
        border: "3px solid #000",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Crear Nuevo Autor
      </Typography>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          type="text"
          name="nombre"
          defaultValue="Nuevo Nombre"
          label="Nombre"
          variant="outlined"
          sx={{ width: "100%", margin: "10px 0" }}
        />
        <TextField
          type="text"
          name="apellido"
          defaultValue="Nuevo Apellido"
          label="Apellido"
          variant="outlined"
          sx={{ width: "100%", margin: "10px 0" }}
        />
        <TextField
          type="text"
          name="pais"
          defaultValue="Nuevo País"
          label="País"
          variant="outlined"
          sx={{ width: "100%", margin: "10px 0" }}
        />
        <Button
          type="submit"
          onClick={handleShow}
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
        >
          Enviar
        </Button>
      </form>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={"Autor nuevo añadido"}
      />
    </Container>
  );
}

export default AdminAuthorForm;
