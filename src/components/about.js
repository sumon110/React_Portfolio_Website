import React, { Component } from 'react';
import Skills from './skills'
import about from './asset/about.jpg'


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div className="container">
                <div className="jumbotron" style={{backgroundImage:`url(${about})`,backgroundSize:"cover",position:"center center"}}>
                <h1 className="animated slideInDown delay-2s text-center font-weight-bold text-white" ><span style={{color:"#827717"}}>Hey, I'm a software developer from Khulna, Bangladesh.</span> I can help you build your next product.</h1>
                </div>
                <div className="row text-center">
                 <div className="col-md-6">
                   <div className="animated zoomInUp delay-2s card">
                     <div className="card-header">
                        <h1>I love working with small businesses</h1>
                     </div>
                     <div className="card-body">
                     <p>I specialize in creating sites for individuals and small businesses. You shouldn’t have to settle for cheap solutions or generic templates. I provide custom designs at reasonable prices. Frequently, your website is the first impression your customers will get, so make sure it’s a good one.</p>
                     <hr/>
                     <p>Since my time is split between a few different things, I’m not able to take on every project I’d like to, I'm currently not taking on new web design clients, but if you have a question about one of my products, you can send me a message. For any other questions, check my FAQs first</p>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6 pt-5">
                  <div className="animated zoomInUp delay-2s card pt-3 " style={{color:'#880E4F'}}>
                     <div className="car-header text-uppercase text-center display-4 font-weight-bold  brown-color text-justify " style={{letterSpacing:'8px'}}><span className="brown-text">let,s know</span><br/> about myself</div>
                     <div className="card-body">
                      <h3 className="text-uppercase  brown-text" style={{letterSpacing:'5px'}}>Take your time and see everything at a glance</h3>
                     </div>
                  </div>
                 </div>
                </div>
                <div className="row py-4">
                    <div className="col-md-4">
                      <div className="card">
                        <div className="card-header">
                           <h1 className="font-weight-bold"> <span>01.</span> Research</h1>
                        </div>
                        <div className="card-body">
                           <p> Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <div className="card-header">
                        <h1 className="font-weight-bold"><span>02.</span> Design</h1>
                        </div>
                        <div className="card-body">
                           <p> Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <div className="card-header">
                           <h1 className="font-weight-bold"> <span>03.</span> Develop</h1>
                        </div>
                        <div className="card-body">
                           <p> Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer.</p>
                        </div>
                      </div>
                    </div>
                   

                </div>
                <Skills/>
                
           </div> 

        );
    }
}

export default About;