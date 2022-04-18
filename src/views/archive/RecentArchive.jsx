import { useState, useEffect } from "react";

const RecentArchive = ( { dbService } ) => {

  const [recentPosts, setRecentPosts] = useState();

  const getRecentPost = async () => {
    const result = await dbService.getRecentPost();
    setRecentPosts(result)
  }


  useEffect(() => {
    getRecentPost();
  }, [recentPosts]);


  return(
    <>
    최근 본 목록
    </>
  )
}

export default RecentArchive;