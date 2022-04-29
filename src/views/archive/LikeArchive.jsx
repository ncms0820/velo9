import React from "react";
import { useState, useEffect } from "react";

// components
import ArchiveCard from "./card/ArchiveCard";

const LikeArchive = ( { dbService } ) => {

  const [likePosts, setLikePosts] = useState();

  const getLikePost = async () => {
    const result = await dbService.getLikedPost();
    console.log(result.data.content)
    setLikePosts(result.data.content)
  }


  useEffect(() => {
    console.log("실행됨");
    getLikePost();
  }, []);

  
  return(
    <>
      { likePosts && 
        likePosts.map((v) => {
        return <ArchiveCard content={v} />
      })}
    </>
  )
}

export default LikeArchive;