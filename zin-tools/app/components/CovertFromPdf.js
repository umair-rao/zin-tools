import "../styles/CovertFromPdf.css";
import cardData from "./Data/CardsData.json";

const CovertFromPdf = () => {
  return (
    <div className="container">
      <h2>Convert to PDF</h2>
      <div className="toPdfBox">
        {cardData.convertToPdf.map((item, i) => (
          <div key={i} className="cardBox">
            <a href={item.link}>
              <img
                src={item.image}
                alt="icon"
                className="card-img"
              />
              <h3>{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CovertFromPdf;
