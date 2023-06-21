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

function AdminAuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://3.231.54.223:8000/autors")
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);
  
  const handleDelete = (id) => {
    fetch(`http://3.231.54.223:8000/autor/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthors(authors.filter((author) => author[0] !== id));
      })
      .catch((error) => console.error("Error deleting author:", error));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fcf3cf",
        borderRadius: "15px",
        border: "3px solid #000",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Autores
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>País</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow key={author[0]}>
                <TableCell>{author[0]}</TableCell>
                <TableCell>{author[1]}</TableCell>
                <TableCell>{author[2]}</TableCell>
                <TableCell>{author[3]}</TableCell>
                <TableCell>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(author[0])}
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

export default AdminAuthorList;
