import "./QR_Component.css";
import qrImage from "../../assets/image-qr-code.png";

const QR_Component = () => {
  return (
    <div className="qr-container">
      <img src={qrImage} alt="" />
      <div className="text-container">
        <h1>Improve your Front-End skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QR_Component;
