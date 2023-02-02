import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../components/section-components/data";
import Navbar from "../components/global-components/navbar-v3";
import ShowMore from 'react-show-more-button';

const ShopDetails = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const { id } = useParams();
  console.log(id);
  const filteredData = data.filter((item) => {
    return Object.values(item).includes(id);
  });
  console.log(filteredData);
  
  return (
    <>
      <div style={{ marginTop: "0px" }}>
        {filteredData.map((data) => (
          <div className="ltn__shop-details-area pb-10">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-category">
                          <Link>{data.ProjectStatus}</Link>
                        </li>

                        <li className="ltn__blog-category">
                          <Link>{data.RERANO}</Link>
                        </li>
                      </ul>
                    </div>
                    <h1 style={{ fontSize: "48px" }}>{data.propertyname}</h1>
                    <div>
                      <img
                        src="https://i.imgur.com/ENA9x9X.png"
                        style={{
                          height: "40px",
                          width: "40px",
                          fontSize: "24px",
                          marginRight: "25px",
                        }}
                      />
                      {data.address2}
                    </div>
                    <h4 className="title-2">KNOW ABOUT {data.propertyname}</h4>
					<p style={{zIndex:"0",position:'relative'}}> ACE Divino Sector 1 Greater Noida West is one of the most iconic projects of Ace Group of India. For this project, many reputed Design Partners have come together to bring this Exclusive Luxurious Dream Home into reality for the residents and the investors. The Magnificent ACE Divino apartments are in the finishing mode, and it is 'one of a kind.

This society consists of all the facilities and amenities to match the home buyers' needs and requirements. The Developer is bringing the luxury project in Greater Noida West to offer a luxurious lifestyle to the buyers and investors. Visit the site and change your address of residence with ACE Divino Sector 1 Greater Noida West.</p>
	                
                    <h4 className="title-2">Project Details</h4>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div
                        style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"30px",
                          paddingLeft:"20px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/Vq3OxEn.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Project Area <br /> <b>7 Acres</b>
                        </div>
                      </div>
                      <div
                         style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"30px",
                          paddingLeft:"20px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/7Ulu1uz.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Sizes
                          <br /> <b>1350-1775 Sq.ft.</b>
                        </div>
                      </div>
                      <div
                         style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"30px",
                          paddingLeft:"20px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/tkrxA28.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          TotalFlats
                          <br /> <b>496 Flats</b>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"30px",
                          paddingLeft:"20px",
                          paddingBottom:"30px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/YThnBQr.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Launch Date <br /> <b>May 21</b>
                        </div>
                      </div>
                      <div
                         style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"30px",
                          paddingLeft:"20px",
                          paddingBottom:"10px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/K8Es6yg.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Possession Date <br /> <b>April 2025</b>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"30px",
                          paddingLeft:"20px",
                          paddingBottom:"30px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/SJaRQNI.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Total Towers <br /> <b>5 Towers</b>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"10px",
                          paddingLeft:"20px",
                          paddingBottom:"30px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/O7gXyIT.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Total Floors <br /> <b>G+16 Floors</b>
                        </div>
                      </div>
                      <div
                         style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"10px",
                          paddingLeft:"20px",
                          paddingBottom:"30px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/HJOfirr.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Project Status <br /> <b>Under Construction</b>
                        </div>
                      </div>
                      <div
                         style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"10px",
                          paddingLeft:"20px",
                          paddingBottom:"30px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/x0eUdFT.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Property Type <br /> <b>Residential</b>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "28%",
                          marginTop: "10px",
                          marginRight:"10px",
                          paddingTop:"10px",
                          paddingLeft:"20px",
                          paddingBottom:"30px"
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/LADxPWQ.png"
                            style={{ height: "30px", width: "30px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          Configurations <br /> <b>2BHK, 3BHK</b>
                        </div>
                      </div>
                    </div>
                    <h4 className="title-2">
                      Why you should consider {data.propertyname}
                    </h4>

                    <div style={{ display: "flex", flexWrap: "Wrap" ,justifyContent:"space-between"}}>
                      <div
                        style={{
                          display: "flex",
                          width: "360px",
                          margin: "10px",
                          height: "100px",
                        }}
                      >
                        <div
                          style={{
                            height: "54px",
                            width: "60px",
                            marginRight: "10px",
                            boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px;",
                            marginRight:"10px",
                            
                          }}
                        >
                          <img src="https://i.imgur.com/NixOj4K.png" />
                        </div>
                        <div style={{ color: "black", width: "300px" }}>
                          <b>{data.why1}</b>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "360px",
                          margin: "10px",
                          height: "100px",
                        }}
                      >
                        <div
                          style={{
                            height: "54px",
                            width: "54px",
                            marginRight: "10px",
                            boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px;",
                          }}
                        >
                          <img src="https://i.imgur.com/NixOj4K.png" />
                        </div>
                        <div style={{ color: "black", width: "300px" }}>
                          <b>{data.why2}</b>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "360px",
                          margin: "10px",
                          height: "100px",
                        }}
                      >
                        <div
                          style={{
                            height: "54px",
                            width: "54px",
                            marginRight: "10px",
                            boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px;",
                          }}
                        >
                          <img src="https://i.imgur.com/NixOj4K.png" />
                        </div>
                        <div style={{ color: "black", width: "300px" }}>
                          <b>{data.why3} </b>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "360px",
                          margin: "10px",
                          height: "100px",
                        }}
                      >
                        <div
                          style={{
                            height: "54px",
                            width: "54px",
                            marginRight: "10px",
                          }}
                        >
                          <img src="https://i.imgur.com/NixOj4K.png" />
                        </div>
                        <div style={{ color: "black", width: "300px" }}>
                          <b>
                            {data.why4} <br />{" "}
                          </b>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "360px",
                          margin: "10px",
                          height: "100px",
                        }}
                      >
                        <div
                          style={{
                            height: "54px",
                            width: "54px",
                            marginRight: "10px",
                          }}
                        >
                          <img src="https://i.imgur.com/NixOj4K.png" />
                        </div>
                        <div style={{ color: "black", width: "300px" }}>
                          <b>{data.why5}</b>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "360px",
                          margin: "10px",
                          height: "100px",
                        }}
                      >
                        <div
                          style={{
                            height: "54px",
                            width: "54px",
                            marginRight: "10px",
                          }}
                        >
                          <img src="https://i.imgur.com/NixOj4K.png" />
                        </div>
                        <div style={{ color: "black", width: "300px" }}>
                          <b>{data.why6}</b>
                        </div>
                      </div>
                    </div>

                    <h4 className="title-2">Property Detail</h4>
                    <div className="property-detail-info-list section-bg-1 clearfix mb-60" >
                      <ul style={{ width: "50%" }}>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Property ID:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            HZ29
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Status:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            Under Construction
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Launch Date:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            May 2017
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Possession Date:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            August 2023
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Project type:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            Residential
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Project type:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            Residential
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Configurations:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            2/3/4 BHK & Penthouse
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Construction Type:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            Mivan
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
                            Total Flats:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            1572
                          </div>
                        </div>
                        
                        <div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
						  No. of parking:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
                            3496
                          </div>
                        </div>
                        <div style={{ display: "block"}}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
						  Ceiling height:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
						  10.5 ft
                          </div>
                        </div>
                        
                        
						<div style={{ display: "block" }}>
                          <div style={{ color: "#000000", fontWeight: "500" }}>
						  Internal Door Height:
                          </div>
                          <div style={{ color: "#c70e53", fontWeight: "700" }}>
						  7 ft
                          </div>
                        </div>
                      </ul>
                      <ul style={{ width: "50%" }}>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                          width:"100%",boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px" 
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/rK0OVBr.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                          style={{
                            
                            marginLeft: "15px",
                            color: "black",
                            fontSize:"16px",
                            fontWeight:"700",
                            width:"100%",
                            padding:"10px"
                          }}
                        >
                          Parking Level : 2
                        </div>
                      </div>
                      <div
                        style={{
                          display:"flex",
                          width: "250px",
                          marginTop: "20px",
                          width:"100%",boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px" 
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/yg7p3lO.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                         style={{

                          marginLeft: "15px",
                          color: "black",
                          padding:"10px",
                          fontSize:"16px",
                          fontWeight:"700",
                          width:"100%",
                          marginLeft:"20px"
                        }}
                        >
                          Lift per tower: 3
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                          width:"100%",boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px" 
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/L95fd90.png"
                            style={{ height: "60px", width: "60px"}}
                          />
                        </div>
                        <div
                         style={{
                          marginLeft: "15px",
                          color: "black",
                          padding:"10px",
                          fontSize:"16px",
                          fontWeight:"700",
                          width:"100%",
                          marginLeft:"20px"
                        }}
                        >
                          Main Door Height: 8 ft
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                          width:"100%",boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px" 
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/Po4HJqd.png"
                            style={{ height: "60px", width: "60px"}}
                          />
                        </div>
                        <div
                         style={{
                          marginLeft: "15px",
                          color: "black",
                          padding:"10px",
                          fontSize:"16px",
                          fontWeight:"700",
                          width:"100%",
                          marginLeft:"20px"
                        }}
                        >
                         ClubHouseSize: 25000 sq. ft.
                        </div>
                      </div>
                       
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                          width:"100%",boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px" 
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/bzTJjUa.png"
                            style={{ height: "60px", width: "60px"}}
                          />
                        </div>
                        <div
                          style={{
                            
                            marginLeft: "15px",
                            color: "black",
                            padding:"10px",
                            fontSize:"16px",
                            fontWeight:"700",
                            width:"60%",
                            marginLeft:"20px"
                          }}
                        >
                         Total Floors: 25
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          marginTop: "20px",
                          boxShadow: "rgb(23 44 82 / 9%) 7px 10px 6px 4px" 
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/P6ifZYV.png"
                            style={{ height: "60px", width: "60px"}}
                          />
                        </div>
                        <div
                          style={{
                           
                            marginLeft: "15px",
                            color: "black",
                            padding:"10px",
                            fontSize:"16px",
                            fontWeight:"700",
                            width:"60%",
                            marginLeft:"20px"
                          }}
                        >
                         Green Area: 25%
                        </div>
                      </div>
                       
                      </ul>
                    </div>

                    <h4 className="title-2">Amenities</h4>
                    
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "Wrap",
                          overflow: "auto",
                        }}
                      >
                     
                      
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://imgur.com/9og7i8c.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                          <b>Swimming Pool</b>
                          </div>
                        </div>
                           
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/XMw5vlf.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                          <b>High Speed <br/>Elevators</b>
                          </div>
                        </div>
                        
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/IXKvEYY.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                          <b>CcTv Surveliance</b>
                          </div>
                        </div>
                        
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/Fl5zYGt.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                          <b>24x7 Security</b>
                          </div>
                        </div>
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/qFJnxt9.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                          <b>Kids Play Area</b>
                          </div>
                        </div>
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/cLDOJyf.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                          <b>Barbeque</b>
                          </div>
                        </div>
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/nAKZCUO.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>Spa</b>
                          </div>
                        </div>
                   <ShowMore maxHeight={100} styleButton={{backgroundColor:"rgb(38, 168, 218)",maxWidth:"180px",borderRadius:"0px",padding:"12px 30px"}}>
                   <div
                        style={{
                          display: "flex",
                          flexWrap: "Wrap",
                          
                        }}
                      >
                  

                       
                        
                    
                     
                       
                       
                        
                     
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/FcdmJg5.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>Sun Deck</b>
                          </div>
                        </div>
                       
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/Xvfv9IN.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>EarthQuake <br/> Resistant</b>
                          </div>
                        </div>
                       
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/yLlXYHg.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>Yoga/Meditation <br/> Center</b>
                          </div>
                        </div>
                        

                    
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/iROGCgn.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                             <b>Gymnasium</b>
                          </div>
                        </div>
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px" }}>
                          <div style={{ height: "40px", width: "40px",marginLeft:"15px",display:"block",

marginLeft: "auto",
marginRight: "auto"  }}>
                            <img
                             style={{ height: "40px", width: "40p%"}}
                              src="https://i.imgur.com/1Qmehw9.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>FireFighting <br/>Equipment</b>
                          </div>
                        </div>

                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px"}}>
                          <div style={{ height: "40px", width: "40px" }}>
                            <img
                            style={{ height: "40px",display:"block",

                            marginLeft: "auto",
                            marginRight: "auto" }}
                              src="https://i.imgur.com/Po4HJqd.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>ClubHouse</b>
                          </div>
                        </div>
                        <div style={{ display: "block", width: "fitContent", boxShadow: "rgb(23 44 82 / 10%) 2px 0px 10px 7px",padding:"10px",margin:"10px"}}>
                          <div style={{ height: "40px", width: "40px" }}>
                            <img
                            style={{ height: "40px",display:"block",

                            marginLeft: "auto",
                            marginRight: "auto" }}
                              src="https://i.imgur.com/FLfl2xH.png"
                              
                            />
                          </div>
                          <div
                            style={{ marginTop: "15px", textAlign: "center",fontSize:"10px" }}
                          >
                            <b>Landscape Garden</b>
                          </div>
                        </div>
                        </div>
                   </ShowMore>
                        
                      </div>
                    

                    <h4 className="title-2">Price Ranges</h4>
                    <div
                      className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70"
                      data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
                    >
                      <div
                        className="container"
                        style={{
                          position: "relative",
                          zIndex: "10",
                          minWidth: "84%",
                        }}
                      >
                        <div className="row">
                          <div className="col-sm-12"></div>
                        </div>
                        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
                          <div className="col-sm-2">
						  <div className="ltn__search-by-place-item"
							style={{
                                borderTopRightRadius: "50px",
                                
                              }}>
                              <div className="search-by-place-img"></div>
                              <div className="search-by-place-info">
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000",
									display:"flex"
                                  }}
                                >
                                  <div><img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} /></div>
								  <div style={{marginLeft:"20px"}}><b>3 BHK</b> </div>
								   
                                </div>
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000"
                                  }}
                                >
                                  Carpet Area
                                  <br />
                                 <b>2300 - 2600 sq.ft.</b> 
                                </div>
                                <div
                                  style={{
                                    margin: "12px 0 0px 0px",
                                    fontSize: "20px",
                                    fontWeight: "700",
									color: "#0078DB",
									display:"flex"
                                   
                                  }}
                                >
                                   <div><img src="https://i.imgur.com/2p8FPFo.png" style={{height:"40px",width:"40px"}} /></div>
								   <div style={{marginLeft:"12px"}}>  3.94 - 4.68 Cr </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
						  <div className="ltn__search-by-place-item"
							style={{
                                borderTopRightRadius: "50px",
                                
                              }}>
                              <div className="search-by-place-img"></div>
                              <div className="search-by-place-info">
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000",
									display:"flex"
                                  }}
                                >
                                  <div><img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} /></div>
								  <div style={{marginLeft:"20px"}}><b>4 BHK</b> </div>
								   
                                </div>
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000"
                                  }}
                                >
                                  Carpet Area
                                  <br />
                                 <b>2300 - 2600 sq.ft.</b> 
                                </div>
                                <div
                                  style={{
                                    margin: "12px 0 0px 0px",
                                    fontSize: "20px",
                                    fontWeight: "700",
									color: "#0078DB",
									display:"flex"
                                   
                                  }}
                                >
                                   <div><img src="https://i.imgur.com/2p8FPFo.png" style={{height:"40px",width:"40px"}} /></div>
								   <div style={{marginLeft:"12px"}}>  3.94 - 4.68 Cr </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
						  <div className="ltn__search-by-place-item"
							style={{
                                borderTopRightRadius: "50px",
                                
                              }}>
                              <div className="search-by-place-img"></div>
                              <div className="search-by-place-info">
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000",
									display:"flex"
                                  }}
                                >
                                  <div><img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} /></div>
								  <div style={{marginLeft:"20px"}}><b>5 BHK</b> </div>
								   
                                </div>
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000"
                                  }}
                                >
                                  Carpet Area
                                  <br />
                                 <b>2300 - 2600 sq.ft.</b> 
                                </div>
                                <div
                                  style={{
                                    margin: "12px 0 0px 0px",
                                    fontSize: "20px",
                                    fontWeight: "700",
									color: "#0078DB",
									display:"flex"
                                   
                                  }}
                                >
                                   <div><img src="https://i.imgur.com/2p8FPFo.png" style={{height:"40px",width:"40px"}} /></div>
								   <div style={{marginLeft:"12px"}}>  3.94 - 4.68 Cr </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
						  <div className="ltn__search-by-place-item"
							style={{
                                borderTopRightRadius: "50px",
                                
                              }}>
                              <div className="search-by-place-img"></div>
                              <div className="search-by-place-info">
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000",
									display:"flex"
                                  }}
                                >
                                  <div><img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} /></div>
								  <div style={{marginLeft:"20px"}}><b>6 BHK</b> </div>
								   
                                </div>
                                <div
                                  style={{
                                    borderBottom: "1px solid #EBECF0",
                                    padding: "7px 4px 7px 16px",
									color:"#000000"
                                  }}
                                >
                                  Carpet Area
                                  <br />
                                 <b>2300 - 2600 sq.ft.</b> 
                                </div>
                                <div
                                  style={{
                                    margin: "12px 0 0px 0px",
                                    fontSize: "20px",
                                    fontWeight: "700",
									color: "#0078DB",
									display:"flex"
                                   
                                  }}
                                >
                                   <div><img src="https://i.imgur.com/2p8FPFo.png" style={{height:"40px",width:"40px"}} /></div>
								   <div style={{marginLeft:"12px"}}>  3.94 - 4.68 Cr </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*  */}
                        </div>
                      </div>
                    </div>

                    <h4 className="title-2">Floor Plans</h4>
                    {/* APARTMENTS PLAN AREA START */}
                    <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                      <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                        <div className="nav">
                          <a data-bs-toggle="tab" href="#liton_tab_3_1">
                            2 BHK
                          </a>
                          <a
                            className="active show"
                            data-bs-toggle="tab"
                            href="#liton_tab_3_2"
                          >
                            3 BHK
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_3_3">
                            4 BHK
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_3_4">
                            Penthouse
                          </a>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane fade" id="liton_tab_3_1">
                          <div className="ltn__apartments-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img
                                    src="https://i.imgur.com/2fgOmfb.jpg"
                                    alt="#"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-5">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div>
                                        <ul>
                                          <li>Super Area: 2800 Sq. Ft</li>
                                          <li>Built Up Area: 650 Sq. Ft</li>
                                          <li>Carpet Area: 150 Sq. Ft</li>
                                          <li>Balcony Area: 150 Sq.Ft</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div>
                                        <ul></ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade active show"
                          id="liton_tab_3_2"
                        >
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img
                                    src="https://i.imgur.com/614jnyQ.jpg"
                                    alt="#"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-5">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div>
                                        <ul>
                                          <li>Super Area: 2800 Sq. Ft</li>
                                          <li>Built Up Area: 650 Sq. Ft</li>
                                          <li>Carpet Area: 150 Sq. Ft</li>
                                          <li>Balcony Area: 150 Sq.Ft</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div>
                                        <ul></ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_3">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img
                                    src={publicUrl + "assets/img/others/10.png"}
                                    alt="#"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-5">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div>
                                        <ul>
                                          <li>Super Area: 2800 Sq. Ft</li>
                                          <li>Built Up Area: 650 Sq. Ft</li>
                                          <li>Carpet Area: 150 Sq. Ft</li>
                                          <li>Balcony Area: 150 Sq.Ft</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_4">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img
                                    src={publicUrl + "assets/img/others/10.png"}
                                    alt="#"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-5">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div>
                                        <ul>
                                          <li>Super Area: 2800 Sq. Ft</li>
                                          <li>Built Up Area: 650 Sq. Ft</li>
                                          <li>Carpet Area: 150 Sq. Ft</li>
                                          <li>Balcony Area: 150 Sq.Ft</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color mt-40---">
                                        <ul></ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="title-2">From Our Gallery</h4>
                    <div className="ltn__property-details-gallery mb-30">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href={publicUrl + "assets/img/others/14.jpg"}
                            data-rel="lightcase:myCollection"
                          >
                            <img
                              className="mb-30"
                              src={publicUrl + "assets/img/others/14.jpg"}
                              alt="Image"
                            />
                          </a>
                          <a
                            href={publicUrl + "assets/img/others/15.jpg"}
                            data-rel="lightcase:myCollection"
                          >
                            <img
                              className="mb-30"
                              src={publicUrl + "assets/img/others/15.jpg"}
                              alt="Image"
                            />
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href={publicUrl + "assets/img/others/16.jpg"}
                            data-rel="lightcase:myCollection"
                          >
                            <img
                              className="mb-30"
                              src={publicUrl + "assets/img/others/16.jpg"}
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <h4 className="title-2">Location</h4>
                    <div className="property-details-google-map mb-60">
                      <iframe
                        src={data.location}
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                      />
                    </div>

                    <h4 className="title-2">Location Advantages</h4>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/OKse7ga.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          <b>D.S International School</b> <br /> 800M
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/NJubU7O.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          <b>Nix Multi Speciality Hospital</b>
                          <br /> 2 KM
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "20px",
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/HpW5ye3.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          <b>Ace City Square Mall</b>
                          <br /> 2.4 KM
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "30px",
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/rfGEteg.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          <b>Metro Station</b>
                          <br /> 3.4 KM
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "250px",
                          marginTop: "30px",
                        }}
                      >
                        <div>
                          <img
                            src="https://i.imgur.com/inWoRJy.png"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            marginLeft: "15px",
                            color: "black",
                          }}
                        >
                          <b>Airport</b>
                          <br /> 6.4 KM
                        </div>
                      </div>
                    </div>

                    {/* APARTMENTS PLAN AREA END */}
                    <h4 className="title-2">Property Video</h4>
                    <div
                      className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                      data-bs-bg={publicUrl + "assets/img/others/5.jpg"}
                    >
                      <a
                        className="ltn__video-icon-2 ltn__video-icon-2-border---"
                        href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0"
                        data-rel="lightcase:myCollection"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                      <hr />
                      {/* comment-area */}

                      {/* comment-reply */}
                    </div>

					

                    <h4 className="title-2">Related Properties</h4>
                    <div className="row">
                      {/* ltn__product-item */}
                      <div className="col-xl-6 col-sm-6 col-12 go-top">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                          <div className="product-img">
                            <Link to="/shop">
                              <img
                                src={publicUrl + "assets/img/product-3/1.jpg"}
                                alt="#"
                              />
                            </Link>
                            <div className="real-estate-agent">
                              <div className="agent-img">
                                <Link to="/team-details">
                                  <img
                                    src={
                                      publicUrl + "assets/img/blog/author.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badg">For Rent</li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <Link to="/shop">New Apartment Nice View</Link>
                            </h2>
                            <div className="product-img-location">
                              <ul>
                                <li>
                                  <Link to="/shop">
                                    <i className="flaticon-pin" /> Belmont
                                    Gardens, Chicago
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                              <li>
                                <span>3 </span>
                                Bedrooms
                              </li>
                              <li>
                                <span>2 </span>
                                Bathrooms
                              </li>
                              <li>
                                <span>3450 </span>
                                square Ft
                              </li>
                            </ul>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quick_view_modal"
                                  >
                                    <i className="flaticon-expand" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#liton_wishlist_modal"
                                  >
                                    <i className="flaticon-heart-1" />
                                  </a>
                                </li>
                                <li>
                                  <Link to="/shop" title="Compare">
                                    <i className="flaticon-add" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info-bottom">
                            <div className="product-price">
                              <span>
                                $349,00<label>/Month</label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-xl-6 col-sm-6 col-12 go-top">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                          <div className="product-img">
                            <Link to="/shop">
                              <img
                                src={publicUrl + "assets/img/product-3/2.jpg"}
                                alt="#"
                              />
                            </Link>
                            <div className="real-estate-agent">
                              <div className="agent-img">
                                <Link to="/team-details">
                                  <img
                                    src={
                                      publicUrl + "assets/img/blog/author.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badg">For Sale</li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <Link to="/shop">New Apartment Nice View</Link>
                            </h2>
                            <div className="product-img-location">
                              <ul>
                                <li>
                                  <Link to="/shop">
                                    <i className="flaticon-pin" /> Belmont
                                    Gardens, Chicago
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                              <li>
                                <span>3 </span>
                                Bedrooms
                              </li>
                              <li>
                                <span>2 </span>
                                Bathrooms
                              </li>
                              <li>
                                <span>3450 </span>
                                square Ft
                              </li>
                            </ul>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quick_view_modal"
                                  >
                                    <i className="flaticon-expand" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-bs-toggle="modal"
                                    data-bs-target="#liton_wishlist_modal"
                                  >
                                    <i className="flaticon-heart-1" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="portfolio-details.html"
                                    title="Compare"
                                  >
                                    <i className="flaticon-add" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info-bottom">
                            <div className="product-price">
                              <span>
                                $349,00<label>/Month</label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                    <div className="widget ltn__form-widget">
                      <h4 className="ltn__widget-title ltn__widget-title-border-2">
                        Connect to our Expert
                      </h4>
                      <form action="#">
                        <input
                          type="text"
                          name="yourname"
                          placeholder="Your Name *"
                        />
                        <input
                          type="text"
                          name="youremail"
                          placeholder="Your Contact No. *"
                        />
                        <input
                          type="text"
                          name="youremail"
                          placeholder="Your E-Mail *"
                        />

                        <button type="submit" className="btn theme-btn-1">
                          Schedule Visit
                        </button>
                      </form>
                    </div>

                    <div className="widget ltn__popular-product-widget">
                      <h4 className="ltn__widget-title ltn__widget-title-border-2">
                        Popular Properties
                      </h4>
                      <div className="row ltn__popular-product-widget-active slick-arrow-1">
                        {/* ltn__product-item */}
                        <div className="col-12">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img go-top">
                              <Link to="/shop">
                                <img
                                  src={publicUrl + "assets/img/product-3/6.jpg"}
                                  alt="#"
                                />
                              </Link>
                              <div className="real-estate-agent">
                                <div className="agent-img">
                                  <Link to="/team-details">
                                    <img
                                      src={
                                        publicUrl + "assets/img/blog/author.jpg"
                                      }
                                      alt="#"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-price">
                                <span>
                                  $349,00<label>/Month</label>
                                </span>
                              </div>
                              <h2 className="product-title">
                                <Link to="/shop">New Apartment Nice View</Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <Link to="/shop">
                                      <i className="flaticon-pin" /> Belmont
                                      Gardens, Chicago
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-12">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  src={publicUrl + "assets/img/product-3/4.jpg"}
                                  alt="#"
                                />
                              </a>
                              <div className="real-estate-agent">
                                <div className="agent-img">
                                  <Link to="/team-details">
                                    <img
                                      src={
                                        publicUrl + "assets/img/blog/author.jpg"
                                      }
                                      alt="#"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-price">
                                <span>
                                  $349,00<label>/Month</label>
                                </span>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">
                                  New Apartment Nice View
                                </a>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <a href="product-details.html">
                                      <i className="flaticon-pin" /> Belmont
                                      Gardens, Chicago
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* ltn__product-item */}
                        <div className="col-12">
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  src={publicUrl + "assets/img/product-3/5.jpg"}
                                  alt="#"
                                />
                              </a>
                              <div className="real-estate-agent">
                                <div className="agent-img">
                                  <Link to="/team-details">
                                    <img
                                      src={
                                        publicUrl + "assets/img/blog/author.jpg"
                                      }
                                      alt="#"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-price">
                                <span>
                                  $349,00<label>/Month</label>
                                </span>
                              </div>
                              <h2 className="product-title">
                                <a href="product-details.html">
                                  New Apartment Nice View
                                </a>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <a href="product-details.html">
                                      <i className="flaticon-pin" /> Belmont
                                      Gardens, Chicago
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>3 </span>
                                  Bedrooms
                                </li>
                                <li>
                                  <span>2 </span>
                                  Bathrooms
                                </li>
                                <li>
                                  <span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    {/* Popular Post Widget */}

                    {/* Social Media Widget */}
                    <div className="widget ltn__social-media-widget">
                      <h4 className="ltn__widget-title ltn__widget-title-border-2">
                        Follow us
                      </h4>
                      <div className="ltn__social-media-2">
                        <ul>
                          <li>
                            <a href="#" title="Facebook">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Linkedin">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Instagram">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Tagcloud Widget */}
                    
                    {/* Banner Widget */}
                    <div className="widget ltn__banner-widget d-none go-top">
                      <Link to="/shop">
                        <img
                          src={publicUrl + "assets/img/banner/2.jpg"}
                          alt="#"
                        />
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="ltn__faq-area mb-100">
                <div className="container">
                  <h4 className="title-2">Frequently Asked Questions</h4>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="ltn__faq-inner ltn__faq-inner-2">
                        <div id="accordion_2">
                          {/* card */}
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-1"
                              aria-expanded="false"
                            >
                              1.{data.q1}
                            </h6>
                            <div
                              id="faq-item-2-1"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">{data.a1}</div>
                            </div>
                          </div>
                          {/* card */}

                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-2"
                              aria-expanded="false"
                            >
                              2.{data.q2}
                            </h6>
                            <div
                              id="faq-item-2-2"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">{data.a2}</div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-3"
                              aria-expanded="false"
                            >
                              3.{data.q3}
                            </h6>
                            <div
                              id="faq-item-2-3"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a3}</p>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-4"
                              aria-expanded="false"
                            >
                              4.{data.q4}
                            </h6>
                            <div
                              id="faq-item-2-4"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a4}</p>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-5"
                              aria-expanded="false"
                            >
                              5.{data.q5}
                            </h6>
                            <div
                              id="faq-item-2-5"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a5}</p>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-6"
                              aria-expanded="false"
                            >
                              6. {data.q6}
                            </h6>
                            <div
                              id="faq-item-2-6"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a6}</p>
                              </div>
                            </div>
                          </div>
                          {/* card */}
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-7"
                              aria-expanded="false"
                            >
                              7.{data.q7}
                            </h6>
                            <div
                              id="faq-item-2-7"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a7} </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-8"
                              aria-expanded="false"
                            >
                              8.{data.q8}
                            </h6>
                            <div
                              id="faq-item-2-8"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a8}</p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-9"
                              aria-expanded="false"
                            >
                              9.{data.q9}?
                            </h6>
                            <div
                              id="faq-item-2-9"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a9}</p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <h6
                              className="collapsed ltn__card-title"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq-item-2-10"
                              aria-expanded="false"
                            >
                              10.{data.q10}
                            </h6>
                            <div
                              id="faq-item-2-10"
                              className="collapse"
                              data-bs-parent="#accordion_2"
                            >
                              <div className="card-body">
                                <p>{data.a10}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopDetails;
