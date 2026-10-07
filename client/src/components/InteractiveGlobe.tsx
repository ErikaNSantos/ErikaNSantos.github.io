import { useEffect, useRef, useState, useMemo, Suspense, lazy } from 'react';
import * as topojson from 'topojson-client';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

// Importação dinâmica para evitar problemas de SSR/Build com bibliotecas que dependem do window
const Globe = lazy(() => import('react-globe.gl'));

const LOCATIONS = [
  { lat: -12.9777, lng: -38.5016, label: 'Salvador', size: 0.6, isHome: true },

  { lat: 37.7749,  lng: -122.4194, label: 'San Francisco', size: 0.4 },
  { lat: 52.5200,  lng: 13.4050, label: 'Berlin', size: 0.4 },
  { lat: 38.7223,  lng: -9.1393, label: 'Lisboa', size: 0.4 },
  { lat: 43.6532,  lng: -79.3832, label: 'Toronto', size: 0.4 },
  { lat: 35.6762,  lng: 139.6503, label: 'Toquio', size: 0.4 },
  { lat: -33.9249, lng: 18.4241, label: 'Cidade do Cabo', size: 0.4 },
  { lat: -33.8688, lng: 151.2093, label: 'Sydney', size: 0.4 },
  { lat: 25.2048,  lng: 55.2708, label: 'Dubai', size: 0.4 }
];

// A esfera tem a cor do fundo da página, para o globo "sumir" nela e sobrar só o contorno âmbar.
// Os tons espelham --background e --primary do index.css em cada tema.
const PALETTES = {
  dark: { sphere: '#04040a', glow: '#F0A028', line: '#F0A028', lineRgb: '240, 160, 40', home: '#FFD58A', label: 'rgba(255, 213, 138, 0.9)', fill: 0.05 },
  light: { sphere: '#F6F4EF', glow: '#F0A028', line: '#9A5700', lineRgb: '154, 87, 0', home: '#5C3400', label: 'rgba(92, 52, 0, 0.9)', fill: 0.06 },
};

function GlobeInner() {
  const { theme } = useTheme();
  const palette = PALETTES[theme];
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any>({ features: [] });
  const [size, setSize] = useState({ width: 500, height: 500 });

  // Material instanciado com useMemo para estabilidade
  // MeshBasic no claro: com iluminação, a esfera clara ganha sombra cinza e deixa de parecer o fundo.
  const globeMaterial = useMemo(() => {
    return theme === 'dark'
      ? new THREE.MeshStandardMaterial({ color: palette.sphere, transparent: false, opacity: 0.9 })
      : new THREE.MeshBasicMaterial({ color: palette.sphere });
  }, [theme, palette.sphere]);

  const points = useMemo(
    () => LOCATIONS.map((loc) => ({ ...loc, color: loc.isHome ? palette.home : palette.line })),
    [palette]
  );

  const arcs = useMemo(
    () =>
      LOCATIONS.slice(1).map((dest) => ({
        startLat: LOCATIONS[0].lat,
        startLng: LOCATIONS[0].lng,
        endLat: dest.lat,
        endLng: dest.lng,
        color: [`rgba(${palette.lineRgb}, 0.0)`, `rgba(${palette.lineRgb}, 0.8)`, `rgba(${palette.lineRgb}, 0.0)`],
      })),
    [palette]
  );

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
      atmosphereColor={palette.glow}
      atmosphereAltitude={0.18}
      polygonsData={countries.features}
      polygonCapColor={() => `rgba(${palette.lineRgb}, ${palette.fill})`}
      polygonSideColor={() => `rgba(${palette.lineRgb}, 0)`}
      polygonStrokeColor={() => palette.line}
      polygonAltitude={0.005}
      pointsData={points}
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointAltitude={0.01}
      pointRadius="size"
      pointResolution={32}
      labelsData={points}
      labelLat="lat"
      labelLng="lng"
      labelText="label"
      labelSize={1.2}
      labelDotRadius={0.4}
      labelColor={() => palette.label}
      labelResolution={2}
      labelAltitude={0.02}
      arcsData={arcs}
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
    <div className="w-full max-w-[500px] aspect-square mx-auto rounded-full bg-radial-gradient from-primary/10 to-transparent animate-pulse" />
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
