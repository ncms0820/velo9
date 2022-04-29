import React from "react";
import { useState, useEffect } from "react";

// Components
import ArchiveCard from "./card/ArchiveCard";

const RecentArchive = ( { dbService } ) => {

  const [recentPosts, setRecentPosts] = useState();

  const getRecentPost = async () => {
    const result = await dbService.getRecentPost();
    console.log(result.data.content)
    setRecentPosts(result.data.content)
  }

  useEffect(() => {
    getRecentPost();
  }, []);


  return(
    <>
      { recentPosts && 
        recentPosts.map( (v) => {
        return <ArchiveCard content={v} />
      })}
    </>
  )
}

export default RecentArchive;