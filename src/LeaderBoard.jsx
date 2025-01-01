import { useState } from "react"


function LeaderBoard() {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [country,setCountry]=useState("")
    const [score,setScore]=useState("")
    const [leaderBoard,setLeaderBoard]=useState([])

    function handleSubmit(e){
        e.preventDefault();
        const player={
            id: Date.now(),
            fName: fname,
            lName:lname,
            Country: country,
            Score: score 
        };
        
        
        
        
        setLeaderBoard([...leaderBoard , player].sort((a,b)=>b.Score-a.Score));
        setFname("")
        setLname("")
        setCountry("")
        setScore("")


    }
function IncrementFive(id){
setLeaderBoard(leaderBoard.map((obj)=>obj.id===id?{...obj, Score:Number(obj.Score)+5}:obj).sort((a,b)=>b.Score-a.Score));
}

function DecrementFive(id){
    setLeaderBoard(leaderBoard.map((obj)=>obj.id===id?{...obj, Score:Number(obj.Score)-5}:obj).sort((a,b)=>b.Score-a.Score));
}

function DeleteItem(id){
    setLeaderBoard(leaderBoard.filter((obj)=>obj.id!=id));
}


  return (
    <div>
        <div className="bg-black bg-opacity-40 backdrop-blur-xl w-[990px] h-auto ml-[12rem] rounded-lg pb-2">
            <h1 className="text-white font-bold text-3xl text-center font-poppins pt-2">Leader-board</h1>
    <form action="" onSubmit={handleSubmit} className="flex flex-nowrap items-center justify-center gap-3 mt-5">
    <input className="h-7 text-base font-semibold text-black  bg-white placeholder-black rounded-md pl-3" type="text" placeholder="First Name" value={fname} onChange={(e)=>setFname(e.target.value)} />
    <input className="h-7 text-base font-semibold text-black  bg-white placeholder-black rounded-md pl-3" type="text" placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} />    

 <select className="h-7 text-base font-semibold text-black  bg-white placeholder-black rounded-md pl-2" name="country" id="" value={country} onChange={(e)=>setCountry(e.target.value)} >
    <option value="Select Country">Select Country</option>
<option value="India">India</option>    
<option value="Australia">Australia</option>    
<option value="WestIndies">WestIndies</option>    
<option value="New Zealand">New Zealand</option>    
</select>   


<input className="h-7 text-base font-semibold text-black  bg-white placeholder-black rounded-md pl-3" type="number" placeholder="Score" value={score} onChange={(e)=>setScore(e.target.value)} />

<button className="h-7 text-base font-semibold text-white  bg-black rounded-md pl-8 pr-8" type="submit">Add Player</button>
    </form>
    <hr className="mt-8" />
    <div className="result text-white text-center mt-5">
       {leaderBoard ? leaderBoard.map((obj)=>
        <p key={obj.id} className="flex items-center justify-between px-8 mt-2">
            <div className="grid grid-cols-4 gap-x-5 flex-grow">
            <span className="text-lg">{(obj.fName)}</span>
            <span className="text-lg">{(obj.lName)}</span>
            <span className="text-lg">{obj.Country}</span>
            <span className="text-lg">{obj.Score}</span>
            </div>
            <div className="text-sm flex gap-8 ml-8">
                <button className="rounded-full bg-green-700 hover:bg-green-600 text-white px-2 py-1" onClick={()=>IncrementFive(obj.id)}>+5</button>
                <button className="rounded-full bg-red-700 hover:bg-red-600 text-white px-2 py-1" onClick={()=>DecrementFive(obj.id)}>-5</button>
                <button className="rounded-md bg-red-700 px-2 py-1 text-white" onClick={()=>DeleteItem(obj.id)}>Delete</button>
            </div>
        </p>
    ) :""}
    </div>
        </div>
    
    
    
    </div>
  )
}

export default LeaderBoard