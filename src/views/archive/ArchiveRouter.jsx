import { React, useCallback, useEffect, useState } from "react";
import styles from "./_archive.module.scss";
// import Card from "../../components/card/card";
// import Nav from "./nav/nav";
// import NavLogin from "./nav/nav_login";
// import Error from "../etc/error";

// views
import ArchiveHeader from "./ArchiveHeader";
import LikeArchive from "./LikeArchive";
import RecentArchive from "./RecentArchive";

const ArchiveRouter = ( { dbService } ) => {

  // useEffect(() => {
  //   dbService.
  // }, [])
  

  const [tapState, setTapState] = useState("like")
  const [searchValue, setSearchValue] = useState('')

  return(
    <div className={styles.archiveBox}>

      <ArchiveHeader 
        setTapState={setTapState}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

    <div className={styles.archiveContent}>

      { tapState === "like" && 
        <LikeArchive 
          dbService={dbService}
        />
      }

      { tapState === "recent" && 
        <RecentArchive 
          dbService={dbService}
        />
      }
      
    </div>
    </div>
  )
}

export default ArchiveRouter;