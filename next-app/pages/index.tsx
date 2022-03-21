import { gql, useQuery } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import HomePageHead from "../components/head/homePageHead";
import { initializeApollo } from "../lib/apolloClient";
import styles from "../styles/Home.module.css";

//Query to get valuable information from api.spacex.land/graphql
const LAUNCHES_QUERY = gql`
  query launchesQuery {
    launchesPast(limit: 30) {
      mission_name
      rocket {
        rocket_name
      }
      launch_date_local
      launch_success
      launch_site {
        site_name_long
      }
      details
      links {
        flickr_images
      }
    }
  }
`;

//Declaration of interface to store data about launches get from api.spacex.land/graphql
interface Launches {
  id: number;
  data: Data;
}

interface Data {
  launchesPast: Array<LaunchesPast | LaunchesPast4 | LaunchesPast6 | LaunchesPast7>;
}

interface LaunchesPast {
  mission_name: string;
  rocket: LaunchesPastRocket;
  launch_date_local: string;
  launch_success: boolean;
  launch_site: LaunchesPastLaunch_site;
  details: null;
  links: LaunchesPastLinks;
}

interface LaunchesPastRocket {
  rocket_name: string;
}

interface LaunchesPastLaunch_site {
  site_name_long: string;
}

interface LaunchesPastLinks {
  flickr_images: Array<any>;
}

interface LaunchesPast4 {
  mission_name: string;
  rocket: LaunchesPastRocket;
  launch_date_local: string;
  launch_success: boolean;
  launch_site: LaunchesPastLaunch_site;
  details: string;
  links: LaunchesPast4Links;
}

interface LaunchesPast4Links {
  flickr_images: Array<string>;
}

interface LaunchesPast6 {
  mission_name: string;
  rocket: LaunchesPastRocket;
  launch_date_local: string;
  launch_success: boolean;
  launch_site: LaunchesPastLaunch_site;
  details: string;
  links: LaunchesPastLinks;
}

interface LaunchesPast7 {
  mission_name: string;
  rocket: LaunchesPastRocket;
  launch_date_local: string;
  launch_success: null;
  launch_site: LaunchesPastLaunch_site;
  details: string;
  links: LaunchesPast4Links;
}

const Home: NextPage<{ launches: Launches }> = ({ launches }) => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (error) return <>{"An error occured fetching data"}</>;
  if (loading) return <>{"Loading"}</>;

  console.log("datatest:", data.launchesPast);
  //console.log("datatest2:", launches);
  //console.log("datatest4:", launches.data);
  //console.log("datatest5:", launches.data.launchesPast);

  function displayLaunch2() {
    var rows = [];
    for (let i = 1; i < 30; i++) {
      rows.push(<div className={styles.box}>
        <img src={data.launchesPast[i].links.flickr_images[0]} width="270" height="270" />
        <h3>{data.launchesPast[i].mission_name}</h3>
        <div className={styles.launchInfo}>
          <p><strong>Launch Time: </strong> {new Date(data.launchesPast[i].launch_date_local).toLocaleDateString("en-US")} </p>
          <p><strong>Rocket name: </strong> {data.launchesPast[i].rocket.rocket_name} </p>
        </div>
      </div>
      );
    }
    return (
      <div className={styles.grid}>{rows}</div>
    );
  }

  //Code to display info window of each launch 
  //{launches.map(launch => {
  //  return(
  //      <h3>{launch.mission_name}</h3>
  //      <p><strong>Launch Time: </strong> {new Date(launch.launch_date_local).toLocaleDateString("en-US")} </p>
  //      <img src={launch.links.flickr_images[0]} width="200" height="185" />
  //  )
  //})


  return (
    <div className={styles.container}>
      <HomePageHead />
      <main>
        <div className={styles.grid}>
          {
            displayLaunch2()
          }
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: LAUNCHES_QUERY });

  return {
    props: {
      launches: [data.launchesPast]
    },
  };
};

export default Home;
