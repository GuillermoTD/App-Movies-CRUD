import { useState, useContext, useCallback } from "react";
import { Layout, Menu, theme } from "antd";
import "../node_modules/remixicon/fonts/remixicon.css";
// import MoviesArray from "./MovieArray";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import ModalInsertMovie from "./components/ModalInsertMovie";
import Search from "antd/es/input/Search";
import ContextMovies from "./context/ContextMovies";
import MoviesArray from "./MovieArray";

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App = () => {
  const [showModal, setShoModal] = useState(false);
  const [arrayOfMovies, setArrayOfMovies] = useState(MoviesArray);

  const handleInput = useCallback ((searchTerm, setArrayOfMovies) => {
    const filteredMovies = MoviesArray.filter((item) =>
      item?.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredMovies)
    setArrayOfMovies(filteredMovies);
    console.log(arrayOfMovies)
  },[arrayOfMovies])

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [searchedMoviesArray, setSearchedMoviesArray] = useState([]);

  return (
    <ContextMovies.Provider
      value={{
        arrayOfMovies,
        setArrayOfMovies,
      }}
    >
      <div style={{ width: "100vw", height: "100vh" }}>
        <ModalInsertMovie setToggle={setShoModal} toggle={showModal} />

        <Layout style={{ height: "100%", overflow: "hidden" }}>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <h1 style={{color:"white"}}>Movies App CRUD</h1>
            </Menu>
          </Header>
          <Content
            style={{
              padding: "0.7rem 0.7rem",
              height: "90%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                gap: "1rem",
              }}
            >
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onChange={(event) =>{
                  handleInput(event.target.value, setArrayOfMovies)
                  console.log("cambiao")  
                }
                }
                // onSearch={onSearch}
              />

              <button
                onClick={() => setShoModal(!showModal)}
                style={{
                  background: "#4096FF",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "0.4rem",
                  padding: "0.2rem",
                }}
              >
                <i
                  className="ri-add-circle-fill"
                  style={{ fontSize: "2rem" }}
                ></i>
              </button>
            </div>
            {searchedMoviesArray.length == 0 ? (
              <MovieList movies={arrayOfMovies} />
            ) : (
              <MovieList movies={searchedMoviesArray} />
            )}
          </Content>
          <Footer
            style={{
              textAlign: "center",
              height: "0.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            theme="dark"
          >
            <div style={{display:"flex", alignItems:"center", gap:"0.2rem", fontSize:"1.04rem"}}>
              <p>Created with</p>{" "}
              <i className="ri-heart-fill" style={{ color: "red" }}></i> by
              Guillermo Tapia {new Date().getFullYear()}
            </div>
          </Footer>
        </Layout>
      </div>
    </ContextMovies.Provider>
  );
};
export default App;
