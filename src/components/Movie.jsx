import { Button, Card, Modal, Rate } from "antd";
import MoviesArray from "../MovieArray";
import ContextMovies from "../context/ContextMovies";
import { useContext, useState } from "react";
const { Meta } = Card;

const Movie = ({ data, id, deleteMovie }) => {
  const { arrayOfMovies, setArrayOfMovies } = useContext(ContextMovies);

  const { title, categoria, description, rate } = data;

  const [modalOpen, setModalOpen] = useState(false);

  const onDeleteMovie = (id) => {
    deleteMovie(id);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card
        hoverable
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        onClick={() => {
          console.log("abierto");
          setModalOpen(true);
        }}
        cover={<i className="ri-movie-2-line" style={{ fontSize: "3rem" }} />}
      >
        <Meta title={title} description={categoria} />
        <button
          style={{
            color: "red",
            fontSize: "1.2rem",
            position: "absolute",
            top: "0.3rem",
            right: "0.4rem",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => onDeleteMovie(id)}
        >
          <i className="ri-delete-bin-5-line"></i>
        </button>
      </Card>
      <Modal
        title={title}
        centered
        open={modalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => {
          handleCloseModal();
        }}
      >
        <p>Description: {description}</p>
        <p>Category: {categoria}</p>
        <Rate allowHalf defaultValue={rate} />
      </Modal>
    </>
  );
};

export default Movie;
