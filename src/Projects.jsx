import React, { useEffect, useState } from 'react';
import './App.css';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch public repositories from GitHub
    fetch('https://api.github.com/users/Homelander98/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Explore My Projects</h1>
        <p className="hero-description">
          Hi, I’m <span style={{ color: '#ff5e57' }}>Hashanul Bashar</span>. I love building impactful projects and exploring new technologies.  
          Dive into my GitHub repositories and discover my work!
        </p>

        {/* GitHub Link */}
        <div className="hero-buttons">
          <a 
            href="https://github.com/Homelander98?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Visit My GitHub
          </a>
        </div>
      </section>

      {/* Repositories Section */}
      <div className="repositories-section">
        <h2 className="section-title">GitHub Repositories</h2>

        {/* Loader */}
        {loading && <div className="loader">Loading repositories...</div>}

        {/* Repository List */}
        {!loading && repos.length > 0 ? (
          <ul className="repo-list">
            {repos.map((repo) => (
              <li key={repo.id} className="repo-item">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  <h3 className="repo-name">{repo.name}</h3>
                </a>
                <p className="repo-description">{repo.description || 'No description provided.'}</p>
                <div className="repo-stats">
                  <span className="badge">
                    <strong>Language:</strong> {repo.language || 'N/A'}
                  </span>
                  <span className="badge">
                    <strong>Stars:</strong> {repo.stargazers_count}
                  </span>
                  <span className="badge">
                    <strong>Forks:</strong> {repo.forks_count}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p className="empty-state">No repositories found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
