import { useEffect, useState } from 'react';
import './RoutePlanning.css';

function RoutePlanning() {
  const [routes] = useState([
    {
      source: 'Delhi',
      destination: 'Chandigarh',
      bestRoute: 'NH44 via Sonipat and Karnal',
      distance: '250 km',
      time: '5 hours',
      tolls: '₹120',
      avoidHighways: false,
      avoidTolls: false,
      mapLink: 'https://www.google.com/maps/dir/Delhi/Chandigarh'
    },
    {
      source: 'Mumbai',
      destination: 'Surat',
      bestRoute: 'NH48 avoiding toll express lanes',
      distance: '270 km',
      time: '6 hours',
      tolls: '₹90',
      avoidHighways: true,
      avoidTolls: true,
      mapLink: 'https://www.google.com/maps/dir/Mumbai/Surat'
    },
    {
      source: 'Bengaluru',
      destination: 'Mysuru',
      bestRoute: 'Via NH275 avoiding NICE Road',
      distance: '140 km',
      time: '3.5 hours',
      tolls: '₹70',
      avoidHighways: true,
      avoidTolls: false,
      mapLink: 'https://www.google.com/maps/dir/Bengaluru/Mysuru'
    },
    {
      source: 'Hyderabad',
      destination: 'Vijayawada',
      bestRoute: 'NH65 avoiding toll bypasses',
      distance: '160 km',
      time: '4 hours',
      tolls: '₹100',
      avoidHighways: false,
      avoidTolls: false,
      mapLink: 'https://www.google.com/maps/dir/Hyderabad/Vijayawada'
    }
  ]);

  const cities = [
    ...new Set(routes.flatMap((route) => [route.source, route.destination]))
  ];

  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [filters, setFilters] = useState({
    avoidTolls: false,
    avoidHighways: false,
    maxTime: '',
    minSpeed: ''
  });
  const [filteredRoutes, setFilteredRoutes] = useState([]);

  useEffect(() => {
    const filtered = routes.filter((route) => {
      return (
        route.source === selectedSource &&
        route.destination === selectedDestination &&
        (!filters.avoidTolls || route.avoidTolls === filters.avoidTolls) &&
        (!filters.avoidHighways || route.avoidHighways === filters.avoidHighways) &&
        (!filters.maxTime || parseInt(route.time.split(' ')[0]) <= filters.maxTime) &&
        (!filters.minSpeed || parseInt(route.time.split(' ')[0]) >= filters.minSpeed)
      );
    });
    setFilteredRoutes(filtered);
  }, [selectedSource, selectedDestination, filters, routes]);

  return (
    <div className="routeplanning-container">
      <div className="routeplanning-wrapper">
        <h2 className="heading">🚗 Route Planning</h2>

        <div className="dropdowns">
          <div className="dropdown">
            <label htmlFor="source">Source</label>
            <select
              id="source"
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
            >
              <option value="">Select Source</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown">
            <label htmlFor="destination">Destination</label>
            <select
              id="destination"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="filter-item">
            <label htmlFor="avoidTolls">Avoid Tolls</label>
            <input
              type="checkbox"
              id="avoidTolls"
              checked={filters.avoidTolls}
              onChange={(e) =>
                setFilters({ ...filters, avoidTolls: e.target.checked })
              }
            />
          </div>

          <div className="filter-item">
            <label htmlFor="avoidHighways">Avoid Highways</label>
            <input
              type="checkbox"
              id="avoidHighways"
              checked={filters.avoidHighways}
              onChange={(e) =>
                setFilters({ ...filters, avoidHighways: e.target.checked })
              }
            />
          </div>

          <div className="filter-item">
            <label htmlFor="maxTime">Max Time (hours)</label>
            <input
              type="number"
              id="maxTime"
              value={filters.maxTime}
              onChange={(e) =>
                setFilters({ ...filters, maxTime: e.target.value })
              }
            />
          </div>

          <div className="filter-item">
            <label htmlFor="minSpeed">Min Speed (km/h)</label>
            <input
              type="number"
              id="minSpeed"
              value={filters.minSpeed}
              onChange={(e) =>
                setFilters({ ...filters, minSpeed: e.target.value })
              }
            />
          </div>
        </div>

        {/* Display filtered routes */}
        <div className="route-result">
          <h3>Suggested Routes</h3>
          {filteredRoutes.length > 0 ? (
            <div>
              {filteredRoutes.map((route, index) => (
                <div key={index} className="route-card">
                  <h4>{route.bestRoute}</h4>
                  <p>Distance: {route.distance}</p>
                  <p>Time: {route.time}</p>
                  <p>Tolls: {route.tolls}</p>
                  <a href={route.mapLink} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>No routes available based on the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoutePlanning;
