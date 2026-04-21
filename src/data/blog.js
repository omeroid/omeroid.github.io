import React from 'react'

import travel2020Image from '../assets/images/blog/travel2020.jpg'
import techBlogImage from '../assets/images/news/omeroid-techblog.png'

const blogData = () => [
  {
    image: techBlogImage,
    imageAlt: 'TECH BLOG',
    to: 'https://zenn.dev/p/omeroid',
    title: ['TECH BLOG'],
    content: ['omeroidの技術的な取り組み', <br />],
  },
  {
    image: travel2020Image,
    imageAlt: 'COMPANY BLOG',
    to: 'https://note.com/omeroid',
    title: ['COMPANY BLOG'],
    content: ['omeroidのイベントや文化', <br />],
  },
]

export default blogData
