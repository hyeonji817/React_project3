import { getEmotionImage } from "../util/get-emotion-image";
import heartImage from "../assets/heart.png";
import Button from "./Button";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 하트이미지 구현 
const getHeartImage = (heartId) => {};

const DiaryItem = ({id, emotionId, createdDate, content, heartId}) => {
  const nav = useNavigate();

  // 좋아요 누른 횟수를 구현할 기능메소드 
  const [count, setCount] = useState(0);

  // 버튼 클릭 시, 좋아요 표시 갯수 구현 
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={()=>nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div
        onClick={() => nav(`/diary/${id}`)}
        className="info_section"
      >
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button 
          onClick={() => nav(`/edit/${id}`)}
          text={"수정하기"} />
      </div>
      <div
        onClick={() => onClickButton(1)}
        className="good">
        <img src={getHeartImage(heartId)} alt="heart" />
        <div className="count">{count}</div>
      </div>
    </div>
  );
};

export default DiaryItem;