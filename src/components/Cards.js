import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CardsData from "./CardsData";
import { ADD } from "../redux/actions/action";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">장바구니에 상품을 추가하세요. </h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((v, i) => {
          return (
            <>
              <Card
                className="mx-2 mt-4 card_style"
                style={{ width: "22rem", border: "none" }}
              >
                <Card.Img
                  variant="top"
                  src={v.imgdata}
                  className="mt-3"
                  style={{ height: "16rem" }}
                />
                <Card.Body>
                  <Card.Title>{v.rname}</Card.Title>
                  <Card.Text>가격 : {v.price}원</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => send(v)}
                      className="col-lg-12"
                    >
                      장바구니
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
