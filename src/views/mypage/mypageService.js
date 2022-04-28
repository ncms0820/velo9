import Swal from "sweetalert2";

//  post 받아오기
export const getMyPosts = (result, searchValue) => {
  const newPosts = result.data.data.content;
  if (searchValue === "") { // 빈값일때 전체글 로드
    return newPosts
  }
  const filteredPosts = newPosts.filter((post) =>  
      ( post.tags.includes(searchValue) ||
        post.title.includes(searchValue) ||
        post.introduce.includes(searchValue)
      ) 
  )
  return filteredPosts
}

// 태그 눌렀을때 (태그만 필터링)
export const getMyPostsWithTagBtn = (result, tagName) => {
  const newPosts = result.data.data.content;
  if (tagName === "") return newPosts // 전체보기 눌렀을 때
  // setSearchValue(tagName)
  const filteredPosts = newPosts.filter((post) => post.tags.includes(tagName) )
  return filteredPosts
}
  
// series 받아오기
export const getMySeries = (result, searchValue ) => {
    const newSeries = result.data.subData
    if (searchValue === "") {
      return newSeries
    }
    const filteredSeries = newSeries.filter((post) => post.seriesName.includes(searchValue))
    return filteredSeries
  }

  export const getTags = (posts) => {
    const newTags = new Object();
    for (let post of posts) {
      for(let tag of post.tags) {
        if (!newTags.hasOwnProperty(tag))  newTags[tag] = 1
        else newTags[tag]++
      }
    }
    return newTags
  }

  export const tapChageCss = (activeRef, unactiveRef) => {
    activeRef.current.style.color = "black"
    activeRef.current.style.borderBottom = "2px solid black"
    unactiveRef.current.style.color = "gray"
    unactiveRef.current.style.borderBottom = "none"
  }

  export const sweetAlert = async (functionService, dbService, seriesId, nickname, searchValue, setSerieses) => {
    await Swal.fire({
      title: "시리즈를 삭제할까요?",
      text: "시리즈의 글은 삭제되지 않습니다.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    })
    .then( async (result) => {
      if (!result.isConfirmed) return
      await functionService.deleteSeries(seriesId)
      const seriesData = await dbService.getSeries(nickname)
      let newSeries = getMySeries(seriesData, searchValue);
      setSerieses(newSeries)
      Swal.fire("삭제 완료", "시리즈가 삭제되었습니다.", "success");
    });
  };
