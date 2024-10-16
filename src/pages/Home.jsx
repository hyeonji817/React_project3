import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate} from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import TodoItem from "../components/TodoItem";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, 
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => 
      beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data); 
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    );
  };

  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    );
  };

  const nav = useNavigate();  // 경로이동 메소드 구현 

  return (
    <div>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${
          pivotDate.getMonth() + 1
        }월`} 
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <Button 
        onClick={() => nav(`/components/TodoList`)}
        element={<TodoItem />} 
        text={"투두리스트"} />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;