import { useState, useEffect } from "react";

const LikeArchive = ( { dbService } ) => {

  const [likePosts, setLikePosts] = useState();

  const getLikePost = async () => {
    const result = await dbService.getLikedPost();
    setLikePosts(result)
  }


  useEffect(() => {
    getLikePost();
  }, [likePosts]);

  return(
    <>
    좋아요한 목록

    <button  onClick={() => getLikePost()} ></button>
    </>
  )
}

export default LikeArchive;