  //  post 받아오기
  export const getMyPosts = (result, searchValue ) => {
    const newPosts = result.data.data.content;
    if (searchValue === "") {
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
    activeRef.current.style.color = "#20c997"
    activeRef.current.style.borderBottom = "2px solid #20c997"
    unactiveRef.current.style.color = "black"
    unactiveRef.current.style.borderBottom = "none"
  }