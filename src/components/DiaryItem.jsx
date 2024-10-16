import { getEmotionImage } from "../util/get-emotion-image";
import heartImage from "../assets/heart.png"; 
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

// 하트이미지 구현
const getHeartImage = (heartId) => {
  return heartImage;
};

const DiaryItem = ({id, emotionId, createdDate, content, heartId}) => {
  const nav = useNavigate();

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
        onClick={()=>nav()} 
        className="good">
        <img src={getHeartImage(heartId)} alt="heart" />
      </div>
    </div>
  );
}; 
export default DiaryItem;