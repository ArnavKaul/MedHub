import React, { useEffect, useState } from 'react';
import './common/payment.css';
import Header from "./Header";
import Footer from "./Footer.jsx";
import { useLocation } from "react-router-dom";
import image from './assets/image.png'
import { useNavigate } from "react-router-dom";


function Payment() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiLink, setUpiLink] = useState('');
  const [qrLink, setQrLink] = useState('');
  const [buttonText, setButtonText] = useState('Open UPI App');
  const location = useLocation();
	const { totalAmount } = location.state || { totalAmount: 0 }
  const navigate=useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amt = params.get("amount");
    const msg = params.get("message");
    const upi = params.get("upi");

    setAmount(amt || '');
    setMessage(msg || '');
    setUpiId(upi || 'neil.shinde2006@okhdfcbank');

    const generatedUpiLink = `upi://pay?pa=${upi}&pn=Mumpay&am=${amt}&tn=${msg}&cu=USD`;
    setUpiLink(generatedUpiLink);

    if (!amt) {
      setButtonText("Copy URL");
    } else {
      const generatedQrLink = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(generatedUpiLink)}&size=400x400&color=222-49-99&bgcolor=1a1a1a`;
      setQrLink(generatedQrLink);
    }
  }, []);

  const upiOpen = () => {
    if (!amount) {
      const url = document.getElementById("url").innerText.replace("you can click to edit", "");
      const k = encodeURIComponent(url.split("message=")[1]);
      const l = url.split("message=")[0] + "message=" + k;
      navigator.clipboard.writeText(l);
      setButtonText("Copied to Clipboard");
    } else {
      window.open(upiLink, "_self");
    }
  };

  const havePaid = () => {
    localStorage.setItem('isPaid', "true");
    navigate('/receipt');
  };

  

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === "123" || 
          (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) || 
          (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert("MumPay! Doesn't allow you to do that!");
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const createLink = (amount) => `http://127.0.0.1:5500/mumpay.html?upi=swayamshah0405@okaxis&amount=${amount}&message=MumPay%0A`;

  return (
    <div className="payBox">
      <Header></Header>
      <div className="title">
        <h1>MedPay!</h1>
        {/* <i>
          Still hmmm while asking for payments? Create yours{' '}
          <a href="./mumpay.html">MumPay</a>!
        </i> */}
      </div>

      <div className="qr">
        <img id="qr" alt="QR Code" src={image} />
      </div>
      
      <div className="details">
        <i id="details" spellCheck="false">
          {totalAmount ? (
            <>
              Scan with any UPI app
              <br />
              <span id="url" style={{ padding: '0em 1.2em' }}>
                <b>{upiId}</b> has requested you a payment of <b>${totalAmount}</b>{' '}
               
              </span>
            </>
          ) : (
            'How To Use'
          )}
        </i>
      </div>

      <div className="button">
        {/* <div id="button" onClick={upiOpen}>{buttonText}</div> */}
        <div id="button" onClick={havePaid}>I Have Paid</div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Payment;
