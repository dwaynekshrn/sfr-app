import React, { Component } from 'react';

class Stats extends Component{
    render(){
        return(
            <div>
                
            <div className="row">
            <h3 className="text-center">Trusted by millions of publishers</h3>
 
            <div className="col s12 m4 l4">
                 <div className="col s12 m12 l12">
                         <div className="card-panel white">
                           <span className="black-text">
                                 <h4>5,000</h4>
                                 <p>AVAILABLE MOVIES</p>
                                 <h4>250:00</h4>
                                 <p>MINUTES WATCHED</p>
                                 <h4>$15</h4>
                                 <p>/MINS REWARDS</p>
                                 <h4>$500,000</h4>
                                 <p>TOTAL REWARDS</p>
                                 <h4>10 Million</h4>
                                 <p>MEDALLIONS MINED</p>
                           </span>
                         </div>
                       </div>
            </div>
            <div className="col s12 m8 l8">
             <div className="col s12 m6 l6">
               <div className="card-panel white">
                 <span className="grey-text darken-3">
                    <p>"When we started using Disqus, the number of comments quadrupled."</p>
                    <img src="images/spoilertv.png" width="100" height="auto" alt="thumb" />
                 </span>
             </div>
             </div>
 
             <div className="col s12 m6 l6">
             <div className="card-panel white">
                 <span className="grey-text darken-3">
                 <p>"We love the moderation, the voting and a host of other stuff you can build."</p>
                 <img src="images/9to5-google.png" width="100" height="auto" alt="thumb"  />
                 </span>
             </div>
             </div>
 
             <div className="col s12 m12 l12">
             <div className="card-panel white">
                 <span className="grey-text darken-3">
                 <p>"...it's tough to get people to stay for more than just breaking news. Disqus helps us keep readers engaged and coming back for more."</p>
                 <img src="images/cinemablend.png" width="100" height="auto" alt="thumb"  />
                 </span>
             </div>
             </div>
 
            </div>
 
         </div>
            
            </div>
        )
    }
}

export default Stats;