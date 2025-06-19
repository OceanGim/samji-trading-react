'use client'

import { useEffect } from 'react'
import { MapPin } from 'lucide-react'

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (container: HTMLElement | null, options: { center: unknown; level: number }) => unknown;
        Marker: new (options: { position: unknown }) => { setMap: (map: unknown) => void };
        CustomOverlay: new (options: { map: unknown; position: unknown; content: string; yAnchor: number }) => unknown;
      };
    }
  }
}

export default function KakaoMap() {
  useEffect(() => {
    // Load Kakao Maps script
    const script = document.createElement('script')
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY&autoload=false'
    script.async = true
    
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(37.7431, 127.0337), // 의정부 좌표
          level: 3
        }
        
        const map = new window.kakao.maps.Map(container, options)
        
        // Add marker
        const markerPosition = new window.kakao.maps.LatLng(37.7431, 127.0337)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        })
        marker.setMap(map)
        
        // Add custom overlay
        const content = '<div class="p-2 bg-white rounded shadow-md text-sm font-semibold">삼지상사총판</div>'
        new window.kakao.maps.CustomOverlay({
          map: map,
          position: markerPosition,
          content: content,
          yAnchor: 2.3
        })
      })
    }
    
    document.head.appendChild(script)
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="dapi.kakao.com"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div id="map" className="w-full h-[400px] md:h-[500px]">
      {/* Fallback for when map is loading */}
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">지도를 불러오는 중...</p>
        </div>
      </div>
    </div>
  )
}