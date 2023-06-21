import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Select,
  MenuItem,
  FormControl,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Snackbar,
} from "@mui/material";
import Imagen_2 from "../images/imagen_2.jpg";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import InputLabel from "@mui/material/InputLabel";
import DeleteIcon from "@mui/icons-material/Delete";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetchAuthors();
    fetchGenres();
    fetchBooks();
  }, []);

  const fetchAuthors = () => {
    fetch("http://3.231.54.223:8000/autors")
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  };
  const fetchGenres = () => {
    fetch("http://3.231.54.223:8001/genres")
      .then((response) => response.json())
      .then((data) => setGenres(data));
  };
  const fetchBooks = () => {
    fetch("http://3.231.54.223:8002/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  };

  const handleSort = () => {
    const sortedBooks = [...books].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[3].localeCompare(b[3]);
      } else {
        return b[3].localeCompare(a[3]);
      }
    });
    setBooks(sortedBooks);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleRemoveFromList = (index) => {
    setSelectedBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  };

  const handleFilterGenre = (event) => {
    setFilterGenre(event.target.value);
  };

  const handleAddToList = (title, price) => {
    setSelectedBooks((prevSelectedBooks) => [
      ...prevSelectedBooks,
      { title, price },
    ]);
  };
  const handleBuy = () => {
    setShowSnackbar(true);
    setTotalPrice(getTotalPrice());
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const getTotalPrice = () => {
    return selectedBooks.reduce(
      (total, book) => total + parseFloat(book.price),
      0
    );
  };

  const filteredBooks = filterGenre
    ? books.filter((book) => book[2] === filterGenre)
    : books;

  return (
    <div>
      {console.log("autores" + authors.length)}
      {console.log("generos" + genres.length)}

      <Container
        maxWidth="md"
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "15px",
          border: "3px solid #353333",
          backgroundColor: "#f9e79f",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontFamily="Yanone Kaffeesatz"
          gutterBottom
        >
          NUESTRO CATÁLOGO DE LIBROS
        </Typography>
        <Box mb={2} display="flex" justifyContent="space-between">
          <FormControl variant="filled" sx={{ flexGrow: 1 }}>
            <InputLabel id="selector-genero">Género</InputLabel>
            <Select
              labelId="selector-genero"
              value={filterGenre}
              onChange={handleFilterGenre}
            >
              <MenuItem value="">Todos los géneros</MenuItem>
              <MenuItem value={1}>Realismo mágico</MenuItem>
              <MenuItem value={2}>Fantasía</MenuItem>
              <MenuItem value={3}>Suspenso</MenuItem>
              <MenuItem value={4}>Novela histórica</MenuItem>
              <MenuItem value={5}>Autobiografía</MenuItem>
              <MenuItem value={6}>Terror</MenuItem>
              <MenuItem value={7}>Romance</MenuItem>
              <MenuItem value={8}>Distopía</MenuItem>
              <MenuItem value={9}>Novela contemporánea</MenuItem>
              <MenuItem value={10}>Aventura</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleSort} sx={{ m: 1 }}>
            Ordenar
            <SortByAlphaIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
        <Grid container spacing={2}>
          {filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book[0]}>
              <Card sx={{backgroundColor:"#353333"}}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography fontFamily="Yanone Kaffeesatz" color="#fff" variant="subtitle1" textAlign="center">
                        <strong>{book[3]}</strong>
                      </Typography>
                      <Typography fontFamily="Yanone Kaffeesatz" color="#fff" variant="body2">
                        <strong>Autor: </strong>
                        {`${authors[parseInt(book[1]) - 1][1]} ${
                          authors[parseInt(book[1]) - 1][2]
                        }`}
                      </Typography>
                      <Typography  fontFamily="Yanone Kaffeesatz" color="#fff" variant="body2">
                        <strong>Género: </strong>
                        {`${genres[parseInt(book[2]) - 1][1]}`}
                      </Typography>
                      <Typography  fontFamily="Yanone Kaffeesatz" color="#fff" variant="body2">
                        <strong>Fecha: </strong>
                        {book[4].substring(0, 16)}
                      </Typography>
                      <Typography  fontFamily="Yanone Kaffeesatz" color="#fff" variant="body2">
                        <strong>Editorial: </strong>
                        {book[5]}
                      </Typography>
                      <Typography  fontFamily="Yanone Kaffeesatz" color="#fff" variant="body2">
                        <strong>Precio: $</strong>
                        {book[6]}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <img
                        width="100%"
                        height="150px"
                        src={Imagen_2}
                        alt="Libro"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        sx={{ width: "100%" }}
                        variant="contained"
                        onClick={() => handleAddToList(book[3], book[6])}
                      >
                        Añadir
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "15px",
          border: "3px solid #353333",
          backgroundColor: "#fef9e7",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontFamily="Yanone Kaffeesatz"
          gutterBottom
        >
          LISTA DE COMPRAS
        </Typography>
        <List>
          {selectedBooks.map((book, index) => (
            <div>
              <ListItem key={index}>
                <ListItemText
                  primary={book.title}
                  secondary={`Precio: $ ${book.price}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="Eliminar"
                    onClick={() => handleRemoveFromList(index)}
                  >
                    <DeleteIcon sx={{ color: "#ec7063" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
          <ListItem>
            <ListItemText
              primary="Total"
              secondary={`Suma de precios: $ ${getTotalPrice().toFixed(2)}`}
            />
            <Button variant="outlined" color="primary" onClick={handleBuy}>
              Comprar
            </Button>
          </ListItem>
        </List>
      </Container>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`Gracias por su compra Total: $${totalPrice.toFixed(2)}`}
      />
    </div>
  );
};

export default BookList;
