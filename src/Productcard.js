const cardStyle = {
    border: "3px solid black",
    height: "auto",
    width: "320px",
   backgroundColor: "#f2f2f2",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
     margin: "10px 100px",
}

const imageStyle = {
    width: "95%",
    height:"350px",
    paddingTop: "10px",
    paddingLeft: "8px",
    borderRadius: "15px 15px 0 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
   
}


const headingStyle = {
    color: "blue",
    textAlign: "center"
}

const paraStyle = {
    padding: "0 10px",
    fontSize: "1.2rem",
    margin: "-10px 0"
}

const priceStyle = {
    padding:"4px",
    fontSize: "20px",
}

const b = {
    fontSize: "1rem",
}

const button = {
    backgroundColor: "yellowgreen",
    padding: "7px 18px",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight:"bold",
    fontFamily:"Times New Roman",
    borderRadius: "30px",
    border: "none",
    display: "flex",
    margin: "10px auto"
}

const mrpStyle = {
    fontSize: "1rem",
    marginLeft: "5px"
}

export function ProductCard(props) {
    const {Image, BrandName, description, price}=props;
  return (
    <div>
        <div style={cardStyle}>
            <img style={imageStyle} src={Image}/>
            <h2 style={headingStyle}>{BrandName}</h2>
            <p style={paraStyle}><b>{description}</b></p>
            <p style={priceStyle}> <b style={b}>₹</b> {price} </p>
            <button style={button} type='button'>Buy Now</button>
        </div>
 
    </div>
  );
}

