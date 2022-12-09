import { Container, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="3">
            <img src={logo} alt="logo" style={{ width: "300px" }} />
          </Col>
          <Col className="mt-3 d-flex">
            <InputGroup size="lg" style={{ width: "100em", height: "20px" }}>
              <Form.Control
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
            <Button
              variant="success"
              style={{ height: "48px" }}
              onClick={() => {
                dispatch({
                  type: "SEARCH_A_SONG",
                  payload: search,
                });
              }}
            >
              Search
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={() => navigate("/liked")}>
              Favourite
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBar;
