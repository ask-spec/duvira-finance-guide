import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Eye, EyeOff } from "lucide-react";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Office coordinates for Jungmannova 745/24, Praha 1
  const officeLocation = {
    lng: 14.4189, // Longitude for Jungmannova street, Prague
    lat: 50.0813  // Latitude for Jungmannova street, Prague
  };

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [officeLocation.lng, officeLocation.lat],
        zoom: 16,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for office location
      const marker = new mapboxgl.Marker({
        color: '#1e40af', // Primary color from our design system
        scale: 1.2
      })
        .setLngLat([officeLocation.lng, officeLocation.lat])
        .addTo(map.current);

      // Add popup with office information
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false
      })
        .setLngLat([officeLocation.lng, officeLocation.lat])
        .setHTML(`
          <div class="p-3 text-center">
            <h3 class="font-semibold text-sm mb-1">Duvira s.r.o.</h3>
            <p class="text-xs text-gray-600">Jungmannova 745/24</p>
            <p class="text-xs text-gray-600">110 00 Praha 1</p>
          </div>
        `)
        .addTo(map.current);

      setIsMapInitialized(true);
      setShowTokenInput(false);
      
      // Save token to localStorage for future use
      localStorage.setItem('mapbox_token', token);

    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Neplatný Mapbox token. Zkontrolujte prosím token a zkuste to znovu.');
    }
  };

  useEffect(() => {
    // Try to load token from localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  const resetMap = () => {
    map.current?.remove();
    setIsMapInitialized(false);
    setShowTokenInput(true);
    localStorage.removeItem('mapbox_token');
  };

  if (showTokenInput && !isMapInitialized) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Konfigurace mapy</span>
          </CardTitle>
          <CardDescription>
            Pro zobrazení interaktivní mapy potřebujeme váš Mapbox token. 
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              Získejte token zdarma na mapbox.com
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
              <Input
                id="mapbox-token"
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="pk.eyJ1..."
                required
              />
              <p className="text-xs text-muted-foreground">
                Token se uloží lokálně ve vašem prohlížeči pro budoucí použití.
              </p>
            </div>
            <Button type="submit" variant="consultation" className="w-full">
              Načíst mapu
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      {isMapInitialized && (
        <Button
          variant="outline"
          size="sm"
          onClick={resetMap}
          className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm"
        >
          <Eye className="h-4 w-4 mr-1" />
          Změnit token
        </Button>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapInitialized && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="h-8 w-8 text-gray-400 mx-auto" />
            <p className="text-gray-600">Načítání mapy...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;