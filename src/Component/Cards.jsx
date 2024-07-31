import React from "react";

function Cards(){
    let content = [{Name:"Sare Jaha Se Accha" , Decsription:"Sare Jaha Se Accha Hindosta Hamara Hamara" },
        {Name:"Hum India Wale" , Decsription:"Sare Jag se Nirale Hum India Wale, Kahete hai log hume India wale" }
    ];
    return (
<div>
    {content.map((elem , index) =>(
        <div className="flex items-center justify-center w-full h-screen bg-zinc-300">

        <div className="w-1/3 min-h-32 bg-zinc-100 rounded">

        </div>
        </div>
    ))}
</div>
    )
}

export default Cards;