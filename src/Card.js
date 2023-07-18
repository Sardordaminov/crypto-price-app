import React, { useEffect, useState } from "react";
import "./Card.css";

const Cards = () => {
  const [users, setUsers] = useState({});

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin&vs_currencies=usd&include_24hr_change=true"
      );
      const finalData = await response.json();
      setUsers(finalData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="header">
      <div className="card">
        <div className="card_inner">
          <img src="images/bitcoin.png" alt="Bitcoin" />
          <p className="price">${users?.bitcoin?.usd}</p>
          <p className={`change ${users?.bitcoin?.usd_24h_change < 0 ? "falling" : "rising"}`}>{users?.bitcoin?.usd_24h_change}%</p>
        </div>
        <div className="card_inner">
          <img src="images/litecoin.png" alt="Litecoin" />
          <p className="price">${users?.litecoin?.usd}</p>
          <p className={`change ${users?.litecoin?.usd_24h_change < 0 ? "falling" : "rising"}`}>{users?.litecoin?.usd_24h_change}%</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;


// import React, { useEffect, useState } from "react";
// import "./Card.css";

// const Cards = () => {
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin&vs_currencies=usd&include_24hr_change=true");
//     const FinalData = await response.json();
//     setUsers(FinalData);
//   };
//   console.log(users);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div className="header">
//       <div className="card">
//         <div className="card_inner">
//         <img src={`../images/bitcoin.png`}/>
//           <div className="userName">${users?.bitcoin?.usd}</div>
//           <div className="userUrl">${users?.bitcoin?.usd_24h_change}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;






// import React, { useEffect, useState } from "react";
// import "./Card.css";

// const Cards = () => {
//   const [users, setUsers] = useState({ bitcoin: {}, litecoin: {} });

//   const getUsers = async () => {
//     try {
//       const response = await fetch(
//         "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin&vs_currencies=usd&include_24hr_change=true"
//       );
//       const finalData = await response.json();
//       setUsers(finalData);
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div className="header">
//       <div className="card">
//         <div className="card_inner">
//           <img src="./images/bitcoin.png" alt="Bitcoin" />
//           <div className="userName">
//             ${users?.litecoin?.usd && users?.bitcoin?.usd}
//           </div>
//           <div className="userUrl">
//             ${users?.litecoin?.usd_24h_change && users?.bitcoin?.usd_24h_change}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
// In this code, I added error handling using a try-catch block when fetching data from the API. I also initialized the users state as an empty object with useState({ bitcoin: {}, litecoin: {} }). This ensures that the nested properties can be safely accessed using conditional checks (users.bitcoin && users.bitcoin.usd) before displaying them in the JSX.

