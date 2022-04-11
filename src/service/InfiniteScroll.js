import { useEffect, useRef } from "react";


const InfiniteScroll = ( lastListRef, datas, Func, loading, isLoading ) => {

  const observerRef = useRef();

  const opt = {
    // root: document.querySelector("#scrollArea"), // 겹칠 요소. 설정하지 않으면 브라우저 뷰포트가 기본값.
    rootMargin: "0px",
    threshold: 1.0,
  }
  const checkIntersect = (entries, observer) => { // 객체목록과 관찰자를 파라메터로 받는다.
    entries.forEach( async (entry) => {
      if (entry.isIntersecting) { // isIntersecting 은 t/f로 반환됨. 교차되면 true
        await Func() // 데이터 불러오기
      }
    });
  }

  useEffect(() => {
    if (lastListRef.current) { // 로딩이 false면 실행함
      // isLoading true
      observerRef.current = new IntersectionObserver(checkIntersect, opt); // observe 할 요소를 current로 지정,
      lastListRef.current && observerRef.current.observe(lastListRef.current);
    // isLoading false
    }
    return () => observerRef.current && observerRef.current.disconnect(); // observerRef.current.unobserve()와 동일
  }, [datas]); // datas가 변경되면 observer를 새로 지정

}

export default InfiniteScroll;