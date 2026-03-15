export interface Branch {
  id: number | string;
  name: string;
  lat: number;
  lng: number;
  city: string;
  type: 'Area' | 'Branch' | 'Division' | 'District' | 'NoArea';
  areaId?: number | string;
}

// yellow
export const divisionBranches: Branch[] = [
  { id: 1, name: "Division 1", lat: 15.954, lng: 120.5764, city: "City of Urdaneta, Pangasinan", type: 'Division' },
  { id: 2, name: "Division 2", lat: 14.67962645, lng: 121.0852443, city: "Quezon City, NCR, Second District", type: 'Division' },
  { id: 3, name: "Division 6", lat: 13.1559, lng: 123.7354, city: "Legazpi City, Albay", type: 'Division' },
  { id: 4, name: "Division 8", lat: 10.66667, lng: 122.95, city: "Bacolod City, Negros Occidental", type: 'Division' },
  { id: 5, name: "Division 3", lat: 10.31438679, lng: 123.8845187, city: "Cebu City, Cebu", type: 'Division' },
  { id: 6, name: "Division 5", lat: 8.497815, lng: 124.6435059, city: "Cagayan de Oro City, Misamis Oriental", type: 'Division' },
  { id: 7, name: "Division 4", lat: 7.108798482, lng: 125.6253905, city: "Davao City, Davao del Sur", type: 'Division' },
];

// Green
export const districtBranches: Branch[] = [
  { id: 1, name: "Division 7 District 17", lat: 17.62961, lng: 121.73765, city: "Tuguegaro City, Cagayan", type: 'District' },
  { id: 2, name: "Division 1 District 1", lat: 16.31436, lng: 120.3688, city: "Agoo, La union", type: 'District' },
  { id: 3, name: "Division 1 District 2", lat: 15.98162, lng: 120.56136, city: "City of Urdaneta, Pangasinan", type: 'District' },
  { id: 4, name: "Division 7 District 23", lat: 15.789417, lng: 120.979111, city: "San Jose City, Nueva Ecija", type: 'District' },
  { id: 5, name: "Division 1 District 3", lat: 15.05227, lng: 120.71303, city: "Mexico, Pampanga", type: 'District' },
  { id: 6, name: "Division 7 District 4", lat: 14.820722, lng: 120.906722, city: "Balagtas, Bulacan", type: 'District' },
  { id: 7, name: "Division 2 District 24", lat: 14.590622, lng: 120.97997, city: "City of Manila - Intramuros, NCR, First District, City of Manila", type: 'District' },
  { id: 8, name: "Division 2 District 5", lat: 14.45667, lng: 120.98195, city: "City of Las Piñas, NCR, Fourth District", type: 'District' },
  { id: 9, name: "Division 2 District 6", lat: 13.96618, lng: 121.16635, city: "Lipa City, Batangas", type: 'District' },
  { id: 10, name: "Division 6 District 16", lat: 13.15716, lng: 123.74552, city: "Legazpi City, Albay", type: 'District' },
  { id: 11, name: "Division 2 District 19", lat: 12.746207, lng: 121.488033, city: "Bongabong, Oriental Mindoro", type: 'District' },
  { id: 12, name: "Division 6 District 21", lat: 12.370861, lng: 123.626944, city: "City of Masbate, Masbate", type: 'District' },
  { id: 13, name: "Division 2 District 18", lat: 9.733755, lng: 118.7418104, city: "Puerto Princesa City, Palawan", type: 'District' },
  { id: 14, name: "Division 8 District 7", lat: 10.6489119, lng: 122.9626015, city: "Bacolod City, Negros Occidental", type: 'District' },
  { id: 15, name: "Division 3 District 9", lat: 10.324451, lng: 123.884513, city: "Cebu City, Cebu", type: 'District' },
  { id: 16, name: "Division 6 District 15", lat: 13.63916, lng: 123.18819, city: "Naga City, Camarines Sur", type: 'District' },
  { id: 17, name: "Division 3 District 10", lat: 10.33151, lng: 123.94486, city: "Mandaue City, Cebu", type: 'District' },
  { id: 18, name: "Division 8 District 8", lat: 9.293072, lng: 123.30123, city: "Dumaguete City, Negros Oriental", type: 'District' },
  { id: 19, name: "Division 5 District 14", lat: 8.95848, lng: 125.52603, city: "Butuan City, Agusan del Norte", type: 'District' },
  { id: 20, name: "Division 5 District 13", lat: 8.47251, lng: 124.68534, city: "Cagayan de Oro City, Misamis Oriental", type: 'District' },
  { id: 21, name: "Division 5 District 20", lat: 8.14657, lng: 123.84753, city: "Ozamis City, Misamis Occidental", type: 'District' },
  { id: 22, name: "Division 4 District 25", lat: 7.60362, lng: 125.96755, city: "Nabunturan, Compostela Valley", type: 'District' },
  { id: 23, name: "Division 4 District 11", lat: 7.29863, lng: 125.68302, city: "City of Panabo, Davao del Norte", type: 'District' },
  { id: 24, name: "Division 4 District 22", lat: 6.7455, lng: 125.35099, city: "City of Digos, Davao del Sur", type: 'District' },
  { id: 25, name: "Division 4 District 12", lat: 6.12702, lng: 125.16802, city: "General Santos City, South Cotabato", type: 'District' },
];

// Blue
export const areaBranches: Branch[] = [
  { id: "a", name: "Area 3(Base) Branch 311", lat: 18.1720833, lng: 120.591805, city: "San Nicolas", type: 'Area' },
  { id: "b", name: "Area 81(Base) Branch 444", lat: 18.34355, lng: 121.41593, city: "Abulug", type: 'Area' },
  { id: "c", name: "Area 150(Base) Branch 389", lat: 18.18373, lng: 121.6607, city: "Lal-lo", type: 'Area' },
  { id: "d", name: "Area 109(Base) Branch 405", lat: 18.06007, lng: 121.6426, city: "Gattaran", type: 'Area' },
  { id: "e", name: "Area 2(Base) Branch 283", lat: 17.5566934, lng: 120.3815, city: "Vigan", type: 'Area' },
  { id: "f", name: "Area 92(Base) Branch 339", lat: 17.62961, lng: 121.73765, city: "Tuguegararao", type: 'Area' },
  { id: "g", name: "Area 86(Base) Branch 280", lat: 16.933087, lng: 120.4464033, city: "Tagudin", type: 'Area' },
  { id: "h", name: "Area 111(Base) Branch 461", lat: 17.09319, lng: 120.97858, city: "Bontoc", type: 'Area' },
  { id: "i", name: "Area 6(Base) Branch 340", lat: 17.13736 , lng: 121.8677, city: "Ilagan", type: 'Area' },
  { id: "j", name: "Area 129(Base) Branch 307", lat: 17.117, lng: 121.62141, city: "Roxas", type: 'Area' },
  { id: "k", name: "Area 151(Base) Branch 308", lat: 16.93197, lng: 121.77083, city: "Cauayan", type: 'Area' },
  { id: "l", name: "Area 5(Base) Branch 312", lat: 16.77397, lng: 121.70004, city: "Alicia", type: 'Area' },
  { id: "m", name: "Area 85(Base) Branch 295", lat: 16.68204, lng: 121.54704, city: "Santiago", type: 'Area' },
  { id: "n", name: "Area 93(Base) Branch 294", lat: 16.521764, lng: 121.191657, city: "Solano", type: 'Area' },
  { id: "o", name: "Area 1(Base) Branch 266", lat: 16.413667, lng: 120.587917, city: "Baguio 2", type: 'Area' },
  { id: "p", name: "Area 4(Base) Branch 248", lat: 16.314361, lng: 120.368806, city: "Agoo", type: 'Area' },
  { id: "q", name: "Area 9(Base) Branch 244", lat: 16.151864, lng: 119.9848542, city: "Alaminos", type: 'Area' },
  { id: "r", name: "Area 107(Base) Branch 578", lat: 16.017611107, lng: 120.370578, city: "Calasiao", type: 'Area' },
  { id: "s", name: "Area 8(Base) Branch 234", lat: 15.981628, lng: 120.561361, city: "Urdaneta", type: 'Area' },
  { id: "t", name: "Area 11(Base) Branch 236", lat: 16.0264131, lng: 120.2313402, city: "Lingayen", type: 'Area' },
  { id: "u", name: "Area 136(Base) Branch 238", lat: 15.892362, lng: 120.5921949, city: "Villasis", type: 'Area' },
  { id: "v", name: "Area 10(Base) Branch 215", lat: 15.789417, lng: 120.979111, city: "San Jose City", type: 'Area' },
  { id: "w", name: "Area 33(Base) Branch 448", lat: 15.796861, lng: 121.471444, city: "Maria Aurora", type: 'Area' },
  { id: "x", name: "Area 15(Base) Branch 231", lat: 15.481689, lng: 120.594483, city: "Tarlac City", type: 'Area' },
  { id: "y", name: "Area 110(Base) Branch 197", lat: 15.480222, lng: 120.976833, city: "Cabanatuan", type: 'Area' },
  { id: "z", name: "Area 7(Base) Branch 185", lat: 15.305583, lng: 120.943861, city: "Gapan", type: 'Area' }, 
  { id: "a1", name: "Area 16(Base) Branch 276", lat: 15.314599, lng: 119.993451, city: "Iba", type: 'Area' },
  { id: "b1", name: "Area 13(Base) Branch 186", lat: 15.165521, lng: 120.596882, city: "Angeles", type: 'Area' },
  { id: "c1", name: "Area 137(Base) Branch 150", lat: 15.041052, lng: 120.673294, city: "San Fernando", type: 'Area' },
  { id: "d1", name: "Area 149(Base) Branch 149", lat: 15.052275, lng: 120.713031, city: "Mexico", type: 'Area' },
  { id: "e1", name: "Area 17(Base) Branch 105", lat: 14.96425, lng: 120.896778, city: "Baliuag", type: 'Area' },
  { id: "f1", name: "Area 18(Base) Branch 112", lat: 14.867528, lng: 120.866194, city: "Plaridel", type: 'Area' },
  { id: "g1", name: "Area 108(Base) Branch 671", lat: 14.836306, lng: 120.289694, city: "Olongapo 2", type: 'Area' },
  { id: "h1", name: "Area 14(Base) Branch 210", lat: 14.673172, lng: 120.534838, city: "Balanga", type: 'Area' },
  { id: "i1", name: "Area 126(Base) Branch 89", lat: 14.820722, lng: 120.906722, city: "Balagtas", type: 'Area' },
  { id: "j1", name: "Area 19(Base) Branch 85", lat: 14.809944, lng: 121.056028, city: "Csjdm 1", type: 'Area' },
  { id: "k1", name: "Area 21(Base) Branch 221", lat: 14.68929, lng: 120.99144, city: "Valenzuela", type: 'Area' },
  { id: "l1", name: "Area 125(Base) Branch 246", lat: 14.648737, lng: 121.093474, city: "Marikina", type: 'Area' },
  { id: "m1", name: "Area 20(Base) Branch 233", lat: 14.67996, lng: 121.08826, city: "Quezon city 2", type: 'Area' },
  { id: "n1", name: "Area 113(Base) Branch 554", lat: 14.60756, lng: 120.99818, city: "Sampaloc", type: 'Area' },
  { id: "o1", name: "Area 114(Base) Branch 556", lat: 14.58777, lng: 121.02654, city: "Mandaluyong", type: 'Area' },
  { id: "p1", name: "Area 26(Base) Branch 61", lat: 14.575917, lng: 121.178111, city: "Antipolo 1", type: 'Area' },
  { id: "q1", name: "Area 131(Base) Branch 507", lat: 14.54583, lng: 121.00448, city: "Pasay", type: 'Area' },
  { id: "r1", name: "Area 135(Base) Branch 72", lat: 14.530306, lng: 121.157556, city: "Angono", type: 'Area' },
  { id: "s1", name: "Area 149(Base) Branch 188", lat: 14.504278, lng: 121.29, city: "Tanay", type: 'Area' },
  { id: "t1", name: "Area 27(Base) Branch 259", lat: 14.4215185, lng: 121.4446098, city: "Siniloan", type: 'Area' },
  { id: "u1", name: "Area 24(Base) Branch 273", lat: 14.4566161, lng: 120.9819371, city: "Las Piñas City", type: 'Area' },
  { id: "v1", name: "Area 94(Base) Branch 95", lat: 14.3231573, lng: 120.953144, city: "Dasmariñas 1", type: 'Area' },
  { id: "w1", name: "Area 23(Base) Branch 672", lat: 14.27799, lng: 120.90878, city: "Gen. Trias 2", type: 'Area' },
  { id: "x1", name: "Area 22(Base) Branch 96", lat: 14.219319, lng: 120.9727492, city: "Silang", type: 'Area' },
  { id: "y1", name: "Area 31(Base) Branch 558", lat: 14.2108, lng: 121.16229, city: "Calamba 2", type: 'Area' },
  { id: "z1", name: "Area 138(Base) Branch 175", lat: 14.0717687, lng: 121.1364786, city: "Tanauan", type: 'Area' },
  { id: "a2", name: "Area 32(Base) Branch 155", lat: 14.06848, lng: 120.63189, city: "Nasugbu", type: 'Area' },
  { id: "b2", name: "Area 25(Base) Branch 227", lat: 14.0556995, lng: 121.3144273, city: "San Pablo", type: 'Area' },
  { id: "c2", name: "Area 99(Base) Branch 176", lat: 13.9661573, lng: 121.166361, city: "Lipa City", type: 'Area' },
  { id: "d2", name: "Area 74(Base) Branch 252", lat: 13.960836, lng: 121.323987, city: "Tiaong", type: 'Area' },
  { id: "e2", name: "Area 75(Base) Branch 254", lat: 13.935424, lng: 121.619716, city: "Lucena City", type: 'Area' },
  { id: "f2", name: "Area 112(Base) Branch 172", lat: 13.7861262, lng: 121.0081032, city: "Bauan", type: 'Area' },
  { id: "g2", name: "Area 100(Base) Branch 288", lat: 13.917792, lng: 122.093966, city: "Gumaca", type: 'Area' },
  { id: "h2", name: "Area 128(Base) Branch 623", lat: 13.444111, lng: 121.838056, city: "Boac", type: 'Area' },
  { id: "i2", name: "Area 76(Base) Branch 355", lat: 14.114144, lng: 122.948462, city: "Daet", type: 'Area' },
  { id: "j2", name: "Area 73(Base) Branch 330", lat: 13.698477, lng: 123.060549, city: "Libmanan", type: 'Area' },
  { id: "k2", name: "Area 87(Base) Branch 349", lat: 13.639556, lng: 123.18825, city: "Naga City 2", type: 'Area' },
  { id: "l2", name: "Area 77(Base) Branch 332", lat: 13.556049, lng: 123.277213, city: "Pili", type: 'Area' },
  { id: "m2", name: "Area 89(Base) Branch 380", lat: 13.352541, lng: 123.730577, city: "Tabaco City", type: 'Area' },
  { id: "n2", name: "Area 79(Base) Branch 378", lat: 13.234556, lng: 123.532062, city: "Ligao City", type: 'Area' },
  { id: "o2", name: "Area 78(Base) Branch 367", lat: 13.157167, lng: 123.745528, city: "Legazpi City", type: 'Area' },
  { id: "p2", name: "Area 101(Base) Branch 382", lat: 12.973444, lng: 124.024722, city: "Sorsogon City", type: 'Area' },
  { id: "q2", name: "Area 147(Base) Branch 430", lat: 12.702376, lng: 124.035396, city: "Irosin", type: 'Area' },
  { id: "r2", name: "Area 29(Base) Branch 323", lat: 13.4067448, lng: 121.184906, city: "Calapan", type: 'Area' },
  { id: "s2", name: "Area 132(Base) Branch 373", lat: 12.8482423, lng: 120.7799534, city: "Sablayan", type: 'Area' },
  { id: "t2", name: "Area 28(Base) Branch 299", lat: 12.5929151, lng: 121.5083297, city: "Roxas", type: 'Area' },
  { id: "u2", name: "Area 30(Base) Branch 369", lat: 12.3491596, lng: 121.0661802, city: "San Jose", type: 'Area' },
  { id: "v2", name: "Area 102(Base) Branch 499", lat: 12.567389, lng: 123.733361, city: "San Jacinto", type: 'Area' },
  { id: "w2", name: "Area 148(Base) Branch 493", lat: 12.22975, lng: 123.281556, city: "Mandaon", type: 'Area' },
  { id: "x2", name: "Area 83(Base) Branch 401", lat: 12.370861, lng: 123.626944, city: "Masbate City", type: 'Area' },
  { id: "y2", name: "Area 88(Base) Branch 438", lat: 12.005139, lng: 123.990972, city: "Cataingan", type: 'Area' },
  { id: "z2", name: "Area 95(Base) Branch 422", lat: 10.8207053, lng: 119.5044132, city: "Taytay", type: 'Area' },
  { id: "a3", name: "Area 80(Base) Branch 385", lat: 9.733755, lng: 118.7418104, city: "Puerto Princesa 1", type: 'Area' },
  { id: "b3", name: "Area 82(Base) Branch 385", lat: 9.2670319, lng: 118.3979283, city: "Narra", type: 'Area' },
  { id: "c3", name: "Area 91(Base) Branch 476", lat: 12.073437, lng: 124.589078, city: "Calbayog", type: 'Area' },
  { id: "d3", name: "Area 139(Base) Branch 485", lat: 11.783815, lng: 124.890825, city: "Catbalogan", type: 'Area' },
  { id: "e3", name: "Area 90(Base) Branch 473", lat: 11.60945, lng: 125.43531, city: "Borongan", type: 'Area' },
  { id: "f3", name: "Area 116(Base) Branch 353", lat: 11.22482, lng: 125.001594, city: "Tacloban", type: 'Area' },
  { id: "g3", name: "Area 52(Base) Branch 352", lat: 11.15776, lng: 124.993467, city: "Palo", type: 'Area' },
  { id: "h3", name: "Area 140(Base) Branch 346", lat: 11.186825, lng: 124.56046, city: "Kananga", type: 'Area' },
  { id: "i3", name: "Area 50(Base) Branch 587", lat: 11.011786, lng: 124.600233, city: "Ormoc 2", type: 'Area' },
  { id: "j3", name: "Area 127(Base) Branch 341", lat: 10.743677, lng: 125.011022, city: "Abuyog", type: 'Area' },
  { id: "k3", name: "Area 51(Base) Branch 305", lat: 10.328508, lng: 124.793687, city: "Bato", type: 'Area' },
  { id: "l3", name: "Area 47(Base) Branch 165", lat: 11.048043, lng: 124.006514, city: "Bogo City", type: 'Area' },
  { id: "m3", name: "Area 49(Base) Branch 164", lat: 10.51926, lng: 124.02362, city: "Danao City", type: 'Area' },
  { id: "n3", name: "Area 48(Base) Branch 209", lat: 10.33151, lng: 123.94486, city: "Mandaue City 2", type: 'Area' },
  { id: "o3", name: "Area 105(Base) Branch 241", lat: 10.324451, lng: 123.884513, city: "Cebu City 2", type: 'Area' },
  { id: "p3", name: "Area 42(Base) Branch 144", lat: 10.37766, lng: 123.64167, city: "Toledo City", type: 'Area' },
  { id: "q3", name: "Area 41(Base) Branch 170", lat: 9.93325, lng: 123.39734, city: "Moalboal", type: 'Area' },
  { id: "r3", name: "Area 108(Base) Branch 137", lat: 9.8831985, lng: 123.603796, city: "Argao", type: 'Area' },
  { id: "s3", name: "Area 46(Base) Branch 193", lat: 10.047517, lng: 124.470542, city: "Ubay", type: 'Area' },
  { id: "t3", name: "Area 141(Base) Branch 317", lat: 10.028331, lng: 124.067988, city: "Inabanga", type: 'Area' },
  { id: "u3", name: "Area 44(Base) Branch 191", lat: 9.949549, lng: 123.963976, city: "Tubigon", type: 'Area' },
  { id: "v3", name: "Area 45(Base) Branch 189", lat: 9.676272, lng: 123.861342, city: "Tagbilaran City", type: 'Area' },
  { id: "w3", name: "Area 115(Base) Branch 51", lat: 10.8927942, lng: 123.4175328, city: "Sagay 1", type: 'Area' },
  { id: "x3", name: "Area 40(Base) Branch 53", lat: 10.48362, lng: 123.407332, city: "San Carlos", type: 'Area' },
  { id: "y3", name: "Area 34(Base) Branch 41", lat: 10.7979987, lng: 122.9792663, city: "Silay", type: 'Area' },
  { id: "z3", name: "Area 130(Base) Branch 36", lat: 10.6489119, lng: 122.9626015, city: "Mansilingan 1", type: 'Area' },
  { id: "a4", name: "Area 36(Base) Branch 34", lat: 10.6353787, lng: 122.9356283, city: "Tangub", type: 'Area' },
  { id: "b4", name: "Area 43(Base) Branch 42", lat: 10.5335267, lng: 122.8387953, city: "Bago 1", type: 'Area' },
  { id: "c4", name: "Area 35(Base) Branch 44", lat: 10.2718458, lng: 122.8553563, city: "Hinigaran", type: 'Area' },
  { id: "d4", name: "Area 153(Base) Branch 67", lat: 10.116741, lng: 123.270622, city: "Guihulngan", type: 'Area' },
  { id: "e4", name: "Area 37(Base) Branch 49", lat: 9.995788, lng: 122.815962, city: "Kabankalan City", type: 'Area' },
  { id: "f4", name: "Area 38(Base) Branch 62", lat: 9.5159195, lng: 123.1613801, city: "Tanjay City", type: 'Area' },
  { id: "g4", name: "Area 134(Base) Branch 74", lat: 9.368189, lng: 122.805319, city: "Bayawan 1", type: 'Area' },
  { id: "h4", name: "Area 39(Base) Branch 75", lat: 9.293093, lng: 123.301325, city: "Dumaguete 1", type: 'Area' },
  { id: "i4", name: "Area 152(Base) Branch 644", lat: 9.12757, lng: 123.635795, city: "Siquijor 2", type: 'Area' },
  { id: "j4", name: "Area 145(Base) Branch 14", lat: 9.625795, lng: 125.567028, city: "Placer", type: 'Area' },
  { id: "k4", name: "Area 71(Base) Branch 256", lat: 9.778618, lng: 126.074484, city: "Surigao City", type: 'Area' },
  { id: "l4", name: "Area 70(Base) Branch 328", lat: 9.068756, lng: 126.205126, city: "Tandag", type: 'Area' },
  { id: "m4", name: "Area 68(Base) Branch 177", lat: 8.958312, lng: 125.526052, city: "Butuan 1", type: 'Area' },
  { id: "n4", name: "Area 123(Base) Branch 196", lat: 8.511378, lng: 125.977384, city: "San Francisco", type: 'Area' },
  { id: "o4", name: "Area 69(Base) Branch 180", lat: 9.001961, lng: 124.87801, city: "Talisayan", type: 'Area' },
  { id: "p4", name: "Area 144(Base) Branch 163", lat: 8.653345, lng: 124.753854, city: "Jasaan", type: 'Area' },
  { id: "q4", name: "Area 122(Base) Branch 161", lat: 8.472605, lng: 124.685183, city: "Gusa", type: 'Area' },
  { id: "r4", name: "Area 66(Base) Branch 143", lat: 8.497867, lng: 124.642422, city: "Kauswagan", type: 'Area' },
  { id: "s4", name: "Area 65(Base) Branch 203", lat: 8.245852, lng: 124.259574, city: "Iligan 3", type: 'Area' },
  { id: "t4", name: "Area 63(Base) Branch 260", lat: 8.146622, lng: 123.84759, city: "Ozamiz", type: 'Area' },
  { id: "u4", name: "Area 98(Base) Branch 356", lat: 7.923528, lng: 123.776143, city: "Lala", type: 'Area' },
  { id: "v4", name: "Area 133(Base) Branch 366", lat: 8.561893, lng: 123.651083, city: "Calamba", type: 'Area' },
  { id: "w4", name: "Area 64(Base) Branch 548", lat: 8.51726, lng: 123.10035, city: "Manukan", type: 'Area' },
  { id: "x4", name: "Area 124(Base) Branch 357", lat: 7.823951, lng: 123.434549, city: "Pagadian City", type: 'Area' },
  { id: "y4", name: "Area 97(Base) Branch 522", lat: 7.780751, lng: 122.590308, city: "Ipil 2", type: 'Area' },
  { id: "z4", name: "Area 146(Base) Branch 705", lat: 6.93915, lng: 122.088214, city: "Zamboanga City 1", type: 'Area' },
  { id: "a5", name: "Area 72(Base) Branch 129", lat: 7.902074, lng: 125.089036, city: "Valencia City", type: 'Area' },
  { id: "b5", name: "Area 121(Base) Branch 194", lat: 7.833921, lng: 126.061021, city: "Monkayo", type: 'Area' },
  { id: "c5", name: "Area 84(Base) Branch 496", lat: 7.792622, lng: 126.442582, city: "Cateel", type: 'Area' },
  { id: "d5", name: "Area 103(Base) Branch 534", lat: 7.585134, lng: 125.817167, city: "New Corella", type: 'Area' },
  { id: "e5", name: "Area 53(Base) Branch 99", lat: 7.603844, lng: 125.967814, city: "Nabunturan", type: 'Area' },
  { id: "f5", name: "Area 56(Base) Branch 98", lat: 7.298649, lng: 125.68317, city: "Panabo City 2", type: 'Area' },
  { id: "g5", name: "Area 57(Base) Branch 533", lat: 7.133342, lng: 125.89836, city: "Pantukan", type: 'Area' },
  { id: "h5", name: "Area 117(Base) Branch 65", lat: 7.142193, lng: 125.660267, city: "Panacan", type: 'Area' },
  { id: "i5", name: "Area 55(Base) Branch 60", lat: 7.101169, lng: 125.616714, city: "Buhangin", type: 'Area' },
  { id: "j5", name: "Area 54(Base) Branch 68", lat: 7.091284, lng: 125.50152, city: "Mintal", type: 'Area' },
  { id: "k5", name: "Area 67(Base) Branch 131", lat: 7.761945, lng: 125.005879, city: "Maramag", type: 'Area' },
  { id: "l5", name: "Area 104(Base) Branch 335", lat: 7.036393, lng: 125.092267, city: "Kidapawan 2", type: 'Area' },
  { id: "m5", name: "Area 143(Base) Branch 205", lat: 7.026305, lng: 125.089608, city: "Kidapawan 1", type: 'Area' },
  { id: "n5", name: "Area 62(Base) Branch 351", lat: 7.083217, lng: 124.898171, city: "Midsayap", type: 'Area' },
  { id: "o5", name: "Area 61(Base) Branch 82", lat: 6.742095, lng: 125.349111, city: "Digos City 2", type: 'Area' },
  { id: "p5", name: "Area 120(Base) Branch 84", lat: 6.642555, lng: 125.348743, city: "Padada", type: 'Area' },
  { id: "q5", name: "Area 119(Base) Branch 704", lat: 7.0078064, lng: 124.1623244, city: "Upi", type: 'Area' },
  { id: "r5", name: "Area 60(Base) Branch 128", lat: 6.627515 , lng: 124.596753, city: "Isulan 2", type: 'Area' },
  { id: "s5", name: "Area 142(Base) Branch 111", lat: 6.48885, lng: 124.861066, city: "Koronadal 1", type: 'Area' },
  { id: "t5", name: "Area 59(Base) Branch 362", lat: 6.380699, lng: 124.749978, city: "Surallah 2", type: 'Area' },
  { id: "u5", name: "Area 118(Base) Branch 484", lat: 5.863689, lng: 124.994635, city: "Maasim", type: 'Area' },
  { id: "v5", name: "Area 58(Base) Branch 108", lat: 6.126237, lng: 125.171926, city: "General Santos City 2", type: 'Area' },
  { id: "w5", name: "Area 96(Base) Branch 109", lat: 6.099261, lng: 125.287685, city: "Alabel", type: 'Area' },
];

// Orange
export const regularBranches: Branch[] = [
  { id: 1, name: "Area 3 Branch 399 - Bangui", lat: 18.53906, lng: 120.76591, city: "Sample", type: 'Branch', areaId: "a" },
  { id: 2, name: "Area 3 Branch 431 - Bacarra", lat: 18.289955, lng: 120.5992167, city: "Sample", type: 'Branch', areaId: "a" },
  { id: 3, name: "Area 3 Branch 733 - Laoag", lat: 18.1900517, lng: 120.5726885, city: "Sample", type: 'Branch', areaId: "a" },
  { id: 4, name: "Area 3 Branch 432 - Dingras", lat: 18.1041484, lng: 120.6959321, city: "Sample", type: 'Branch', areaId: "a" },
  { id: 5, name: "Area 3 Branch 310 - Batac", lat: 18.049277, lng: 120.567749, city: "Sample", type: 'Branch', areaId: "a" },

  { id: 6, name: "Area 81 Branch 445 - Sanchez Mira", lat: 18.55709, lng: 121.23266, city: "Sample", type: 'Branch', areaId: "b" },
  { id: 7, name: "Area 81 Branch 664 - Luna", lat: 18.3366, lng: 121.37579, city: "Sample", type: 'Branch', areaId: "b" },

  { id: 8, name: "Area 150 Branch 404 - Appari", lat: 18.35897, lng: 121.63906, city: "Sample", type: 'Branch', areaId: "c" },
  { id: 9, name: "Area 150 Branch 446 - Gonzaga", lat: 18.25563, lng: 121.99572, city: "Sample", type: 'Branch', areaId: "c" },
  { id: 10, name: "Area 150 Branch 525 - Lasam", lat: 18.06746, lng: 121.60462, city: "Sample", type: 'Branch', areaId: "c" },

  { id: 11, name: "Area 109 Branch 580 - Allacapan", lat: 18.22165, lng: 121.55797, city: "Sample", type: 'Branch', areaId: "d" },
  { id: 12, name: "Area 109 Branch 413 - Alcala", lat: 17.90145, lng: 121.64608, city: "Sample", type: 'Branch', areaId: "d" },
  { id: 13, name: "Area 109 Branch 523 - Amulung", lat: 17.84046, lng: 121.72261, city: "Sample", type: 'Branch', areaId: "d" },
  { id: 14, name: "Area 109 Branch 692 - Baggao", lat: 17.8874, lng: 121.87035, city: "Sample", type: 'Branch', areaId: "d" },

  { id: 15, name: "Area 2 Branch 720 - Dolores", lat: 17.653067, lng: 120.70862, city: "Sample", type: 'Branch', areaId: "e" },
  { id: 16, name: "Area 2 Branch 634 - Pinili", lat: 17.951972, lng: 120.52788, city: "Sample", type: 'Branch', areaId: "e" },
  { id: 17, name: "Area 2 Branch 725 - Sto. Domingo", lat: 17.653391, lng: 120.411241, city: "Sample", type: 'Branch', areaId: "e" },
  { id: 18, name: "Area 2 Branch 393 - Bangued", lat: 17.604076, lng: 120.617256, city: "Sample", type: 'Branch', areaId: "e" },
  { id: 19, name: "Area 2 Branch 309 - Cabugao", lat: 17.7990249, lng: 120.4576899, city: "Sample", type: 'Branch', areaId: "e" },

  { id: 20, name: "Area 92 Branch 697 - Tuguegarao 2", lat: 17.60923, lng: 121.709906, city: "Sample", type: 'Branch', areaId: "f" },
  { id: 21, name: "Area 92 Branch 640 - Sto. Niño", lat: 17.89216, lng: 121.57046, city: "Sample", type: 'Branch', areaId: "f" },
  { id: 22, name: "Area 92 Branch 601 - Tuao", lat: 17.73456, lng: 121.45781, city: "Sample", type: 'Branch', areaId: "f" },
  { id: 23, name: "Area 92 Branch 339 - Solana Cagayan Valley", lat: 17.62961, lng: 121.73765, city: "Sample", type: 'Branch', areaId: "f" },

  { id: 24, name: "Area 86 Branch 713 - Sta. Cruz", lat: 17.0801852, lng: 120.4591595, city: "Sample", type: 'Branch', areaId: "g" },
  { id: 25, name: "Area 86 Branch 282 - Narvacan", lat: 17.42175, lng: 120.4738333, city: "Sample", type: 'Branch', areaId: "g" },
  { id: 26, name: "Area 86 Branch 281 - Candon", lat: 17.194362, lng: 120.45095, city: "Sample", type: 'Branch', areaId: "g" },
  { id: 27, name: "Area 86 Branch 279 - Balaoan", lat: 16.82225, lng: 120.40625, city: "Sample", type: 'Branch', areaId: "g" },

  { id: 27, name: "Area 111 Branch 464 - Buguias", lat: 16.79344 , lng: 120.82007, city: "Sample", type: 'Branch', areaId: "h" },
  { id: 27, name: "Area 111 Branch 463 - Bauko", lat: 16.98371, lng: 120.85768, city: "Sample", type: 'Branch', areaId: "h" },

  { id: 28, name: "Area 6 Branch 639 - Peñablanca", lat: 17.64187, lng: 121.76605, city: "Sample", type: 'Branch', areaId: "i" },
  { id: 29, name: "Area 6 Branch 605 - Ilagan 2", lat: 17.09657, lng: 121.85806, city: "Sample", type: 'Branch', areaId: "i" },
  { id: 30, name: "Area 6 Branch 414 - Cabagan", lat: 17.42655, lng: 121.77256, city: "Sample", type: 'Branch', areaId: "i" },
  { id: 31, name: "Area 6 Branch 371 - Tamauini", lat: 17.27724, lng: 121.80814, city: "Sample", type: 'Branch', areaId: "i" },
  
  { id: 32, name: "Area 129 Branch 759 - Aurora", lat: 16.9907684, lng: 121.6339094, city: "Sample", type: 'Branch', areaId: "j" },
  { id: 33, name: "Area 129 Branch 625 - Quezon", lat: 17.31578, lng: 121.60734, city: "Sample", type: 'Branch', areaId: "j" },
  { id: 34, name: "Area 129 Branch 512 - Tabuk", lat: 17.4123, lng: 121.43991, city: "Sample", type: 'Branch', areaId: "j" },
  { id: 35, name: "Area 129 Branch 447 - Burgos", lat: 17.10143, lng: 121.6985, city: "Sample", type: 'Branch', areaId: "j" },

//   { id: 36, name: "Area 151 Branch 754 - San Mateo", lat: 17.10143, lng: 121.6985, city: "Sample", type: 'Branch', areaId: "k" },
  { id: 37, name: "Area 151 Branch 529 - San Mariano", lat: 16.98345, lng: 122.01755, city: "Sample", type: 'Branch', areaId: "k" },
  { id: 38, name: "Area 151 Branch 415 - Naguilian", lat: 17.01969, lng: 121.84609, city: "Sample", type: 'Branch', areaId: "k" },

  { id: 39, name: "Area 5 Branch 618 - Naguilian", lat: 16.75718, lng: 121.7498, city: "Sample", type: 'Branch', areaId: "l" },
  { id: 40, name: "Area 5 Branch 435 - Naguilian", lat: 16.70837, lng: 121.681, city: "Sample", type: 'Branch', areaId: "l" },
  { id: 41, name: "Area 5 Branch 579 - Naguilian", lat: 16.556238, lng: 121.699091, city: "Sample", type: 'Branch', areaId: "l" },

  { id: 42, name: "Area 85 Branch 487 - Alfonso Lista", lat: 16.92525, lng: 121.48069, city: "Sample", type: 'Branch', areaId: "m" },
  { id: 43, name: "Area 85 Branch 418 - Cabarroguis", lat: 16.525547, lng: 121.522209, city: "Sample", type: 'Branch', areaId: "m" },
  { id: 44, name: "Area 85 Branch 417 - Maddela", lat: 16.339021, lng: 121.685068, city: "Sample", type: 'Branch', areaId: "m" },
  { id: 45, name: "Area 85 Branch 416 - Cordon", lat: 16.67331, lng: 121.46619, city: "Sample", type: 'Branch', areaId: "m" },

  { id: 46, name: "Area 93 Branch 547 - Sta. Fe", lat: 16.15777778, lng: 120.9359444, city: "Sample", type: 'Branch', areaId: "n" },
  { id: 47, name: "Area 93 Branch 486 - Banaue", lat: 16.913227, lng: 121.065084, city: "Sample", type: 'Branch', areaId: "n" },
  { id: 48, name: "Area 93 Branch 449 - Lagawe", lat: 16.800976, lng: 121.123599, city: "Sample", type: 'Branch', areaId: "n" },
  { id: 49, name: "Area 93 Branch 293 - Bambang", lat: 16.392451, lng: 121.107743, city: "Sample", type: 'Branch', areaId: "n" },

  { id: 50, name: "Area 1 Branch 594 - Tuba", lat: 16.3929166, lng: 120.5611944, city: "Sample", type: 'Branch', areaId: "o" },
  { id: 52, name: "Area 1 Branch 407 - Naguillian", lat: 16.533044, lng: 120.39255, city: "Sample", type: 'Branch', areaId: "o" },
  { id: 53, name: "Area 1 Branch 387 - La Trinidad", lat: 16.46461111, lng: 120.5930278, city: "Sample", type: 'Branch', areaId: "o" },
  { id: 54, name: "Area 1 Branch 251 - Baguio 1", lat: 16.408916, lng: 120.5858, city: "Sample", type: 'Branch', areaId: "o" },

  { id: 55, name: "Area 4 Branch 462 - San Fernando L. U.", lat: 16.6419112, lng: 120.3126348, city: "Sample", type: 'Branch', areaId: "p" },
  { id: 56, name: "Area 4 Branch 291 - Rosario", lat: 16.221814, lng: 120.473117, city: "Sample", type: 'Branch', areaId: "p" },
  { id: 57, name: "Area 4 Branch 270 - San Juan", lat: 16.6626454, lng: 120.3317496, city: "Sample", type: 'Branch', areaId: "p" },
  { id: 58, name: "Area 4 Branch 269 - Bauang", lat: 16.527222, lng: 120.327277, city: "Sample", type: 'Branch', areaId: "p" },

  { id: 59, name: "Area 9 Branch 677 - Anda", lat: 16.151864, lng: 119.9848542, city: "Sample", type: 'Branch', areaId: "q" },
  { id: 60, name: "Area 9 Branch 545 - Burgos", lat: 16.060581, lng: 119.8636955, city: "Sample", type: 'Branch', areaId: "q" },
  { id: 61, name: "Area 9 Branch 483 - Infanta", lat: 15.828255, lng: 119.9105052, city: "Sample", type: 'Branch', areaId: "q" },
  { id: 62, name: "Area 9 Branch 394 - Bolinao", lat: 16.3900278, lng: 119.8976112, city: "Sample", type: 'Branch', areaId: "q" },

//   { id: 63, name: "Area 107 Branch 727 - Malasiqui", lat: 16.3900278, lng: 119.8976112, city: "Sample", type: 'Branch', areaId: "r" },
  { id: 64, name: "Area 107 Branch 319 - Bayambang", lat: 15.8083889, lng: 120.4519445, city: "Sample", type: 'Branch', areaId: "r" },
  { id: 65, name: "Area 107 Branch 292 - Mangatarem", lat: 15.787277, lng: 120.2952373, city: "Sample", type: 'Branch', areaId: "r" },
  { id: 66, name: "Area 107 Branch 239 - San Carlos", lat: 15.92418, lng: 120.3418269, city: "Sample", type: 'Branch', areaId: "r" },

  { id: 67, name: "Area 107 Branch 679 - Manaoag", lat: 16.053417, lng: 120.460028, city: "Sample", type: 'Branch', areaId: "s" },
//   { id: 68, name: "Area 107 Branch 735 - Mangaldan", lat: 15.92418, lng: 120.3418269, city: "Sample", type: 'Branch', areaId: "s" },
  { id: 69, name: "Area 107 Branch 546 - San Fabian", lat: 16.125924, lng: 120.4066654, city: "Sample", type: 'Branch', areaId: "s" },
  { id: 70, name: "Area 107 Branch 267 - Pozzorubio", lat: 16.109925, lng: 120.541192, city: "Sample", type: 'Branch', areaId: "s" },

  { id: 71, name: "Area 11 Branch 624 - Lingayen 2", lat: 16.0201111, lng: 120.226972, city: "Sample", type: 'Branch', areaId: "t" },
  { id: 72, name: "Area 11 Branch 599 - Sual", lat: 16.0676389, lng: 120.09275, city: "Sample", type: 'Branch', areaId: "t" },
  { id: 73, name: "Area 11 Branch 230 - Dagupan", lat: 16.0331388, lng: 120.33566, city: "Sample", type: 'Branch', areaId: "t" },

  { id: 74, name: "Area 136 Branch 540 - San Miguel", lat: 15.7960284, lng: 120.6080282, city: "Sample", type: 'Branch', areaId: "u" },
  { id: 75, name: "Area 136 Branch 388 - Asingan", lat: 15.995048, lng: 120.649889, city: "Sample", type: 'Branch', areaId: "u" },
  { id: 76, name: "Area 136 Branch 372 - Umingan", lat: 15.926883, lng: 120.8432002, city: "Sample", type: 'Branch', areaId: "u" },
  { id: 77, name: "Area 136 Branch 268 - Tayug", lat: 16.029522, lng: 120.754046, city: "Sample", type: 'Branch', areaId: "u" },

  { id: 78, name: "Area 10 Branch 684 - Quezon", lat: 15.556194, lng: 120.811667, city: "Sample", type: 'Branch', areaId: "v" },
  { id: 79, name: "Area 10 Branch 674 - Carrangalan", lat: 15.958222, lng: 121.064472, city: "Sample", type: 'Branch', areaId: "v" },
  { id: 80, name: "Area 10 Branch 324 - Guimba", lat: 15.66125, lng: 120.7555, city: "Sample", type: 'Branch', areaId: "v" },
  { id: 81, name: "Area 10 Branch 220 - Muñoz", lat: 15.712806, lng: 120.900889, city: "Sample", type: 'Branch', areaId: "v" },

  { id: 82, name: "Area 33 Branch 450 - Casiguran", lat: 16.2815, lng: 122.121972, city: "Sample", type: 'Branch', areaId: "w" },
  { id: 83, name: "Area 33 Branch 403 - Baler", lat: 15.7595, lng: 121.560639, city: "Sample", type: 'Branch', areaId: "w" },
  { id: 84, name: "Area 33 Branch 325 - Rizal", lat: 15.712889, lng: 121.101861, city: "Sample", type: 'Branch', areaId: "w" },

  { id: 85, name: "Area 15 Branch 390 - Gerona", lat: 15.611156, lng: 120.61065, city: "Sample", type: 'Branch', areaId: "x" },
  { id: 86, name: "Area 15 Branch 360 - Capas", lat: 15.327029, lng: 120.589336, city: "Sample", type: 'Branch', areaId: "x" },
  { id: 87, name: "Area 15 Branch 237 - Camiling", lat: 15.690531, lng: 120.419516, city: "Sample", type: 'Branch', areaId: "x" },
  { id: 88, name: "Area 15 Branch 235 - Paniqui", lat: 15.671596, lng: 120.578561, city: "Sample", type: 'Branch', areaId: "x" },

  // Division 7 District 23
//   { id: 89, name: "Area 110 Branch 764 - Bongabon", lat: 15.671596, lng: 120.578561, city: "Sample", type: 'Branch', areaId: "y" },
  { id: 90, name: "Area 110 Branch 402 - Palayan", lat: 15.546889, lng: 121.085306, city: "Sample", type: 'Branch', areaId: "y" },
  { id: 91, name: "Area 110 Branch 214 - Talavera", lat: 15.577333, lng: 120.919139, city: "Sample", type: 'Branch', areaId: "y" },
  { id: 92, name: "Area 110 Branch 465 - Dingalan", lat: 15.3905, lng: 121.392028, city: "Sample", type: 'Branch', areaId: "y" },

  // Division 7 District 23
  { id: 93, name: "Area 7 Branch 569 - General Tinio", lat: 15.354028, lng: 121.0475, city: "Sample", type: 'Branch', areaId: "z" },
  { id: 94, name: "Area 7 Branch 568 - Zaragoza", lat: 15.447389, lng: 120.787444, city: "Sample", type: 'Branch', areaId: "z" },
  { id: 95, name: "Area 7 Branch 344 - Sta. Rosa", lat: 15.426389, lng: 120.9375, city: "Sample", type: 'Branch', areaId: "z" },
  { id: 96, name: "Area 7 Branch 198 - Cabiao", lat: 15.258472, lng: 120.863806, city: "Sample", type: 'Branch', areaId: "z" },

  // Division 1 District 3
  { id: 97, name: "Area 16 Branch 318 - San Felipe", lat: 15.076321, lng: 120.066992, city: "Sample", type: 'Branch', areaId: "a1" },
  { id: 98, name: "Area 16 Branch 313 - Candelaria", lat: 15.627631, lng: 119.932657, city: "Sample", type: 'Branch', areaId: "a1" },
  { id: 99, name: "Area 16 Branch 277 - San Antonio", lat: 14.947166, lng: 120.09333, city: "Sample", type: 'Branch', areaId: "a1" },

  // Division 1 District 3
  { id: 100, name: "Area 13 Branch 670 - Angeles 2", lat: 15.155167, lng: 120.599083, city: "Sample", type: 'Branch', areaId: "b1" },
  { id: 101, name: "Area 13 Branch 633 - Magalang", lat: 15.20911, lng: 120.663416, city: "Sample", type: 'Branch', areaId: "b1" },
  { id: 102, name: "Area 13 Branch 222 - Mabalacat", lat: 15.213698, lng: 120.577444, city: "Sample", type: 'Branch', areaId: "b1" },
  { id: 103, name: "Area 13 Branch 153 - Porac", lat: 15.069534, lng: 120.546628, city: "Sample", type: 'Branch', areaId: "b1" },

  // Division 1 District 3
  { id: 104, name: "Area 137 Branch 566 - Sta. Rita", lat: 15.013833, lng: 120.583472, city: "Sample", type: 'Branch', areaId: "c1" },
  { id: 105, name: "Area 137 Branch 217 - Florida Blanca", lat: 14.977739, lng: 120.504951, city: "Sample", type: 'Branch', areaId: "c1" },
  { id: 106, name: "Area 137 Branch 151 - Lubao", lat: 14.912335, lng: 120.564472, city: "Sample", type: 'Branch', areaId: "c1" },

  // Division 1 District 3
  { id: 107, name: "Area 12 Branch 736 - Masantol", lat: 14.8751098, lng: 120.7075031, city: "Sample", type: 'Branch', areaId: "d1" },
  { id: 108, name: "Area 12 Branch 726 - Sta. Ana", lat: 15.104181, lng: 120.769157, city: "Sample", type: 'Branch', areaId: "d1" },
  { id: 109, name: "Area 12 Branch 265 - Minalin", lat: 14.992049, lng: 120.742944, city: "Sample", type: 'Branch', areaId: "d1" },
  { id: 110, name: "Area 12 Branch 152 - Arayat", lat: 15.153105, lng: 120.7706419, city: "Sample", type: 'Branch', areaId: "d1" },
  { id: 111, name: "Area 12 Branch 102 - Apalit", lat: 14.95287, lng: 120.770422, city: "Sample", type: 'Branch', areaId: "d1" },

  // Division 7 District 23
//   { id: 112, name: "Area 17 Branch 757 - San Ildefonso", lat: 15.008417, lng: 120.932611, city: "Sample", type: 'Branch', areaId: "e1" },
  { id: 113, name: "Area 17 Branch 116 - San Rafael", lat: 15.008417, lng: 120.932611, city: "Sample", type: 'Branch', areaId: "e1" },
  { id: 114, name: "Area 17 Branch 115 - San Miguel", lat: 15.142278, lng: 120.975278, city: "Sample", type: 'Branch', areaId: "e1" },

  // Division 7 District 23
  { id: 115, name: "Area 18 Branch 113 - Calumpit", lat: 14.9055, lng: 120.768167, city: "Sample", type: 'Branch', areaId: "f1" },
  { id: 116, name: "Area 18 Branch 78 - Malolos", lat: 14.855306, lng: 120.802556, city: "Sample", type: 'Branch', areaId: "f1" },
  { id: 117, name: "Area 18 Branch 103 - Pulilan", lat: 14.9035, lng: 120.865833, city: "Sample", type: 'Branch', areaId: "f1" },

  // Division 1 District 13
  { id: 118, name: "Area 108 Branch 666 - Subic", lat: 14.860806, lng: 120.242639, city: "Sample", type: 'Branch', areaId: "g1" },
  { id: 119, name: "Area 108 Branch 275 - Olongapo", lat: 14.8391111, lng: 120.2790278, city: "Sample", type: 'Branch', areaId: "g1" },
  { id: 120, name: "Area 108 Branch 199 - Dinalupihan", lat: 14.873028, lng: 120.465904, city: "Sample", type: 'Branch', areaId: "g1" },

  { id: 121, name: "Area 14 Branch 567 - Bagac", lat: 14.606416, lng: 120.403917, city: "Sample", type: 'Branch', areaId: "h1" },
  { id: 122, name: "Area 14 Branch 219 - Mariveles", lat: 14.4306961, lng: 120.4812523, city: "Sample", type: 'Branch', areaId: "h1" },
  { id: 123, name: "Area 14 Branch 211 - Orion", lat: 14.583359, lng: 120.589833, city: "Sample", type: 'Branch', areaId: "h1" },
  { id: 124, name: "Area 14 Branch 200 - Orani", lat: 14.7942941, lng: 120.5348019, city: "Sample", type: 'Branch', areaId: "h1" },

  // Division 7 District 4
  { id: 125, name: "Area 126 Branch 207 - Sta. Maria 2", lat: 14.823222, lng: 120.965694, city: "Sample", type: 'Branch', areaId: "i1" },
  { id: 126, name: "Area 126 Branch 88 - Mecauayan", lat: 14.730167, lng: 120.972472, city: "Sample", type: 'Branch', areaId: "i1" },
  { id: 127, name: "Area 126 Branch 87 - Marilao", lat: 14.762972, lng: 120.964278, city: "Sample", type: 'Branch', areaId: "i1" },
  { id: 128, name: "Area 126 Branch 104 - Bulakan", lat: 14.785889, lng: 120.878194, city: "Sample", type: 'Branch', areaId: "i1" },

  // Division 7 District 4
//   { id: 129, name: "Area 19 Branch 763 - Angat", lat: 14.785889, lng: 120.878194, city: "Sample", type: 'Branch', areaId: "j1" },
  { id: 130, name: "Area 19 Branch 114 - Norzagaray", lat: 14.904194, lng: 121.039528, city: "Sample", type: 'Branch', areaId: "j1" },
  { id: 131, name: "Area 19 Branch 86 - Sta. Maria 1", lat: 14.819861, lng: 120.960694, city: "Sample", type: 'Branch', areaId: "j1" },
  { id: 132, name: "Area 19 Branch 106 - Csjdm 2", lat: 14.8625, lng: 121.063278, city: "Sample", type: 'Branch', areaId: "j1" },

  //Division 2 District 24
  { id: 133, name: "Area 21 Branch 676 - Malabon 2", lat: 14.65798, lng: 120.95295, city: "Sample", type: 'Branch', areaId: "k1" },
  { id: 134, name: "Area 21 Branch 648 - Navotas", lat: 14.6707111, lng: 120.9407911, city: "Sample", type: 'Branch', areaId: "k1" },
  { id: 135, name: "Area 21 Branch 598 - Valenzuela 2", lat: 14.70611, lng: 120.9997, city: "Sample", type: 'Branch', areaId: "k1" },
  { id: 136, name: "Area 21 Branch 530 - Malabon", lat: 14.66436, lng: 120.96684, city: "Sample", type: 'Branch', areaId: "k1" },

  { id: 137, name: "Area 125 Branch 619 - Marikina 2", lat: 14.631556, lng: 121.078472, city: "Sample", type: 'Branch', areaId: "l1" },
  { id: 138, name: "Area 125 Branch 617 - Rodriguez 2", lat: 14.7288607, lng: 121.1401855, city: "Sample", type: 'Branch', areaId: "l1" },
  { id: 139, name: "Area 125 Branch 70 - San Mateo", lat: 14.697738, lng: 121.12238, city: "Sample", type: 'Branch', areaId: "l1" },
  { id: 140, name: "Area 125 Branch 69 - Rodriguez", lat: 14.728861, lng: 121.140186, city: "Sample", type: 'Branch', areaId: "l1" },

  // Division 2 District 24
//   { id: 141, name: "Area 20 Branch 761 - Quezon City 5", lat: 14.728861, lng: 121.140186, city: "Sample", type: 'Branch', areaId: "m1" },
  { id: 142, name: "Area 20 Branch 609 - Quezon City 4", lat: 14.68296, lng: 121.03703, city: "Sample", type: 'Branch', areaId: "m1" },
  { id: 143, name: "Area 20 Branch 245 - Quezon City 3", lat: 14.62731, lng: 121.03746, city: "Sample", type: 'Branch', areaId: "m1" },
  { id: 144, name: "Area 20 Branch 232 - Quezon City 1", lat: 14.70649, lng: 121.04051, city: "Sample", type: 'Branch', areaId: "m1" },
  { id: 145, name: "Area 20 Branch 213 - Caloocan", lat: 14.75007, lng: 121.07539, city: "Sample", type: 'Branch', areaId: "m1" },

  // Division 2 District 4
  { id: 146, name: "Area 113 Branch 751 - Sta. Cruz", lat: 14.6130412, lng: 120.9838836, city: "Sample", type: 'Branch', areaId: "n1" },
  { id: 147, name: "Area 113 Branch 608 - Tondo", lat: 14.6313639, lng: 120.9770966, city: "Sample", type: 'Branch', areaId: "n1" },
  { id: 148, name: "Area 113 Branch 581 - Quiapo", lat: 14.5982486, lng: 120.9887038, city: "Sample", type: 'Branch', areaId: "n1" },
  { id: 149, name: "Area 113 Branch 531 - Caloocan 2", lat: 14.65278, lng: 120.99322, city: "Sample", type: 'Branch', areaId: "n1" },

  // Division 2 District 24
  { id: 150, name: "Area 114 Branch 675 - Sta. Ana", lat: 14.587287, lng: 121.009349, city: "Sample", type: 'Branch', areaId: "o1" },
  { id: 151, name: "Area 114 Branch 652 - San Juan", lat: 14.59562, lng: 121.02958, city: "Sample", type: 'Branch', areaId: "o1" },
  { id: 152, name: "Area 114 Branch 557 - Pasig City 2", lat: 14.58518, lng: 121.09787, city: "Sample", type: 'Branch', areaId: "o1" },
  { id: 153, name: "Area 114 Branch 508 - Pasig City 1", lat: 14.5571757, lng: 121.0808971, city: "Sample", type: 'Branch', areaId: "o1" },

  // Division 7 District 4
  { id: 154, name: "Area 26 Branch 696 - Antipolo 3", lat: 14.5978033, lng: 121.1912068, city: "Sample", type: 'Branch', areaId: "p1" },
  { id: 155, name: "Area 26 Branch 212 - Antipolo 2", lat: 14.623855, lng: 121.173808, city: "Sample", type: 'Branch', areaId: "p1" },
  { id: 156, name: "Area 26 Branch 58 - Cainta", lat: 14.603311, lng: 121.107845, city: "Sample", type: 'Branch', areaId: "p1" },

  // Division 2 District 24
//   { id: 157, name: "Area 131 Branch 762 - Makati City", lat: 14.603311, lng: 121.107845, city: "Sample", type: 'Branch', areaId: "q1" },
  { id: 158, name: "Area 131 Branch 553 - Parañaque 2", lat: 14.5015701, lng: 120.9959283, city: "Sample", type: 'Branch', areaId: "q1" },
  { id: 159, name: "Area 131 Branch 527 - Pasay 2", lat: 14.5602491, lng: 120.9979806, city: "Sample", type: 'Branch', areaId: "q1" },
  { id: 160, name: "Area 131 Branch 417 - Parañaque", lat: 14.4627808, lng: 121.0129162, city: "Sample", type: 'Branch', areaId: "q1" },

  // Division 7 District 4
  { id: 161, name: "Area 135 Branch 689 - Taytay", lat: 14.565068, lng: 121.13407, city: "Sample", type: 'Branch', areaId: "r1" },
  { id: 162, name: "Area 135 Branch 653 - Binangonan 2", lat: 14.346944, lng: 121.215889, city: "Sample", type: 'Branch', areaId: "r1" },
  { id: 163, name: "Area 135 Branch 90 - Binangonan", lat: 14.488944, lng: 121.183806, city: "Sample", type: 'Branch', areaId: "r1" },

  // Division 7 District 4
//   { id: 164, name: "Area 149 Branch 756 - Baras", lat: 14.488944, lng: 121.183806, city: "Sample", type: 'Branch', areaId: "s1" },
  { id: 165, name: "Area 149 Branch 658 - Jalajala", lat: 14.35425, lng: 121.323139, city: "Sample", type: 'Branch', areaId: "s1" },
  { id: 166, name: "Area 149 Branch 187 - Morong", lat: 14.510861, lng: 121.239611, city: "Sample", type: 'Branch', areaId: "s1" },

  //Division 2 District 6
  { id: 167, name: "Area 27 Branch 561 - Famy", lat: 14.43921, lng: 121.44887, city: "Sample", type: 'Branch', areaId: "t1" },
  { id: 168, name: "Area 27 Branch 524 - Infanta Quezon", lat: 14.7419703, lng: 121.6491174, city: "Sample", type: 'Branch', areaId: "t1" },
  { id: 169, name: "Area 27 Branch 258 - Pagsanjan", lat: 14.2733712, lng: 121.4495052, city: "Sample", type: 'Branch', areaId: "t1" },
  { id: 170, name: "Area 27 Branch 243 - Sta. Cruz", lat: 14.2577487, lng: 121.398874, city: "Sample", type: 'Branch', areaId: "t1" },

  // Division 2 DIstrict 5
  { id: 171, name: "Area 24 Branch 607 - Taguig City 2", lat: 14.51499, lng: 121.04045, city: "Sample", type: 'Branch', areaId: "u1" },
  { id: 172, name: "Area 24 Branch 272 - Muntinlupa City", lat: 14.3854023, lng: 121.0525066, city: "Sample", type: 'Branch', areaId: "u1" },
  { id: 173, name: "Area 24 Branch 247 - Taguig City", lat: 14.488131, lng: 121.398874, city: "Sample", type: 'Branch', areaId: "u1" },
  { id: 174, name: "Area 24 Branch 93 - Bacoor", lat: 14.4607963, lng: 120.9540397, city: "Sample", type: 'Branch', areaId: "u1" },

  // Division 2 District 5
  { id: 175, name: "Area 94 Branch 709 - Cavity City", lat: 14.4877184, lng: 120.9026412, city: "Sample", type: 'Branch', areaId: "v1" },
  { id: 176, name: "Area 94 Branch 216 - Dasmariñas 2", lat: 14.3236272, lng: 120.95315, city: "Sample", type: 'Branch', areaId: "v1" },
  { id: 177, name: "Area 94 Branch 94 - Imus", lat: 14.4299734, lng: 120.9354636, city: "Sample", type: 'Branch', areaId: "v1" },
  { id: 178, name: "Area 94 Branch 92 - Kawit", lat: 14.4414399, lng: 120.9037054, city: "Sample", type: 'Branch', areaId: "v1" },

  // Division 2 District 5
  { id: 179, name: "Area 23 Branch 387 - Naic", lat: 14.3270504, lng: 120.7728624, city: "Sample", type: 'Branch', areaId: "w1" },
  { id: 180, name: "Area 23 Branch 121 - Gen. Trias", lat: 14.3785453, lng: 120.8839152, city: "Sample", type: 'Branch', areaId: "w1" },
  { id: 181, name: "Area 23 Branch 118 - Indang", lat: 14.1941281, lng: 120.8779229, city: "Sample", type: 'Branch', areaId: "w1" },
  { id: 182, name: "Area 23 Branch 117 - Trece Martirez City", lat: 14.2874006, lng: 120.8661704, city: "Sample", type: 'Branch', areaId: "w1" },

  // Division 2 District 5
  { id: 183, name: "Area 22 Branch 617 - Gma", lat: 14.29481, lng: 121.00217, city: "Sample", type: 'Branch', areaId: "x1" },
  { id: 184, name: "Area 22 Branch 509 - Silang 2", lat: 14.2215076, lng: 120.976901, city: "Sample", type: 'Branch', areaId: "x1" },
  { id: 185, name: "Area 22 Branch 120 - Alfonso", lat: 14.1200949, lng: 120.8639484, city: "Sample", type: 'Branch', areaId: "x1" },
  { id: 186, name: "Area 22 Branch 119 - Tagaytay City", lat: 14.12119, lng: 120.96252, city: "Sample", type: 'Branch', areaId: "x1" },

  // Division 2 DIstrict 6
  { id: 187, name: "Area 31 Branch 365 - Cabuyao", lat: 14.2726134, lng: 121.1283005, city: "Sample", type: 'Branch', areaId: "y1" },
  { id: 188, name: "Area 31 Branch 225 - Calamba", lat: 14.2124248, lng: 121.161799, city: "Sample", type: 'Branch', areaId: "y1" },
  { id: 189, name: "Area 31 Branch 224 - Sta. Rosa", lat: 14.3012874, lng: 121.1062779, city: "Sample", type: 'Branch', areaId: "y1" },
  { id: 190, name: "Area 31 Branch 223 - Biñan", lat: 14.3173193, lng: 121.0783776, city: "Sample", type: 'Branch', areaId: "y1" },

  // Division 2 District 6
  { id: 191, name: "Area 138 Branch 716 - Talisay", lat: 14.094172, lng: 121.0358191, city: "Sample", type: 'Branch', areaId: "z1" },
  { id: 192, name: "Area 138 Branch 364 - Sto. Tomas", lat: 14.1057604, lng: 121.1439653, city: "Sample", type: 'Branch', areaId: "z1" },

  // Division 2 District 5
  { id: 193, name: "Area 32 Branch 158 - Lian", lat: 13.9419968, lng: 120.6318335, city: "Sample", type: 'Branch', areaId: "a2" },
  { id: 194, name: "Area 32 Branch 157 - Lemery", lat: 13.8846722, lng: 120.9111103, city: "Sample", type: 'Branch', areaId: "a2" },
  { id: 195, name: "Area 32 Branch 156 - Calaca", lat: 13.9301067, lng: 120.8102192, city: "Sample", type: 'Branch', areaId: "a2" },
  { id: 196, name: "Area 32 Branch 154 - Balayan", lat: 13.9464479, lng: 120.7292147, city: "Sample", type: 'Branch', areaId: "a2" },

  // Division 2 District 6
  { id: 197, name: "Area 25 Branch 699 - Alaminos", lat: 14.06612, lng: 121.26914, city: "Sample", type: 'Branch', areaId: "b2" },
  { id: 198, name: "Area 25 Branch 521 - Calauan", lat: 14.1770948, lng: 121.311076, city: "Sample", type: 'Branch', areaId: "b2" },
  { id: 199, name: "Area 25 Branch 257 - Nagcarlan", lat: 14.1373857, lng: 121.4182718, city: "Sample", type: 'Branch', areaId: "b2" },
  { id: 200, name: "Area 25 Branch 242 - Los Baños", lat: 14.1826903, lng: 121.2450525, city: "Sample", type: 'Branch', areaId: "b2" },

  // Division 2 District 6
  { id: 201, name: "Area 99 Branch 466 - San Juan", lat: 13.8271464, lng: 121.398124, city: "Sample", type: 'Branch', areaId: "c2" },
  { id: 202, name: "Area 99 Branch 174 - Rosario", lat: 13.8425347, lng: 121.1945809, city: "Sample", type: 'Branch', areaId: "c2" },

  // Division 6 District 30
  { id: 203, name: "Area 74 Branch 621 - Sariaya", lat: 13.969833, lng: 121.526083, city: "Sample", type: 'Branch', areaId: "d2" },
  { id: 204, name: "Area 74 Branch 375 - Lucban", lat: 14.115886, lng: 121.560556, city: "Sample", type: 'Branch', areaId: "d2" },
  { id: 205, name: "Area 74 Branch 296 - Candelaria", lat: 13.928482, lng: 121.432298, city: "Sample", type: 'Branch', areaId: "d2" },
  { id: 206, name: "Area 74 Branch 253 - Tayabas", lat: 14.027038, lng: 121.589784, city: "Sample", type: 'Branch', areaId: "d2" },

  // Division 6 District 30
  { id: 207, name: "Area 75 Branch 681 - Quezon", lat: 14.099611, lng: 122.016556, city: "Sample", type: 'Branch', areaId: "e2" },
  { id: 208, name: "Area 75 Branch 662 - Unisan", lat: 13.843528, lng: 121.974278, city: "Sample", type: 'Branch', areaId: "e2" },
  { id: 209, name: "Area 75 Branch 289 - Pagbilao", lat: 13.971225, lng: 121.676269, city: "Sample", type: 'Branch', areaId: "e2" },
  { id: 210, name: "Area 75 Branch 287 - Atimonan", lat: 14.0018, lng: 121.92311, city: "Sample", type: 'Branch', areaId: "e2" },

  // Division 2 District 6
  { id: 211, name: "Area 112 Branch 673 - Lobo", lat: 13.65143, lng: 121.2085, city: "Sample", type: 'Branch', areaId: "f2" },
  { id: 212, name: "Area 112 Branch 641 - Cuenca", lat: 13.9012551, lng: 121.0559027, city: "Sample", type: 'Branch', areaId: "f2" },
  { id: 213, name: "Area 112 Branch 600 - San jose", lat: 13.84542, lng: 121.0882, city: "Sample", type: 'Branch', areaId: "f2" },
  { id: 214, name: "Area 112 Branch 173 - Batangas", lat: 13.7576945, lng: 121.066897, city: "Sample", type: 'Branch', areaId: "f2" },

  // Division 6 District 30
  // { id: 215, name: "Area 100 Branch 729 - San Francisco", lat: 13.7576945, lng: 121.066897, city: "Sample", type: 'Branch', areaId: "g2" },
  { id: 216, name: "Area 100 Branch 560 - Mulanay", lat: 13.523083, lng: 122.405239, city: "Sample", type: 'Branch', areaId: "g2" },
  { id: 217, name: "Area 100 Branch 441 - Catanauan", lat: 13.592633, lng: 122.328483, city: "Sample", type: 'Branch', areaId: "g2" },
  { id: 218, name: "Area 100 Branch 298 - Calauag", lat: 13.956447, lng: 122.283169, city: "Sample", type: 'Branch', areaId: "g2" },
  { id: 219, name: "Area 100 Branch 297 - Lopez", lat: 13.888105, lng: 122.263216, city: "Sample", type: 'Branch', areaId: "g2" },
  
  // Division 6 District 30
  { id: 220, name: "Area 128 Branch 663 - Sta. Cruz", lat: 13.474806, lng: 122.027139, city: "Sample", type: 'Branch', areaId: "h2" },
  { id: 221, name: "Area 128 Branch 661 - Gasan", lat: 13.323139, lng: 121.846167, city: "Sample", type: 'Branch', areaId: "h2" },
  { id: 222, name: "Area 128 Branch 622 - Torrijos", lat: 13.33175, lng: 122.097444, city: "Sample", type: 'Branch', areaId: "h2" },
  { id: 223, name: "Area 128 Branch 620 - Lucena 2", lat: 13.941694, lng: 121.626333, city: "Sample", type: 'Branch', areaId: "h2" },

  // Division 6 District 15
  { id: 224, name: "Area 76 Branch 752 - Jose Panganiban", lat: 14.2836584, lng: 122.6956869, city: "Sample", type: 'Branch', areaId: "i2" },
  { id: 225, name: "Area 76 Branch 585 - Sta. Elena", lat: 14.185472, lng: 122.392167, city: "Sample", type: 'Branch', areaId: "i2" },
  { id: 226, name: "Area 76 Branch 570 - Daet 2", lat: 14.117833, lng: 122.95775, city: "Sample", type: 'Branch', areaId: "i2" },
  { id: 227, name: "Area 76 Branch 559 - Basud", lat: 14.078417, lng: 122.957028, city: "Sample", type: 'Branch', areaId: "i2" },
  { id: 228, name: "Area 76 Branch 354 - Labo", lat: 14.156469, lng: 122.828011, city: "Sample", type: 'Branch', areaId: "i2" },

  // Division 6 District 15
  { id: 229, name: "Area 73 Branch 586 - Del Gallego", lat: 13.925583, lng: 122.590583, city: "Sample", type: 'Branch', areaId: "j2" },
  { id: 230, name: "Area 73 Branch 452 - San Fernando", lat: 13.558008, lng: 123.126954, city: "Sample", type: 'Branch', areaId: "j2" },
  { id: 231, name: "Area 73 Branch 440 - Calabanga", lat: 13.702401, lng: 123.218183, city: "Sample", type: 'Branch', areaId: "j2" },
  { id: 232, name: "Area 73 Branch 377 - Sipocot", lat: 13.766122, lng: 122.975078, city: "Sample", type: 'Branch', areaId: "j2" },

  // Division 6 District 15
  { id: 233, name: "Area 87 Branch 682 - Caramoan", lat: 13.769194, lng: 123.862111, city: "Sample", type: 'Branch', areaId: "k2" },
  { id: 234, name: "Area 87 Branch 451 - Tigaon", lat: 13.611738, lng: 123.485007, city: "Sample", type: 'Branch', areaId: "k2" },
  { id: 235, name: "Area 87 Branch 348 - Goa", lat: 13.694772, lng: 123.489669, city: "Sample", type: 'Branch', areaId: "k2" },
  { id: 236, name: "Area 87 Branch 331 - Naga City 1", lat: 13.623619, lng: 123.191378, city: "Sample", type: 'Branch', areaId: "k2" },

  // Division 6 District 15
  { id: 237, name: "Area 77 Branch 693 - Buhi", lat: 13.43362, lng: 123.51873, city: "Sample", type: 'Branch', areaId: "l2" },
  { id: 238, name: "Area 77 Branch 528 - Nabua", lat: 13.40875, lng: 123.375139, city: "Sample", type: 'Branch', areaId: "l2" },
  { id: 239, name: "Area 77 Branch 350 - Baao", lat: 13.456104, lng: 123.365173, city: "Sample", type: 'Branch', areaId: "l2" },
  { id: 240, name: "Area 77 Branch 333 - Iriga City", lat: 13.424949, lng: 123.412575, city: "Sample", type: 'Branch', areaId: "l2" },

  // Division 6 District 16
  { id: 241, name: "Area 89 Branch 457 - Sto. Domingo", lat: 13.237488, lng: 123.777556, city: "Sample", type: 'Branch', areaId: "m2" },
  { id: 242, name: "Area 89 Branch 428 - Bacacay", lat: 13.288054, lng: 123.792414, city: "Sample", type: 'Branch', areaId: "m2" },
  { id: 243, name: "Area 89 Branch 427 - Tiwi", lat: 13.45336, lng: 123.676075, city: "Sample", type: 'Branch', areaId: "m2" },

  // Division 6 District 16
  { id: 244, name: "Area 79 Branch 455 - Pio Duran", lat: 13.043788, lng: 123.454533, city: "Sample", type: 'Branch', areaId: "n2" },
  { id: 245, name: "Area 79 Branch 454 - Oas", lat: 13.259132, lng: 123.499071, city: "Sample", type: 'Branch', areaId: "n2" },
  { id: 246, name: "Area 79 Branch 453 - Libon", lat: 13.298232, lng: 123.437667, city: "Sample", type: 'Branch', areaId: "n2" },
  { id: 247, name: "Area 79 Branch 363 - Polangui", lat: 13.293711, lng: 123.495863, city: "Sample", type: 'Branch', areaId: "n2" },

  // Division 6 District 16
  { id: 248, name: "Area 78 Branch 715 - Legazpi City 2", lat: 13.1168948, lng: 123.7432164, city: "Sample", type: 'Branch', areaId: "o2" },
  { id: 249, name: "Area 78 Branch 456 - Camalig", lat: 13.184782, lng: 123.65624, city: "Sample", type: 'Branch', areaId: "o2" },
  { id: 250, name: "Area 78 Branch 379 - Guinobatan", lat: 13.191757, lng: 123.612053, city: "Sample", type: 'Branch', areaId: "o2" },
  { id: 251, name: "Area 78 Branch 374 - Daraga", lat: 13.149909, lng: 123.717695, city: "Sample", type: 'Branch', areaId: "o2" },

  // Division 6 District 16
  { id: 252, name: "Area 101 Branch 728 - Donsol", lat: 12.905336, lng: 123.595263, city: "Sample", type: 'Branch', areaId: "p2" },
  { id: 253, name: "Area 101 Branch 458 - Castilla", lat: 12.979064, lng: 123.799018, city: "Sample", type: 'Branch', areaId: "p2" },
  { id: 254, name: "Area 101 Branch 383 - Gubat", lat: 12.925057, lng: 124.122756, city: "Sample", type: 'Branch', areaId: "p2" },
  { id: 255, name: "Area 101 Branch 381 - Pilar", lat: 12.922752, lng: 123.671276, city: "Sample", type: 'Branch', areaId: "p2" },

  // Division 6 District 16
  { id: 256, name: "Area 147 Branch 698 - Matnog", lat: 12.5859659, lng: 124.0818175, city: "Sample", type: 'Branch', areaId: "q2" },
  { id: 257, name: "Area 147 Branch 429 - Juban", lat: 12.846936, lng: 123.992614, city: "Sample", type: 'Branch', areaId: "q2" },
  { id: 258, name: "Area 147 Branch 384 - Bulan", lat: 12.672837, lng: 123.873105, city: "Sample", type: 'Branch', areaId: "q2" },
  // { id: 259, name: "Area 147 Branch 753 - Barcelona", lat: 12.922752, lng: 123.671276, city: "Sample", type: 'Branch', areaId: "q2" },

  // Division 2 District 19
  { id: 260, name: "Area 29 Branch 708 - Baco", lat: 13.3570155, lng: 121.1086209, city: "Sample", type: 'Branch', areaId: "r2" },
  { id: 261, name: "Area 29 Branch 467 - Puerto Galera", lat: 13.50166, lng: 120.94988, city: "Sample", type: 'Branch', areaId: "r2" },
  { id: 262, name: "Area 29 Branch 322 - Victoria", lat: 13.1739968, lng: 121.2795522, city: "Sample", type: 'Branch', areaId: "r2" },
  { id: 263, name: "Area 29 Branch 321 - Naujan", lat: 13.3238223, lng: 121.3041647, city: "Sample", type: 'Branch', areaId: "r2" },

  // Division 2 District 19
  { id: 264, name: "Area 132 Branch 632 - Sablayan 2", lat: 12.833509, lng: 120.768216, city: "Sample", type: 'Branch', areaId: "s2" },
  { id: 265, name: "Area 132 Branch 519 - Abra De Ilog", lat: 13.44225, lng: 120.72712, city: "Sample", type: 'Branch', areaId: "s2" },
  { id: 266, name: "Area 132 Branch 376 - Mamburao", lat: 13.2248669, lng: 120.5953634, city: "Sample", type: 'Branch', areaId: "s2" },

  // Division 2 District 19
  { id: 267, name: "Area 28 Branch 303 - Socorro", lat: 13.0559071, lng: 121.4048199, city: "Sample", type: 'Branch', areaId: "t2" },
  { id: 268, name: "Area 28 Branch 302 - Bansud", lat: 12.8578094, lng: 121.4554173, city: "Sample", type: 'Branch', areaId: "t2" },
  { id: 269, name: "Area 28 Branch 301 - Pinamalayan", lat: 13.0311067, lng: 121.4874826, city: "Sample", type: 'Branch', areaId: "t2" },
  { id: 270, name: "Area 28 Branch 300 - Bongabong", lat: 12.746207, lng: 121.488022, city: "Sample", type: 'Branch', areaId: "t2" },

  // Divsion 2 District 19
  { id: 271, name: "Area 30 Branch 691 - San jose 2", lat: 12.3523085, lng: 121.0667769, city: "Sample", type: 'Branch', areaId: "u2" },
  { id: 272, name: "Area 30 Branch 469 - Magsaysay", lat: 12.3075983, lng: 121.1440982, city: "Sample", type: 'Branch', areaId: "u2" },
  { id: 273, name: "Area 30 Branch 468 - Rizal", lat: 12.4692056, lng: 121.0228553, city: "Sample", type: 'Branch', areaId: "u2" },
  { id: 274, name: "Area 30 Branch 320 - Mansalay", lat: 12.5216589, lng: 121.4359023, city: "Sample", type: 'Branch', areaId: "u2" },

  // Division 6 District 21
  { id: 275, name: "Area 102 Branch 500 - Monreal", lat: 12.643083, lng: 123.663639, city: "Sample", type: 'Branch', areaId: "v2" },
  { id: 276, name: "Area 102 Branch 498 - San Fernando", lat: 12.482667, lng: 123.763222, city: "Sample", type: 'Branch', areaId: "v2" },

  // Division 6 District 21
  { id: 277, name: "Area 148 Branch 740 - Balud 2", lat: 12.0346524, lng: 123.1960623, city: "Sample", type: 'Branch', areaId: "w2" },
  { id: 278, name: "Area 148 Branch 655 - Baleno", lat: 12.47212773, lng: 123.497555, city: "Sample", type: 'Branch', areaId: "w2" },
  { id: 279, name: "Area 148 Branch 494 - Balud", lat: 12.038194, lng: 123.192944, city: "Sample", type: 'Branch', areaId: "w2" },
  { id: 280, name: "Area 148 Branch 412 - Aroroy", lat: 12.516222, lng: 123.399528, city: "Sample", type: 'Branch', areaId: "w2" },

  // Division 6 District 21
  { id: 281, name: "Area 83 Branch 686 - Mobo", lat: 12.33262, lng: 123.66112, city: "Sample", type: 'Branch', areaId: "x2" },
  { id: 282, name: "Area 83 Branch 439 - Uson", lat: 12.177444, lng: 123.793722, city: "Sample", type: 'Branch', areaId: "x2" },
  { id: 283, name: "Area 83 Branch 437 - Milagros", lat: 12.218611, lng: 123.508056, city: "Sample", type: 'Branch', areaId: "x2" },
  { id: 284, name: "Area 83 Branch 420 - Palanas", lat: 12.148861, lng: 123.918889, city: "Sample", type: 'Branch', areaId: "x2" },

  // Division 6 District 21
  // { id: 285, name: "Area 88 Branch 742 - Cawayan 2", lat: 12.148861, lng: 123.918889, city: "Sample", type: 'Branch', areaId: "y2" },
  { id: 286, name: "Area 88 Branch 685 - Pio Corpuz", lat: 11.88515, lng: 124.04987, city: "Sample", type: 'Branch', areaId: "y2" },
  { id: 287, name: "Area 88 Branch 460 - Placer", lat: 11.867861, lng: 123.918333, city: "Sample", type: 'Branch', areaId: "y2" },
  { id: 288, name: "Area 88 Branch 459 - Cawayan", lat: 11.929278, lng: 123.768972, city: "Sample", type: 'Branch', areaId: "y2" },

  // Division 2 District 18
  { id: 289, name: "Area 95 Branch 516 - San Vicente", lat: 10.5318843, lng: 119.2523938, city: "Sample", type: 'Branch', areaId: "z2" },
  { id: 290, name: "Area 95 Branch 425 - El Nido", lat: 11.2056681, lng: 119.423759, city: "Sample", type: 'Branch', areaId: "z2" },
  { id: 291, name: "Area 95 Branch 421 - Roxas", lat: 10.3185771, lng: 119.3456317, city: "Sample", type: 'Branch', areaId: "z2" },

  // Division 2 District 18
  { id: 292, name: "Area 80 Branch 669 - Aborlan", lat: 9.43981, lng: 118.55098, city: "Sample", type: 'Branch', areaId: "a3" },
  { id: 293, name: "Area 80 Branch 515 - Puerto Princesa 4", lat: 9.997405, lng: 118.7849434, city: "Sample", type: 'Branch', areaId: "a3" },
  { id: 294, name: "Area 80 Branch 470 - Puerto Princesa 3", lat: 9.79923, lng: 118.70062, city: "Sample", type: 'Branch', areaId: "a3" },
  { id: 295, name: "Area 80 Branch 392 - Puerto Princesa 2", lat: 9.7349886, lng: 118.7437675, city: "Sample", type: 'Branch', areaId: "a3" },

  // Division 2 Distritc 18
  { id: 296, name: "Area 82 Branch 717 - Rizal", lat: 9.01421, lng: 117.652687, city: "Sample", type: 'Branch', areaId: "b3" },
  { id: 297, name: "Area 82 Branch 424 - Bataraza", lat: 8.7774523, lng: 117.8334876, city: "Sample", type: 'Branch', areaId: "b3" },
  { id: 298, name: "Area 82 Branch 423 - Brookes Point", lat: 9.7349886, lng: 118.7437675, city: "Sample", type: 'Branch', areaId: "b3" },
  { id: 299, name: "Area 82 Branch 391 - Quezon", lat: 9.2263916, lng: 117.9883241, city: "Sample", type: 'Branch', areaId: "b3" },

  // Division 3 District 10
  { id: 300, name: "Area 91 Branch 630 - Calbayog 2", lat: 12.067075, lng: 124.576536, city: "Sample", type: 'Branch', areaId: "c3" },
  { id: 301, name: "Area 91 Branch 541 - Allen", lat: 12.503946, lng: 124.287637, city: "Sample", type: 'Branch', areaId: "c3" },
  { id: 302, name: "Area 91 Branch 477 - Catarman", lat: 12.502472, lng: 124.639635, city: "Sample", type: 'Branch', areaId: "c3" },

  // Division 3 District 10
  { id: 303, name: "Area 139 Branch 514 - Gandara", lat: 12.036676, lng: 124.65884, city: "Sample", type: 'Branch', areaId: "d3" },
  { id: 304, name: "Area 139 Branch 472 - Jiabong", lat: 11.764528, lng: 124.950736, city: "Sample", type: 'Branch', areaId: "d3" },
  // { id: 305, name: "Area 139 Branch 741 - Calbiga", lat: 11.764528, lng: 124.950736, city: "Sample", type: 'Branch', areaId: "d3" },

  // Division 3 District 10
  { id: 305, name: "Area 90 Branch 701 - Gen. Mac Arthur", lat: 11.24330194, lng: 125.5394316, city: "Sample", type: 'Branch', areaId: "e3" },
  { id: 306, name: "Area 90 Branch 543 - Taft", lat: 11.903198, lng: 125.415232, city: "Sample", type: 'Branch', areaId: "e3" },
  { id: 307, name: "Area 90 Branch 542 - Dolores", lat: 12.03864, lng: 125.486771, city: "Sample", type: 'Branch', areaId: "e3" },
  { id: 308, name: "Area 90 Branch 474 - Guiuan", lat: 11.027237, lng: 125.729564, city: "Sample", type: 'Branch', areaId: "e3" },

  // Division 3 District 10
  { id: 309, name: "Area 116 Branch 660 - Tacloban 2", lat: 11.315093, lng: 124.958925, city: "Sample", type: 'Branch', areaId: "f3" },
  { id: 310, name: "Area 116 Branch 659 - Balangiga", lat: 11.114574, lng: 125.387525, city: "Sample", type: 'Branch', areaId: "f3" },
  { id: 311, name: "Area 116 Branch 475 - Basey", lat: 11.283635, lng: 125.070726, city: "Sample", type: 'Branch', areaId: "f3" },

  // Division 3 District 26
  { id: 312, name: "Area 52 Branch 657 - Tanauan", lat: 11.11015, lng: 125.0165, city: "Sample", type: 'Branch', areaId: "g3" },
  { id: 313, name: "Area 52 Branch 656 - Alangalang", lat: 11.202825, lng: 124.849976, city: "Sample", type: 'Branch', areaId: "g3" },
  { id: 314, name: "Area 52 Branch 345 - Carigara", lat: 11.300459, lng: 124.690188, city: "Sample", type: 'Branch', areaId: "g3" },

  // Division 3 District 26
  { id: 315, name: "Area 140 Branch 722 - San Isidro", lat: 11.416665, lng: 124.3499986, city: "Sample", type: 'Branch', areaId: "h3" },
  { id: 316, name: "Area 140 Branch 719 - Caibiran", lat: 11.5690231, lng: 124.5803623, city: "Sample", type: 'Branch', areaId: "h3" },
  { id: 317, name: "Area 140 Branch 368 - Palompon", lat: 11.05355, lng: 124.384857, city: "Sample", type: 'Branch', areaId: "h3" },
  { id: 318, name: "Area 140 Branch 347 - Naval", lat: 11.564758, lng: 124.400296, city: "Sample", type: 'Branch', areaId: "h3" },

  // Division 3 District 26
  { id: 319, name: "Area 50 Branch 629 - Hilongos", lat: 10.369497, lng: 124.753128, city: "Sample", type: 'Branch', areaId: "i3" },
  { id: 320, name: "Area 50 Branch 306 - Baybay", lat: 10.678538, lng: 124.79823, city: "Sample", type: 'Branch', areaId: "i3" },
  { id: 321, name: "Area 50 Branch 304 - Ormoc", lat: 11.012185, lng: 124.60011, city: "Sample", type: 'Branch', areaId: "i3" },

  // Division 3 District 26
  { id: 322, name: "Area 127 Branch 651 - Burauen", lat: 10.988287, lng: 124.891733, city: "Sample", type: 'Branch', areaId: "j3" },
  { id: 322, name: "Area 127 Branch 505 - Hinunangan", lat: 10.397974, lng: 125.194448, city: "Sample", type: 'Branch', areaId: "j3" },
  { id: 322, name: "Area 127 Branch 433 - Dulag", lat: 10.953836, lng: 125.035345, city: "Sample", type: 'Branch', areaId: "j3" },

  // Division 3 District 26
  { id: 321, name: "Area 51 Branch 434 - Liloan, Southern Leyte", lat: 10.154177, lng: 125.120428, city: "Sample", type: 'Branch', areaId: "k3" },
  { id: 322, name: "Area 51 Branch 343 - Sogod", lat: 10.385249, lng: 124.982823, city: "Sample", type: 'Branch', areaId: "k3" },
  { id: 323, name: "Area 51 Branch 342 - Maasin", lat: 10.130371, lng: 124.862452, city: "Sample", type: 'Branch', areaId: "k3" },

  // Division 3 District 9
  { id: 324, name: "Area 47 Branch 628 - San Remigio", lat: 11.080267, lng: 123.940693, city: "Sample", type: 'Branch', areaId: "l3" },
  { id: 325, name: "Area 47 Branch 535 - Madridejos", lat: 11.295852, lng: 123.730066, city: "Sample", type: 'Branch', areaId: "l3" },
  { id: 326, name: "Area 47 Branch 396 - Medellin", lat: 11.18833, lng: 123.94749, city: "Sample", type: 'Branch', areaId: "l3" },
  { id: 327, name: "Area 47 Branch 315 - Sta. Fe", lat: 11.15944, lng: 123.80239, city: "Sample", type: 'Branch', areaId: "l3" },

  // Division 3 District 9
  { id: 328, name: "Area 49 Branch 683 - Borbon", lat: 10.84749, lng: 123.037007, city: "Sample", type: 'Branch', areaId: "m3" },
  { id: 329, name: "Area 49 Branch 316 - Poro", lat: 10.629266, lng: 124.409063, city: "Sample", type: 'Branch', areaId: "m3" },
  { id: 330, name: "Area 49 Branch 166 - Catmon", lat: 10.72872, lng: 124.00906, city: "Sample", type: 'Branch', areaId: "m3" },
  { id: 331, name: "Area 49 Branch 147 - Tabuelan", lat: 10.82393, lng: 123.87111, city: "Sample", type: 'Branch', areaId: "m3" },

  // Division 3 District 9
  { id: 332, name: "Area 48 Branch 690 - Lapu - Lapu City 2", lat: 10.31036, lng: 124.00547, city: "Sample", type: 'Branch', areaId: "n3" },
  { id: 333, name: "Area 48 Branch 743 - Cordova", lat: 10.26256, lng: 123.94586, city: "Sample", type: 'Branch', areaId: "n3" },
  { id: 334, name: "Area 48 Branch 171 - Lapu - Lapu City ", lat: 10.31396, lng: 123.96289, city: "Sample", type: 'Branch', areaId: "n3" },
  { id: 335, name: "Area 48 Branch 168 - Consolacion", lat: 10.37359, lng: 123.9561, city: "Sample", type: 'Branch', areaId: "n3" },
  { id: 336, name: "Area 48 Branch 167 - Liloan", lat: 10.41437, lng: 123.99718, city: "Sample", type: 'Branch', areaId: "n3" },

  // Division 3 District 9
  { id: 337, name: "Area 105 Branch 745 - Cebu City 3", lat: 10.3053225, lng: 123.8924639, city: "Sample", type: 'Branch', areaId: "o3" },
  { id: 338, name: "Area 105 Branch 249 - Talisay City", lat: 10.26935, lng: 123.846373, city: "Sample", type: 'Branch', areaId: "o3" },
  { id: 339, name: "Area 105 Branch 240 - Cebu City 1", lat: 10.324527, lng: 123.884726, city: "Sample", type: 'Branch', areaId: "o3" },
  { id: 340, name: "Area 105 Branch 208 - Mandue City 1", lat: 10.34626, lng: 123.92917, city: "Sample", type: 'Branch', areaId: "o3" },
  { id: 341, name: "Area 105 Branch 135 - Minglanilla", lat: 10.242786, lng: 123.792674, city: "Sample", type: 'Branch', areaId: "o3" },

  // Division 8 District 8
  { id: 342, name: "Area 42 Branch 604 - San Fernando Cebu", lat: 10.155702, lng: 123.70309, city: "Sample", type: 'Branch', areaId: "p3" },
  { id: 343, name: "Area 42 Branch 146 - Balamban", lat: 10.49276, lng: 123.714878, city: "Sample", type: 'Branch', areaId: "p3" },
  { id: 344, name: "Area 42 Branch 145 - Pinamungajan", lat: 10.279616, lng: 123.58912, city: "Sample", type: 'Branch', areaId: "p3" },
  { id: 345, name: "Area 42 Branch 136 - Naga", lat: 10.213112, lng: 123.760225, city: "Sample", type: 'Branch', areaId: "p3" },

  // Division 8 District 8
  { id: 346, name: "Area 41 Branch 707 - Alegria", lat: 9.741391, lng: 123.34052, city: "Sample", type: 'Branch', areaId: "q3" },
  { id: 347, name: "Area 41 Branch 537 - Duamanjug", lat: 10.058017, lng: 123.432816, city: "Sample", type: 'Branch', areaId: "q3" },
  { id: 348, name: "Area 41 Branch 148 - Barili", lat: 10.116012, lng: 123.504337, city: "Sample", type: 'Branch', areaId: "q3" },

  // Division 8 District 8
  { id: 349, name: "Area 106 Branch 538 - Boljoon", lat: 9.624378, lng: 123.477324, city: "Sample", type: 'Branch', areaId: "r3" },
  { id: 350, name: "Area 106 Branch 138 - Dalaguete", lat: 9.75762, lng: 123.5352, city: "Sample", type: 'Branch', areaId: "r3" },
  { id: 351, name: "Area 106 Branch 134 - Carcar", lat: 10.10481, lng: 123.63663, city: "Sample", type: 'Branch', areaId: "r3" },

  // Division 3 District 27
  { id: 352, name: "Area 46 Branch 218 - Jagna", lat: 9.65485, lng: 124.357624, city: "Sample", type: 'Branch', areaId: "s3" },
  { id: 353, name: "Area 46 Branch 627 - Pilar", lat: 9.832641, lng: 124.329431, city: "Sample", type: 'Branch', areaId: "s3" },
  { id: 354, name: "Area 46 Branch 734 - Candijay", lat: 9.8188999, lng: 124.4966807, city: "Sample", type: 'Branch', areaId: "s3" },
  { id: 355, name: "Area 46 Branch 274 - Guindulman", lat: 9.765479, lng: 124.492525, city: "Sample", type: 'Branch', areaId: "s3" },

  // Division 3 District 27
  { id: 356, name: "Area 141 Branch 744 - Loboc", lat: 9.640319, lng: 124.034035, city: "Sample", type: 'Branch', areaId: "t3" },
  { id: 357, name: "Area 141 Branch 506 - Trinidad", lat: 10.07792, lng: 124.338835, city: "Sample", type: 'Branch', areaId: "t3" },
  { id: 358, name: "Area 141 Branch 398 - Carmen", lat: 9.824865, lng: 124.193662, city: "Sample", type: 'Branch', areaId: "t3" },
  { id: 359, name: "Area 141 Branch 192 - Talibon", lat: 10.148934, lng: 124.323397, city: "Sample", type: 'Branch', areaId: "t3" },

  // Division 3 District 27
  { id: 360, name: "Area 44 Branch 706 - Antequera", lat: 9.781778, lng: 123.898417, city: "Sample", type: 'Branch', areaId: "u3" },
  { id: 361, name: "Area 44 Branch 612 - Catigbian", lat: 9.849817, lng: 123.998704, city: "Sample", type: 'Branch', areaId: "u3" },
  { id: 362, name: "Area 44 Branch 190 - Loon", lat: 9.78261, lng: 123.786513, city: "Sample", type: 'Branch', areaId: "u3" },

  // Division 3 District 27
  { id: 363, name: "Area 45 Branch 615 - Valencia, Bohol", lat: 9.608251, lng: 124.198005, city: "Sample", type: 'Branch', areaId: "v3" },
  { id: 364, name: "Area 45 Branch 397 - Panglao", lat: 9.634125, lng: 123.849581, city: "Sample", type: 'Branch', areaId: "v3" },
  { id: 365, name: "Area 45 Branch 250 - Alburquerque", lat: 9.608396, lng: 123.963417, city: "Sample", type: 'Branch', areaId: "v3" },

  // Division 8 District 7
  { id: 366, name: "Area 115 Branch 635 - Manapla", lat: 10.9577915, lng: 123.1218693, city: "Sample", type: 'Branch', areaId: "w3" },
  { id: 367, name: "Area 115 Branch 443 - Sagay 2", lat: 10.8918328, lng: 123.4167661, city: "Sample", type: 'Branch', areaId: "w3" },
  { id: 368, name: "Area 115 Branch 48  -  Cadiz", lat: 10.9582266, lng: 123.3035064, city: "Sample", type: 'Branch', areaId: "w3" },

  // Division 8 District 7
  // { id: 369, name: "Area 40 Branch 755 -  Toboso", lat: 10.9582266, lng: 123.3035064, city: "Sample", type: 'Branch', areaId: "x3" },
  { id: 370, name: "Area 40 Branch 602 - Calatrava", lat: 10.591929, lng: 123.482962, city: "Sample", type: 'Branch', areaId: "x3" },
  { id: 371, name: "Area 40 Branch 503 - Escalante 2", lat: 10.838307, lng: 123.497573, city: "Sample", type: 'Branch', areaId: "x3" },
  { id: 372, name: "Area 40 Branch 52  - Escalante", lat: 10.8382, lng: 123.499107, city: "Sample", type: 'Branch', areaId: "x3" },

  // Division 8 District 7
  { id: 373, name: "Area 34 Branch 588 - Silay 2", lat: 10.7847558, lng: 122.9709207, city: "Sample", type: 'Branch', areaId: "y3" },
  { id: 374, name: "Area 34 Branch 47 - Victorias", lat: 10.9067926, lng: 123.0774064, city: "Sample", type: 'Branch', areaId: "y3" },
  { id: 375, name: "Area 34 Branch 40 - Talisay", lat: 10.7432113, lng: 122.9733096, city: "Sample", type: 'Branch', areaId: "y3" },

  // Division 8 District 7
  { id: 376, name: "Area 130 Branch 647 - Mandalagan", lat: 10.6878601, lng: 122.972218, city: "Sample", type: 'Branch', areaId: "z3" },
  { id: 377, name: "Area 130 Branch 637 - Murcia 2", lat: 10.55178, lng: 123.079546, city: "Sample", type: 'Branch', areaId: "z3" },
  { id: 378, name: "Area 130 Branch 555 - Murcia", lat: 10.6207946, lng: 123.0196021, city: "Sample", type: 'Branch', areaId: "z3" },
  { id: 379, name: "Area 130 Branch 37 -  Mansiligan 2", lat: 10.6488368, lng: 122.9627155, city: "Sample", type: 'Branch', areaId: "z3" },

  // Division 8 DIstrict 7
  { id: 380, name: "Area 34 Branch 590 - Tangub 3", lat: 10.597427, lng: 122.919139, city: "Sample", type: 'Branch', areaId: "a4" },
  { id: 381, name: "Area 34 Branch 571 - Montevista 2", lat: 10.6681725, lng: 122.9903148, city: "Sample", type: 'Branch', areaId: "a4" },
  { id: 382, name: "Area 34 Branch 504 - Tangub 2", lat: 10.6353971, lng: 122.9358526, city: "Sample", type: 'Branch', areaId: "a4" },
  { id: 383, name: "Area 34 Branch 35 -  Montevista 1", lat: 10.6655387, lng: 122.9552339, city: "Sample", type: 'Branch', areaId: "a4" },

  // Division 8 District 32
  { id: 384, name: "Area 43 Branch 442 - Bago 2", lat: 10.4945473, lng: 122.9690457, city: "Sample", type: 'Branch', areaId: "b4" },
  { id: 385, name: "Area 43 Branch 56  - La Castellana", lat: 10.320916, lng: 123.0206436, city: "Sample", type: 'Branch', areaId: "b4" },
  { id: 386, name: "Area 43 Branch 45  - La Carlota", lat: 10.4305077, lng: 122.9233511, city: "Sample", type: 'Branch', areaId: "b4" },
  { id: 387, name: "Area 43 Branch 43  - Valladolid", lat: 10.458452, lng: 122.825655, city: "Sample", type: 'Branch', areaId: "b4" },

  // Division 3 District 27
  { id: 388, name: "Area 43 Branch 649 - Isabela", lat: 10.2089754, lng: 122.9838533, city: "Sample", type: 'Branch', areaId: "c4" },
  { id: 389, name: "Area 43 Branch 592 - Pontevedra", lat: 10.369694, lng: 122.86775, city: "Sample", type: 'Branch', areaId: "c4" },
  { id: 390, name: "Area 43 Branch 589 - Himamaylan", lat: 10.1018597, lng: 122.8721906, city: "Sample", type: 'Branch', areaId: "c4" },
  { id: 391, name: "Area 43 Branch 46  - Binalbagan", lat: 10.1952373, lng: 122.8670026, city: "Sample", type: 'Branch', areaId: "c4" },

  // Division 8 District 32
  { id: 392, name: "Area 43 Branch 711 - Jimalalud", lat: 9.975917, lng: 123.197333, city: "Sample", type: 'Branch', areaId: "d4" },
  { id: 393, name: "Area 43 Branch 513 - Canlaon", lat: 10.385555, lng: 123.22447, city: "Sample", type: 'Branch', areaId: "d4" },
  { id: 394, name: "Area 43 Branch 66  - Tayasan", lat: 9.865806, lng: 123.14594, city: "Sample", type: 'Branch', areaId: "d4" },

  // Division 8 District 32
  { id: 395, name: "Area 37 Branch 650 - Kabankalan 2", lat: 9.992837, lng: 122.812367, city: "Sample", type: 'Branch', areaId: "e4" },
  { id: 396, name: "Area 37 Branch 370 - Mabinay", lat: 9.722656, lng: 122.930323, city: "Sample", type: 'Branch', areaId: "e4" },
  { id: 397, name: "Area 37 Branch 57  - Sipalay", lat: 9.748265, lng: 122.401084, city: "Sample", type: 'Branch', areaId: "e4" },
  { id: 398, name: "Area 37 Branch 50  - Cauayan", lat: 9.972258, lng: 122.622872, city: "Sample", type: 'Branch', areaId: "e4" },

  // Division 8 District 8
  { id: 399, name: "Area 38 Branch 680 - Pamplona", lat: 9.472009, lng: 123.120836, city: "Sample", type: 'Branch', areaId: "f4" },
  { id: 400, name: "Area 38 Branch 169 - Santander", lat: 9.456904, lng: 123.30274, city: "Sample", type: 'Branch', areaId: "f4" },
  { id: 401, name: "Area 38 Branch 59  - Bais City", lat: 9.5872278, lng: 123.1193089, city: "Sample", type: 'Branch', areaId: "f4" },

  // Division 8 District 32
  { id: 402, name: "Area 134 Branch 77  - Bayawan 2", lat: 9.368276, lng: 122.805201, city: "Sample", type: 'Branch', areaId: "g4" },
  { id: 403, name: "Area 134 Branch 76  - Siaton", lat: 9.063265, lng: 123.035158, city: "Sample", type: 'Branch', areaId: "g4" },
  { id: 404, name: "Area 134 Branch 678 - Hinoba-an", lat: 9.598479, lng: 122.470218, city: "Sample", type: 'Branch', areaId: "g4" },

  // Division 6 District 30
  { id: 405, name: "Area 39 Branch 758 - Valencia", lat: 9.2950013, lng: 123.2455463, city: "Sample", type: 'Branch', areaId: "h4" },
  { id: 406, name: "Area 39 Branch 687 - Dauin", lat: 9.185715, lng: 123.260712, city: "Sample", type: 'Branch', areaId: "h4" },
  { id: 407, name: "Area 39 Branch 636 - Dumaguete 2", lat: 9.297437, lng: 123.300286, city: "Sample", type: 'Branch', areaId: "h4" },

  // Division 8 District 8
  { id: 408, name: "Area 152 Branch 760 - Siquijor 3", lat: 9.21402778, lng: 123.47488889, city: "Sample", type: 'Branch', areaId: "i4" },
  { id: 409, name: "Area 152 Branch 79  - Sibulan", lat: 9.35842, lng: 123.287759, city: "Sample", type: 'Branch', areaId: "i4" },
  { id: 410, name: "Area 152 Branch 314 - Siquijor", lat: 9.242664, lng: 123.579062, city: "Sample", type: 'Branch', areaId: "i4" },

  // Division 5 District 14
  { id: 411, name: "Area 145 Branch 694 - Cagdianao", lat: 9.921525, lng: 125.671307, city: "Sample", type: 'Branch', areaId: "j4" },
  { id: 412, name: "Area 145 Branch 668 - Libjo", lat: 10.198492, lng: 125.536061, city: "Sample", type: 'Branch', areaId: "j4" },
  { id: 413, name: "Area 145 Branch 646 - San Jose", lat: 10.00938, lng: 125.574227, city: "Sample", type: 'Branch', areaId: "j4" },
  // { id: 414, name: "Area 145 Branch 747 -  Sison", lat: 9.242664, lng: 123.579062, city: "Sample", type: 'Branch', areaId: "m4" },

  // Division 5 District 14
  { id: 414, name: "Area 71 Branch 549 - Kitcharao", lat: 9.450518, lng: 125.575231, city: "Sample", type: 'Branch', areaId: "k4" },
  { id: 415, name: "Area 71 Branch 491 - Siargao 2", lat: 9.867279, lng: 125.972815, city: "Sample", type: 'Branch', areaId: "k4" },
  { id: 416, name: "Area 71 Branch 490 - siargao 1", lat: 9.75834, lng: 126.054936, city: "Sample", type: 'Branch', areaId: "k4" },

  // Division 5 District 14
  { id: 417, name: "Area 70 Branch 550 - Gamut", lat: 9.004811, lng: 126.165843, city: "Sample", type: 'Branch', areaId: "l4" },
  { id: 418, name: "Area 70 Branch 479 - Claver", lat: 9.574511, lng: 125.730487, city: "Sample", type: 'Branch', areaId: "l4" },
  { id: 419, name: "Area 70 Branch 329 - Cantilan", lat: 9.332699, lng: 125.97356, city: "Sample", type: 'Branch', areaId: "l4" },
  { id: 420, name: "Area 70 Branch 327 - San Agustin", lat: 8.831643, lng: 126.217498, city: "Sample", type: 'Branch', areaId: "l4" },

  // Division 5 District 14
  { id: 421, name: "Area 68 Branch 710 - Butuan City 3", lat: 8.961685, lng: 125.604665, city: "Sample", type: 'Branch', areaId: "m4" },
  { id: 422, name: "Area 68 Branch 255 - Cabadbaran", lat: 9.119031, lng: 125.531494, city: "Sample", type: 'Branch', areaId: "m4" },
  { id: 423, name: "Area 68 Branch 179 - Nasipit", lat: 8.984456, lng: 125.341696, city: "Sample", type: 'Branch', areaId: "m4" },
  { id: 424, name: "Area 68 Branch 178 - Butuan 2", lat: 8.94496, lng: 125.487336, city: "Sample", type: 'Branch', areaId: "m4" },

  // Division 5 District 14
  { id: 425, name: "Area 123 Branch 575 - Prosperidad", lat: 8.600569, lng: 125.911696, city: "Sample", type: 'Branch', areaId: "n4" },
  { id: 426, name: "Area 123 Branch 478 - Tagbina", lat: 8.453087, lng: 126.163497, city: "Sample", type: 'Branch', areaId: "n4" },
  { id: 427, name: "Area 123 Branch 326 - Mangagoy", lat: 8.183167, lng: 126.355752, city: "Sample", type: 'Branch', areaId: "n4" },
  { id: 428, name: "Area 123 Branch 226 - Bayugan", lat: 8.714517, lng: 125.758165, city: "Sample", type: 'Branch', areaId: "n4" },

  // Division 5 District 13
  { id: 429, name: "Area 69 Branch 591 - Salay", lat: 8.856319, lng: 124.786437, city: "Sample", type: 'Branch', areaId: "o4" },
  { id: 430, name: "Area 69 Branch 359 - Camiguin", lat: 9.242073, lng: 124.728831, city: "Sample", type: 'Branch', areaId: "o4" },
  // { id: 431, name: "Area 69 Branch 746 - Magsaysay", lat: 8.714517, lng: 125.758165, city: "Sample", type: 'Branch', areaId: "o4" },
  { id: 432, name: "Area 69 Branch 181 - Gingoog", lat: 8.827339, lng: 125.102257, city: "Sample", type: 'Branch', areaId: "o4" },

  // Division 5 District 13
  { id: 433, name: "Area 144 Branch 667 - Claveria", lat: 8.61263, lng: 124.88892, city: "Sample", type: 'Branch', areaId: "p4" },
  { id: 434, name: "Area 144 Branch 162 - Balingasag", lat: 8.74132, lng: 124.776154, city: "Sample", type: 'Branch', areaId: "p4" },
  { id: 435, name: "Area 144 Branch 159 - Tagoloan", lat: 8.533596, lng: 124.754118, city: "Sample", type: 'Branch', areaId: "p4" },

  // Division 5 District 13
  { id: 436, name: "Area 122 Branch 654 - Kisolon", lat: 8.333491, lng: 124.97646, city: "Sample", type: 'Branch', areaId: "q4" },
  { id: 437, name: "Area 122 Branch 141 - Bugo", lat: 8.509085, lng: 124.76587, city: "Sample", type: 'Branch', areaId: "q4" },
  { id: 438, name: "Area 122 Branch 133 - Manolo Fortich", lat: 8.370473, lng: 124.859642, city: "Sample", type: 'Branch', areaId: "q4" },
  
  // Division 5 District 13
  { id: 439, name: "Area 66 Branch 552 - Talakag", lat: 8.230746, lng: 124.599478, city: "Sample", type: 'Branch', areaId: "r4" },
  { id: 440, name: "Area 66 Branch 142 - Camaman-an", lat: 8.474451, lng: 124.660803, city: "Sample", type: 'Branch', areaId: "r4" },
  { id: 441, name: "Area 66 Branch 140 - Bulua", lat: 8.503875, lng: 124.614203, city: "Sample", type: 'Branch', areaId: "r4" },
  { id: 442, name: "Area 66 Branch 139 - Balulang", lat: 8.45471, lng: 124.624517, city: "Sample", type: 'Branch', areaId: "r4" },

  // Division 5 District 20
  { id: 443, name: "Area 65 Branch 551 - Manticao", lat: 8.393912, lng: 124.282735, city: "Sample", type: 'Branch', areaId: "s4" },
  { id: 444, name: "Area 65 Branch 204 - Initao", lat: 8.497702, lng: 124.303821, city: "Sample", type: 'Branch', areaId: "s4" },
  { id: 445, name: "Area 65 Branch 202 - Iligan 2", lat: 8.239943, lng: 124.241107, city: "Sample", type: 'Branch', areaId: "s4" },
  { id: 446, name: "Area 65 Branch 160 - El Salvador City", lat: 8.560044, lng: 124.52258, city: "Sample", type: 'Branch', areaId: "s4" },

  // Division 5 District 20
  { id: 447, name: "Area 63 Branch 616 - Tangub City", lat: 8.061662, lng: 123.746064, city: "Sample", type: 'Branch', areaId: "t4" },
  { id: 448, name: "Area 63 Branch 400 - Maigo", lat: 8.163417, lng: 123.954605, city: "Sample", type: 'Branch', areaId: "t4" },
  // { id: 449, name: "Area 63 Branch 750 - Clarin", lat: 8.497702, lng: 124.303821, city: "Sample", type: 'Branch', areaId: "t4" },
  { id: 450, name: "Area 63 Branch 201 - Iligan 1", lat: 8.210397, lng: 124.226737, city: "Sample", type: 'Branch', areaId: "t4" },

  // Division 5 District 20
  { id: 451, name: "Area 98 Branch 626 - Lala 2", lat: 7.972343, lng: 123.747912, city: "Sample", type: 'Branch', areaId: "u4" },
  { id: 452, name: "Area 98 Branch 574 - Kapatagan", lat: 7.899423, lng: 123.773648, city: "Sample", type: 'Branch', areaId: "u4" },
  { id: 453, name: "Area 98 Branch 492 - Aurora", lat: 7.945377, lng: 123.582552, city: "Sample", type: 'Branch', areaId: "u4" },
  { id: 454, name: "Area 98 Branch 480 - Tubod", lat: 8.048941, lng: 123.795187, city: "Sample", type: 'Branch', areaId: "u4" },

  // Division 5 District 20
  { id: 455, name: "Area 133 Branch 643 - Plaridel", lat: 8.606158, lng: 123.721977, city: "Sample", type: 'Branch', areaId: "v4" },
  { id: 456, name: "Area 133 Branch 264 - Dapitan", lat: 8.652562, lng: 123.424297, city: "Sample", type: 'Branch', areaId: "v4" },
  { id: 457, name: "Area 133 Branch 262 - Oroquieta", lat: 8.479655, lng: 123.795786, city: "Sample", type: 'Branch', areaId: "v4" },
  { id: 458, name: "Area 133 Branch 261 - Jimenez", lat: 8.334189, lng: 123.837312, city: "Sample", type: 'Branch', areaId: "v4" },

  // Divison 5 Districtc 29
  // { id: 459, name: "Area 64 Branch 738 - Polanco", lat: 8.334189, lng: 123.837312, city: "Sample", type: 'Branch', areaId: "w4" },
  { id: 460, name: "Area 64 Branch 358 - Sindangan", lat: 8.23621, lng: 123.00001, city: "Sample", type: 'Branch', areaId: "w4" },
  { id: 461, name: "Area 64 Branch 263 - Dipolog", lat: 8.589606, lng: 123.340974, city: "Sample", type: 'Branch', areaId: "w4" },

  // Division 5 District 29
  { id: 462, name: "Area 124 Branch 613 - San Miguel", lat: 7.647282, lng: 123.267257, city: "Sample", type: 'Branch', areaId: "x4" },
  { id: 463, name: "Area 124 Branch 495 - Mahayag", lat: 8.118298, lng: 123.436171, city: "Sample", type: 'Branch', areaId: "x4" },
  { id: 464, name: "Area 124 Branch 489 - Buug", lat: 7.731519, lng: 123.061069, city: "Sample", type: 'Branch', areaId: "x4" },
  { id: 465, name: "Area 124 Branch 334 - Molave 1", lat: 8.100321, lng: 123.482665, city: "Sample", type: 'Branch', areaId: "x4" },

  // Division 5 District 29
  { id: 466, name: "Area 97 Branch 556 - Kabasalan", lat: 7.801782, lng: 122.754806, city: "Sample", type: 'Branch', areaId: "y4" },
  { id: 467, name: "Area 97 Branch 488 - Imelda", lat: 7.640868, lng: 122.932389, city: "Sample", type: 'Branch', areaId: "y4" },
  { id: 468, name: "Area 97 Branch 409 - Ipil", lat: 7.786708, lng: 122.584213, city: "Sample", type: 'Branch', areaId: "y4" },
  { id: 469, name: "Area 97 Branch 406 - Liloy", lat: 8.12089, lng: 122.68332, city: "Sample", type: 'Branch', areaId: "y4" },

  // Division 5 District 29
  // { id: 470, name: "Area 146 Branch 737 - Zamboanga City 4", lat: 8.12089, lng: 122.68332, city: "Sample", type: 'Branch', areaId: "z4" },
  { id: 471, name: "Area 146 Branch 723 - Zamboanga City 3", lat: 6.93011, lng: 122.064263, city: "Sample", type: 'Branch', areaId: "z4" },
  { id: 472, name: "Area 146 Branch 712 - Zamboanga City 4", lat: 6.9339151, lng: 122.0882141, city: "Sample", type: 'Branch', areaId: "z4" },

  // Division 5 District 13
  { id: 473, name: "Area 146 Branch 718 - Aglayan", lat: 8.055504, lng: 125.136724, city: "Sample", type: 'Branch', areaId: "a5" },
  { id: 474, name: "Area 146 Branch 655 - Quezon", lat: 7.744889, lng: 125.115559, city: "Sample", type: 'Branch', areaId: "a5" },
  { id: 475, name: "Area 146 Branch 577 - Cabanglasan", lat: 8.078778, lng: 125.301835, city: "Sample", type: 'Branch', areaId: "a5" },
  { id: 476, name: "Area 146 Branch 130 - Malaybalay City", lat: 8.141248, lng: 125.120817, city: "Sample", type: 'Branch', areaId: "a5" },

  // Division 4 District 25
  { id: 477, name: "Area 121 Branch 595 - Veruela", lat: 8.025395, lng: 125.946502, city: "Sample", type: 'Branch', areaId: "b5" },
  { id: 478, name: "Area 121 Branch 195 - Trento", lat: 8.0391, lng: 126.062527, city: "Sample", type: 'Branch', areaId: "b5" },
  { id: 479, name: "Area 121 Branch 183 - Compostela", lat: 7.673405, lng: 126.090435, city: "Sample", type: 'Branch', areaId: "b5" },

  // Division 4 District 25
  { id: 480, name: "Area 84 Branch 564 - Compostela 2", lat: 7.662362, lng: 126.087077, city: "Sample", type: 'Branch', areaId: "c5" },
  { id: 481, name: "Area 84 Branch 411 - Manay", lat: 7.219329, lng: 126.542005, city: "Sample", type: 'Branch', areaId: "c5" },
  { id: 482, name: "Area 84 Branch 410 - Banganga", lat: 7.574958, lng: 126.560586, city: "Sample", type: 'Branch', areaId: "c5" },

  // Division 4 District 25
  { id: 483, name: "Area 103 Branch 573 - Asuncion", lat: 7.54054, lng: 125.752235, city: "Sample", type: 'Branch', areaId: "d5" },
  { id: 484, name: "Area 103 Branch 482 - Laak", lat: 7.81544, lng: 125.787151, city: "Sample", type: 'Branch', areaId: "d5" },
  { id: 485, name: "Area 103 Branch 271 - Kapalong", lat: 7.585125, lng: 125.712508, city: "Sample", type: 'Branch', areaId: "d5" },

  // Division 4 District 25
  { id: 486, name: "Area 53 Branch 642 - Mawab", lat: 7.511381, lng: 125.924503, city: "Sample", type: 'Branch', areaId: "e5" },
  { id: 487, name: "Area 53 Branch 517 - Maragusan", lat: 7.318013, lng: 126.118319, city: "Sample", type: 'Branch', areaId: "e5" },
  { id: 488, name: "Area 53 Branch 101 - Tagum City 2", lat: 7.457001, lng: 125.811372, city: "Sample", type: 'Branch', areaId: "e5" },
  { id: 489, name: "Area 53 Branch 100 - Tagum City 1", lat: 7.455795, lng: 125.81553, city: "Sample", type: 'Branch', areaId: "e5" },

  // Division 4 District 11
  { id: 490, name: "Area 56 Branch 562 - Carmen", lat: 7.351007, lng: 125.705745, city: "Sample", type: 'Branch', areaId: "f5" },
  { id: 491, name: "Area 56 Branch 518 - Sto. Thomas 2", lat: 7.531635, lng: 125.627858, city: "Sample", type: 'Branch', areaId: "f5" },
  { id: 492, name: "Area 56 Branch 184 - Sto. Thomas", lat: 7.531801, lng: 125.628039, city: "Sample", type: 'Branch', areaId: "f5" },
  { id: 493, name: "Area 56 Branch 97  - Panabo City 1", lat: 7.29868, lng: 125.6831, city: "Sample", type: 'Branch', areaId: "f5" },

  // Division 4 District 25
  { id: 494, name: "Area 57 Branch 695 - Maco", lat: 7.3704027, lng: 125.8519015, city: "Sample", type: 'Branch', areaId: "g5" },
  { id: 495, name: "Area 57 Branch 286 - Mati City", lat: 6.958369, lng: 126.210651, city: "Sample", type: 'Branch', areaId: "g5" },
  { id: 496, name: "Area 57 Branch 285 - Governor Generoso", lat: 6.627007, lng: 126.080045, city: "Sample", type: 'Branch', areaId: "g5" },
  { id: 497, name: "Area 57 Branch 284 - Lupon", lat: 6.893685, lng: 126.010904, city: "Sample", type: 'Branch', areaId: "g5" },

  // Division 4 District 11
  { id: 498, name: "Area 117 Branch 603 - Samal 3", lat: 7.086194, lng: 125.703701, city: "Sample", type: 'Branch', areaId: "h5" },
  { id: 499, name: "Area 117 Branch 481 - Samal 2", lat: 6.961981, lng: 125.725039, city: "Sample", type: 'Branch', areaId: "h5" },
  { id: 500, name: "Area 117 Branch 182 - Samal 1", lat: 7.138585, lng: 125.691739, city: "Sample", type: 'Branch', areaId: "h5" },
  { id: 501, name: "Area 117 Branch 64  - Agdao", lat: 7.09401, lng: 125.639307, city: "Sample", type: 'Branch', areaId: "h5" },

  // Division 4 District 11
  { id: 502, name: "Area 55 Branch 631 - Ma-a", lat: 7.08055, lng: 125.59005, city: "Sample", type: 'Branch', areaId: "i5" },
  { id: 503, name: "Area 55 Branch 497 - Bunawan Davao City", lat: 7.237634, lng: 125.636344, city: "Sample", type: 'Branch', areaId: "i5" },
  { id: 504, name: "Area 55 Branch 436 - Tibungco", lat: 7.19176, lng: 125.642885, city: "Sample", type: 'Branch', areaId: "i5" },
  { id: 505, name: "Area 55 Branch 63  - Matina", lat: 7.051866, lng: 125.58276, city: "Sample", type: 'Branch', areaId: "i5" },

  // Division 4 District 11
  { id: 506, name: "Area 54 Branch 721 - Marilog", lat: 7.276847, lng: 125.311565, city: "Sample", type: 'Branch', areaId: "j5" },
  { id: 507, name: "Area 54 Branch 337 - Calinan", lat: 7.185891, lng: 125.453831, city: "Sample", type: 'Branch', areaId: "j5" },
  { id: 508, name: "Area 54 Branch 80  - Toril 2", lat: 7.01004, lng: 125.49784, city: "Sample", type: 'Branch', areaId: "j5" },
  { id: 509, name: "Area 54 Branch 71  - Toril 1", lat: 7.008863, lng: 125.49902, city: "Sample", type: 'Branch', areaId: "j5" },

  // Division 5 District 13
  { id: 510, name: "Area 67 Branch 593 - Kalilangan", lat: 7.7417, lng: 124.750149, city: "Sample", type: 'Branch', areaId: "k5" },
  { id: 511, name: "Area 67 Branch 510 - Kibawe", lat: 7.56993, lng: 124.990832, city: "Sample", type: 'Branch', areaId: "k5" },
  { id: 512, name: "Area 67 Branch 408 - Wao", lat: 7.641329, lng: 124.72863, city: "Sample", type: 'Branch', areaId: "k5" },
  { id: 513, name: "Area 67 Branch 132 - Don Carlos", lat: 7.68004, lng: 124.96233, city: "Sample", type: 'Branch', areaId: "k5" },

  // Divisin 4 District 22
  { id: 514, name: "Area 104 Branch 645 - Magpet", lat: 7.102456, lng: 125.119305, city: "Sample", type: 'Branch', areaId: "l5" },
  { id: 515, name: "Area 104 Branch 596 - Arakan", lat: 7.345644, lng: 125.128549, city: "Sample", type: 'Branch', areaId: "l5" },
  { id: 516, name: "Area 104 Branch 426 - Antipas", lat: 7.250513, lng: 125.055724, city: "Sample", type: 'Branch', areaId: "l5" },

  // Division 4 District 22
  { id: 517, name: "Area 143 Branch 576 - Makilala", lat: 6.959478, lng: 125.088473, city: "Sample", type: 'Branch', areaId: "m5" },
  { id: 518, name: "Area 143 Branch 511 - Mlang", lat: 6.942483, lng: 124.88358, city: "Sample", type: 'Branch', areaId: "m5" },
  { id: 519, name: "Area 143 Branch 206 - Matalam", lat: 7.086326, lng: 124.898622, city: "Sample", type: 'Branch', areaId: "m5" },

  // Division 4 District 28
  { id: 520, name: "Area 62 Branch 700 - Alamada", lat: 7.38079, lng: 124.560712, city: "Sample", type: 'Branch', areaId: "n5" },
  { id: 521, name: "Area 62 Branch 536 - Kabacan", lat: 7.106686, lng: 124.821215, city: "Sample", type: 'Branch', areaId: "n5" },
  { id: 522, name: "Area 62 Branch 532 - Libungan", lat: 7.240072, lng: 124.52203, city: "Sample", type: 'Branch', areaId: "n5" },
  // { id: 523, name: "Area 62 Branch 739 - Aleosan", lat: 7.086326, lng: 124.898622, city: "Sample", type: 'Branch', areaId: "n5" },

  // Division 4 District 22
  { id: 523, name: "Area 61 Branch 611 - Matanao", lat: 6.705531, lng: 125.216488, city: "Sample", type: 'Branch', areaId: "o5" },
  { id: 524, name: "Area 61 Branch 563 - Sta. Cruz", lat: 6.843238, lng: 125.410159, city: "Sample", type: 'Branch', areaId: "o5" },
  { id: 525, name: "Area 61 Branch 83  - Bansalan", lat: 6.77512, lng: 125.219551, city: "Sample", type: 'Branch', areaId: "o5" },
  { id: 526, name: "Area 61 Branch 81  - Digos City 1", lat: 6.742265, lng: 125.355894, city: "Sample", type: 'Branch', areaId: "o5" },

  // Division 4 District 22
  { id: 527, name: "Area 120 Branch 597 - Sulop", lat: 6.599443, lng: 125.342143, city: "Sample", type: 'Branch', areaId: "p5" },
  { id: 528, name: "Area 120 Branch 502 - Sta. Maria", lat: 6.558108, lng: 125.472552, city: "Sample", type: 'Branch', areaId: "p5" },
  { id: 529, name: "Area 120 Branch 336 - Malita", lat: 6.415697, lng: 125.604813, city: "Sample", type: 'Branch', areaId: "p5" },

  // Division 4 District 28
  { id: 530, name: "Area 119 Branch 703 - Esperanza", lat: 6.7203, lng: 124.5173, city: "Sample", type: 'Branch', areaId: "q5" },
  { id: 531, name: "Area 119 Branch 582 - Kalamansig", lat: 6.552497, lng: 124.051899, city: "Sample", type: 'Branch', areaId: "q5" },
  { id: 532, name: "Area 119 Branch 572 - Lebak Sultan Kudarat", lat: 6.632278, lng: 124.067944, city: "Sample", type: 'Branch', areaId: "q5" },

  // Division 4 District 28
  { id: 533, name: "Area 60 Branch 610 - Tacurong 2", lat: 6.694002, lng: 124.684328, city: "Sample", type: 'Branch', areaId: "r5" },
  { id: 534, name: "Area 60 Branch 540 - Sen. Ninoy Aquino", lat: 6.461304, lng: 124.332788, city: "Sample", type: 'Branch', areaId: "r5" },
  { id: 535, name: "Area 60 Branch 127 - Tacurong 1", lat: 6.684269, lng: 124.67315, city: "Sample", type: 'Branch', areaId: "r5" },
  { id: 536, name: "Area 60 Branch 126 - Isulan 1", lat: 6.619041703526523, lng: 124.59922828618792, city: "Sample", type: 'Branch', areaId: "r5" },

  // Division 4 District 12
  { id: 537, name: "Area 142 Branch 688 - Columbio", lat: 6.683042, lng: 124.957727, city: "Sample", type: 'Branch', areaId: "s5" },
  { id: 538, name: "Area 142 Branch 583 - Tupi", lat: 6.331583, lng: 124.953639, city: "Sample", type: 'Branch', areaId: "s5" },
  { id: 539, name: "Area 142 Branch 124 - Koronodal 2", lat: 6.492166, lng: 124.84367, city: "Sample", type: 'Branch', areaId: "s5" },

  // Division 4 District 12
  { id: 540, name: "Area 59 Branch 702 - Tboli 2", lat: 6.213213, lng: 124.819334, city: "Sample", type: 'Branch', areaId: "t5" },
  { id: 541, name: "Area 59 Branch 606 - Tboli", lat: 6.219309, lng: 124.820644, city: "Sample", type: 'Branch', areaId: "t5" },
  { id: 542, name: "Area 59 Branch 539 - Lake Sebu", lat: 6.22323, lng: 124.71167, city: "Sample", type: 'Branch', areaId: "t5" },
  { id: 543, name: "Area 59 Branch 125 - Surallah 1", lat: 6.308534, lng: 124.753593, city: "Sample", type: 'Branch', areaId: "t5" },

  // Division 4 District 12
  { id: 544, name: "Area 118 Branch 714 - Palimbang", lat: 6.156917, lng: 124.281222, city: "Sample", type: 'Branch', areaId: "u5" },
  { id: 545, name: "Area 118 Branch 584 - Kiamba", lat: 5.989194, lng: 124.624889, city: "Sample", type: 'Branch', areaId: "u5" },
  { id: 546, name: "Area 118 Branch 501 - Maitum", lat: 6.058007, lng: 124.494613, city: "Sample", type: 'Branch', areaId: "u5" },

  // Division 4 District 12
  { id: 547, name: "Area 58 Branch 638 - General Santos City 4", lat: 6.133833, lng: 125.182833, city: "Sample", type: 'Branch', areaId: "v5" },
  { id: 548, name: "Area 58 Branch 516 - General Santos City 3", lat: 6.07205, lng: 125.141357, city: "Sample", type: 'Branch', areaId: "v5" },
  { id: 549, name: "Area 58 Branch 110 - Polomolok", lat: 6.228784, lng: 125.079541, city: "Sample", type: 'Branch', areaId: "v5" },
  { id: 550, name: "Area 58 Branch 107 - General Santos City 1", lat: 6.124541, lng: 125.167887, city: "Sample", type: 'Branch', areaId: "v5" },

  // Division 4 District 12
  { id: 551, name: "Area 96 Branch 520 - Malungon 2", lat: 6.372953, lng: 125.273166, city: "Sample", type: 'Branch', areaId: "w5" },
  // { id: 552, name: "Area 96 Branch 732 - Malapatan", lat: 6.228784, lng: 125.079541, city: "Sample", type: 'Branch', areaId: "w5" },
  { id: 553, name: "Area 96 Branch 395 - Malungon", lat: 6.30712, lng: 125.253629, city: "Sample", type: 'Branch', areaId: "w5" },
  { id: 554, name: "Area 96 Branch 338 - Glan", lat: 5.819755, lng: 125.202169, city: "Sample", type: 'Branch', areaId: "w5" },

];

export const NoAreaBranch: Branch [] = [
  
  // Division 8 District 7
  { id: 555, name: "Area 155 Branch 748 - Iloilo City", lat: 10.691216, lng: 122.575288, city: "Sample", type: 'NoArea', },
  // { id: 556, name: "Area 155 Branch 749 - Jaro", lat: 10.691216, lng: 122.575288, city: "Sample", type: 'Branch', areaId: "" },

  // Division 4 District 28
  { id: 557, name: "Area 154 Branch 731 - Parang", lat: 7.3702116, lng: 124.2677659, city: "Sample", type: 'NoArea', },
  // { id: 558, name: "Area 154 Branch 724 - Cotabato City 1", lat: 7.3702116, lng: 124.2677659, city: "Sample", type: 'Branch', areaId: "" },
  // { id: 559, name: "Area 154 Branch 730 - Awang", lat: 7.3702116, lng: 124.2677659, city: "Sample", type: 'Branch', areaId: "" },
];