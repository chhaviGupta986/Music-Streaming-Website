import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const Carousel = () => {

  return (
    <>
       <div id="demo" className="carousel slide bg-black" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="7"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="8"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/653b86ce40bd896d47247bf5/BANNER_97803023662034.png" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />
  </div>
  <div className="carousel-item">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65168b56b643e50c0b195d25/BANNER_327564327690793.jpg" className="d-block w-100" style={{borderRadius: '5px 2255px 5px 2255px'}} alt="..." />
  </div>
  <div className="carousel-item">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/651732cada58b47b372df2c7/BANNER_648528670839384.jpg" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />  
  </div>
  <div className="carousel-item">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/650d6fe30c600828b57ea413/BANNER_8760999881119.jpg" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />  
  </div>
  <div className="carousel-item">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1695986036714-Fresh-Arrivals-FeaturedBanner_(8).jpg" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />  
  </div>
  <div className="carousel-item">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6516abcd2272c31a7cab5c9f/BANNER_115871937640710.png" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />  
  </div>
  <div className="carousel-item">
  <img src="
https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/651692335d369b5b6da3c000/BANNER_19251717554851.png" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />  
  </div>
  <div className="carousel-item">
  <img src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6516abcd2272c31a7cab5c9f/BANNER_115871937640710.png" className="d-block w-100" style={{borderRadius: '2255px 5px 2255px 5px'}} alt="..." />  
  </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" style={{backgroundColor:'rgb(216, 0, 50)'}}></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon" style={{backgroundColor:'rgb(216, 0, 50)'}}></span>
</button>
</div>

    </>
  )
}

export default Carousel