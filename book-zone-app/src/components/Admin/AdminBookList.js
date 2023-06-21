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

function AdminBookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://3.231.54.223:8002/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);
  
  const handleDelete = (id) => {
    fetch(`http://3.231.54.223:8002/book/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(books.filter((book) => book[0] !== id));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fdebd0",
        borderRadius: "15px",
        border: "3px solid #000",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Libros
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>ID Autor</TableCell>
              <TableCell>ID Género</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Publicacíon</TableCell>
              <TableCell>Editorial</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book[0]}>
                <TableCell>{book[0]}</TableCell>
                <TableCell>{book[1]}</TableCell>
                <TableCell>{book[2]}</TableCell>
                <TableCell>{book[3]}</TableCell>
                <TableCell>{book[4].substring(0, 16)}</TableCell>
                <TableCell>{book[5]}</TableCell>
                <TableCell>{book[6]}</TableCell>
                <TableCell>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(book[0])}
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

export default AdminBookList;
