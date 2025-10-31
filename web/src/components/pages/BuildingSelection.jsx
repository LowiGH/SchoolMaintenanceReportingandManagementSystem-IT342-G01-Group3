import React, { useState, useMemo } from 'react';
import { Search, Settings, User, MapPin } from 'lucide-react';
import '../../css/BuildingSelection.css';
import { useNavigate } from 'react-router-dom'; // ✅ Added for navigation to ProfilePage

// CitfixLogo Component
function CitfixLogo({ className = '', size = 'md', variant = 'full' }) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 54 },
    lg: { width: 200, height: 68 }
  };
  
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  
  if (variant === 'icon') {
    const iconSize = iconSizes[size];
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M24 4L6 12V22C6 32 12 40 24 44C36 40 42 32 42 22V12L24 4Z"
          fill="url(#shield-gradient)"
        />
        <path
          d="M18 20L16 22L22 28L24 26L18 20Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="19" r="2.5" fill="white" />
        <path
          d="M20 26L24 30L32 20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="shield-gradient" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  const { width, height } = sizes[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(0, 10)">
        <path
          d="M24 4L6 12V22C6 32 12 40 24 44C36 40 42 32 42 22V12L24 4Z"
          fill="url(#logo-gradient)"
        />
        <path
          d="M18 20L16 22L22 28L24 26L18 20Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="19" r="2.5" fill="white" />
        <path
          d="M20 26L24 30L32 20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g transform="translate(54, 10)">
        <path
          d="M8 38.5C3.58172 38.5 0 34.9183 0 30.5V17.5C0 13.0817 3.58172 9.5 8 9.5H12V15.5H8C6.89543 15.5 6 16.3954 6 17.5V30.5C6 31.6046 6.89543 32.5 8 32.5H12V38.5H8Z"
          fill="#1E40AF"
        />
        <rect x="22" y="9.5" width="6" height="29" fill="#1E40AF" />
        <path
          d="M38 9.5H58V15.5H51V38.5H45V15.5H38V9.5Z"
          fill="#1E40AF"
        />
        <path
          d="M68 9.5H88V15.5H74V21.5H85V27.5H74V38.5H68V9.5Z"
          fill="#1E40AF"
        />
        <rect x="98" y="9.5" width="6" height="29" fill="#1E40AF" />
        <path
          d="M114 9.5L121 24L128 9.5H135L125.5 28L135.5 38.5H128L121 26.5L114 38.5H107L117 28L107.5 9.5H114Z"
          fill="#2563EB"
        />
      </g>
      <defs>
        <linearGradient id="logo-gradient" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Mock building data
const mockBuildings = [
  {
    id: 1,
    name: 'SAL Building',
    subtitle: 'Science and Laboratory',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
    issues: {
      high: 8,
      medium: 10,
      low: 6
    }
  },
  {
    id: 2,
    name: 'Main Building',
    subtitle: 'Administration',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    issues: {
      high: 5,
      medium: 8,
      low: 5
    }
  },
  {
    id: 3,
    name: 'Library Building',
    subtitle: 'Learning Resource Center',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    issues: {
      high: 4,
      medium: 7,
      low: 4
    }
  },
  {
    id: 4,
    name: 'CBA Building',
    subtitle: 'College of Business Administration',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    issues: {
      high: 3,
      medium: 6,
      low: 3
    }
  },
  {
    id: 5,
    name: 'Cafeteria',
    subtitle: 'Student Dining Hall',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop',
    issues: {
      high: 2,
      medium: 4,
      low: 3
    }
  },
  {
    id: 6,
    name: 'Campus Grounds',
    subtitle: 'Outdoor Areas & Facilities',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=300&fit=crop',
    issues: {
      high: 6,
      medium: 9,
      low: 5
    }
  }
];

function BuildingSelection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const navigate = useNavigate(); // ✅ Added navigation hook

  // Filter and sort buildings
  const filteredBuildings = useMemo(() => {
    let filtered = mockBuildings.filter(building =>
      building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      building.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply priority sorting
    if (priorityFilter) {
      filtered = [...filtered].sort((a, b) => {
        const totalA = a.issues.high + a.issues.medium + a.issues.low;
        const totalB = b.issues.high + b.issues.medium + b.issues.low;

        switch (priorityFilter) {
          case 'highest':
            return totalB - totalA;
          case 'lowest':
            return totalA - totalB;
          case 'high-priority':
            return b.issues.high - a.issues.high;
          case 'medium-priority':
            return b.issues.medium - a.issues.medium;
          case 'low-priority':
            return b.issues.low - a.issues.low;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [searchQuery, priorityFilter]);

  const handleBuildingClick = (building) => {
    console.log('Building clicked:', building);
    // Future: Navigate to building details
  };

  const handleMapClick = () => {
    console.log('Campus map clicked');
    // Future: Navigate to campus map
  };

  return (
    <div className="building-selection">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <CitfixLogo size="sm" />
          <nav className="nav-links">
            <a href="#" className="nav-link">View Issues</a>
            <a href="#" className="nav-link">Report Issue</a>
            <a href="#" className="nav-link">My Reports</a>
          </nav>
          <div className="header-right">
            <div className="user-info">
              <span className="user-name">User Shanta</span>
            </div>
            <button className="icon-button">
              <Settings size={20} />
            </button>
            {/*  Added onClick to navigate to Profile Page */}
            <button
              className="icon-button user-avatar"
              onClick={() => navigate('/profile')}
              title="Go to Profile"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Select Building</h1>
          <p className="page-subtitle">Choose a building to view and report issues</p>
          
          <button className="map-link" onClick={handleMapClick}>
            <MapPin size={16} />
            Can't find your building? Click here to view the campus map
          </button>

          {/* Search and Filter */}
          <div className="search-filter-container">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search buildings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">Sort By</option>
              <option value="highest">Highest Issues First</option>
              <option value="lowest">Lowest Issues First</option>
              <option value="high-priority">Most High Priority</option>
              <option value="medium-priority">Most Medium Priority</option>
              <option value="low-priority">Most Low Priority</option>
            </select>
          </div>

          {/* Buildings Grid */}
          <div className="buildings-grid">
            {filteredBuildings.map(building => {
              const totalIssues = building.issues.high + building.issues.medium + building.issues.low;
              
              return (
                <div
                  key={building.id}
                  className="building-card"
                  onClick={() => handleBuildingClick(building)}
                >
                  <div className="building-image-container">
                    <img
                      src={building.image}
                      alt={building.name}
                      className="building-image"
                    />
                  </div>
                  <div className="building-info">
                    <h3 className="building-name">{building.name}</h3>
                    <p className="building-subtitle">{building.subtitle}</p>
                    
                    <div className="priority-badges">
                      <span className="badge badge-high">High: {building.issues.high}</span>
                      <span className="badge badge-medium">Medium: {building.issues.medium}</span>
                      <span className="badge badge-low">Low: {building.issues.low}</span>
                    </div>
                    
                    <p className="total-issues">Total Issues: {totalIssues}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredBuildings.length === 0 && (
            <div className="no-results">
              <p>No buildings found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default BuildingSelection;
