import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/modern-styles.css';

const News = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const newsData = [
    {
      id: 'covid-update',
      title: 'Important COVID-19 Visiting Update - Cardiff & Barry Homes',
      excerpt: 'Due to the increase in Coronavirus confirmed cases throughout Wales and Cardiff area, we are suspending all pod visits in our Cardiff & Barry Nursing Homes until further review.',
      content: `
        <h3>Visiting Suspension Details</h3>
        <p>We understand this news may feel frustrating especially with it being so close to Christmas but we feel this is currently the right decision to keep our residents and staff safe. This means any booked visits you have will be cancelled with effect from <strong>Sunday 20th December 2020</strong>.</p>

        <h3>Alternative Communication Methods</h3>
        <p>We are happy to continue to support your loved ones to remain in contact with:</p>
        <ul>
          <li><strong>Skype calls</strong> - Video calls can be arranged with staff assistance</li>
          <li><strong>Phone calls</strong> - Direct phone contact with residents</li>
          <li><strong>Regular updates</strong> - We will continue to update you by phone, email and on our Facebook page</li>
        </ul>

        <h3>Our Commitment to Safety</h3>
        <p>We have worked hard with your fantastic support to keep Covid 19 out of our homes and we intend to keep it that way. By suspending visits we will reduce the risk of infection, we do hope you understand our need to do this and that you will support this difficult decision.</p>

        <div class="important-box">
          <h4><i class="fas fa-shield-alt"></i> Important Assurance</h4>
          <p>We would like to assure you that we have <strong>no suspected cases within the homes</strong> and this measure has been taken for prevention and to protect the vulnerable adults in our care.</p>
        </div>

        <h3>Emergency Situations & Continued Care</h3>
        <p>If there is an emergency a decision on entry will be made in exceptional circumstances and you are welcome to ring the home at any times to be provided with updates or to speak to residents on the phone.</p>

        <p>Additional measures have also been put in to place within the homes. Our staff will do all they can to ensure that life remains as comfortable and sociable as possible. We will continue with Christmas celebrations in a safe manner. We will still ensure that vital medical appointments will be kept where possible.</p>

        <div class="contact-box">
          <h4>Contact Information</h4>
          <p><strong>Cardiff Home:</strong> 029 2048 5000<br>
          <strong>Barry Home:</strong> 01446 735 200<br>
          <strong>Email:</strong> info@bellavistanursinghome.com</p>
        </div>

        <p><em>Thank you for your continued support and understanding during this time, please don't hesitate to contact us with any questions or concerns.</em></p>
      `,
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'health',
      date: 'Dec 21, 2020',
      location: 'Cardiff & Barry',
      author: 'Bellavista Management',
      badge: '🚨 Important Update',
      views: 5247,
      likes: 89,
      shares: 156,
      comments: 23,
      readTime: '5 min read'
    },
    {
      id: 'christmas-event',
      title: 'Christmas Celebration Week',
      excerpt: 'Join us for a magical week of festive activities, carol singing, and special holiday meals across all our homes.',
      content: 'Festive activities and celebrations across all Bellavista homes.',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'events',
      date: 'Dec 20-27, 2024',
      location: 'All Locations',
      author: 'Events Team',
      badge: '',
      views: 1247,
      likes: 45,
      shares: 23,
      comments: 12,
      readTime: '2 min read'
    },
    {
      id: 'excellence-award',
      title: 'Excellence in Care Award 2024',
      excerpt: 'Barry Seaside home receives prestigious recognition for outstanding dementia care and family support services.',
      content: 'Recognition for outstanding care services at Barry home.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'awards',
      date: 'Nov 15, 2024',
      location: 'Barry',
      author: 'Quality Team',
      badge: '',
      views: 892,
      likes: 67,
      shares: 34,
      comments: 8,
      readTime: '3 min read'
    },
    {
      id: 'health-tech',
      title: 'New Health Monitoring Technology',
      excerpt: 'Advanced wearable devices now monitor resident health 24/7, providing real-time alerts and improved care coordination.',
      content: 'Advanced health monitoring technology launched across all homes.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'innovation',
      date: 'Oct 28, 2024',
      location: 'All Locations',
      author: 'Technology Team',
      badge: '',
      views: 1567,
      likes: 89,
      shares: 45,
      comments: 15,
      readTime: '4 min read'
    },
    {
      id: 'community-garden',
      title: 'Therapeutic Garden Project Launch',
      excerpt: 'Residents at Cardiff Bay home celebrate the opening of new sensory gardens designed for therapeutic activities and relaxation.',
      content: 'New therapeutic gardens opened at Cardiff Bay home.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'community',
      date: 'Sep 12, 2024',
      location: 'Cardiff',
      author: 'Wellness Team',
      badge: '',
      views: 743,
      likes: 52,
      shares: 28,
      comments: 9,
      readTime: '3 min read'
    }
  ];

  const filteredNews = activeFilter === 'all'
    ? newsData
    : newsData.filter(news => news.category === activeFilter);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.querySelector('.news-card')?.offsetWidth || 320;
      const gap = 25;
      const totalWidth = cardWidth + gap;
      const newIndex = Math.round(scrollLeft / totalWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, filteredNews.length - 1)));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [filteredNews.length]);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = scrollContainer.querySelector('.news-card')?.offsetWidth || 320;
      const gap = 25;
      const scrollLeft = index * (cardWidth + gap);
      scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const featuredNews = newsData[0];
  const gridNews = newsData.slice(1);

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container">
          <h1><i className="fas fa-newspaper"></i> Bellavista News</h1>
          <p>Stay informed with the latest updates, stories, and developments from our care homes</p>
        </div>
      </section>

      <section className="news-main">
        <div className="container">
          <div className="news-layout">
            <div className="main-content">
              {/* Featured News Article */}
              <article className="main-story">
                <div className="main-story-image">
                  <img src={featuredNews.image} alt={featuredNews.title} />
                  {featuredNews.badge && <div className="story-badge">{featuredNews.badge}</div>}
                </div>
                <div className="main-story-content">
                  <div className="story-meta">
                    <span><i className="fas fa-calendar"></i> {featuredNews.date}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {featuredNews.location}</span>
                    <span><i className="fas fa-user"></i> {featuredNews.author}</span>
                  </div>
                  <h1 className="story-title">{featuredNews.title}</h1>
                  <p className="story-excerpt">{featuredNews.excerpt}</p>

                  <div className="story-content" dangerouslySetInnerHTML={{ __html: featuredNews.content }}></div>

                  <div className="engagement-bar">
                    <div className="engagement-stats">
                      <span><i className="fas fa-eye"></i> {featuredNews.views.toLocaleString()} views</span>
                      <span><i className="fas fa-clock"></i> {featuredNews.readTime}</span>
                    </div>
                    <div className="engagement-actions">
                      <button className="engagement-btn">
                        <i className="fas fa-heart"></i> <span className="like-count">{featuredNews.likes}</span>
                      </button>
                      <button className="engagement-btn">
                        <i className="fas fa-share"></i> <span className="share-count">{featuredNews.shares}</span>
                      </button>
                      <button className="engagement-btn">
                        <i className="fas fa-comment"></i> {featuredNews.comments}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="sidebar">
              <div className="sidebar-section">
                <h3>Latest Stories</h3>
                {gridNews.slice(0, 3).map((news, index) => (
                  <Link key={index} to={`/news/${news.id}`} className="related-story" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="related-image">
                      <img src={news.image} alt={news.title} />
                    </div>
                    <div className="related-content">
                      <h4>{news.title}</h4>
                      <p>{news.excerpt.substring(0, 60)}...</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sidebar-section">
                <h3>Categories</h3>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '10px'}}><a href="#health" style={{color: '#666'}}>Health Updates ({newsData.filter(n => n.category === 'health').length})</a></li>
                  <li style={{marginBottom: '10px'}}><a href="#events" style={{color: '#666'}}>Events ({newsData.filter(n => n.category === 'events').length})</a></li>
                  <li style={{marginBottom: '10px'}}><a href="#awards" style={{color: '#666'}}>Awards ({newsData.filter(n => n.category === 'awards').length})</a></li>
                  <li style={{marginBottom: '10px'}}><a href="#innovation" style={{color: '#666'}}>Innovation ({newsData.filter(n => n.category === 'innovation').length})</a></li>
                  <li style={{marginBottom: '10px'}}><a href="#community" style={{color: '#666'}}>Community ({newsData.filter(n => n.category === 'community').length})</a></li>
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Newsletter</h3>
                <p>Get the latest news delivered to your inbox</p>
                <div style={{marginTop: '15px'}}>
                  <input type="email" placeholder="Your email" style={{width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px'}} />
                  <button style={{width: '100%', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrollable News Section */}
      <section className="news" id="news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest News & Updates</h2>
            <p className="section-subtitle">Stay connected with our community through the latest developments, events & care innovations.</p>
          </div>

          <div className="news-filters">
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All News</button>
            <button className={`filter-btn ${activeFilter === 'health' ? 'active' : ''}`} onClick={() => setActiveFilter('health')}>Health Updates</button>
            <button className={`filter-btn ${activeFilter === 'awards' ? 'active' : ''}`} onClick={() => setActiveFilter('awards')}>Awards</button>
            <button className={`filter-btn ${activeFilter === 'events' ? 'active' : ''}`} onClick={() => setActiveFilter('events')}>Events</button>
            <button className={`filter-btn ${activeFilter === 'innovation' ? 'active' : ''}`} onClick={() => setActiveFilter('innovation')}>Innovation</button>
            <button className={`filter-btn ${activeFilter === 'community' ? 'active' : ''}`} onClick={() => setActiveFilter('community')}>Community</button>
          </div>

          <div className="news-horizontal-scroll">
            <div className="news-scroll-container" ref={scrollRef}>
              {filteredNews.map((news, index) => (
                <div key={index} className="news-card modern">
                  <div className="news-image">
                    <img alt={news.title} src={news.image} />
                    <div className="news-reading-time">{news.readTime}</div>
                    <div className="news-date">{news.date}</div>
                  </div>
                  <div className="news-content">
                    <div className={`news-category ${news.category}`}>{news.category.charAt(0).toUpperCase() + news.category.slice(1)}</div>
                    <h4>{news.title}</h4>
                    <p>{news.excerpt}</p>
                    <div className="news-engagement">
                      <span><i className="fas fa-eye"></i> {news.views}</span>
                      <span><i className="fas fa-heart"></i> {news.likes}</span>
                      <span><i className="fas fa-share"></i> {news.shares}</span>
                    </div>
                    <Link to={`/news/${news.id}`} className="news-link modern">Read More <i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="scroll-indicators">
              {filteredNews.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="news-cta">
            <Link to="/news" className="btn btn-outline-large">
              <i className="fas fa-newspaper"></i> View All News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
