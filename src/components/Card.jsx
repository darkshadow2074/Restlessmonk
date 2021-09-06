import React from 'react'
import "./card.css"
const userData = [
    {
       content:"Followers / Following of @any_user",
       text:"Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
       link:"#",
    },
    {
        content:"Liker / Commenter of any post",
        text:"Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
        link:"#",
     },
     {
        content:"People Posting Specific #Hashtags",
        text:"Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
        link:"#",
     },
     {
        content:"People Posting at Specific Locations",
        text:"Lorem Ipsum something is there. Something more will come here. Oh yes it will come.",
        link:"#",
     },
]
const Card = ()=> {
    return (
        <div className="card__section">
           {
              userData.map(({content,text,link},index)=><div key={index+1} className="card__content">
                 <div className="card__heading">
                     <span className="color_container"><span className={`color${index+1}`}></span></span>
                     <h3 className="heading">{content}</h3>
                 </div>
                 <div className={`card__text_content`}>{text}</div>
                 <div className="btn__section"><button className={`btn__card${index+1}`}>SAMPLE DATA</button></div>
              </div>)
           }
        </div>
    )
}

export default Card
