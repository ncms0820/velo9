import axios from "axios";

const baseURL = "http://localhost:8080";
const opt = { withCredentials: true, headers: { "Content-Type": `application/json` } };

class DbService {
  // db 가져오기
  // 최신순 : createdDate(default 입니다)
  // 오래된순: old
  // 조회수순: viewCount
  // 좋아요순: loveCount
  async getDb(tagSelect = "false", content = "", page = "1", sort = "createdDate") {
    const url = `${baseURL}/?tagSelect=${tagSelect}&content=${content}&page=${page}&sortValue=${sort}`;
    const data = await axios.get(url);
    return data.data;
  }

  // 글 작성 아이디 없이 할경우 새글 작성, 있으면 글 수정 페이지 ----- GET 번호 받기!
  async getWrite(id) {
    const url = `${baseURL}/write?id=${id}`;
    const data = await axios.get(url, opt);
    return data.data;
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
    const id = await axios.post(url, body, opt);
    console.log(url);
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
    const resultId = await axios.post(url, body, opt);
    return resultId;
  }

  //개인 페이지 메인 보기

  async memberMain(nickname, page) {
    const url = `${baseURL}/${nickname}/main?page=${page}`;
    const data = await axios.get(url, opt);
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
    // url 수정, `${baseURL}/series/${seriesName}` 에서 변경
    const url = `${baseURL}/${nickname}/series/${seriesName}`;
    const data = await axios.get(url);
    return data;
  }

  //게시글 상세보기
  async getPostDetail(nickname, postId) {
    const url = `${baseURL}/${nickname}/read/${postId}`;
    const data = await axios.get(url);
    return data.data;
  }

  //글 삭제하기
  async postDelete(id) {
    const url = `${baseURL}/delete?id=${id}`;
    const body = {
      id,
    };
    return await axios.post(url, body);
  }

  // 임시 저장 글 목록 (요약정보들이 있습니다)
  async getTemp() {
    const url = `${baseURL}/temp`;
    const data = await axios.get(url, opt);
    return data;
  }

  //좋아요 누른 게시글
  async getLikedPost() {
    const url = `${baseURL}/archive/like`;
    const data = await axios.get(url, opt);
    return data;
  }

  //최근 읽은 게시글
  async getRecentPost() {
    const url = `${baseURL}/archive/recent`;
    const data = await axios.get(url, opt);
    return data;
  }

  //섬네일
  async postThumbnamil(formData) {
    const url = `${baseURL}/uploadPostThumbnail`;
    const data = await axios.post(url, formData);
    const thumbnail = `${baseURL}/displayPostThumbnail?fileName=${encodeURIComponent(data.data.fileName)}`;
    console.log(data.data.fileName);
    const fileName = data.data.fileName;
    return {
      thumbnail,
      fileName,
    };
  }

  //섬네일 encoder
  async encoderThumbnail(fileName) {
    const thumbnail = `${baseURL}/displayPostThumbnail?fileName=${encodeURIComponent(fileName)}`;
    return thumbnail;
  }
}

export default DbService;
