import React from 'react'
import { LinkedinIcon, TwitterIcon, YouTubeIcon } from './icons';
import * as styles from './SocialMedia.module.scss';

const networks = {
  twitter: { url: 'https://twitter.com/CalumCodes'},
  linkedin: { url: 'https://www.linkedin.com/in/calum-bell/'},
  youtube: { url: 'https://www.youtube.com'}
}

const SocialMedia = () => {
  return (
    <ul className={styles.socialMedia}>
      { networks.hasOwnProperty('twitter') &&
        <li> <TwitterIcon url={networks.twitter.url} /> </li>
      }
      { networks.hasOwnProperty('linkedin') &&
        <li> <LinkedinIcon url={networks.linkedin.url} /> </li>
      }
      { networks.hasOwnProperty('youtube') &&
        <li> <YouTubeIcon url={networks.youtube.url} /> </li>
      }
    </ul> 
  )
}

export default SocialMedia;
