import axios from "axios";

const baseURL = "http://localhost:8080";
class AuthService {
  //////////////           정보 가져오기          /////////////////////

  // 로그인 정보 가져오기
  async getUserInfo() {
    const url = `${baseURL}/getHeaderInfo`;
<<<<<<< HEAD
    const data = await axios.get(url).catch(() => {
      return console.log("로그인 정보 가져오기 실패");
    });
    return data;
=======
    return await axios
      .get(url)
      .catch(() => {
        return console.log("로그인 정보 가져오기 실패");
      });
>>>>>>> 351cedc61a946c623c9eebc89a0573bb59efc04d
  }

  //세팅 정보 가져오기
  async getSetting() {
    const url = `${baseURL}/setting`;
    return await axios
      .get(url)
      .then((data) => data)
      .catch(() => {
        return console.log("세팅 정보 가져오기 실패");
      });
  }
  // 세팅 설정하기
  async postSetting(nickname, introduce, blogTitle, socialEmail, socialGithub) {
    const url = `${baseURL}/setting`;
    const body = {
      nickname,
      introduce,
      blogTitle,
      socialEmail,
      socialGithub,
    };
    return await axios.post(url, body).then(() => console.log("세팅 포스트 완료"));
  }

  // 개인설정에서 쓰는 changePassword 입니다
  async changePasswordInSetting(oldPassword, newPassword) {
    const url = `${baseURL}/changePassword`;
    const body = {
      oldPassword,
      newPassword,
    };
    return await axios.post(url, body);
  }

  ///////////////////           로그인           //////////////////////

  // 일반 로그인
  async login(username, password) {
    const url = `${baseURL}/login`;
    const body = {
      username,
      password,
    };
<<<<<<< HEAD
    return await axios.post(url, body);
=======
    return await axios.post(url, body).then(()=>{console.log("로그인 성공")})
>>>>>>> 351cedc61a946c623c9eebc89a0573bb59efc04d
  }

  //////////////////////         회원가입          ///////////////////////////////////////

  // 소셜 회원가입은 실행후 /login으로 자동 이동 됩니다.
  async socialSignup(username, password, nickname) {
    const url = `${baseURL}/socialSignup`;
    const opt = {withCredentials: true, headers: { "Content-Type": `application/json` } }
    const body = {
      username,
      password,
      nickname,
    };
    return await axios.post(url, body, opt);
  }
  //일반 회원가입
  async signup(username, password, nickname, email) {
    const url = `${baseURL}/signup`;
    const body = {
      username,
      password,
      nickname,
      email,
    };
<<<<<<< HEAD
    const opt = {
      withCredentials: true,
      headers: { "Content-Type": `application/json` },
    };
    console.log(body);
    return await axios
      .post(url, body, opt)
      .then(() => console.log("성공: "))
      .catch((e) => console.error(e));
=======

    console.log(body)
    return await axios.post(url, body)
    .then( () => console.log("성공: ") )
    .catch((e) => console.error(e))
>>>>>>> 351cedc61a946c623c9eebc89a0573bb59efc04d
  }

  // username 중복 검중하기 (id)
  async validateUsername(username) {
    const url = `${baseURL}/validateUsername?username=${username}`;
<<<<<<< HEAD
    const result = await axios
      .get(url, {
        validateStatus: function (status) {
          // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
          return status < 500;
        },
      })
      .then(() => true);
    return result;
=======
    const result = await axios.get(url)
      .then(()=>true)
      .catch(()=>false);
    return result
>>>>>>> b1bfe4ce619009d7b4f862ad8e694c4f013b7261
  }
  // 닉네임
  async validateNickname(nickname) {
    const url = `${baseURL}/validateNickname?nickname=${nickname}`;
<<<<<<< HEAD
    const result = await axios
      .get(url)
      .then(() => true)
      .catch(() => {
        console.warn = console.error = () => {};
        return false;
      });
    return result;
=======
    const result = await axios.get(url)
      .then(() => true)
      .catch(() => false);
    return result
>>>>>>> b1bfe4ce619009d7b4f862ad8e694c4f013b7261
  }
  //////////////////////        설정          /////////////////////////////

  // 로그아웃
  async logout() {
    const url = `${baseURL}/memberLogout`;
    return await axios.get(url);
  }
  //회원 탈퇴
  async withdraw(oldPassword) {
    const url = `${baseURL}/withdraw`;
    const body = {
      oldPassword,
    };
    return await axios.post(url, body);
  }
  // 인증 메일 보내기
  async sendMail(email) {
    const url = `${baseURL}/sendMail`;
    const body = {
      email,
    };
<<<<<<< HEAD
    return await axios.post(url, body).then(() => console.log("인증메일 발송 성공"));
=======
    const result =  await axios.post(url, body)
      .then(() => true)
      .catch(() => false);
      return result
>>>>>>> 351cedc61a946c623c9eebc89a0573bb59efc04d
  }

  ///////////////          비밀번호 찾기            /////////////////////

  // 이메일을 통한 비밀번호 찾기
  async findId(email) {
    const url = `${baseURL}/findId`;
    const body = {
      email,
    };
    const result = await axios.post(url, body)
      .then((data) => data)
      .catch(() => false);;
    console.log(result)
    return result
  }
  
  // 이메일과 유저네임으로 비밀번호 찾기 ------- MEMBERID 받는곳
  async findPw(username, email) {
    const url = `${baseURL}/findPw`;
    const body = {
      username,
      email,
    };
    return await axios.post(url, body).then((memberId) => memberId.data);
  }

  // 이메일 인증 boolean으로 값 일치가 전송 옵니다. -------- certifyNumber 확인하는 곳
  async certify(inputNumber) {
    const url = `${baseURL}/certifyNumber`;
    const body = {
      inputNumber,
    };
    return await axios
      .post(url, body)
      .then((result) => result)
      .catch(() => console.log("인증번호 오류"));
  }

  // 위 비밀번호 찾기 후 memberID를 이용하여 패스워드 변경 인증이메일 확인 꼭 하고 실행 할 것
  // 즉) memberID + 인증번호 확인 후 실행 하는 메소드 입니다.
  async changePassword(memberId, password) {
    const url = `${baseURL}/changePasswordAfterFindPW`;
    const body = {
      memberId,
      password,
    };
    return await axios.post(url, body)
      .then(() => true)
      .catch(() => false);
  }
}

export default AuthService;
