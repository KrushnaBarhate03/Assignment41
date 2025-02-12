import customName from './product.css'

export function ProductCard(props) {
    const { Image, BrandName, description, price } = props;
    return (
        <div>
            <div className="card">
                <img className="image" src={Image} alt={BrandName} />
                <h2 className="heading">{BrandName}</h2>
                <p className="para"><b>{description}</b></p>
                <p className="price"><b className="b">₹</b> {price}</p>
                <button className="button" type="button">Buy Now</button>
            </div>
        </div>
    );
}

