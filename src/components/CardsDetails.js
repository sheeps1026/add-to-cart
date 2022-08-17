import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DLT, REMOVE } from "../redux/actions/action";
import Table from "react-bootstrap/Table";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const compare = () => {
    let compareData = getData.filter((v, i) => {
      return v.id == id;
    });

    setData(compareData);
  };

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  // 아이템 삭제
  const dlt = (id) => {
    dispatch(DLT(id));

    history("/");
  };

  useEffect(() => {
    compare();
  }, [id]);

  // 수량 삭제
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">주문 상세정보</h2>

        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((v, i) => {
              return (
                <>
                  <div className="items_img">
                    <img src={v.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>가게명</strong> : {v.rname}
                          </p>
                          <p>
                            <strong>가격</strong> : {v.price}
                          </p>
                          <p>
                            <strong>주문금액</strong> : {v.price * v.qnty}
                          </p>
                          <p>
                            <strong>비우기 : </strong>
                            <span>
                              <i
                                onClick={() => dlt(v.id)}
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              onClick={
                                v.qnty <= 1 ? () => dlt(v.id) : () => remove(v)
                              }
                              style={{ fontSize: 24 }}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{v.qnty}</span>
                            <span
                              onClick={() => send(v)}
                              style={{ fontSize: 24 }}
                            >
                              +
                            </span>
                          </div>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
