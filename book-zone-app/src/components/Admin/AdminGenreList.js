import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function AdminGenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://3.231.54.223:8001/genres")
      .then((response) => response.json())
      .then((data) => setGenres(data))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://3.231.54.223:8001/genre/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Actualizar la lista de géneros después de eliminar
        setGenres(genres.filter((genre) => genre[0] !== id));
      })
      .catch((error) => console.error("Error deleting genre:", error));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fae5d3",
        borderRadius: "15px",
        border: "3px solid #000",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Géneros
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {genres.map((genre) => (
              <TableRow key={genre[0]}>
                <TableCell>{genre[0]}</TableCell>
                <TableCell>{genre[1]}</TableCell>
                <TableCell>{genre[2]}</TableCell>
                <TableCell>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(genre[0])}
                  >
                    Eliminar
                    <DeleteIcon sx={{ml:1}}/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default AdminGenreList;
