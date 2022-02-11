import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
      
    <div className="footer">
        
        
    <div className="container">
        <div className = "row">
           
            <div className="col">
                <h3>About us</h3>
                <ul className="list-unstyled">
                    <li>Taiga is an online E-commerce web application developed in 2022 by group of young software engineers in college. </li>
                    
                </ul>

                <h3>Our mission</h3>
                <ul className="list-unstyled">
                    <li>Taiga wants to be know as the global leader in E-commerce services </li>
                    
                </ul>

            </div>
            

            
            <div className="col">
                <h3>Social Media</h3>
                <div className="socialmedias">
                <ul className="list-unstyled">
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png"></img></li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img></li>
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"></img></li>
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"></img></li>
                
                </ul>
                </div>

                <h3>Contact Us</h3>
                <ul className="list-unstyled">
                <li>Address : 1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8</li>
                <li>Tel : 514 848-2424</li>
                </ul>
                
            </div>
            
            
            
           
            
        
        </div>
            
        <div className="row">
            <p>
                &copy;{new Date().getFullYear()} Taiga INC.
            </p>
        </div>
        
    </div>
</div>



    
    
  )
}
