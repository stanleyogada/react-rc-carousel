import { CSSProperties } from "react";
import { Slider } from "./components/Slider";

const Products = ({ heading }: { heading: string }) => {
  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "350px",
    borderRadius: "15px",
    overflow: "hidden",
    border: "5px solid rgba(0, 0, 0, 0.1)",
  };
  const imageContainerStyle: CSSProperties = {
    height: "250px",
  };
  const imageStyle: CSSProperties = {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
  };
  const contentStyle: CSSProperties = {
    flexGrow: 1,
    flexShrink: 0,
    padding: "10px",
  };

  return (
    <>
      <h1>{heading}</h1>

      <div style={{ paddingBottom: "40px", borderBottom: "1px solid black" }}>
        <br />

        <Slider>
          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={imageContainerStyle}>
              <img
                style={imageStyle}
                src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              />
            </div>

            <div style={contentStyle}>
              <p>Nike Air Jordan 2</p>
              <h2>$122.99</h2>
            </div>
          </div>
        </Slider>
      </div>

      <br />
    </>
  );
};

export default Products;
