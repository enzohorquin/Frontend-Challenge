import React from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="page">
        <div className="row-container">
            <div className="header"> 
                <img src='images/logo.svg' alt="logo" className="img-logo"/>
                <Button text={"Try it for Free"} color={"white"} className="white-button"/>
            </div>
            <div className="content-1">
              <img  style={{maxWidth:'500px'}} src='images/illustration-mockups.svg' alt="MockUp" className="img-mockup"/>
              <Feature title={"Build the Community Your Fans Will Love"} className={"center"} parrafo={"Huddle re-imagines the way we build communities. You have a voice, but so des your audience. Create connections with your users as you engage in genuine discussion."} />
              <Button text={"Get Started for Free"} color={"pink"}/>
            </div>
            <div className="content-2">
                <img src='images/illustration-your-users.svg' alt="users" className="img-users"/>
                <div className="features">
                  <Feature title={"Flowing Conversations"} className={"left"} parrafo={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."} />
                  <Feature title={"Grow Together"} className={"left"} parrafo={"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."} />
                  <Feature title={"Your Users"} className={"left"} parrafo={"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."} />
                </div>
            </div>
            <div className="box">
              <Feature title={"Try it Free"} className={"center"} parrafo={"Fully featured 30-day free trial - no credit card required."} />
              <Button text={"Get Started for Free"} color={"pink"}/>
            </div>
            <Footer />
            
        </div>
      
    </div>
  );
}

export default App;
