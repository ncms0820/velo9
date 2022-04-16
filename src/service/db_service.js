import axios from "axios";

const baseURL = "http://localhost:8080";
class DbService {
  // db 가져오기
  async getDb(tagSelect, content, page, sort) {
    const url = `${baseURL}/?tagSelect=${tagSelect}&content=${content}&page=${page}&sortValue=${sort}`;
    const data = await axios.get(url);
    return data;
  }

  // 글 작성 아이디 없이 할경우 새글 작성, 있으면 글 수정 페이지 ----- GET
  async getWrite(id) {
    const url = `${baseURL}/write?id=${id}`;
    const data = await axios.get(url);
    return data;
  }

  //글 작성하기  ----- POST
  async postWrite(postId, title, introduce, content, access, seriesId, tags, thumbnailFileName) {
    const url = `${baseURL}/write`;
    const body = {
      postId,
      title,
      introduce,
      content,
      access,
      seriesId,
      tags,
      thumbnailFileName,
    };
    const id = await axios.post(url, body);
    return id;
  }

  //임시 저장하기
  async writeTemporary(postId, title, content) {
    const url = `${baseURL}/writeTemporary`;
    const body = {
      postId,
      title,
      content,
    };
    const resultId = await axios.post(url, body);
    return resultId;
  }

  //개인 페이지 메인 보기

  async memberMain(nickname, page) {
    const url = `${baseURL}/${nickname}/main?page=${page}`;
    const data = await axios.get(url);
    return data;
  }

  // 시리즈 별 보기

  async getSeries(nickname) {
    const url = `${baseURL}/${nickname}/series`;
    const data = await axios.get(url);
    return data;
  }

  //시리즈에 속한 글들 보기
  async getSeriesDetail(nickname, seriesName) {
    const url = `${baseURL}/series/${seriesName}`;
    const data = await axios.get(url);
    return data;
  }

  //게시글 상세보기
  async getPostDetail(nickname, postId) {
    const url = `${baseURL}/${nickname}/read/${postId}`;
    const data = await axios.get(url);
    return data;
  }

  //글 삭제하기
  async postDelete(id) {
    const url = `${baseURL}/delete`;
    const body = {
      id,
    };
    return await axios.post(url, body);
  }

  // 임시 저장 글 목록 (요약정보들이 있습니다)
  async getTemp() {
    const url = `${baseURL}/temp`;
    const data = await axios.get(url);
    return data;
  }

  //좋아요 누른 게시글
  async getLikedPost() {
    const url = `${baseURL}/archive/like`;
    const data = await axios.get(url);
    return data;
  }

  //최근 읽은 게시글
  async getRecentPost() {
    const url = `${baseURL}/archive/recent`;
    const data = await axios.get(url);
    return data;
  }
}

export default DbService;
