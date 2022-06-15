const Events = ({ img, title, text }) => {
  return (
    <div>
      <div className="events-container d-flex ">
          {img &&  <div className="events-img">
          <img className="card-img-top" src={img} />
        </div> }
      
        <div className= {` p-4 mb-2 ${
               img ? "events-textbox" : "textbox-long"   }` }  >

          <div className="events-title font-montserrat">{title}</div>
          <div className="events-text font-16 font-montserrat  ">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
