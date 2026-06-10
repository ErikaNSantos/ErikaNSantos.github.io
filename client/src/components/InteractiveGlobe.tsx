import { useEffect, useRef, useState, useMemo, Suspense, lazy } from 'react';
import * as topojson from 'topojson-client';
import * as THREE from 'three';

// Importação dinâmica para evitar problemas de SSR/Build com bibliotecas que dependem do window
const Globe = lazy(() => import('react-globe.gl'));

const LOCATIONS = [
  { lat: -12.6975, lng: -38.3239, label: 'Camaçari', size: 0.6, color: '#c4b5fd', isHome: true },
  { lat: 37.7749,  lng: -122.4194, label: 'San Francisco', size: 0.4, color: '#a78bfa' },
  { lat: 52.5200,  lng: 13.4050, label: 'Berlin', size: 0.4, color: '#a78bfa' },
  { lat: 38.7223,  lng: -9.1393, label: 'Lisboa', size: 0.4, color: '#a78bfa' },
  { lat: 43.6532,  lng: -79.3832, label: 'Toronto', size: 0.4, color: '#a78bfa' },
];

const ARCS = LOCATIONS.slice(1).map((dest) => ({
  startLat: LOCATIONS[0].lat,
  startLng: LOCATIONS[0].lng,
  endLat: dest.lat,
  endLng: dest.lng,
  color: ['rgba(167, 139, 250, 0.0)', 'rgba(167, 139, 250, 0.8)', 'rgba(167, 139, 250, 0.0)'],
}));

function GlobeInner() {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any>({ features: [] });
  const [size, setSize] = useState({ width: 500, height: 500 });

  // Material instanciado com useMemo para estabilidade
  const globeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#0a0a1a',
      transparent: true,
      opacity: 0.3,
    });
  }, []);

  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then((res) => res.json())
      .then((worldData) => {
        const features = (topojson.feature(worldData, worldData.objects.countries) as any).features;
        setCountries({ features });
      })
      .catch((err) => console.error('Erro carregando geometria:', err));
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = false;
      controls.enablePan = false;
    }

    globeRef.current.pointOfView({ lat: 0, lng: -30, altitude: 2.5 }, 0);
  }, [countries]);

  useEffect(() => {
    const updateSize = () => {
      // Aumentando a proporção de 0.45 para 0.6 e o limite de 600 para 800
      const containerWidth = Math.min(window.innerWidth * 0.6, 800);
      setSize({ width: containerWidth, height: containerWidth });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Globe
      ref={globeRef}
      width={size.width}
      height={size.height}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl={null}
      showGlobe={true}
      globeMaterial={globeMaterial}
      showAtmosphere={true}
      atmosphereColor="#8b5cf6"
      atmosphereAltitude={0.18}
      polygonsData={countries.features}
      polygonCapColor={() => 'rgba(167, 139, 250, 0.05)'}
      polygonSideColor={() => 'rgba(167, 139, 250, 0)'}
      polygonStrokeColor={() => '#a78bfa'}
      polygonAltitude={0.005}
      pointsData={LOCATIONS}
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointAltitude={0.01}
      pointRadius="size"
      pointResolution={32}
      labelsData={LOCATIONS}
      labelLat="lat"
      labelLng="lng"
      labelText="label"
      labelSize={1.2}
      labelDotRadius={0.4}
      labelColor={() => 'rgba(196, 181, 253, 0.85)'}
      labelResolution={2}
      labelAltitude={0.02}
      arcsData={ARCS}
      arcColor="color"
      arcDashLength={0.6}
      arcDashGap={0.2}
      arcDashAnimateTime={3000}
      arcStroke={0.4}
      arcAltitudeAutoScale={0.4}
    />
  );
}

function GlobeSkeleton() {
  return (
    <div className="w-full max-w-[500px] aspect-square mx-auto rounded-full bg-radial-gradient from-[#8b5cf61a] to-transparent animate-pulse" />
  );
}

export default function InteractiveGlobe() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <GlobeSkeleton />;

  return (
    <div className="w-full flex justify-center items-center min-h-[300px]">
      <Suspense fallback={<GlobeSkeleton />}>
        <GlobeInner />
      </Suspense>
    </div>
  );
}
