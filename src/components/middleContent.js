import '../App.css';

const MiddleContent = () => {
  return ( 
    <div className='middleContainer'>
      <div className='middleTextWrapper'>
        <h1 className='middleH1'>
          Email marketing best practices to <br/>
          generate more leads
        </h1>
        <p className='middleP1'>
          Explained with actionable examples, <br/>
          screenshots and a swipe file.
        </p>
        <img src='retangol.png' className='middleRectangle'/>
        <p className='middleP2'>
          Nearly 100,000 people enjoyed the original 20 email best practices. We<br/>
          decided it was high time to update this guide, so we've added 20 more <br/>
          suggestions to help you optimize your email marketing.
        </p>
        <button className='middleButton'><p>Read more</p></button>
      </div>
    </div>
  );
}

export default MiddleContent;