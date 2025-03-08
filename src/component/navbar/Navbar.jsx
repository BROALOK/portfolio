import React, { useState } from "react";
import passportsizeimage from "../../assets/myphoto.jpg";
import "./webpage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from '../../assets/myphoto2.0.jpg'
import Slider from "../slider/Slider";
import "../slider/slider.scss"
import project1pic from '../../assets/Screenshot 2024-10-19 025726.png'
import project2pic from '../../assets/Screenshot 2025-03-09 000512.png'
import project3pic from '../../assets/Screenshot 2025-01-17 190025.png'
import { Link, useNavigate } from "react-router-dom";
AOS.init();



function Navbar() {
  var [color, setColor] = useState("rgb(6 182 212)");
  var [isHovered, setIsHoverd] = useState(false);
  var [isHovered1, setIsHoverd1] = useState(false);
  var [isHovered2, setIsHoverd2] = useState(false);
  var [isHovered3, setIsHoverd3] = useState(false);


  const styling = {
    backgroundColor: isHovered ? color : "transparent",
    color: isHovered ? "white" : color,
    border: isHovered ? `2px solid ${color}` : `2px solid ${color}`,
    
  }
  const styling1 = {
    backgroundColor: isHovered1 ? color : "transparent",
    color: isHovered1 ? "white" : color,
    border: isHovered1 ? `2px solid ${color}` : `2px solid ${color}`,
    
  }
  const styling2 = {
    backgroundColor: isHovered2 ? color : "transparent",
    color: isHovered2 ? "white" : color,
    border: isHovered2 ? `2px solid ${color}` : `2px solid ${color}`,
    
  }
  const styling3 = {
    backgroundColor: isHovered3 ? color : "transparent",
    color: isHovered3 ? "white" : color,
    border: isHovered3 ? `2px solid ${color}` : `2px solid ${color}`,
    
  }


  return (
    <>
      {/* Hello world */}
      <nav id="home" className=" w-100 navbar navbar-expand-lg bg-body-tertiary " style={{padding:"0%", marginBottom:"2%"}}>
        <div className="container-fluid h-6 p-2 fixed-top mb-3" style={{ backgroundColor: color }}>
          <a
            className="navbar-brand "
            href="#"
            style={{ color: "white", fontWeight: "600", fontSize:"24px" }}
          >
            
            ALOK SHARMA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <a href="#home" style={{textDecoration:"none"}}>
              <button
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white", fontSize: "18px" }}
                  
                >
                  Home
                </button>
              </a>
              </li>
              <li className="nav-item">
              <a href="#about"style={{textDecoration:"none"}}>
              <button
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white", fontSize: "18px" }}
                >
                  About
                </button>
              </a>
              </li>
              <li className="nav-item">
              <a href="#skills"  style={{textDecoration:"none"}}>
              <button
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Skills
                </button>
              </a>
              </li>
              <li className="nav-item">
              <a href="#projects"  style={{textDecoration:"none"}}>
              <button
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Projects
                </button>
              </a>
              </li>
              <li className="nav-item">
              <a href="#contact" style={{textDecoration:"none"}}>
              <button
                  className="nav-link disabled"
                  href="#contact"
                  
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Contact
                </button>
              </a>
              </li>

             
             
             
             
            </ul>


            <Link to='https://drive.google.com/file/d/10_t1dK-RzIk6uO-s_8gkqmxQ0bRGYO0k/view?usp=drive_link' >
            
            <button className="btn btn-light mx-5 px-4" style={{fontWeight:"600", fontSize:"18px", color:color }}>
                Resume
              </button>
            </Link>
           
             
      
          </div>
        </div>
      </nav>

      {/* dropdown  */}

      <div className="container-fluid position-fixed" style={{marginTop:"80px", zIndex:"2"}}>
        <div
          class="dropdown"
          style={{ float: "right", top: "10px", position: "sticky" }}
        >
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: color, border: "none" }}
          >
            <img
              width="42"
              height="46"
              src="https://img.icons8.com/color/48/color-palette.png"
              alt="color-palette"
            />
          </button>
          <ul class="dropdown-menu" style={{ border: "none" }}>
            <li className="my-2">
              <button
                class="dropdown-item"
                type="button"
                onClick={() => setColor("rgb(244 114 182)")}
                style={{
                  backgroundColor: "rgb(244 114 182)",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                PINK
              </button>
            </li>
            <li className="my-2">
              <button
                class="dropdown-item"
                type="button"
                onClick={() => setColor("rgb(6 182 212)")}
                style={{
                  backgroundColor: "rgb(6 182 212)",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                CYAN
              </button>
            </li>
            <li className="my-2">
              <button
                class="dropdown-item"
                type="button"
                onClick={() => setColor("rgb(251 146 60)")}
                style={{
                  backgroundColor: " rgb(251 146 60)",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                ORANGE
              </button>
            </li>
            <li className="my-2">
              <button
                class="dropdown-item"
                type="button"
                onClick={() => setColor("rgb(99 102 241)")}
                style={{
                  backgroundColor: "rgb(99 102 241)",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                INDIGO
              </button>
            </li>
            <li className="my-2">
              <button
                class="dropdown-item"
                type="button"
                onClick={() => setColor("rgb(75 85 99)")}
                style={{
                  backgroundColor: "rgb(75 85 99)",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                GRAY
              </button>
            </li>
            <li className="my-2">
              <button
                class="dropdown-item"
                type="button"
                onClick={() => setColor("rgb(69 10 10)")}
                style={{
                  backgroundColor: "rgb(69 10 10)",
                  color: "white",
                  borderRadius: "7px",
                }}
              >
                BROWN
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* myself  */}

      <div className="container" style={{marginTop:"150px", marginBottom:"100px"}}>
        <div className="row">
          <div className="col-md-5">
            <div>
              <img
              className="mypassportphoto"
                style={{ borderRadius: "50%", border: `1px solid ${color}`}}
                src={passportsizeimage}
                alt=""
              />
            </div>
          </div>
          <div
            className="col-md-7"
            style={{
              alignItems: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p className="myname"
              style={{
                // width:"130%",
                // border: "1px solid black",
                display: "flex",
                // fontSize: "200%",
                // fontSize:"45px",
                float: "left",
                fontWeight: "bold",
                marginBottom: "0",
              }}
            >
              I'M <p style={{ color: color }}> &nbsp;ALOK SHARMA</p>{" "}
            </p>
            <p className="about_txt" style={{ fontSize: "20px", fontWeight: "normal" }}>
              This is my official Portfolio website to showcase my all works
              related to web development and ui design.
            </p>

            <Link to='https://drive.google.com/file/d/10_t1dK-RzIk6uO-s_8gkqmxQ0bRGYO0k/view?usp=drive_link' >

            <button
              className="btn"
              style={{
                backgroundColor: color,
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Resume
            </button>

</Link>


          </div>

          <div></div>
        </div>
      </div>
      {/* About sec */}
      <div id="about" className="container-fluid py-4" style={{ backgroundColor: color }}>
        <div className="row">
          <div className="col-md-12 py-3 d-flex justify-content-center text-light">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-6 about2ndtxt" >
            <div class="slide-right p-4 mx-5" data-aos="slide-right" data-aos-duration="2000"  style={{ backgroundColor: "white", borderRadius:"4px" }}>
              <p className="about-mng">
                I am Front End Developer with a passion for building beautiful
                and user-friendly websites. I have great understanding of both
                front-end and back-end also have done some projects using
                HTML,CSS,JavaScript,React and Bootstrap, and I am exicited for put my
                skills to use in a professional. I like travelling and learning
                new things, and I am confident that I can be a valuable asset
                for your organization.
              </p>
            </div>

          </div>
          <div className="col-md-5" data-aos="slide-right" data-aos-duration="2000" >
           
            <img className="image2" src={image2} alt="" />
          </div>
        </div>
      </div>
      {/* icon slider */}
      <div className="my-5">
      <Slider/>

      </div>

      {/* skills  */}

      <div id="skills" className="container-fluid ">
      <div className=" row my-5 justify-content-center d-flex " >
            <h2 className=" w-50 justify-content-center d-flex">
              Skills
            </h2>
          </div>
        <div className="row">
        <div className="col-md-12 justify-content-center d-flex ">

       
          
          <ul className="skills_section list-unstyled w-75 " data-aos="slide-right" data-aos-duration="2000" style={{ borderRadius:"15px" , border: `2px solid ${color}`, color:color}}>
           {/* <div className="d-flex"> */}
           {/* <p className="w-100 skill_heading col-md-12 justify-content-center d-flex " style={{ backgroundColor:color, height:"60px", alignItems:"center", color:"white", borderRadius:"10px"}}>
              FONT END
              <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          height={40}
          width={70}
          alt=""
        />
            </p> */}
            
           {/* </div> */}
          <li>
          HTML</li>
              <li>
              CSS</li>
              <li>
              JavaScript</li>
              <li>
              Bootstrap</li>
              <li>
              React</li>
          </ul>
        </div>
        </div>
      </div>
          {/* second project  */}
          <div className="col-md-6">

          <div class="card my-5" data-aos="slide-right" data-aos-duration="2000" style={{border:`2px solid ${color}`, borderRadius:"14px"}}>
  <img class="card-img-top pb-4" style={{borderRadius:"12px", border:`1px solid ${color}`}} src={project2pic} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title py-2" style={{fontSize:"30px", border:`2px solid ${color} `, justifyContent:"center", display:"flex", alignItems:"center"}}>Tasty Burger</h5>
    <p class="card-text text-xl-start" style={{fontSize:"20px"}}> Designed and developed a responsive restaurant website with an intuitive UI, dynamic menu display, and seamless navigation, enhancing user experience and accessibility. Built using modern web technologies for optimal performance and engagement</p>
   <div className="d-flex flex-column">
   <p class="card-text text-xl-start" style={{fontSize:"20px", fontWeight:"bold",color:color}}>Teck Stack:</p>
   <p class="card-text text-xl-start pb-4" style={{fontSize:"20px"}}> &nbsp;HTML,CSS,Bootstrap,React...</p>
   </div>
    <div className="">

<Link to='https://github.com/BROALOK/Tasty-Burger' >
<button href="#" class="btn mx-2 text-light mb-4" style={{backgroundColor:color, fontWeight:"600"}}>Github code</button>

</Link>
<Link to='https://tasty-burger-seven.vercel.app/'>
<button href="#" class="btn mx-2 text-light mb-4" style={{backgroundColor:color, fontWeight:"600"}}>View Live Site</button>

</Link>

    </div>
  </div>
</div>

          </div>

            {/* projects  */}
      <div id="projects" className="container">
        <div className="row">
          <div className="col-md-12">

            <h1 className="d-flex justify-content-center mt-5">
              Projects
            </h1>

          </div>
          <div className="col-md-6">

          <div class="card my-5" data-aos="slide-right" data-aos-duration="2000" style={{border:`2px solid ${color}`, borderRadius:"14px"}}>
  <img class="card-img-top pb-4" style={{borderRadius:"12px", border:`1px solid ${color}`}} src={project1pic} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title py-2" style={{fontSize:"30px", border:`2px solid ${color} `, justifyContent:"center", display:"flex", alignItems:"center"}}>E-commerce Project</h5>
    <p class="card-text text-xl-start pb-4" style={{fontSize:"20px"}}> This is an E-commerce store for fashion and lifestyle products, This is an dynamic data type project...</p>
   <div className="d-flex flex flex-column">
   <p class="card-text text-xl-start" style={{fontSize:"20px", fontWeight:"bold", color:color}}>Teck Stack:</p>
   <p class="card-text text-xl-start pb-4" style={{fontSize:"20px"}}> &nbsp;HTML,CSS,Bootstrap,React,REDUX...</p>
   </div>
    <div className="">

    <Link to='https://github.com/BROALOK/E-Commerce'>
    <button href="#" class="btn mx-2 text-light" style={{backgroundColor:color,  fontWeight:"600", marginBottom:"29px"}}>Github code</button>

</Link>

   <Link to='https://e-commerce-2486.vercel.app/' > 
   <button href="#" class="btn mx-2 text-light " style={{backgroundColor:color,  fontWeight:"600", marginBottom:"29px"}}>View Live Site</button>

   </Link>
    </div>
  </div>
</div>

          </div>

               {/* {third project} */}
          <div className="col-md-6">

<div class="card my-5" data-aos="slide-right" data-aos-duration="2000" style={{border:`2px solid ${color}`, borderRadius:"14px"}}>
<img class="card-img-top pb-4" style={{borderRadius:"12px", border:`1px solid ${color}`}} src={project3pic} alt="Card image cap" />
<div class="card-body">
<h5 class="card-title py-2" style={{fontSize:"30px", border:`2px solid ${color} `, justifyContent:"center", display:"flex", alignItems:"center"}}>VYB Web page</h5>
<p class="card-text text-xl-start" style={{fontSize:"20px"}}>A single-page web with Tailwind and Vite React is fast, responsive, customizable, scalable, SEO-friendly, and easy to maintain with dynamic components and efficient performance....</p>
<div className="d-flex flex-column">
<p class="card-text text-xl-start" style={{fontSize:"20px", fontWeight:"bold",color:color}}>Teck Stack:</p>
<p class="card-text text-xl-start pb-4" style={{fontSize:"20px"}}> &nbsp;HTML,Tailwind,React...</p>
</div>
<div className="">

<Link to='https://github.com/BROALOK/vyb' >
<button href="#" class="btn mx-2 text-light mb-4" style={{backgroundColor:color, fontWeight:"600"}}>Github code</button>

</Link>
<Link to='https://vyb-six.vercel.app/'>
<button href="#" class="btn mx-2 text-light mb-4" style={{backgroundColor:color, fontWeight:"600"}}>View Live Site</button>

</Link>

</div>
</div>
</div>

</div>
        </div>
      </div>


      <div className="container">
        <div className="row mt-5 mb-2" >
          <h2 className="justify-content-center d-flex">Contact Me</h2>
        </div>
        <div className="row" data-aos="slide-right" data-aos-duration="2000" id="contact">
          <div className="col-md-12 d-flex justify-content-center flex-column align-items-center">
           
           <Link className="w-100 justify-content-center d-flex" to="https://github.com/BROALOK" data-aos="slide-right" data-aos-duration="2000" style={{textDecoration:"none"}}>
           <button className="w-50 py-1 my-3 btn_hov " style={styling}  onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)} >
              GitHub
            </button>
           </Link> 
           
            

            {/* <Link className="w-100 d-flex justify-content-center" to="https://www.linkedin.com/in/dhruv-singh-40098732b/" data-aos="slide-right" data-aos-duration="2000" style={{textDecoration:"none"}}>
            <button className="w-50 py-1 my-3 btn_hov " style={styling1}  onMouseEnter={() => setIsHoverd1(true)}
      onMouseLeave={() => setIsHoverd1(false)} >              LinkedIn
            </button>
            </Link> */}
          
            <button className="w-50 py-1 my-3 btn_hov "  style={styling2}  onMouseEnter={() => setIsHoverd2(true)}
      onMouseLeave={() => setIsHoverd2(false)} >              9540877724
            </button>
            <button className="w-50 py-1 my-3 btn_hov " style={styling3}  onMouseEnter={() => setIsHoverd3(true)}
      onMouseLeave={() => setIsHoverd3(false)} >              alok45990@gmail.com
            </button>
          </div>
        </div>
      </div>


    </>
  );
}

export default Navbar;
