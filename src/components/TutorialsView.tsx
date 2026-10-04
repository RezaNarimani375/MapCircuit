import React, { useState } from 'react'
import { ARTICLES, type ArticleItem } from '../data/educationalData'

export const TutorialsView: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null)
  const [filterTag, setFilterTag] = useState<string>('all')

  const tags = ['all', 'ریمپ', 'تعمیر سخت‌افزار', 'ایموبلایزر']

  const filteredArticles = ARTICLES.filter((a) => {
    if (filterTag === 'all') return true
    if (filterTag === 'ریمپ') return a.category === 'remap'
    if (filterTag === 'تعمیر سخت‌افزار') return a.category === 'hardware'
    if (filterTag === 'ایموبلایزر') return a.category === 'immo'
    return true
  })

  return (
    <div className="tab-view-container tutorials-view">
      {/* View Header */}
      <div className="tab-view-header">
        <h2 className="tab-view-title">مطالب آموزشی و مقالات تخصصی</h2>
        <p className="tab-view-subtitle">
          آموزش‌های تخصصی ریمپ، الکترونیک خودرو، عیب‌یابی و پروگرمر
        </p>
      </div>

      {/* Tags Filter */}
      <div className="category-chips-nav">
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFilterTag(t)}
            className={`category-chip ${filterTag === t ? 'active' : ''}`}
          >
            {t === 'all' ? 'همه مقالات' : t}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="articles-list-grid">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="tutorial-article-card"
            onClick={() => setSelectedArticle(article)}
          >
            <div className="article-meta-header">
              <span className="article-author">{article.author}</span>
              <span className="article-read-time">{article.readTime}</span>
            </div>

            <h3 className="article-title">{article.title}</h3>
            <p className="article-summary">{article.summary}</p>

            <div className="article-tags-row">
              {article.tags.map((tg) => (
                <span key={tg} className="article-tag-chip">
                  #{tg}
                </span>
              ))}
            </div>

            <div className="article-read-action">
              <span>مطالعه کامل مقاله</span>
              <span className="arrow-left">←</span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="article-modal-overlay" role="dialog" aria-modal="true">
          <div className="article-modal-container">
            <div className="article-modal-top">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="close-modal-btn"
                aria-label="بستن"
              >
                ✕
              </button>
              <span className="modal-category-tag">{selectedArticle.readTime}</span>
            </div>

            <h2 className="modal-article-title">{selectedArticle.title}</h2>
            <div className="modal-meta-info">
              <span>نویسنده: {selectedArticle.author}</span>
              <span>تاریخ انتشار: {selectedArticle.date}</span>
            </div>

            <div className="modal-article-body">
              {selectedArticle.content.map((para, idx) => (
                <p key={idx} className="article-paragraph">
                  {para}
                </p>
              ))}

              <div className="article-tips-container">
                <h4>نکات کلیدی و تجربی کارگاهی:</h4>
                <ul>
                  {selectedArticle.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="article-finish-btn"
            >
              متوجه شدم • بازگشت به لیست
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
