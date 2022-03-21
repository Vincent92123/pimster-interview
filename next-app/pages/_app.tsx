import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.css";
//import { createInterfacesFromObject } from 'typescript-interface-generator'

//Code to generate TypeScript Interface for Launch Object from api.spacex.land/graphql

// const code = createInterfacesFromObject(
//   'Launches',
//   {
//     id: 1,
//     data: {
//       "launchesPast": [
//         {
//           "mission_name": "Starlink-15 (v1.0)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-10-24T11:31:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": null,
//           "links": {
//             "flickr_images": []
//           }
//         },
//         {
//           "mission_name": "Sentinel-6 Michael Freilich",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-11-21T09:17:00-08:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
//           },
//           "details": "SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg",
//               "https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg",
//               "https://live.staticflickr.com/65535/50631544171_66bd43eaa9_o.jpg",
//               "https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg",
//               "https://live.staticflickr.com/65535/50631643257_c214ceee7b_o.jpg",
//               "https://live.staticflickr.com/65535/50631643917_cb7db291d0_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Crew-1",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-11-15T19:27:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
//               "https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg",
//               "https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg",
//               "https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg",
//               "https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg",
//               "https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg",
//               "https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg",
//               "https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg",
//               "https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg",
//               "https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg",
//               "https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg",
//               "https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg",
//               "https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg",
//               "https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg",
//               "https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg",
//               "https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg",
//               "https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "GPS III SV04 (Sacagawea)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-11-05T18:24:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.",
//           "links": {
//             "flickr_images": []
//           }
//         },
//         {
//           "mission_name": "Starlink-14 (v1.0)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-10-24T11:31:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the fourteenth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Kennedy Space Center. It is the fifteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI.",
//           "links": {
//             "flickr_images": []
//           }
//         },
//         {
//           "mission_name": "Starlink-13 (v1.0)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-10-18T08:25:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "This mission will launch the thirteenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the fourteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg",
//               "https://live.staticflickr.com/65535/50501674637_f16f528728_o.jpg",
//               "https://live.staticflickr.com/65535/50501515611_2a3753bed1_o.jpg",
//               "https://live.staticflickr.com/65535/50501674632_0d5276b1b5_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink-12 (v1.0)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-10-06T07:29:00-04:00",
//           "launch_success": null,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "This mission will launch the twelfth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral Air Force Station. It is the thirteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50428228397_6151927733_o.jpg",
//               "https://live.staticflickr.com/65535/50427359318_67b3397892_o.jpg",
//               "https://live.staticflickr.com/65535/50428050591_36defbe958_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink-11 (v1.0)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-09-03T08:46:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "The 11th operational batch of Starlink satellites (12th overall) will lift off from LC-39A at Kennedy Space Center, Florida on a Falcon 9 rocket. In the weeks following deployment the Starlink satellites will use onboard ion thrusters to reach their operational altitude of 550 km. This is the third batch of Starlink satellites which all feature visors intended to reduce their visibility from Earth. Falcon 9's first stage will attempt to land on a drone ship approximately 628 km downrange, its sixth landing overall, and a ships is in place to attempt the recovery of both payload fairing halves.",
//           "links": {
//             "flickr_images": []
//           }
//         },
//         {
//           "mission_name": "SAOCOM 1B, GNOMES-1, Tyvak-0172",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-08-30T19:18:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX's Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun-synchronous polar orbit from SLC-40, Cape Canaveral AFS. SAOCOM 1B is a synthetic aperture radar Earth observation satellite to support disaster management. The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP. This mission is also expected to include rideshare payloads Sequoia, and GNOMES-1. This will be the first polar launch from the Space Coast in 60 years. The launch azimuth will be southward and the booster will land at LZ-1.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50291453997_aa715950e7_o.jpg",
//               "https://live.staticflickr.com/65535/50291306296_85b6ff12a2_o.jpg",
//               "https://live.staticflickr.com/65535/50291306061_2f9e350a85_o.jpg",
//               "https://live.staticflickr.com/65535/50291306216_4fd44c261e_o.jpg",
//               "https://live.staticflickr.com/65535/50291306346_136d3dce7b_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink-10 (v1.0) & SkySat 19-21",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-08-18T10:31:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the tenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the eleventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 19-21, on top of the Starlink stack. The booster for this mission is expected to land on an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg",
//               "https://live.staticflickr.com/65535/50242057637_ea4f98d517_o.jpg",
//               "https://live.staticflickr.com/65535/50242057682_6084977bf7_o.jpg",
//               "https://live.staticflickr.com/65535/50242057677_e96fbd46e6_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink-9 (v1.0) & BlackSky Global 5-6",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-08-07T01:12:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "This mission will launch the ninth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the tenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes a rideshare of two BlackSky satellites on top of the Starlink stack. The booster for this mission is expected to land an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50198901143_0bb53a499e_o.jpg",
//               "https://live.staticflickr.com/65535/50199448011_35d0e9c8bf_o.jpg",
//               "https://live.staticflickr.com/65535/50199715777_eca6f41d25_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "ANASIS-II",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-07-20T17:30:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX will launch ANASIS-II, a South Korean geostationary military communication satellite from LC-39A, Kennedy Space Center. It will be South Korea's first dedicated military communications satellite. Falcon 9 will deliver the satellite to a geostationary transfer orbit. The booster is expected to land downrange on an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50136967628_eda99b6353_o.jpg",
//               "https://live.staticflickr.com/65535/50137510881_4618ba6c84_o.jpg",
//               "https://live.staticflickr.com/65535/50136967553_e1ac93fab0_o.jpg",
//               "https://live.staticflickr.com/65535/50136967658_9347d7c575_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "GPS III SV03 (Columbus)",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-06-30T15:55:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX launches GPS Block III Space Vehicle 03 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This is the third GPS III satellite and the second launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission is expected to land on an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50065947228_804efe6117_o.jpg",
//               "https://live.staticflickr.com/65535/50065947263_e1a6ea1e22_o.jpg",
//               "https://live.staticflickr.com/65535/50065947218_88ef29951a_o.jpg",
//               "https://live.staticflickr.com/65535/50066762457_8c92090037_o.jpg",
//               "https://live.staticflickr.com/65535/50085443052_9f6b843a02_o.jpg",
//               "https://live.staticflickr.com/65535/50085211776_588bed76f0_o.jpg",
//               "https://live.staticflickr.com/65535/50084627433_89d8915596_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink-8 & SkySat 16-18",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-06-13T05:21:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the eighth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the ninth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is expected to include rideshare payloads, SkySats 16-18, on top of the Starlink stack. The booster for this mission is expected to land an ASDS.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 7",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-06-03T21:25:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the seventh batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the eighth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI on its first mission since arriving at Port Canaveral.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49971196871_a0462d0084_o.jpg",
//               "https://live.staticflickr.com/65535/49970682603_e6333945ee_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "CCtCap Demo Mission 2",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-05-30T15:22:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carryingNASA astronauts Doug Hurley and Bob Behnken to the International Space Station. This mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to and from the space station. The booster for this mission will land on OCISLY. The mission will be complete with the safe return the Dragon capsule and astronauts.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg",
//               "https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg",
//               "https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg",
//               "https://live.staticflickr.com/65535/49934168858_cacb00d790_o.jpg",
//               "https://live.staticflickr.com/65535/49934682271_fd6a31becc_o.jpg",
//               "https://live.staticflickr.com/65535/49956109906_f88d815772_o.jpg",
//               "https://live.staticflickr.com/65535/49956109706_cffa847208_o.jpg",
//               "https://live.staticflickr.com/65535/49956109671_859b323ede_o.jpg",
//               "https://live.staticflickr.com/65535/49955609618_4cca01d581_o.jpg",
//               "https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg",
//               "https://live.staticflickr.com/65535/49955609378_9b77e5c771_o.jpg",
//               "https://live.staticflickr.com/65535/49956396262_ef41c1d9b0_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 6",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-04-22T15:30:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "This mission will launch the sixth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the seventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49673373182_93a517e140_o.jpg",
//               "https://live.staticflickr.com/65535/49672551378_fabc17ef6f_o.jpg",
//               "https://live.staticflickr.com/65535/49672551303_564ce21658_o.jpg",
//               "https://live.staticflickr.com/65535/49806771628_fef13c852d_o.jpg",
//               "https://live.staticflickr.com/65535/49807633862_e5abcb41a6_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 5",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-03-18T08:16:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "The sixth Starlink launch overall and the fifth operational batch of Starlink satellites will launch into orbit aboard a Falcon 9 rocket. This mission is expected to deploy all sixty satellites into an elliptical orbit about fifteen minutes into flight. In the weeks following launch the satellites are expected to utilize their onboard ion thrusters to raise their orbits to 550 km in three groups of 20, making use of precession rates to separate themselves into three planes. The booster will land on a drone ship approximately 628 km downrange.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49673373182_93a517e140_o.jpg",
//               "https://live.staticflickr.com/65535/49672551378_fabc17ef6f_o.jpg",
//               "https://live.staticflickr.com/65535/49672551303_564ce21658_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "CRS-20",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-03-06T23:50:31-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49635401403_96f9c322dc_o.jpg",
//               "https://live.staticflickr.com/65535/49636202657_e81210a3ca_o.jpg",
//               "https://live.staticflickr.com/65535/49636202572_8831c5a917_o.jpg",
//               "https://live.staticflickr.com/65535/49635401423_e0bef3e82f_o.jpg",
//               "https://live.staticflickr.com/65535/49635985086_660be7062f_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 4",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-02-17T10:05:55-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the fourth batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fifth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49549022017_18738a2552_o.jpg",
//               "https://live.staticflickr.com/65535/49548795221_edd6dc7ef6_o.jpg",
//               "https://live.staticflickr.com/65535/49548795401_93ef80caf5_o.jpg",
//               "https://live.staticflickr.com/65535/49549022057_d4dbd6a492_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 3",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-01-29T09:06:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the third batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fourth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49461673512_f4e01c8b27_o.jpg",
//               "https://live.staticflickr.com/65535/49461673792_b1804c2a2b_o.jpg",
//               "https://live.staticflickr.com/65535/49461673707_cb7fc4a3a8_o.jpg",
//               "https://live.staticflickr.com/65535/49461673552_65cc294f82_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Crew Dragon In Flight Abort Test",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-01-19T09:00:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "SpaceX will launch a Crew Dragon capsule from LC-39A, KSC on a fully fueled Falcon 9 rocket and then trigger the launch escape system during the period of maximum dynamic pressure. As part of NASA'a Commercial Crew Integrated Capability program (CCiCap) this test will contribute valuable data to help validate Crew Dragon and its launch abort system. The Crew Dragon will be recovered by GO Searcher after splashdown in the Atlantic Ocean. This flight does not go to orbit. The booster and upper stage are expected to break up following capsule separation and there will be no landing attempt.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49421605028_b7ba890f0e_o.jpg",
//               "https://live.staticflickr.com/65535/49422067976_cda2b8f021_o.jpg",
//               "https://live.staticflickr.com/65535/49422067876_13ed519fe6_o.jpg",
//               "https://live.staticflickr.com/65535/49421604803_0093a5d2cb_o.jpg",
//               "https://live.staticflickr.com/65535/49422294602_0d5e7d8e82_o.jpg",
//               "https://live.staticflickr.com/65535/49422068111_2ed613b19b_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 2",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2020-01-06T21:19:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the second batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. They are expected to contribute to the 550 km x 53° shell. It is the third Starlink launch overall. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. The booster for this mission is expected to land on OCISLY.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49346907238_b27507e4d9_o.jpg",
//               "https://live.staticflickr.com/65535/49347368761_f4e45bd38a_o.jpg",
//               "https://live.staticflickr.com/65535/49347368406_8f9acf1e2a_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "JCSat 18 / Kacific 1",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2019-12-16T19:10:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX will launch the Boeing built dual payload satellite to geostationary transfer orbit from XXXX. JCSat 18 is a mobile broadband communications payload built for Sky Perfect JSAT Corporation of Japan and will service Asia Pacific. Kacific 1 is a high throughput broadband internet payload built for Kacific Broadband Satellites and will service certain high demand areas of Southeast Asia and the Pacific. Both payloads share a single chassis. The booster for this mission is expected to land on OCISLY.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49235364922_e55ceb61be_o.jpg",
//               "https://live.staticflickr.com/65535/49235136806_e5a3774904_o.jpg",
//               "https://live.staticflickr.com/65535/49235137056_585dc050e7_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "CRS-19",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2019-12-05T12:29:23-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX's 19th Crew Resupply Mission on behalf of NASA with a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. The external payloads for this mission include the Hyperspectral Imager Suite and a lithium-ion battery. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral AFS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg",
//               "https://live.staticflickr.com/65535/49178954221_8544835325_o.jpg",
//               "https://live.staticflickr.com/65535/49179161792_9f1801a963_o.jpg",
//               "https://live.staticflickr.com/65535/49178460368_62eb945db8_o.jpg",
//               "https://live.staticflickr.com/65535/49184948561_ce20b38bc6_o.jpg",
//               "https://live.staticflickr.com/65535/49185149122_00a7fa573d_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Starlink 1",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2019-11-11T09:56:00-05:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "This mission will launch the first batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. They are expected to contribute to the 550 km x 53° shell. It is the second Starlink launch overall. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. The booster for this mission is expected to land on OCISLY.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/49051988851_0b422e1603_o.jpg",
//               "https://live.staticflickr.com/65535/49051988746_1a97e38ca8_o.jpg",
//               "https://live.staticflickr.com/65535/49052201452_c3b01e37f0_o.jpg",
//               "https://live.staticflickr.com/65535/49051988636_3714a78787_o.jpg",
//               "https://live.staticflickr.com/65535/49051477088_d86104481d_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "Amos-17",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2019-08-06T18:52:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX will launch Boeing built Amos-17, a geostationary communications satellite for Israeli company Spacecom. The satellite will be delivered to GTO from KSC LC-39A or possibly CCAFS SLC-40, and will replace the defunct Amos-5 at 17° E. Amos-17 carries multi-band high throughput and regional beams servicing Africa, Europe and the Middle East. The cost of this launch is covered for Spacecom by SpaceX credit following the Amos-6 incident. A recovery of the booster for this mission is not expected.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/48478269312_58dd3dc446_o.jpg",
//               "https://live.staticflickr.com/65535/48478269747_353dcb2e62_o.jpg",
//               "https://live.staticflickr.com/65535/48478119901_2de0441026_o.jpg",
//               "https://live.staticflickr.com/65535/48478120646_ab72c2c6c3_o.jpg",
//               "https://live.staticflickr.com/65535/48478120031_5aae1f6131_o.jpg",
//               "https://live.staticflickr.com/65535/48478269442_08479bed36_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "CRS-18",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2019-07-25T18:01:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//           },
//           "details": "SpaceX's 18th Commercial Resupply Services mission out of a total of 20 such contracted flights for NASA, this launch will deliver essential supplies to the International Space Station using the reusable Dragon 1 cargo spacecraft. The external payload for this mission is International Docking Adapter 3, replacing IDA-1 lost in SpaceX's CRS-7 launch failure. This mission will launch from SLC-40 at Cape Canaveral AFS on a Falcon 9, and the first-stage booster is expected to land back at CCAFS LZ-1.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/48380511527_190682b573_o.jpg",
//               "https://live.staticflickr.com/65535/48380370691_7b0757a4d3_o.jpg",
//               "https://live.staticflickr.com/65535/48380511492_51db1bf984_o.jpg",
//               "https://live.staticflickr.com/65535/48380370626_a5d264c637_o.jpg",
//               "https://live.staticflickr.com/65535/48380511427_97db52a9e3_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "STP-2",
//           "rocket": {
//             "rocket_name": "Falcon Heavy"
//           },
//           "launch_date_local": "2019-06-24T23:30:00-04:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
//           },
//           "details": "Space Test Program 2 is a rideshare managed by the U.S. Air Force Space and Missile Systems Center (SMC), launching from LC-39A, KSC. Most of the spacecraft will be delivered into low Earth orbit (LEO) in two deployment sequences separated by a second stage burn. These LEO payloads include the six Taiwan and United States owned COSMIC-2 microsatellites, the Planetary Society's LightSail-B demonstrator cubesat, and others. The third and final deployment will be the Air Force Research Lab's DSX spacecraft, which will be delivered to a medium Earth orbit (MEO). This mission will reuse the side cores from Arabsat 6A, which will return to LZ-1, and LZ-2. The new center core will boost back to land on OCISLY less than 40 km from the launch site.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/48129211778_83c1769305_o.jpg",
//               "https://live.staticflickr.com/65535/48129211908_8390c775b0_o.jpg",
//               "https://live.staticflickr.com/65535/48129182836_fd53e5646b_o.jpg",
//               "https://live.staticflickr.com/65535/48129269897_22d854be5c_o.jpg",
//               "https://live.staticflickr.com/65535/48129182631_572051790c_o.jpg",
//               "https://live.staticflickr.com/65535/48129211693_d23b0287f1_o.jpg",
//               "https://live.staticflickr.com/65535/48129269942_eb9b5c25bc_o.jpg"
//             ]
//           }
//         },
//         {
//           "mission_name": "RADARSAT Constellation",
//           "rocket": {
//             "rocket_name": "Falcon 9"
//           },
//           "launch_date_local": "2019-06-12T07:17:00-07:00",
//           "launch_success": true,
//           "launch_site": {
//             "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
//           },
//           "details": "SpaceX is launching the three satellite RADARSAT Constellation Mission into Sun Synchronous orbit from SLC-4E, VAFB. The RCM spacecraft are synthetic aperture radar (SAR) Earth observation satellites built by the Canadian space company, MDA, for the Canadian Space Agency. This mission was delayed when the originally slated booster failed to land after CRS-16. The booster is expected to return to LZ-4.",
//           "links": {
//             "flickr_images": [
//               "https://live.staticflickr.com/65535/48052269657_71764b0fb3_o.jpg",
//               "https://live.staticflickr.com/65535/48052269617_34447619f0_o.jpg",
//               "https://live.staticflickr.com/65535/48052224858_20ea2a411e_o.jpg",
//               "https://live.staticflickr.com/65535/48052269562_325c117b81_o.jpg",
//               "https://live.staticflickr.com/65535/48052182461_a419db6b84_o.jpg",
//               "https://live.staticflickr.com/65535/48052224733_f89f1dd046_o.jpg"
//             ]
//           }
//         }
//       ]
//     },
//   }
// )

// console.log(code)

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
