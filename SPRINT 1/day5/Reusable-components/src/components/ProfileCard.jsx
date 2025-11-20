import "../App.css"

function ProfileCard ({name,age,bio}) {
     if(!name)name="Unknown User"
     if(!bio) bio = "No biography available"
     if(bio.length>100){
        bio = bio.slice(0,100)+"....Read More";
     }
    return(
        <div style={{height:200,width:200,textAlign:"center",backgroundColor:"whitesmoke",padding:10,display:"flex", flexDirection:"column",margin:10}}>

           <p><b>Name:</b>{name}</p>
           <p><b>Age:</b>{age}</p>
           <p><b>Bio:</b>{bio}</p>

        </div>

    )
}

export default ProfileCard;