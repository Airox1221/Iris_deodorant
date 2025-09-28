// Copyright 2025 Haridev
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
// trendingData.js
const images = Object.values(
  import.meta.glob('../assets/tending/*.webp', { eager: true })
).map((module) => module.default);

export const Trending = [
  { img: images[0], label: "IRIS Luminara Bloom – Eau De Parfum for Her", price: 549, oldPrice: 799 },
  { img: images[1], label: "IRIS Solstice Ember – Eau De Parfum for Him", price: 1200, oldPrice: 2500 },
  { img: images[2], label: "IRIS Nocturne Noir – Eau De Parfum Unisex", price: 2500 },
  //{ img: images[3], label: "IRIS Mirage Essence – Eau De Parfum for Her", price: 990 },
  //{ img: images[4], label: "IRIS Aurelia Luxe – Eau De Parfum for Him", price: 660, oldPrice: 900 },
  { img: images[5], label: "IRIS Serenade Petal – Eau De Parfum for Her", price: 950, oldPrice: 1299 },
  { img: images[6], label: "IRIS Zephyr Mist – Eau De Parfum Unisex", price: 3200 },
  { img: images[7], label: "IRIS Obsidian Intense – Eau De Parfum for Him", price: 4900 },
  { img: images[8], label: "IRIS Amara Bloom – Eau De Parfum for Her", price: 1500, oldPrice: 4500 },
  { img: images[9], label: "IRIS Éclat Radiance – Eau De Parfum Unisex", price: 5500 },
];
