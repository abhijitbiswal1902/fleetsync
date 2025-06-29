import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/Home';
import RealTimeTracking from './pages/RealTimeTracking';
import AnalyticsAndReports from './pages/AnalyticsReports';
import MaintenanceManagement from './pages/MaintenanceManagement';
import RouteOptimization from './pages/RouteOptimization';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CostAnalysis from './pages/CostAnalysis';
import CustomReport from './pages/CustomReport';
import FleetReport from './pages/FleetReport';
import RealTime from './pages/RealTime';
import TimeSaving from './pages/TimeSaving';
import CostSaving from './pages/CostSaving';
import RoutePlanning from './pages/RoutePlanning';
import AutomatedReminder from './pages/AutomatedReminder';
import MaintenanceHistory from './pages/MaintenanceHistory';
import ScheduledMaintenance from './pages/ScheduledMaintenance';
import CostTracking from './pages/CostTracking';
import LiveTracking from './pages/LiveTracking';


// import AuthPage from './pages/AuthPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/realtime-tracking" element={<RealTimeTracking />} />
          <Route path="/analytics-and-reports" element={<AnalyticsAndReports />} />
          <Route path="/maintenance-management" element={<MaintenanceManagement />} />
          <Route path="/route-optimization" element={<RouteOptimization />} />
          {/* <Route path="/login" element={<AuthPage />} /> */}
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cost-analysis" element={<CostAnalysis />} />
          <Route path="/custom-report" element={<CustomReport />} />
          <Route path="/fleet-report" element={<FleetReport />} />
          <Route path='/real-time' element={<RealTime/>} />  
          <Route path='/timesaving' element={<TimeSaving/>} /> 
          <Route path='/costsaving' element={<CostSaving/>} />
          <Route path='/routeplanning' element={<RoutePlanning/>} /> 
          <Route path='/automatedreminder' element={<AutomatedReminder/>} />   
          <Route path='/maintenancehistory' element={<MaintenanceHistory/>} />
          <Route path='/scheduledmaintenance' element={<ScheduledMaintenance/>} />
          <Route path='/cost-tracking' element={<CostTracking/>} />
          <Route path='/livetracking' element={<LiveTracking/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
