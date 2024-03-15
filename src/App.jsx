import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Dialog from "./components/Dialog";
import { Button, Stack } from "react-bootstrap";
import FAQ from "./components/FAQ";
import Cards from "./components/Cards";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Stack direction="horizontal" gap={2} className="mb-5">
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Dialog />
        </Stack>
        <FAQ />
        <Cards />
      </main>
    </>
  );
};

export default App;
