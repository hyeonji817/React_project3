import heart from "./../assets/heart.png"; 
import heart2 from "./../assets/heart2.png";

export function getHeartImage(heartId) {
  switch (heartId) {
    case 1:
      return heart;
    case 2:
      return heart2;
    default:
      return null;
  }
}