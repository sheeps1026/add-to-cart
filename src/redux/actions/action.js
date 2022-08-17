export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// 아이템 삭제
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// 수량 삭제
export const REMOVE = (id) => {
  return {
    type: "RMV_ONE",
    payload: id,
  };
};
