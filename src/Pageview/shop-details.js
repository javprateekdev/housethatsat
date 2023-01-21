import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { data } from '../components/section-components/data';
import Navbar from '../components/global-components/navbar-v3';

const ShopDetails= () => {
	let publicUrl = process.env.PUBLIC_URL+'/'
	const { id } = useParams()
	console.log(id)
	const filteredData = data.filter((item) => {
		return Object.values(item).includes(id)
	})
    console.log(filteredData)
  return (
	<>
	 
	 <div style={{marginTop:"0px"}}>
	 {filteredData.map((data) => (
        <div className="ltn__shop-details-area pb-10">
		<div className="container">
		<div className="row">
			<div className="col-lg-8 col-md-12">
			<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
				<div className="ltn__blog-meta">
				<ul>
					<li className="ltn__blog-category">
					<Link >{data.PossessionDate}</Link>
					</li>
					
					<li className="ltn__blog-category">
					<Link>{data.RERANO}</Link>
					</li>
					
					
				</ul>
				</div>
				<h1 style={{fontSize:"48px"}}>{data.propertyname}</h1>
			<div><img src="https://i.imgur.com/ENA9x9X.png" style={{height:"40px",width:"40px",fontSize:"24px",marginRight:"25px"}}/>{data.address2}</div> 
				
				<h4 className="title-2">Project Details</h4>
				<div style={{display:"flex",flexWrap:"wrap"}}>                            
				<div  style={{display:"flex",width:"250px",marginTop:"20px"}}>
						<div><img src="https://i.imgur.com/Vq3OxEn.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Project Area <br/> <b>7 Acres</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"20px"}}>
						<div><img src="https://i.imgur.com/7Ulu1uz.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Sizes<br/> <b>1350-1775 Sq.ft.</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"20px"}}>
						<div><img src="https://i.imgur.com/tkrxA28.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>TotalFlats<br/> <b>496 Flats</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/YThnBQr.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Launch Date <br/> <b>May 21</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/K8Es6yg.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Possession Date <br/> <b>April 2025</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/SJaRQNI.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Total Towers <br/> <b>5 Towers</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/O7gXyIT.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Total Floors <br/> <b>G+16 Floors</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/HJOfirr.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Project Status <br/> <b>Under Construction</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/x0eUdFT.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Property Type <br/> <b>Residential</b></div>
					</div>
					<div  style={{display:"flex",width:"250px",marginTop:"30px"}}>
						<div><img src="https://i.imgur.com/LADxPWQ.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{fontSize:"16px",marginLeft:"15px",color:"black"}}>Configurations <br/> <b>2BHK, 3BHK</b></div>
					</div>
					
					
				</div>
				<h4 className="title-2">Why to Choose {data.propertyname}</h4>
			
				<div style={{display:"flex",flexWrap:"Wrap"}}>                            
				
					<div style={{display:"flex",width:"350px",margin:"10px"}}>
						<div><img src="https://i.imgur.com/NixOj4K.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",color:"black"}}><b>Modular kitchen and Wardrobes</b></div>
					</div>
					
					<div  style={{display:"flex",width:"350px",margin:"10px"}}>
						<div><img src="https://i.imgur.com/NixOj4K.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",color:"black"}}><b>Low Density Development</b></div>
					</div>
					
					<div style={{display:"flex",width:"350px",margin:"10px"}}>
						<div><img src="https://i.imgur.com/NixOj4K.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",color:"black"}}><b>Next to the Proposed Golf Course </b></div>
					</div>
				
					<div  style={{display:"flex",width:"350px",margin:"10px"}}>
						<div><img src="https://i.imgur.com/NixOj4K.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",color:"black"}}><b>Nearby to Upcoming International <br/> Airport</b></div>
					</div>
					
					<div  style={{display:"flex",width:"350px",margin:"10px"}}>
						<div><img src="https://i.imgur.com/NixOj4K.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",color:"black"}}><b>Shine to a Stellar lifestyle for the residents</b></div>
					</div>
					
					
					<div  style={{display:"flex",width:"350px",margin:"10px"}}>
						<div><img src="https://i.imgur.com/NixOj4K.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",color:"black"}}><b>Panoramic Views from Every Rooftop</b></div>
					</div>
				</div>
				
				<h4 className="title-2">Property Detail</h4>  
				<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
				<ul>
					<li><label>Property ID:</label> <span>HZ29</span></li>
					<li><label>Status:  </label> <span>Under Construction</span></li>
					<li><label>Launch Date:</label> <span> May 2017</span></li>
					<li><label>Possession Date: </label> <span>August 2023</span></li>
					<li><label>Project type: </label> <span>Residential </span></li>
					<li><label>Configurations: </label> <span>2/3/4 BHK & Penthouse  </span></li>
					<li><label>Construction Type: </label> <span> Mivan </span></li>
					<li><label>Total Flats: </label> <span> 1572 </span></li>
					<li><label>Green Area:  </label> <span>75% </span></li>
				</ul>
				<ul>
					<li><label>Parking level: </label> <span>2 </span></li>
					<li><label>Lift per tower: </label> <span>3</span></li>
					<li><label>No. of parking: </label> <span>3496</span></li>
					<li><label>Total Floors:  </label> <span>23</span></li>
					<li><label>Ceiling height: </label> <span> 10.5 ft</span></li>
					<li><label>Club house size: </label> <span>25000 sq. ft. </span></li>
					<li><label>Main Door Height: </label> <span>8 ft</span></li>
					<li><label>Internal Door Height:  </label> <span> 7 ft</span></li>
				</ul>
				</div>
			
				<h4 className="title-2">Amenities</h4>
				<div style={{height:"250px", width:"98%"  }}>
				<div style={{display:"flex",flexWrap:"Wrap", height:"224px",overflow:"auto"}}>                            
				
					<div style={{display:"block",width:"180px",alignContent:"center"}}>
						<div style={{textAlign:'center'}}><img src="https://imgur.com/9og7i8c.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Swimming Pool</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://i.imgur.com/XMw5vlf.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>High Speed Elevators</b></div>
					</div>
					
					<div style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://i.imgur.com/IXKvEYY.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>CcTv Surveliance</b></div>
					</div>
				
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://i.imgur.com/Fl5zYGt.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>24x7 Security</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://i.imgur.com/qFJnxt9.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Kids Play Area</b></div>
					</div>
					
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://i.imgur.com/cLDOJyf.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Barbeque</b></div>
					</div>
				
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://i.imgur.com/nAKZCUO.png" style={{height:"60px",width:"60px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Spa</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/sun_deck.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Sun Deck</b></div>
					</div>
					
					<div style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/earthquake_resistant.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>EarthQuake Resistant</b></div>
					</div>
					
				
					<div style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/meditation.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Yoga/Meditation Center</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/jogging_track.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Jogging Track</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/gymnasium.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Gymnasium</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/firefighting_equipment.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}}><b>Fire Fighting Equipment</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/internal_street_lights.png" style={{height:"30px",width:"30px"}}/></div>
						<div style={{marginTop:"15px",textAlign:'center'}} ><b>Internal Street Lights</b></div>
					</div>
					
					<div style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/club.png" style={{height:"30px",width:"30px"}}/></div>
						<div  style={{marginTop:"15px",textAlign:'center'}}><b>ClubHouse</b></div>
					</div>
					
					<div style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/banquet_hall.png" style={{height:"30px",width:"30px"}}/></div>
						<div  style={{marginTop:"15px",textAlign:'center'}}><b>Banquet Hall</b></div>
					</div>
					
					<div  style={{display:"block",width:"180px"}}>
						<div style={{textAlign:'center'}}><img src="https://static.99acres.com/universalapp/img/park.png" style={{height:"30px",width:"30px"}}/></div>
						<div  style={{marginTop:"15px",textAlign:'center'}}><b>Landscape Garden</b></div>
					</div>
					</div>
				</div>
				<h4 className="title-2">From Our Gallery</h4>
				<div className="ltn__property-details-gallery mb-30">
				<div className="row">
					<div className="col-md-6">
					<a href={publicUrl+"assets/img/others/14.jpg"} data-rel="lightcase:myCollection">
						<img className="mb-30" src={publicUrl+"assets/img/others/14.jpg"} alt="Image" />
					</a>
					<a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
						<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
					</a>
					</div>
					<div className="col-md-6">
					<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
						<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
					</a>
					</div>
				</div>
				</div>
				
				
				
				<h4 className="title-2">Location</h4>
				<div className="property-details-google-map mb-60">
				
				<iframe  src={data.location} width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
				
				</div>
				<h4 className="title-2">Floor Plans</h4>
				{/* APARTMENTS PLAN AREA START */}
				<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
				<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
					<div className="nav">
					<a data-bs-toggle="tab" href="#liton_tab_3_1">2 BHK</a>
					<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">3 BHK</a>
					<a data-bs-toggle="tab" href="#liton_tab_3_3" >4 BHK</a>
					<a data-bs-toggle="tab" href="#liton_tab_3_4" >Penthouse</a>
					</div>
				</div>
				<div className="tab-content">
					<div className="tab-pane fade" id="liton_tab_3_1">
					<div className="ltn__apartments-tab-content-inner">
						<div className="row">
						<div className="col-lg-7">
							<div className="apartments-plan-img">
							<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
							</div>
						</div>
						
						<div className="col-lg-5">
							<div className="product-details-apartments-info-list  section-bg-1">
							<div className="row">
								<div className="col-lg-12">
								<div >
									<ul>
									<li>Super Area:  2800 Sq. Ft</li>
									<li>Built Up Area: 650 Sq. Ft</li>
									<li>Carpet Area: 150 Sq. Ft</li>
									<li>Balcony Area: 150 Sq.Ft</li>
									
									</ul>
								</div>
								</div>
								<div className="col-lg-6">
								<div>
									<ul>
									
									</ul>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<div className="tab-pane fade active show" id="liton_tab_3_2">
					<div className="ltn__product-tab-content-inner">
						<div className="row">
						<div className="col-lg-7">
							<div className="apartments-plan-img">
							<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
							</div>
						</div>
					
						<div className="col-lg-5">
							<div className="product-details-apartments-info-list  section-bg-1">
							<div className="row">
								<div className="col-lg-12">
								<div >
									<ul>
									<li>Super Area:  2800 Sq. Ft</li>
									<li>Built Up Area: 650 Sq. Ft</li>
									<li>Carpet Area: 150 Sq. Ft</li>
									<li>Balcony Area: 150 Sq.Ft</li>
									</ul>
								</div>
								</div>
								<div className="col-lg-6">
								<div>
									<ul>
									
									</ul>
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
							<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
							</div>
						</div>
						
						
						<div className="col-lg-5">
							<div className="product-details-apartments-info-list  section-bg-1">
							<div className="row">
								<div className="col-lg-12">
								<div >
									<ul>
									<li>Super Area:  2800 Sq. Ft</li>
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
							<img src={publicUrl+"assets/img/others/10.png"} alt="#" />
							</div>
						</div>
						
						<div className="col-lg-5">
							<div className="product-details-apartments-info-list  section-bg-1">
							<div className="row">
								<div className="col-lg-12">
								<div>
									<ul>
									<li>Super Area:  2800 Sq. Ft</li>
									<li>Built Up Area: 650 Sq. Ft</li>
									<li>Carpet Area: 150 Sq. Ft</li>
									<li>Balcony Area: 150 Sq.Ft</li>
									</ul>
								</div>
								</div>
								<div className="col-lg-6">
								<div className="apartments-info-list apartments-info-list-color mt-40---">
									<ul>
									
									</ul>
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
				{/* APARTMENTS PLAN AREA END */}
				<h4 className="title-2">Property Video</h4>
				<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl+"assets/img/others/5.jpg"}>
				<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
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
						<Link to="/shop"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
						<div className="real-estate-agent">
						<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
						</div>
						</div>
					</div>
					<div className="product-info">
						<div className="product-badge">
						<ul>
							<li className="sale-badg">For Rent</li>
						</ul>
						</div>
						<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
						<div className="product-img-location">
						<ul>
							<li>
							<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
							</li>
						</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
						<li><span>3 </span>
							Bedrooms
						</li>
						<li><span>2 </span>
							Bathrooms
						</li>
						<li><span>3450 </span>
							square Ft
						</li>
						</ul>
						<div className="product-hover-action">
						<ul>
							<li>
							<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
								<i className="flaticon-expand" />
							</a>
							</li>
							<li>
							<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
								<i className="flaticon-heart-1" /></a>
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
						<span>$349,00<label>/Month</label></span>
						</div>
					</div>
					</div>
				</div>
				{/* ltn__product-item */}
				<div className="col-xl-6 col-sm-6 col-12 go-top">
					<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
					<div className="product-img">
						<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
						<div className="real-estate-agent">
						<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
						</div>
						</div>
					</div>
					<div className="product-info">
						<div className="product-badge">
						<ul>
							<li className="sale-badg">For Sale</li>
						</ul>
						</div>
						<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
						<div className="product-img-location">
						<ul>
							<li>
							<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
							</li>
						</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
						<li><span>3 </span>
							Bedrooms
						</li>
						<li><span>2 </span>
							Bathrooms
						</li>
						<li><span>3450 </span>
							square Ft
						</li>
						</ul>
						<div className="product-hover-action">
						<ul>
							<li>
							<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
								<i className="flaticon-expand" />
							</a>
							</li>
							<li>
							<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
								<i className="flaticon-heart-1" /></a>
							</li>
							<li>
							<a href="portfolio-details.html" title="Compare">
								<i className="flaticon-add" />
							</a>
							</li>
						</ul>
						</div>
					</div>
					<div className="product-info-bottom">
						<div className="product-price">
						<span>$349,00<label>/Month</label></span>
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
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
				<form action="#">
					<input type="text" name="yourname" placeholder="Your Name*" />
					<input type="text" name="youremail" placeholder="Your e-Mail*" />
					<textarea name="yourmessage" placeholder="Write Message..." defaultValue={""} />
					<button type="submit" className="btn theme-btn-1">Schedule Visit</button>
					
				</form>
				</div>
			
				<div className="widget ltn__popular-product-widget">       
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>                     
				<div className="row ltn__popular-product-widget-active slick-arrow-1">
					{/* ltn__product-item */}
					<div className="col-12">
					<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
						<div className="product-img go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/product-3/6.jpg"} alt="#" /></Link>
						<div className="real-estate-agent">
							<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
							</div>
						</div>
						</div>
						<div className="product-info">
						<div className="product-price">
							<span>$349,00<label>/Month</label></span>
						</div>
						<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
						<div className="product-img-location">
							<ul>
							<li>
								<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
							</li>
							</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
							<li><span>3 </span>
							Bedrooms
							</li>
							<li><span>2 </span>
							Bathrooms
							</li>
							<li><span>3450 </span>
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
						<a href="product-details.html"><img src={publicUrl+"assets/img/product-3/4.jpg" }alt="#" /></a>
						<div className="real-estate-agent">
							<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
							</div>
						</div>
						</div>
						<div className="product-info">
						<div className="product-price">
							<span>$349,00<label>/Month</label></span>
						</div>
						<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
						<div className="product-img-location">
							<ul>
							<li>
								<a href="product-details.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
							</li>
							</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
							<li><span>3 </span>
							Bedrooms
							</li>
							<li><span>2 </span>
							Bathrooms
							</li>
							<li><span>3450 </span>
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
						<a href="product-details.html"><img src={publicUrl+"assets/img/product-3/5.jpg"} alt="#" /></a>
						<div className="real-estate-agent">
							<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg" }alt="#" /></Link>
							</div>
						</div>
						</div>
						<div className="product-info">
						<div className="product-price">
							<span>$349,00<label>/Month</label></span>
						</div>
						<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
						<div className="product-img-location">
							<ul>
							<li>
								<a href="product-details.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
							</li>
							</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
							<li><span>3 </span>
							Bedrooms
							</li>
							<li><span>2 </span>
							Bathrooms
							</li>
							<li><span>3450 </span>
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
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
				<div className="ltn__social-media-2">
					<ul>
					<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
					<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
					<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
					<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
				</div>
				</div>
				{/* Tagcloud Widget */}
				<div className="widget ltn__tagcloud-widget go-top">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Most Searched Keyword</h4>
				<ul>
					<li><Link to="/blog-grid">2 BHK+Study</Link></li>
					<li><Link to="/blog-grid">Premium Apartment</Link></li>
					<li><Link to="/blog-grid">Luxury Apartment</Link></li>
					<li><Link to="/blog-grid">Ready to Move</Link></li>
					<li><Link to="/blog-grid">Fully Furnished</Link></li>
					<li><Link to="/blog-grid">World Class Ammenities</Link></li>
					<li><Link to="/blog-grid">Luxury Flats in Noida</Link></li>
					<li><Link to="/blog-grid">Ace Group</Link></li>
					<li><Link to="/blog-grid">Ace Divino</Link></li>
					<li><Link to="/blog-grid">Luxury Penthouse</Link></li>
					<li><Link to="/blog-grid">Flats in Noida Extension</Link></li>
					<li><Link to="/blog-grid">High Rise Apartment</Link></li>
					<li><Link to="/blog-grid">RERA Approved</Link></li>
					<li><Link to="/blog-grid">OC Status</Link></li>
				</ul>
				</div>
				{/* Banner Widget */}
				<div className="widget ltn__banner-widget d-none go-top">
				<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
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
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                        1.{data.q1} 
                        </h6>
                        <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                        {data.a1}
                        </div>
                        </div>
                    </div>
                    {/* card */}
                  
					<div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false">
                        2.{data.q2}?
                        </h6>
                        <div id="faq-item-2-2" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                        
                          {data.a2}
                        
                        </div>
                        </div>
                    </div>                       
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                        3.{data.q3} 
                        </h6>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a3}</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                        4.{data.q4}
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a4}</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        5.{data.q5}
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a5}</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                        6. {data.q6}
                        </h6>
                        <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a6}</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-7" aria-expanded="false">
                        7.{data.q7}
                        </h6>
                        <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a7} </p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-8" aria-expanded="false">
                        8.{data.q8}
                        </h6>
                        <div id="faq-item-2-8" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a8}</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-9" aria-expanded="false">
                        9.{data.q9}?
                        </h6>
                        <div id="faq-item-2-9" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a9}</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-10" aria-expanded="false">
                        10.{data.q10}
                        </h6>
                        <div id="faq-item-2-10" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>{data.a10}</p>
                        </div>
                        </div>
                    </div>
                </div>
                    
                </div>
                </div>
                <div className="col-lg-4">
              
                </div>
            </div>
            </div>
        </div>
		</div>
	</div>
	
	
      ))
	  }
	</div>
	
	</>
  )
}

export default ShopDetails;