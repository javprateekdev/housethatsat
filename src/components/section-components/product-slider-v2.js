import React, { Component,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {data} from './data';
import { getalldata } from './api';

const ProductSliderV2 = () => {

	
  
	
	let publicUrl = process.env.PUBLIC_URL+'/'
	return (
		<div className="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 " data-bs-bg={publicUrl+"assets/img/bg/20.jpg"} style={{marginTop:"-125px"}}>
		<div className="container">
		  <div className="row">
			<div className="col-lg-12">
			  <div className="section-title-area ltn__section-title-2--- text-center---">
				<h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Area Properties</h6>
				<h1 className="section-title">Find Your Dream House <br />
				  Search By Area</h1>
			  </div>
			</div>
		  </div>
		  <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
		
		  {data.map((property) => (
       
	   <div className="col-lg-4">
	   <div className="ltn__search-by-place-item">
		 <div className="search-by-place-img">
		   <Link to={`detailview/${property.id}`}><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
		   <div className="search-by-place-badge">
			 <ul>
			   <li>2 Properties</li>
			 </ul>
		   </div>
		 </div>
		 <div className="search-by-place-info">
		   <h6><Link to={`detailview/${property.id}`}>{property.address1}</Link></h6>
		   <h4><Link to={`detailview/${property.id}`}>{property.propertyname}</Link></h4>
		   <div className="search-by-place-btn">
		   <Link to={`detailview/${property.id}`}>View Property <i className="flaticon-right-arrow" /></Link>
		   </div>
		 </div>
	   </div>
	 </div>
      ))}
		  
			
			{/*  */}
		  </div>
		</div>
	  </div>
	)
  }


	


export default ProductSliderV2