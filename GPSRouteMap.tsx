import { useState, useEffect } from 'react';
import { MapPin, Navigation, Play, Pause, Square, Clock, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface GPSRouteMapProps {
  route?: any;
  isActive?: boolean;
  onStartRoute?: () => void;
  onPauseRoute?: () => void;
  onStopRoute?: () => void;
  currentStats?: {
    distance: number;
    time: number;
    pace: string;
    elevation: number;
  };
}

interface RoutePoint {
  lat: number;
  lng: number;
  elevation?: number;
  timestamp?: number;
}

export default function GPSRouteMap({ 
  route, 
  isActive = false, 
  onStartRoute, 
  onPauseRoute, 
  onStopRoute,
  currentStats 
}: GPSRouteMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Mock route points for visualization
  const mockRoutePoints: RoutePoint[] = [
    { lat: 40.7829, lng: -73.9654 }, // Central Park start
    { lat: 40.7851, lng: -73.9665 },
    { lat: 40.7879, lng: -73.9692 },
    { lat: 40.7903, lng: -73.9728 },
    { lat: 40.7911, lng: -73.9735 },
    { lat: 40.7918, lng: -73.9741 },
    { lat: 40.7925, lng: -73.9748 },
    { lat: 40.7829, lng: -73.9654 }  // Central Park end
  ];

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    // Get current location (mock)
    setCurrentLocation({ lat: 40.7829, lng: -73.9654 });

    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderMapPlaceholder = () => (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg overflow-hidden">
      {/* Mock GPS Route Visualization */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-100/80">
        {/* Route Path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M10,50 Q30,20 50,40 Q70,60 90,30"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
            strokeDasharray={isActive ? "5,5" : "none"}
            className={isActive ? "animate-pulse" : ""}
          />
          {/* Start Point */}
          <circle cx="10" cy="50" r="3" fill="#10b981" />
          {/* End Point */}
          <circle cx="90" cy="30" r="3" fill="#ef4444" />
          {/* Current Position (if active) */}
          {isActive && (
            <circle cx="35" cy="35" r="4" fill="#6366f1" className="animate-pulse">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
        
        {/* Elevation Profile Overlay */}
        <div className="absolute bottom-4 left-4 right-4 h-16 bg-white/80 backdrop-blur-sm rounded-lg p-2">
          <div className="text-xs text-slate-600 mb-1">Elevation Profile</div>
          <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path
              d="M0,15 Q25,10 50,12 Q75,8 100,14"
              stroke="#8b5cf6"
              strokeWidth="1"
              fill="url(#elevationGradient)"
            />
            <defs>
              <linearGradient id="elevationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
            <Navigation className="w-4 h-4 text-slate-700" />
          </button>
          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
            <MapPin className="w-4 h-4 text-slate-700" />
          </button>
        </div>

        {/* Route Info Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            {route?.name || 'Central Park Loop'}
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-600 mt-1">
            <span>{route?.distance || '6.1'} km</span>
            <span>•</span>
            <span>{route?.duration || '35'} min</span>
            <span>•</span>
            <Badge variant="secondary" className="text-xs">
              {route?.difficulty || 'Easy'}
            </Badge>
          </div>
        </div>
      </div>

      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}
    </div>
  );

  return (
    <Card className="glass-bg border-0 shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-indigo-600" />
          GPS Route
        </CardTitle>
        {isActive && (
          <Badge className="bg-green-100 text-green-800 animate-pulse">
            Recording
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {renderMapPlaceholder()}

        {/* Live Stats (when active) */}
        {isActive && currentStats && (
          <div className="grid grid-cols-2 gap-4 p-4 bg-white/50 rounded-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">
                {currentStats.distance.toFixed(1)}
              </p>
              <p className="text-sm text-slate-600">km</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {formatTime(currentStats.time)}
              </p>
              <p className="text-sm text-slate-600">Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {currentStats.pace}
              </p>
              <p className="text-sm text-slate-600">Pace /km</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {currentStats.elevation}
              </p>
              <p className="text-sm text-slate-600">Elevation</p>
            </div>
          </div>
        )}

        {/* Route Controls */}
        <div className="flex gap-3">
          {!isActive ? (
            <Button
              onClick={onStartRoute}
              className="flex-1 gradient-primary text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Route
            </Button>
          ) : (
            <>
              <Button
                onClick={onPauseRoute}
                variant="outline"
                className="flex-1"
              >
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </Button>
              <Button
                onClick={onStopRoute}
                variant="destructive"
                className="flex-1"
              >
                <Square className="w-4 h-4 mr-2" />
                Stop
              </Button>
            </>
          )}
        </div>

        {/* Route Details */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <Clock className="w-4 h-4 mx-auto text-slate-400 mb-1" />
            <p className="font-semibold text-slate-900">{route?.duration || '35'} min</p>
            <p className="text-slate-600">Est. Time</p>
          </div>
          <div>
            <TrendingUp className="w-4 h-4 mx-auto text-slate-400 mb-1" />
            <p className="font-semibold text-slate-900">{route?.elevation || '45'} m</p>
            <p className="text-slate-600">Elevation</p>
          </div>
          <div>
            <Zap className="w-4 h-4 mx-auto text-slate-400 mb-1" />
            <p className="font-semibold text-slate-900">{route?.calories || '320'}</p>
            <p className="text-slate-600">Est. Calories</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}