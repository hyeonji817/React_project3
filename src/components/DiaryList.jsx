import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({data}) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button 
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"} 
          type={"POSITIVE"} 
        />
        <Button 
          onClick={() => nav("/todolist")}
          // element={<TodoItem />} <-- 이게 문제였음. 이미 TodoList페이지에 TodoItem 페이지 구동되었는데 굳이 또 연동하려하니 충돌나서 그런듯
          text={"투두리스트"} 
        />
      </div>

      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;