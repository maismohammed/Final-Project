import '../contact.css'
export default function Contact() {
  return (
    <div className="contactFOrm">
      <div className="container_content">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Iraq, Baghdad</div>
              <div className="text-two">Al-Watheq SQ.</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+964 7716257702</div>
              <div className="text-two">+964 7716257703</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">mais.mohammed1994@gmail.com</div>
              <div className="text-two">mais.mohammed@jib.iq</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any types of queries related to my site, you can send me message from here. It's my pleasure to help you.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Phone Number" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="button1">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}