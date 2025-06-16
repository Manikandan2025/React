import Card from "./Card";

const Content = () => {
  return (
    <div className="content">
      <Card card={"phone"} message={"phone is displayed"} imgurl={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSctMUh0dnXK-E-CZOcPir3h0MHSQsh26g-ogh8rScZvktjodsOBtfqlk0yDMN-d01AyWYxeHXSfAHi7vMAX1R7d-YxMyZ6Jqe65ixBQN7DGlShVSNgmqPVAQ"}/>
      <Card card={"Laptop"} message={"laptop is displayed"} imgurl={"https://p1-ofp.static.pub//medias/25932471988_LenovoThinkBook16Gen6ArcticGreyIMG_202307250411401715832386296.png"} />
      <Card card={"camera"} message={"camera is displayed"} imgurl={"https://media.istockphoto.com/id/1140393948/photo/camera-isolated-on-white-background-with-clipping-path-mirrorless-camera-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=fgLrcmhsxnq0Q6a7q4XIpY20iHWCM2vtS_JN2PQBg4A="}/>
    </div>
  );
};

export default Content;
