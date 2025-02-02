import "../styles/About.css";
export default function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
      Our mission is to reduce environmental impact by offering products that are ethically sourced,
      sustainably produced, and designed to last. Join us in making a positive change for the planet.
      </p>
      <p className="about-text">
        Thank you for choosing EcoMarket. Together, we can create a better future for generations to come.
      </p>

      <div className="team">
        <h3>Our Products</h3>
<div className="team-members">
          <div className="team-member">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} 
             
            />
            <h4>Men's Clothing</h4>
            
          </div>
          <div className="team-member">
            <img
              src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160}
              
            />
            <h4>Women's Clothing</h4>
            
            </div>
            <div className="team-member">
              <img
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160}
              />
              <h4>Jewelery</h4>
              
            </div>
            <div className="team-member">
              <img
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160}
              />
              <h4>Electronics</h4>

            </div> 
            
        </div>
      </div>
      </div>
    );
  }