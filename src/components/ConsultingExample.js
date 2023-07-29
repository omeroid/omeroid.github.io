import React from 'react'
import PropTypes from 'prop-types'
import Content4 from '../components/Content4'

const ConsultingExample = (props) => (
  <section key={props.key} className="consulting-example">
    <div className="title-area">{props.title}</div>
    <div className="content-area">
      <Content4 title="業界" content={props.industry} accent="accent1" />
      <Content4 title="企業規模" content={props.scale} accent="accent1" />
      <Content4 title="プロジェクト概要" content={props.overview} accent="accent1" />
      <Content4 title="課題・背景" content={props.background} accent="accent1" />
      <Content4 title="実施した内容" content={props.content} accent="accent1" />
    </div>
  </section >
)

ConsultingExample.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  industry: PropTypes.string,
  scale: PropTypes.string,
  overview: PropTypes.string,
  background: PropTypes.string,
  content: PropTypes.string,
}

export default ConsultingExample
