import React, { useState } from "react";
import MessageIcon from '@mui/icons-material/Message';
import "./ChatUi.css";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";



function ChatUI({ socket }) {
  const navigate = useNavigate();
  const [handle, sethandle] = useState(false);
  const [userName, setUserName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userName", userName)
    socket.emit("newUser", { userName, socketID: socket.id })
    navigate("/chat")
  }
  return (
    <>
      {!handle && <div className="main-container">
        <div
          className="upper-container"
          data-aos="fade"
          data-aos-easing="ease-in-cubic"
        >
          <div
            className="text-fields"
            data-aos="fade"
            data-aos-easing="ease-in-cubic"
            data-aos-delay="1000"
          >
            <div style={{ color: "white", fontWeight: 600, fontSize: "25px" }}>
              IRIS <CloseIcon style={{ marginLeft: '200px' }}
              />
            </div>
            <div className="hello-wave">
              Hello
              <MessageIcon />
              {/* <span role="img" aria-label="wave">
              👋
            </span> */}
            </div>
            <div style={{ color: "white", fontWeight: 400, fontSize: "20px" }}>
              <div>I am Iris, a Virtual Assistant</div>
              <div>How may I help you?</div>
            </div>
          </div>
        </div>
        <div className="lower-container">
          <div className="contents">
            <div
              className="bot-logo"
              data-aos="fade"
              data-aos-easing="ease-in-cubic"
              data-aos-offset="100"
              data-aos-delay="2000"
            >
              <div
                style={{
                  margin: "auto",
                  width: "auto",
                  fontSize: "30px",
                  textAlign: "center",
                  lineHeight: "60px",
                  verticalAlign: "middle",
                }}
              >
                <MessageIcon />
              </div>
            </div>
            <div className="faq">
              <span
                data-aos="fade"
                data-aos-easing="ease-in-cubic"
                data-aos-offset="100"
                data-aos-delay="3000"
              >
                Frequently Asked Questions
              </span>
              <div
                className="circle"
                data-aos="fade"
                data-aos-easing="ease-in-cubic"
                data-aos-offset="100"
                data-aos-delay="3000"
              >
                <MessageIcon />
              </div>
            </div>
            <div
              className="questions"
              data-aos="fade"
              data-aos-easing="ease-in-cubic"
              data-aos-delay="3000"
            >
              <div className="indi-quest pointer">
                <span className="circle"></span>
                <span>Can I redeem my FB before the original term?</span>
              </div>
              <div className="indi-quest pointer">
                <span className="circle"></span>
                <span>How do I pay my Credit card bill?</span>
              </div>
              <div className="indi-quest pointer">
                <span className="circle"></span>
                <span>How can I get my Account Statement?</span>
              </div>
              <div className="indi-quest pointer flex h-12">
                <div className=""><Avatar sx={{ marginTop: "-11px", marginLeft: "5px" }} />  </div>
                <input type="text" placeholder="Enter Your Name" className=" h-12 -mt-3 border-2 border-white hover:border-whit w-full ml-1 text-center border-none" onChange={(e)=>{
              setUserName(e.target.value);
            }} />
              </div>
              <div className="cursor-pointer flex text-center justify-center mt-12 mr-5">
                <div className="flex text-center justify-center w-full rounded-lg bg-blue-400 h-10 p-2 -mt-10">
                  <div style={{ display: "flex" }}>
                    <MessageIcon />
                  </div>
                  <div style={{ display: "flex" }}>
                    <span className="convo" onClick={handleSubmit} style={{ fontWeight: 500, fontSize: "smaller" }}> Start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default ChatUI;
