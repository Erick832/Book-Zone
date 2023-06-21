import React, { useState} from "react";
import { TextField, Button, Container, Typography, Select, MenuItem, Snackbar } from '@mui/material';

function AdminBookForm() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('http://3.231.54.223:8002/books', {
      method: 'POST',
      body: formData
    }).then(function(response) {
    }).catch(function(error) {
    });
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
        padding:"10px",
        backgroundColor: "#fae5d3",
        borderRadius: "15px",
        border: "3px solid #000",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Crear Nuevo Libro
      </Typography>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Select
          name="id_autor"
          defaultValue="1"
          displayEmpty
          variant="outlined"
          sx={{width:"100%", margin:"10px 0"}}
        >
          <MenuItem value="1">Gabriel García Márquez</MenuItem>
          <MenuItem value="2">J.K. Rowling</MenuItem>
          <MenuItem value="3">Haruki Murakami</MenuItem>
          <MenuItem value="4">Isabel Allende</MenuItem>
          <MenuItem value="5">Paulo Coelho</MenuItem>
          <MenuItem value="6">Stephen King</MenuItem>
          <MenuItem value="7">Jane Austen</MenuItem>
          <MenuItem value="8">George Orwell</MenuItem>
          <MenuItem value="9">Mario Vargas Llosa</MenuItem>
          <MenuItem value="10">Ernest Hemingway</MenuItem>
        </Select>
        
        <Select
          name="id_genero"
          defaultValue="1"
          displayEmpty
          variant="outlined"
          sx={{width:"100%", margin:"10px 0"}}
        >
          <MenuItem value="1">Realismo mágico</MenuItem>
          <MenuItem value="2">Fantasía</MenuItem>
          <MenuItem value="3">Suspenso</MenuItem>
          <MenuItem value="4">Novela histórica</MenuItem>
          <MenuItem value="5">Autobiografía</MenuItem>
          <MenuItem value="6">Terror</MenuItem>
          <MenuItem value="7">Romance</MenuItem>
          <MenuItem value="8">Distopía</MenuItem>
          <MenuItem value="9">Novela contemporánea</MenuItem>
          <MenuItem value="10">Aventura</MenuItem>
        </Select>

        <TextField
          type="text"
          name="titulo"
          defaultValue="Nuevo Título"
          label="Título"
          variant="outlined"
          sx={{width:"100%", margin:"10px 0"}}

        />
        <TextField
          type="text"
          name="editorial"
          defaultValue="Nuevo Editorial"
          label="Editorial"
          variant="outlined"
          sx={{width:"100%", margin:"10px 0"}}
        />
        <TextField
          type="number"
          name="precio"
          defaultValue={9.99}
          label="Precio"
          step="0.01"
          variant="outlined"
          sx={{width:"100%", margin:"10px 0"}}

        />
        <TextField
          type="date"
          name="fecha_publicacion"
          defaultValue="2012-12-12"
          label="Fecha de publicación"
          variant="outlined"
          sx={{width:"100%", margin:"10px 0"}}
        />
        <Button type="submit" onClick={handleShow} variant="contained" color="primary" sx={{width:"100%"}}>
          Enviar
        </Button>
      </form>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={"Libro nuevo añadido"}
      />
    </Container>
    
  );
}

export default AdminBookForm;
