import React from "react";
import styles from "./_setting.module.scss";

const Setting = (props) => (
  <div className={styles.setting}>
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.profile_field}>
          <div className={styles.img}></div>
          <div className={styles.upload}>이미지 업로드</div>
          <div className={styles.remove}>이미지 제거</div>
        </div>
        <div className={styles.nickname_field}>
          <input className={styles.nickname} type="text" value={"닉네임"} disabled />
          <textarea className={styles.introduce} type="text" value={"This is initial Value"} disabled />
        </div>
      </div>
      <div className={styles.middle}>
        <div>
          <label htmlFor="blog">블로그 제목</label>
          <input id="blog" type="text" value={"initial Blog Value"} disabled />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" value={"initial Blog Value"} disabled />
        </div>
        <div>
          <label htmlFor="social">소셜 정보</label>
          <input id="social" type="email" value={"test@test.com"} disabled />
        </div>
        <div className={styles.withdraw}>
          <label htmlFor="withdraw">회원 탈퇴</label>
          <div>
            <input id="withdraw" className={styles.withdraw} type="button" value={"회원 탈퇴"} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>수정하기 / 저장하기</div>
      </div>
    </div>
  </div>
);

export default Setting;
