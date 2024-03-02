import "./Welcomepage.scss"


export default function WelcomePage() {
    return (
      <body className='welcomePage'>
  
          <div style={{position: "absolute", left: '25%', top: '20%'}}>
              <div className="glow" style={{fontSize:'140px'}} >Quick</div>
              <div className="glow" style={{fontSize:'140px'}} >Web Games</div>
          </div>
          &nbsp;
          <a href="/homepage" className="button">Start Now</a>
          
      </body>
  
    );
  };
