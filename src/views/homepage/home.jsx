import { React, useCallback, useEffect, useRef, useState } from "react";
import Card from "../../components/card/card";
import styles from "./_home.module.scss";
import Nav from "./nav/nav";
import NavLogin from "./nav/nav_login";
import Error from "../etc/error";
import fakeDb from "../../service/fakeDb";
import InfiniteScroll from "../../service/InfiniteScroll";

const Home = ({ dbService, userId, onLoginModal }) => {
  const [cards, setCards] = useState();
  const lastListRef = useRef(null);
  const [pageCount, setPageCount] = useState(1);
  const [nowLoading, setNowLoading] = useState(false);

  const handleTab = useCallback(
    async (tag = undefined, content = undefined, page = undefined, sort = "createdDate") => {
      try {
        const db = await dbService.getDb(tag, content, page, sort);
        console.log(db);
        if (db.content.length !== 0) {
          setCards(db.content);
        } else {
          setCards();
        }
      } catch (err) {
        console.log(err);
      }
    },
    [dbService]
  );

  const changeCards = async (tag = undefined, content = undefined, page = undefined, sort = "createdDate") => {
    try {
      const db = await dbService.getDb(tag, content, pageCount, sort);
      console.log(db);
      if (db.last) return; // 마지막 페이지면 실행 X
      if (db.content.length !== 0) {
        const newCards = [...cards, ...db.content];
        setCards(newCards);
        setPageCount(pageCount + 1);
      } else {
        setCards(fakeDb);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleTab();
  }, [handleTab]);

  const observerRef = useRef();
  const opt = {
    // root: document.querySelector("#scrollArea"), // 겹칠 요소. 설정하지 않으면 브라우저 뷰포트가 기본값.
    rootMargin: "0px",
    threshold: 0,
  };
  const checkIntersect = (entries, observer) => {
    // 객체목록과 관찰자를 파라메터로 받는다.
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // isIntersecting 은 t/f로 반환됨. 교차되면 true
        changeCards(); // 함수
      }
    });
  };
  useEffect(() => {
    if (nowLoading) return;
    if (lastListRef.current) {
      // 로딩이 false면 실행함
      observerRef.current = new IntersectionObserver(checkIntersect, opt); // observe 할 요소를 current로 지정,
      lastListRef.current && observerRef.current.observe(lastListRef.current);
    }
    return () => {
      observerRef.current && observerRef.current.disconnect(); // observerRef.current.unobserve()와 동일
    };
  }, [cards]); // datas가 변경되면 observer를 새로 지정

  return (
    <>
      {!onLoginModal && (
        <div>
          <div className={styles.container}>
            {userId ? <NavLogin handleTab={handleTab} /> : <Nav handleTab={handleTab} />}
            <section className={styles.grid_container}>
              {cards ? (
                cards.map((content, idx, array) => (
                  <Card key={idx} content={content} ref={idx === array.length - 1 ? lastListRef : null} />
                ))
              ) : (
                <Error title={" No data found"} handleTab={handleTab} />
              )}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

//cards.content.map((content, index) => <Card key={index} content={content} />
