import { useTheme } from "../../../../context/ThemeContext";
import { useFetch } from "../../../../context/FetchContext";
 
import styles from "./friend-list.module.css";
// import { useMyMessage } from "../../../../context/MyMessageContext";
import { useFilter } from "../../../../context/FilterSearch";
// import { useDetail } from "../../../../context/DetailContext";
import { useUser } from "../../../../context/UserContext";

function FriendList() {
  const { theme } = useTheme();
  const { fetchData } = useFetch();
 
  const {setMyMessage, setAvatar, setDetail } = useUser();
  const {filterSearch} = useFilter()
//  const {setDetail} = useDetail()
  return (
    <ul className={styles.friends_list}>
      {fetchData.filter((val)=>{
  if(filterSearch == "") {
    return val
  }else if( `${val.first_name} ${val.last_name}`.toLowerCase().includes(filterSearch.toLowerCase()) ) {
 return val
  }  }).map((val) => (
        <li
          onClick={(user) => {
            if (user.target.className) {
              const avatarName =  `${val.first_name} ${val.last_name}`.toString()
              setAvatar(avatarName)
              setDetail(false)
              setMyMessage([]);
              const text = val.messages;
              text.map((e) => {
                const text = e.text;
                
                setMyMessage((prevState) => [...prevState, { text }]);
                
              });
            }
          }}
           
          key={val.id}
          
          className={`${val.id} ${styles.list_item} ${
            theme === "dark" ? styles.list_item_dark : ""
          }`}
        >
          <div
            className={`${val.id} ${styles.friend_avatar} ${
              theme === "dark" ? styles.friend_avatar_dark : ""
            }`}
          ></div>
        
          <div  className={`${val.id} ${styles.friend_info}`  }>
            <div className=  {val.id}>{`  ${val.first_name} ${val.last_name}`}</div>
            <div className={`${val.id} ${styles.last_message}`  }>{ val.messages.length -1 ? val.messages.map((e)=> {
             
            }) : null}son mesaj</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
