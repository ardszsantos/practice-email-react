import '../App.css';

const FooterComponent = () => {
  return ( 
    <div className='footerContainer'>
      <img className='footerImage' src='footerRect.png'></img>
      <hr className='footerHr'/>
      <div className='footerText'>
        <p className='footerP1'>
          If you have any questions, feel free to message us at <b>support@mailus.com</b>. All <br/>
          rights reserved. UPdate email preferences or unsubscribe.
        </p>
        <p className='footerP2'>
          5781 Spring St Salinas, Idaho 88606 <br/> United States
        </p>
        <p className='footerP3'>
          Terms of use | Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default FooterComponent;