import React from 'react';

const Blog = () => {
   return(
     <div>
     <div className="container">
     <div className="row">

             <div className="col s12 m4 l6">
                     <div className="card z-depth-0">
                       <div className="card-image">
                         <img src="images/pam-blog.svg" alt="blog-img" />
                       </div>
                       <div className="card-content">
                          <b>The Latest News From Disqus</b>
                          <p>Announcements, tips, and more. </p>
                     </div>
                     </div>
                   </div>

         <div className="col s12 m8 l6">
             <div className="row">
                 <b>Company</b>
                 <h6 className="light-blue-text">Facebook will de-emphasize publisher content: What this means for publishers and what they can do to maintain traffic</h6>
                 <i>January 17, 2018</i>
             </div>
             <div className="row">
                 <b>Engineering</b>
                 <h6 className="light-blue-text">The Winter 2018 Disqus HackWeek Recap</h6>
                 <i>January 11, 2018</i>
             </div>
             <div className="row">
                 <b>Engagement Guide</b>
                 <h6 className="light-blue-text">The Ultimate Guide to Increasing Reader Engagement (Free Ebook)</h6>
                 <i>December 21, 2017</i>
             </div>
             <a href="/blog" className="btn-flat light-blue white-text">READ OUR BLOG</a>
         </div>
     </div>
 </div>

     </div>
   )
}

export default Blog;