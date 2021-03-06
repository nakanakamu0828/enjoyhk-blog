import React from "react"
import { Link } from "gatsby"
import Disqus from 'gatsby-plugin-disqus'
import Category from '@components/atoms/category'
import Tag from '@components/atoms/tag'
import PostStatusTag from '@components/atoms/post-status-tag'
import Date from '@components/atoms/date'
import HeroImage from '@components/atoms/hero-image';
import PostContent from '@components/molecules/post-content';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share';

const ArticleSection = ({ location, post, previous, next}) => {
  const articleUrl = location.href
  return (
    <div>
      <div className="w-full flex justify-center mb-4">
        <Category text={post.frontmatter.categoryObject.name} link={`/category/${post.frontmatter.categoryObject.slug}/posts`} />
      </div>
      <div className="p-2">
        <PostStatusTag status={post.frontmatter.statusObject} />
        <h1 className="text-2xl lg:text-3xl font-bold my-1">{post.frontmatter.title}</h1>
        <p className="text-sm text-gray-600 my-1">{post.frontmatter.description}</p>
        <div className="my-2">
          {post.frontmatter.tagObjects.map(tag => <Tag key={tag.slug} tag={tag} />)}
        </div>
        <Date date={post.frontmatter.created_at} />
      </div>
      {post.frontmatter.hero && (<HeroImage node={post.frontmatter.hero} props={{ alt: post.frontmatter.title }} />)}
      <PostContent post={post} />
      <div className="flex justify-center lg:justify-start px-3 mb-4">
        <FacebookShareButton url={articleUrl} className="mr-2">
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton url={articleUrl} className="mr-2">
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton url={articleUrl} className="mr-2">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <LineShareButton url={articleUrl} className="mr-2">
          <LineIcon size={40} round />
        </LineShareButton>
        <PocketShareButton url={articleUrl} className="mr-2">
          <PocketIcon size={40} round />
        </PocketShareButton>
      </div>
      <ul className="p-4 flex justify-between items-center">
        <li className="w-1/2 text-left">
          {previous && (
            <Link to={`post${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="w-1/2 text-right">
          {next && (
            <Link to={`post${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      {process.env.DISQUS_SHORTNAME && (
        <div className="my-5">
          <Disqus 
            identifier={post.id}
            title={post.frontmatter.title}
            url={articleUrl}
          />
        </div>
      )}
    </div>
  )
}

export default ArticleSection
