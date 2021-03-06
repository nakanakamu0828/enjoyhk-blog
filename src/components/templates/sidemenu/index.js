import React from "react"
import AdSense from 'react-adsense'
import styles from "./sidemenu.module.css"
import ProfileCard from '@components/molecules/profile-card'
import ProfileSnsCard from '@components/molecules/profile-sns-card'
import ProfileLinksCard from '@components/molecules/profile-links-card'
import SiteLinksCard from '@components/molecules/site-links-card'
import TagsCard from '@components/molecules/tags-card'

const Sidemenu = ({ tags }) => (
  <div>
    <ProfileCard />
    <div className={styles.hr} />
    {process.env.GOOGLE_ADSENSE_ID ? <AdSense.Google
      client={process.env.GOOGLE_ADSENSE_ID}
      slot=''
    /> : ''}
    <div className={styles.hr} />
    <ProfileSnsCard />
    <div className={styles.hr} />
    <ProfileLinksCard />
    <div className={styles.hr} />
    <SiteLinksCard />
    <div className={styles.hr} />
    <TagsCard tags={tags} />
    <div className={styles.hr} />
    <div className="flex">
      <a
        href="https://overseas.blogmura.com/ranking.html?p_cid=10999375"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="none-external-link mr-2"
      >
        <img src="https://b.blogmura.com/overseas/88_31.gif" width="88" height="31" border="0" alt="にほんブログ村 海外生活ブログへ" />
      </a>
      <a
        href="https://overseas.blogmura.com/hongkong/ranking.html?p_cid=10999375"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="none-external-link"
      >
        <img src="https://b.blogmura.com/overseas/hongkong/88_31.gif" width="88" height="31" border="0" alt="にほんブログ村 海外生活ブログ 香港情報へ" />
      </a>
    </div>
    <div className="mt-5">
      <a
        href="https://blogmura.com/profiles/10999375?p_cid=10999375"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="none-external-link"
      >
        <img src="https://blogparts.blogmura.com/parts_image/user/pv10999375.gif" alt="PVアクセスランキング にほんブログ村" />
      </a>
    </div>
  </div>
)

export default Sidemenu
