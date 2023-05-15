import React, {
  // useContext,
  useEffect,
  // useState
} from "react";

// import FacebookAuthContext from "../../context/FacebookAuthContext";

function MetaApi() {
  // const [ads, setAds] = useState([]);
  // const { facebookLoggedIn } = useContext(FacebookAuthContext);

  // const KEYWORD = "cola";

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(
          // `https://graph.facebook.com/v12.0/me?access_token=${process.env.REACT_APP_META_ACCESS_TOKEN}`

          `https://graph.facebook.com/v16.0/ads_archive?search_terms=cola&ad_reached_countries=["US"]&access_token=${process.env.REACT_APP_META_ACCESS_TOKEN}`
          // `https://graph.facebook.com/v12.0/me?access_token=${process.env.REACT_APP_META_ACCESS_TOKEN}`
          // `https://graph.facebook.com/v16.0/ads_archive?search_terms=${KEYWORD}&ad_type=all&limit=10&fields=id,ad_creative,body,call_to_action_type,country,created_time,creative_field,description,displayed_message_response_time,image_crops,image_hash,image_url,impression_control_map,link,link_caption,link_description,link_title,page_id,page_name,platform_customizations,potential_reach,thumbnail_url,title,url_tags&access_token=${process.env.REACT_APP_META_ACCESS_TOKEN}`
        );
        const data = await response.json();
        // setAds(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAds();
  }, []);

  return (
    <div>
      {/* <div>data</div> */}
      {/* {ads.map((ad) => (
        <div key={ad.id}>
          <h3>{ad.title}</h3>
          <p>{ad.body}</p>
          <img src={ad.image_url} alt={ad.title} />
          <p>{ad.link}</p>
        </div>
      ))} */}
    </div>
  );
}

export default MetaApi;
