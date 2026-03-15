<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { 
  divisionBranches, 
  districtBranches, 
  areaBranches, 
  regularBranches,
  NoAreaBranch, 
  type Branch 
} from '../data/branches';
import {
  FundFilled,
  ExclamationCircleFilled,
  EnvironmentFilled,
  LayoutFilled,
} from '@ant-design/icons-vue';

const collapsed = ref<boolean>(true);
const selectedKeys = ref<string[]>(['1']);
let map: L.Map | null = null;

const getMarkerIcon = (type: string) => {
  const colors: Record<string, string> = {
    Division: '#FFD700', District: '#28A745', Area: '#007BFF', Branch: '#FD7E14', NoArea: '#FD7E14'
  };
  return L.divIcon({
    className: 'custom-pin',
    html: `<div style="background-color: ${colors[type] || '#666'}; 
            width: 20px; 
            height: 20px; 
            border-radius: 50%; 
            border: 2px solid white; 
            box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>`,
    iconSize: [15, 15],
    iconAnchor: [10, 10]
  });
};

onMounted(() => {
    map = L.map('map', { preferCanvas: true }).setView([11.9797, 121.7740], 6);

    const stadiaUrl = 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}';
    L.tileLayer(stadiaUrl, { attribution: '&copy; Stadia Maps', ext: 'jpg' } as any).addTo(map);


    

    areaBranches.forEach((area: Branch) => {
        // private cluster area nga code basta
        const areaPrivateCluster = (L as any).markerClusterGroup({
            showCoverageOnHover: true,  
            chunkedLoading: true,
            zoomToBoundsOnClick: true,
            spiderfyOnMaxZoom: false,
            disableClusteringAtZoom: 10,
            maxClusterRadius: 800,
            // spiderfyDistanceMultiplier: 2,
            

            iconCreateFunction: (cluster: any) => {
                return L.divIcon({
                    html: `<div style="background-color: #007BFF; 
                            width: 30px; 
                            height: 30px; 
                            border-radius: 50%; 
                            display: flex; align-items: center; 
                            justify-content: center; color: white; 
                            font-weight: bold;
                            border: 3px solid white; 
                            box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
                            <span>${cluster.getChildCount()}</span>
                           </div>`,
                    className: 'area-hub-cluster',
                    iconSize: [40, 40]
                });
            }
        });

        

    // gin add ang blue area basta do private ya
        const hubMarker = L.marker([area.lat, area.lng], { 
            icon: getMarkerIcon('Area'),
            type: 'Area' 
        } as any).bindPopup(`<b>${area.name, area.city}</b>`);
        areaPrivateCluster.addLayer(hubMarker);

        const myBranches = regularBranches.filter(b => b.areaId === area.id);
        
        myBranches.forEach((branch: Branch) => {
            const bMarker = L.marker([branch.lat, branch.lng], { 
                icon: getMarkerIcon('Branch'),
                type: 'Branch' 
            } as any).bindPopup(`<b>${branch.name}</b>`);
            
            areaPrivateCluster.addLayer(bMarker);
        });

        // areaPrivateCluster.on('clusterclick', (a: any) => a.layer.spiderfy());

        // 6. Add this specific network to the map
        map!.addLayer(areaPrivateCluster);
    });

    // 7. Add Divisions and Districts normally (they don't merge with Areas)
    divisionBranches.forEach((d: Branch) => {
        L.marker([d.lat, d.lng], { icon: getMarkerIcon('Division') }).addTo(map!).bindPopup(d.name);
    });
    districtBranches.forEach((d: Branch) => {
        L.marker([d.lat, d.lng], { icon: getMarkerIcon('District') }).addTo(map!).bindPopup(d.name);
    });
    NoAreaBranch.forEach((d: Branch) => {
        L.marker([d.lat, d.lng], { icon: getMarkerIcon('NoArea') }).addTo(map!).bindPopup(d.name);
    });


    setTimeout(() => { map!.invalidateSize(); }, 400);
});

onUnmounted(() => { if (map) map.remove(); });
</script>



<template>
    <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible 
    :width="230"                  
    :collapsed-width="64"> <!--Change if gusto mo eh close-->
      <div class="logo-wrapper">
        <img src="/src/logo/LBF.png?url" alt="Company logo" class="sidebar-logo border-ad" />
        <span v-if="!collapsed" class="logo-text border-ad">LOMS</span>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <FundFilled />
              <span>Dashboard</span>
            </span>
          </template>
          <a-menu-item key="1">Tom</a-menu-item>
          <a-menu-item key="2">Bill</a-menu-item>
          <a-menu-item key="3">Alex</a-menu-item>
        </a-sub-menu>
        <!-- <a-menu-item key="2">
          <ExclamationCircleFilled />
          <span>Disaster Management</span>
        </a-menu-item> -->
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <ExclamationCircleFilled />
              <span>Disaster Management</span>
            </span>
          </template>
          <a-menu-item key="4">Tom</a-menu-item>
          <a-menu-item key="5">Bill</a-menu-item>
          <a-menu-item key="6">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <EnvironmentFilled />
              <span>LifeBank</span>
            </span>
          </template>
          <a-menu-item key="7">Tom</a-menu-item>
          <a-menu-item key="8">Bill</a-menu-item>
          <a-menu-item key="9">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <LayoutFilled />
              <span>Report</span>
            </span>
          </template>
          <a-menu-item key="10">Team 1</a-menu-item>
          <a-menu-item key="11">Team 2</a-menu-item>
        </a-sub-menu>
      </a-menu>
     </a-layout-sider>
    <a-layout>
    <div id="map">
        
    </div>
   </a-layout>
  </a-layout>
</template>

<style scoped>

/* .border-ad {
    border: 1px solid red;
} */

#map {
    height: 695px;
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.logo-container {
  height: 64px; /* Matches standard header height */
  display: flex;
  align-items: center;
  padding: 0 16px;
  overflow: hidden;
  transition: all 0.3s;
}

.sidebar-logo {
  height: 32px;
  width: 40px;
  object-fit: contain;
  margin-top: 10px;
}

.logo-text {
  color: white;
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
  margin-top: 10px;
  
}

.logo-wrapper {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  overflow: hidden;
  white-space: nowrap;
}

</style>

