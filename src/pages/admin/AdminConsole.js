import React, { useState, useEffect } from 'react';
import '../../styles/AdminConsole.css';

const AdminConsole = () => {
  const [activeView, setActiveView] = useState('add-home');
  const [globalSearch, setGlobalSearch] = useState('');
  const [state, setState] = useState({ homes: [], news: [], faqs: [], users: [], tours: [] });
  const [tourSearch, setTourSearch] = useState('');
  const [tourFilter, setTourFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  // Fetch tour bookings from backend
  const fetchTours = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const response = await fetch('https://bellavista-backend-production.up.railway.app/api/tours/bookings/');
      const data = await response.json();
      setState(prev => ({ ...prev, tours: data }));
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  // Update tour status
  const updateTourStatus = async (bookingId, status) => {
    try {
      const response = await fetch(`https://bellavista-backend-production.up.railway.app/api/tours/bookings/${bookingId}/status/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        fetchTours(true); // Silent refresh after status update
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  useEffect(() => {
    if (activeView === 'schedule-tours') {
      fetchTours();
      
      // Auto-refresh every 10 seconds when on schedule-tours tab
      const interval = setInterval(() => {
        fetchTours(true); // Silent refresh
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [activeView]);

  // Listen for window focus to refresh data
  useEffect(() => {
    const handleFocus = () => {
      if (activeView === 'schedule-tours') {
        fetchTours(true); // Silent refresh on focus
      }
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [activeView]);

  // Export to Excel
  const exportToExcel = async (status) => {
    try {
      console.log('Exporting status:', status);
      const response = await fetch(`https://bellavista-backend-production.up.railway.app/api/tours/export/?status=${status}`);
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tour_bookings_${status}_${new Date().toISOString().split('T')[0]}.xlsx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        setShowExportModal(false);
      } else {
        const errorData = await response.json();
        console.error('Export error:', errorData);
        alert(`Export failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error exporting data:', error);
      alert('Error exporting data. Please try again.');
    }
  };

  const logout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('users');
      window.location.href = '/';
    }
  };

  return (
    <div className="app">
      <header>
        <div className="brand">
          <i className="fa-solid fa-hospital-user"></i>
          <h1>Bellavista Admin</h1>
          <span className="admin-badge">Dashboard</span>
        </div>
        <div className="header-actions">
          <button className="btn" onClick={logout}>
            <i className="fa-solid fa-sign-out-alt"></i>&nbsp;Logout
          </button>
        </div>
      </header>

      <aside>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            id="globalSearch" 
            placeholder="Quick search…" 
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
          />
        </div>
        <div className="nav">
          <div className="group-title">Homes</div>
          <button 
            className={activeView === 'add-home' ? 'active' : ''}
            onClick={() => setActiveView('add-home')}
          >
            <i className="fa-solid fa-house-medical"></i><span>Add Home</span>
          </button>
          <button 
            className={activeView === 'update-home' ? 'active' : ''}
            onClick={() => setActiveView('update-home')}
          >
            <i className="fa-solid fa-pen-to-square"></i><span>Update Home</span>
          </button>
          <div className="group-title">News</div>
          <button 
            className={activeView === 'add-news' ? 'active' : ''}
            onClick={() => setActiveView('add-news')}
          >
            <i className="fa-solid fa-newspaper"></i><span>Add News</span>
          </button>
          <button 
            className={activeView === 'update-news' ? 'active' : ''}
            onClick={() => setActiveView('update-news')}
          >
            <i className="fa-solid fa-rectangle-list"></i><span>Update News</span>
          </button>
          <div className="group-title">Content</div>
          <button 
            className={activeView === 'manage-faqs' ? 'active' : ''}
            onClick={() => setActiveView('manage-faqs')}
          >
            <i className="fa-solid fa-circle-question"></i><span>Manage FAQs</span>
          </button>
          <div className="group-title">Users</div>
          <button 
            className={activeView === 'manage-users' ? 'active' : ''}
            onClick={() => setActiveView('manage-users')}
          >
            <i className="fa-solid fa-users-gear"></i><span>Manage Users</span>
          </button>
          <div className="group-title">Enquiries</div>
          <button 
            className={activeView === 'schedule-tours' ? 'active' : ''}
            onClick={() => setActiveView('schedule-tours')}
          >
            <i className="fa-solid fa-calendar-check"></i><span>Schedule Tours</span>
          </button>
          <button 
            className={activeView === 'care-enquiries' ? 'active' : ''}
            onClick={() => setActiveView('care-enquiries')}
          >
            <i className="fa-solid fa-heart"></i><span>Care Enquiries</span>
          </button>
          <button 
            className={activeView === 'career-applications' ? 'active' : ''}
            onClick={() => setActiveView('career-applications')}
          >
            <i className="fa-solid fa-briefcase"></i><span>Career Applications</span>
          </button>
        </div>
      </aside>

      <main>
        {activeView === 'add-home' && (
          <section className="panel">
            <h2>Add Home</h2>
            <p className="muted">Create a new Nursing Home card for the website.</p>
            <div className="grid cols-2">
              <div className="field"><label>Name</label><input id="homeName" type="text" placeholder="e.g., Bellavista Cardiff"/></div>
              <div className="field"><label>Location</label><input id="homeLocation" type="text" placeholder="City, Region"/></div>
              <div className="field">
                <label>Image</label>
                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                  <input id="homeImage" type="url" placeholder="https://…" style={{flex:1}}/>
                  <span>or</span>
                  <label htmlFor="homeImageFile" className="btn ghost" style={{cursor:'pointer',margin:0}}>
                    <i className="fa-solid fa-plus"></i> Upload
                  </label>
                  <input id="homeImageFile" type="file" accept="image/*" hidden/>
                </div>
              </div>
              <div className="field">
                <label>Badge</label>
                <select id="homeBadge">
                  <option value="">None</option>
                  <option>Featured</option>
                  <option>New</option>
                  <option>Awarded</option>
                </select>
              </div>
              <div className="field" style={{gridColumn:'1/-1'}}>
                <label>Description</label>
                <textarea id="homeDesc" placeholder="Short teaser shown on the card…"></textarea>
              </div>
            </div>
            <div className="toolbar">
              <label style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <input id="homeFeatured" type="checkbox"/> Featured
              </label>
              <div className="right"></div>
              <button className="btn" id="btnAddHome">
                <i className="fa-solid fa-plus"></i>&nbsp;Add Home
              </button>
            </div>
          </section>
        )}

        {activeView === 'update-home' && (
          <section className="panel">
            <h2>Update Home</h2>
            <div className="toolbar">
              <input id="homeSearch" placeholder="Search homes…" style={{flex:1}} />
              <button className="btn ghost small" id="btnNewHome">
                <i className="fa-solid fa-plus"></i>&nbsp;New
              </button>
            </div>
            <div id="homesTableWrap"></div>
          </section>
        )}

        {activeView === 'add-news' && (
          <section className="panel">
            <h2>Add News</h2>
            <p className="muted">Publish a news item for the "Latest News & Updates" section.</p>
            <div className="grid cols-2">
              <div className="field"><label>Title</label><input id="newsTitle" type="text" placeholder="Headline"/></div>
              <div className="field"><label>Date</label><input id="newsDate" type="date"/></div>
              <div className="field">
                <label>Category</label>
                <select id="newsCategory">
                  <option>All News</option>
                  <option>Health Updates</option>
                  <option>Awards</option>
                  <option>Events</option>
                  <option>Innovation</option>
                  <option>Community</option>
                </select>
              </div>
              <div className="field">
                <label>Image</label>
                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                  <input id="newsImage" type="url" placeholder="https://…" style={{flex:1}}/>
                  <span>or</span>
                  <label htmlFor="newsImageFile" className="btn ghost" style={{cursor:'pointer',margin:0}}>
                    <i className="fa-solid fa-plus"></i> Upload
                  </label>
                  <input id="newsImageFile" type="file" accept="image/*" hidden/>
                </div>
              </div>
              <div className="field" style={{gridColumn:'1/-1'}}>
                <label>Summary</label>
                <textarea id="newsSummary" placeholder="Short summary shown on the card…"></textarea>
              </div>
              <div className="field" style={{gridColumn:'1/-1'}}>
                <label>Body (optional)</label>
                <textarea id="newsBody" placeholder="Full article body (for detail page)"></textarea>
              </div>
            </div>
            <div className="toolbar">
              <div className="right"></div>
              <button className="btn" id="btnAddNews">
                <i className="fa-solid fa-paper-plane"></i>&nbsp;Publish
              </button>
            </div>
          </section>
        )}

        {activeView === 'update-news' && (
          <section className="panel">
            <h2>Update News</h2>
            <div className="toolbar">
              <input id="newsSearch" placeholder="Search news…" style={{flex:1}} />
            </div>
            <div id="newsTableWrap"></div>
          </section>
        )}

        {activeView === 'manage-faqs' && (
          <section className="panel">
            <h2>Manage FAQs</h2>
            <div className="grid cols-2">
              <div className="field"><label>Question</label><input id="faqQ" type="text" placeholder="What types of care do you provide?"/></div>
              <div className="field"><label>Category</label><input id="faqCat" type="text" placeholder="Care, Costs, Visiting…"/></div>
              <div className="field" style={{gridColumn:'1/-1'}}>
                <label>Answer</label>
                <textarea id="faqA" placeholder="We provide residential, nursing, dementia, respite, and palliative care…"></textarea>
              </div>
            </div>
            <div className="toolbar">
              <div className="right"></div>
              <button className="btn" id="btnAddFaq">
                <i className="fa-solid fa-plus"></i>&nbsp;Add FAQ
              </button>
            </div>
            <div className="toolbar">
              <input id="faqSearch" placeholder="Search FAQs…" style={{flex:1}} />
            </div>
            <div id="faqTableWrap"></div>
          </section>
        )}

        {activeView === 'schedule-tours' && (
          <section className="panel">
            <h2>Schedule Tours</h2>
            <div className="toolbar">
              <input 
                placeholder="Search tours..." 
                style={{flex:1}} 
                value={tourSearch}
                onChange={(e) => setTourSearch(e.target.value)}
              />
              <select 
                style={{marginLeft: '10px'}}
                value={tourFilter}
                onChange={(e) => setTourFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="cardiff">Cardiff</option>
                <option value="barry">Barry</option>
                <option value="waverley">Waverley</option>
                <option value="college-fields">College Fields</option>
              </select>
              <button className="btn ghost small" onClick={fetchTours}>
                <i className="fa-solid fa-refresh"></i>&nbsp;Refresh
              </button>
              <button className="btn ghost small" onClick={() => setShowExportModal(true)}>
                <i className="fa-solid fa-file-excel"></i>&nbsp;Export to Excel
              </button>
            </div>
            {loading ? (
              <div style={{textAlign: 'center', padding: '40px'}}>
                <i className="fa-solid fa-spinner fa-spin"></i> Loading tours...
              </div>
            ) : (
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Notes</th>
                      <th>Actions</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.tours
                      .filter(tour => {
                        const matchesSearch = !tourSearch || 
                          tour.first_name?.toLowerCase().includes(tourSearch.toLowerCase()) ||
                          tour.last_name?.toLowerCase().includes(tourSearch.toLowerCase()) ||
                          tour.email?.toLowerCase().includes(tourSearch.toLowerCase());
                        const matchesFilter = !tourFilter || tour.preferred_home === tourFilter;
                        return matchesSearch && matchesFilter;
                      })
                      .map(tour => (
                        <tr key={tour.id}>
                          <td>#{tour.id}</td>
                          <td>{tour.first_name}</td>
                          <td>{tour.last_name || '-'}</td>
                          <td title={tour.email}>{tour.email}</td>
                          <td>{tour.phone_number}</td>
                          <td>
                            <span className="badge">
                              {tour.preferred_home === 'cardiff' && 'Cardiff'}
                              {tour.preferred_home === 'barry' && 'Barry'}
                              {tour.preferred_home === 'waverley' && 'Waverley'}
                              {tour.preferred_home === 'college-fields' && 'College Fields'}
                            </span>
                          </td>
                          <td>{new Date(tour.preferred_date).toLocaleDateString()}</td>
                          <td>{tour.preferred_time}</td>
                          <td title={tour.notes || '-'}>{tour.notes || '-'}</td>
                          <td>
                            <button 
                              className="btn ghost small" 
                              title="Mark as Not Visited"
                              onClick={() => updateTourStatus(tour.id, 'not_visited')}
                              style={{marginRight: '5px', color: '#e74c3c'}}
                            >
                              <i className="fa-solid fa-times"></i>
                            </button>
                            <button 
                              className="btn ghost small" 
                              title="Mark as Visited"
                              onClick={() => updateTourStatus(tour.id, 'visited')}
                              style={{color: '#27ae60'}}
                            >
                              <i className="fa-solid fa-check"></i>
                            </button>
                          </td>
                          <td>
                            <span className={`status ${tour.status}`}>
                              {tour.status === 'pending' && 'Pending'}
                              {tour.status === 'visited' && 'Visited'}
                              {tour.status === 'not_visited' && 'Not Visited'}
                            </span>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                {state.tours.length === 0 && (
                  <div style={{textAlign: 'center', padding: '40px', color: '#666'}}>
                    No tour bookings found.
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {activeView === 'care-enquiries' && (
          <section className="panel">
            <h2>Care Enquiries</h2>
            <div className="toolbar">
              <input id="enquirySearch" placeholder="Search enquiries..." style={{flex:1}} />
              <select id="enquiryFilter" style={{marginLeft: '10px'}}>
                <option value="">All Enquiries</option>
                <option value="immediate">Immediate</option>
                <option value="soon">Soon</option>
                <option value="planning">Planning</option>
              </select>
              <select id="enquiryLocationFilter" style={{marginLeft: '10px'}}>
                <option value="">All Locations</option>
                <option value="cardiff">Cardiff</option>
                <option value="barry">Barry</option>
                <option value="waverley">Waverley</option>
                <option value="college-fields">College Fields</option>
              </select>
            </div>
            <div id="enquiriesTableWrap"></div>
          </section>
        )}

        {activeView === 'career-applications' && (
          <section className="panel">
            <h2>Career Applications</h2>
            <div className="toolbar">
              <input id="careerSearch" placeholder="Search applications..." style={{flex:1}} />
              <select id="careerFilter" style={{marginLeft: '10px'}}>
                <option value="">All Positions</option>
                <option value="Nursing Position">Nursing</option>
                <option value="Administrative Role">Administrative</option>
                <option value="Kitchen & Catering Position">Kitchen & Catering</option>
                <option value="Maintenance & Facilities Role">Maintenance</option>
                <option value="Activities & Therapy Position">Activities & Therapy</option>
                <option value="Volunteer Opportunity">Volunteer</option>
              </select>
            </div>
            <div id="careerTableWrap"></div>
          </section>
        )}

        {activeView === 'manage-users' && (
          <section className="panel">
            <h2>Manage Users</h2>
            <div className="grid cols-3">
              <div className="field"><label>Full Name</label><input id="userName" type="text" placeholder="Jane Doe"/></div>
              <div className="field"><label>Email</label><input id="userEmail" type="email" placeholder="jane@bellavista.co.uk"/></div>
              <div className="field">
                <label>Role</label>
                <select id="userRole">
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
            </div>
            <div className="toolbar">
              <div className="right"></div>
              <button className="btn" id="btnAddUser">
                <i className="fa-solid fa-user-plus"></i>&nbsp;Add User
              </button>
            </div>
            <div className="toolbar">
              <input id="userSearch" placeholder="Search users…" style={{flex:1}} />
            </div>
            <div id="usersTableWrap"></div>
          </section>
        )}
      </main>
      
      {/* Export Modal */}
      {showExportModal && (
        <div className="modal active">
          <div className="card">
            <h3>Export Tour Bookings</h3>
            <p>Select which bookings to export:</p>
            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
              <button className="btn" onClick={() => exportToExcel('all')}>
                <i className="fa-solid fa-list"></i>&nbsp;All Bookings
              </button>
              <button className="btn" onClick={() => exportToExcel('visited')}>
                <i className="fa-solid fa-check"></i>&nbsp;Visited Only
              </button>
              <button className="btn" onClick={() => exportToExcel('pending')}>
                <i className="fa-solid fa-clock"></i>&nbsp;Pending Only
              </button>
            </div>
            <div style={{marginTop: '20px', textAlign: 'right'}}>
              <button className="btn ghost" onClick={() => setShowExportModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminConsole;