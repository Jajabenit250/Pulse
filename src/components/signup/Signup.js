import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./signup.css";
class Signup extends Component {

  render() {
    return (
      <div className="signup-box">
        <div className="signup-logo">
          <svg
            width="125"
            height="78"
            viewBox="0 0 125 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0777 0C-8.05526 34.8079 -24.4853 69.2645 64.7602 73.9093C87.1963 75.077 107.201 76.1169 125 77.0412V0H36.0777Z"
              fill="#0094FF"
            />
          </svg>
        </div>
        <div className="main-form">
          <div className="signup">
            <svg
              width="200"
              height="58"
              viewBox="0 0 200 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9277 33.8086C23.9277 32.1484 23.3418 30.8789 22.1699 30C20.998 29.1016 18.8887 28.1641 15.8418 27.1875C12.7949 26.1914 10.3828 25.2148 8.60547 24.2578C3.76172 21.6406 1.33984 18.1152 1.33984 13.6816C1.33984 11.377 1.98438 9.32617 3.27344 7.5293C4.58203 5.71289 6.44727 4.29688 8.86914 3.28125C11.3105 2.26562 14.0449 1.75781 17.0723 1.75781C20.1191 1.75781 22.834 2.31445 25.2168 3.42773C27.5996 4.52148 29.4453 6.07422 30.7539 8.08594C32.082 10.0977 32.7461 12.3828 32.7461 14.9414H23.957C23.957 12.9883 23.3418 11.4746 22.1113 10.4004C20.8809 9.30664 19.1523 8.75977 16.9258 8.75977C14.7773 8.75977 13.1074 9.21875 11.916 10.1367C10.7246 11.0352 10.1289 12.2266 10.1289 13.7109C10.1289 15.0977 10.8223 16.2598 12.209 17.1973C13.6152 18.1348 15.6758 19.0137 18.3906 19.834C23.3906 21.3379 27.0332 23.2031 29.3184 25.4297C31.6035 27.6562 32.7461 30.4297 32.7461 33.75C32.7461 37.4414 31.3496 40.3418 28.5566 42.4512C25.7637 44.541 22.0039 45.5859 17.2773 45.5859C13.9961 45.5859 11.0078 44.9902 8.3125 43.7988C5.61719 42.5879 3.55664 40.9375 2.13086 38.8477C0.724609 36.7578 0.0214844 34.3359 0.0214844 31.582H8.83984C8.83984 36.2891 11.6523 38.6426 17.2773 38.6426C19.3672 38.6426 20.998 38.2227 22.1699 37.3828C23.3418 36.5234 23.9277 35.332 23.9277 33.8086ZM47.1016 45H38.6055V13.3008H47.1016V45ZM38.1074 5.09766C38.1074 3.82813 38.5273 2.7832 39.3672 1.96289C40.2266 1.14258 41.3887 0.732422 42.8535 0.732422C44.2988 0.732422 45.4512 1.14258 46.3105 1.96289C47.1699 2.7832 47.5996 3.82813 47.5996 5.09766C47.5996 6.38672 47.1602 7.44141 46.2812 8.26172C45.4219 9.08203 44.2793 9.49219 42.8535 9.49219C41.4277 9.49219 40.2754 9.08203 39.3965 8.26172C38.5371 7.44141 38.1074 6.38672 38.1074 5.09766ZM52.873 28.916C52.873 24.0527 54.0254 20.1367 56.3301 17.168C58.6543 14.1992 61.7793 12.7148 65.7051 12.7148C69.1816 12.7148 71.8867 13.9063 73.8203 16.2891L74.1719 13.3008H81.8477V43.9453C81.8477 46.7188 81.2129 49.1309 79.9434 51.1816C78.6934 53.2324 76.9258 54.7949 74.6406 55.8691C72.3555 56.9434 69.6797 57.4805 66.6133 57.4805C64.2891 57.4805 62.0234 57.0117 59.8164 56.0742C57.6094 55.1562 55.9395 53.9648 54.8066 52.5L58.5566 47.3438C60.666 49.707 63.2246 50.8887 66.2324 50.8887C68.4785 50.8887 70.2266 50.2832 71.4766 49.0723C72.7266 47.8809 73.3516 46.1816 73.3516 43.9746V42.2754C71.3984 44.4824 68.8301 45.5859 65.6465 45.5859C61.8379 45.5859 58.752 44.1016 56.3887 41.1328C54.0449 38.1445 52.873 34.1895 52.873 29.2676V28.916ZM61.3398 29.5312C61.3398 32.4023 61.916 34.6582 63.0684 36.2988C64.2207 37.9199 65.8027 38.7305 67.8145 38.7305C70.3926 38.7305 72.2383 37.7637 73.3516 35.8301V22.5C72.2188 20.5664 70.3926 19.5996 67.873 19.5996C65.8418 19.5996 64.2402 20.4297 63.0684 22.0898C61.916 23.75 61.3398 26.2305 61.3398 29.5312ZM96.1738 13.3008L96.4375 16.9629C98.7031 14.1309 101.74 12.7148 105.549 12.7148C108.908 12.7148 111.408 13.7012 113.049 15.6738C114.689 17.6465 115.529 20.5957 115.568 24.5215V45H107.102V24.7266C107.102 22.9297 106.711 21.6309 105.93 20.8301C105.148 20.0098 103.85 19.5996 102.033 19.5996C99.6504 19.5996 97.8633 20.6152 96.6719 22.6465V45H88.2051V13.3008H96.1738ZM155.939 41.7773C153.85 44.3164 150.959 45.5859 147.268 45.5859C143.869 45.5859 141.271 44.6094 139.475 42.6562C137.697 40.7031 136.789 37.8418 136.75 34.0723V13.3008H145.217V33.7793C145.217 37.0801 146.721 38.7305 149.729 38.7305C152.6 38.7305 154.572 37.7344 155.646 35.7422V13.3008H164.143V45H156.174L155.939 41.7773ZM199.064 29.4434C199.064 34.3262 197.951 38.2422 195.725 41.1914C193.518 44.1211 190.529 45.5859 186.76 45.5859C183.557 45.5859 180.969 44.4727 178.996 42.2461V57.1875H170.529V13.3008H178.381L178.674 16.4062C180.725 13.9453 183.4 12.7148 186.701 12.7148C190.607 12.7148 193.645 14.1602 195.812 17.0508C197.98 19.9414 199.064 23.9258 199.064 29.0039V29.4434ZM190.598 28.8281C190.598 25.8789 190.07 23.6035 189.016 22.002C187.98 20.4004 186.467 19.5996 184.475 19.5996C181.818 19.5996 179.992 20.6152 178.996 22.6465V35.625C180.031 37.7148 181.877 38.7598 184.533 38.7598C188.576 38.7598 190.598 35.4492 190.598 28.8281Z"
                fill="#0094FF"
              />
            </svg>
          </div>
          <div>
            <Input label="Full Name" type="text" name="fname" />
            <Input label="Email" type="text" name="email" />
            <Input label="Password" type="password" name="pwd" />
            <Link to="/"><button className="signin-button">Sign up</button></Link>
            <a onClick={()=>{this.props.changeComponent("Signin")}}>
              <Text text="Go to sign in" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
class Input extends Component {
  state = {};
  render() {
    return (
      <div>
        <label className="label-text">{this.props.label}</label>
        <input
          id="input-border"
          className="form-control form-control-lg "
          type={this.props.type}
          name={this.props.name}
        />
      </div>
    );
  }
}
class Text extends Component {
  state = {};
  render() {
    return (
      <div>
        <h5 className="input-text">{this.props.text}</h5>
      </div>
    );
  }
}

export default Signup;
