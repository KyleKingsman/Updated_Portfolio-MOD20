import React from 'react';
import '../pages/Title.css';
import github from './../pages/github.png'
import linkedin from './../pages/linkedin.png'
import project1 from './../pages/project1.png'


export default function Home() {
  return (
    <div>
      <div className="Title">
        <h1>Home Page</h1>
      </div>
      <div className='header'>
        <h1>Michael R. Gruber</h1>
      </div>

      <div class="card-deck">
        <div class="card">
          <img src={project1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">First Project</h5>
            <p class="card-text">For this project I worked for a week with a team of three people. We had to use an api to connect to our site. As a team we chose to make a website for people to find recipes as well as make shopping lists.</p>
          </div>
        </div>

        <div class="card">
          <img  class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Third Project</h5>
            <p class="card-text">Iɴ projecт тнree we нαd тo мαĸe α reαcт weвѕιтe тнαт нαd мυlтιple levelѕ oғ dαтα αɴd pαɢeѕ. Oɴ тнιѕ projecт ғor α weeĸ I worĸed ιɴ α тeαм oғ ғιve тo мαĸe α ѕocιαl ɴeтworĸ αpp. </p>
            <div src = {"https://cdn.pixabay.com/photo/2020/05/10/06/26/coming-soon-5152487_1280.png"}></div>
          </div>
        </div>

      </div>

      
        <div className="i-icons">
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
        </div>
        

      <div class="footer">
        <p>Thank you for visting!</p>
      </div>
    </div>
  );
}
