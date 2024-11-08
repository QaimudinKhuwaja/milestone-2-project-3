import Image from "next/image";
import React from 'react'

const Home = () => {
  return (
    <>

<div id="mainbody">

<div id="line"></div>


<div>
     <img id="image" src="faraaz.png" alt="" />
     </div>


    <div id="textdiv">
      <h1 id="h1">I am <span id="qaimudin">Qaimudin</span> Khuwaja</h1>
      <h2 id="h2">I am Frontend Developer</h2>
<p id="p">As a passionate frontend developer, I specialize in <br/>crafting seamless user experiences that drive results. <br/>With expertise in modern technologies and a keen eye<br/> for design, I bring ideas to life.
Let's build something <br/>amazing together. Explore my website and discover<br/> how I can help elevate your brand's online presence.<br/>
I'm dedicated to delivering high-quality solutions<br/> that exceed expectations. Get in touch and let's<br/> discuss your next project.</p>
        <button id="button">Hire Me</button>
      </div>

    

     </div>
    </>
  )
}

export default Home