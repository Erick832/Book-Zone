import "./App.css";
import React, { useState } from "react";
import AdminAuthorList from "./components/Admin/AdminAuthorList";
import AdminBookList from "./components/Admin/AdminBookList";
import AdminGenreList from "./components/Admin/AdminGenreList";
import AdminBookForm from "./components/Admin/AdminBookForm";
import BookList from "./components/BookList";
import Description from "./components/Description";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { Tab, Tabs } from "@mui/material";
import AdminAuthorForm from "./components/Admin/AdminAuthorForm";
import AdminGenreForm from "./components/Admin/AdminGenreForm";

function PublicMode() {
  return (
    <div>
      <Description />
      <BookList />
    </div>
  );
}

function AdminMode() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="API LIBRO" />
          <Tab label="API AUTOR" />
          <Tab label="API GÉNERO" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <Typography component="div">
          <AdminBookForm />
          <AdminBookList />
        </Typography>
      )}
      {value === 1 && (
        <Typography component="div">
          <AdminAuthorForm />
          <AdminAuthorList />
        </Typography>
      )}
      {value === 2 && (
        <Typography component="div">
          <AdminGenreForm />
          <AdminGenreList />
        </Typography>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ backgroundColor: "#353333" }}>
        <Toolbar>
          <AutoStoriesIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BOOK ZONE
          </Typography>
          <Link to="/">
            <Button
              color="inherit"
              variant="outlined"
              sx={{ color: "#fff", m: 1 }}
            >
              Público
            </Button>
          </Link>
          <Link to="/admin">
            <Button
              color="inherit"
              variant="outlined"
              sx={{ color: "#fff", m: 1 }}
            >
              Administrador
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" exact Component={PublicMode} />
        <Route path="/admin" Component={AdminMode} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
