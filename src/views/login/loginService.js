const check_num = /[0-9]/; // 숫자 
const check_eng = /[a-zA-Z]/; // 문자 
const check_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자 
const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
const check_email =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // 이메일 형식 체크 

export class LoginService {
  
  useEngAndNum (str) {
    return check_num.test(str) && check_eng.test(str) && !check_kor.test(str) &&!check_spc.test(str)
  }

  useEmail (str) {
    return check_email.test(str)
  }

}