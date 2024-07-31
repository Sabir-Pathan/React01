import React from "react";

function Cards(){
    let data = [{Name:"Sare Jaha Se Accha" , Decsription:"Sare Jaha Se Accha Hindosta Hamara Hamara" },
        {Name:"Hum India Wale" , Decsription:"Sare Jag se Nirale Hum India Wale, Kahete hai log hume India wale" }
    ]
    return (
<div className="h-screen w-full bg-zinc-300 flex items-center justify-center flex-col gap-5">
    {data.map((item,index)=>(
        <div className="w-80 h-40 bg-white rounded-md p-6 shadow-md">
            <h1 className="text-xl font-semibold">{item.Name}</h1>
            <p className="text-gray-600">{item.Decsription}</p>
            <button className="bg-blue-700 py-2 px-3 mt-2 mb-2 rounded text-white text-bold">Download Now</button>
        </div>
    ))}

</div>
    )
}

export default Cards;