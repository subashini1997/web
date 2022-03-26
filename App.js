

import "./App.css";
import {useState,useEffect} from "react";
import { BrowserRouter as Route, Switch , Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome To Web Scraping Application</h1>
      <ul>
            <li><Link to = "/amazon">Amazon</Link>
            </li>
            <li>
            <Link to ="/ele">Flipkart</Link>
            </li>
            <li>
            <Link to ="/snapdeal">Snapdeal</Link>
            </li>
          </ul>   

           <Switch>
            <Route path ="/amazon"><Amazon /></Route>
            <Route path="/ele"><Flipkart /></Route>
            <Route path="/snapdeal"><Snapdeal/></Route>
            </Switch>     

       {/* <Amazon />
      <Flipkart />
      <Snapdeal/>   */}
    </div>
  );
}
// const API = "http://localhost:4000";

const API ="https://subashini-app.herokuapp.com";
function Amazon(){
  // const mobiles =[
  //   {
  //   img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7bPfQoErT2AXLujP-AvnXxJwE7q32Mm_pyTFrW5FhHrcNDD-uPSiI0Kxc33HPUWjhpQ5edANh2M66uW1oJH5dRi0VIohb6Sk9gxaTG8z5kaBkmcIrBBjXrA&usqp=CAE",
  //   title:"APPLE IPHONE !# PRO MAX GOLD",
  //   rating:"4.6⭐",
  //   price:"84,900",
  //   finalprice:"80,000",
  // },
  // {
  //   img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQzn_Gn2fikJSOYmVELXCbavbNkqdXwBSnncDOrISmmi7KYZCsEohPA5_wXxn8CVSYe8UPiHVoE3h5Ehw4E51ij72y0mJnCfJWE7JZ0pLvcg6CIrmqKMpzxrrI&usqp=CAE",
  //   title:"APPLEBIPHONE 13MINI PINK",
  //   rating:"4.8⭐",
  //   price:"69,900",
  //   finalprice:"65,000",
  // },
  // {
  //   img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjzCWItGiCqTpLTGUhl71bnZ5ZbWfe1WpDUN3Kkcorc7lX6PWhI_oo1q7eQ_l1Wae-QcQtDjcK3ENiO6WWnvBGinwroguOS9nlN5-kKgMX0PTmvYWG9vZmPQ&usqp=CAE",
  //   title:"APPLE IPHONE SE 2022 RED",
  //   rating:"5⭐",
  //   price:"43,900",
  //   finalprice:"40,900",
  // },
  // {
  //   img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtbVYVDZpTnzwPYZIPe0d_uLcaMjKSIo9GwQP33qTzcakJf-Q4oztA4F3Kb0VyCaLYT3RkWp3NqoV4TKUtOzDmG4hJ02zgGcwXY0_dG0EtZkGeaJxbUE2fww&usqp=CAE",
  //   title:"APPLE 11 PRO MAX",
  //   rating:"4.5⭐",
  //   price:"13,999",
  //   finalprice:"10,999",
  // },
  // {
  //   img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRezaVleXeH7UnIjKwQzRh7vqoceNYUDa7t2TnF8K-5cNaQFRCjsKFFdTFDfIGKO1FIhc7SFLXTI69n7wN0XSOXTTfaEDW0DrzMteieGC-Y4-dBSX-5YGT3LSE&usqp=CAE",
  //   title:"APPLE IPHONE 12 BLACK",
  //   rating:"4⭐",
  //   price:"14,999",
  //   finalprice:"12,999",
  // },
  // {
  //   img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTJHk2Y6ErAp6aFevVAy68eaBIEDLZ2pMAJnO09UEYrmTkCVq81wWdVIYC6IlzYHQP9QqPczVp9ovI-FOWR0rLLRM7mlZoMOPWnCWJoVe3j7GOcZ9xI1PqMw&usqp=CAE",
  //   title:"IPHONE 13",
  //   rating:"4.6⭐",
  //   price:"74,990",
  //   finalprice:"70,990",
  // },
  // {
  //   img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTouvL5tVT0VEpEAOEAB15NUgu3_cyVcT2JQ3GcdQFXchbYQxEFzx4PH5N51A1CMnbSdeDfQHMt1hB5Ycx-mHFM47VaOPhfE9IfkkuBb9azxrgqjgF9JGrEgg&usqp=CAE",
  //   title:"APPLE IPHONE XR BLUE",
  //   rating:"4.6⭐",
  //   price:"26,500",
  //   finalprice:"24,500",
  // },
  // {
  //   img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjQrBZ0tnCa7WKdeUj-kZ0cqRE7T7tKtMKksNOzJmG-oMC54e0EJMh8YFJkwiMhxwd0ANSTdMKWDMgNsBBPyRfv5Xrqi2OevK_PjxHy73B8HH66hn1tN64&usqp=CAE",
  //   title:"APPLE IPHONE 13 PRO MAX GREEN",
  //   rating:"5⭐",
  //   price:"1,79,900",
  //   finalprice:"1,70,900",
  // },
  // {
  //   img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDBPcfssrG2xHHYr_H1MOHxwMXhT661zwqg76daVFahtrrHiVnwwVWOd6_ecG8pr8ejLjmEojDMtWI13n7MPWsWZHufGx7bA&usqp=CAE",
  //   title:"APPLE IPHONE 7 PLUS BLACK",
  //   rating:"4.6⭐",
  //   price:"17,900",
  //   finalprice:"15,900",
  // },
  // {
  //   img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJ4tJgcQaHWrm4Ku7cN3ixGe8TeHoc_EWYQdsx3YFyFfg-c5wd2w7iPtRhCnbcZs0nxQIP1RgVa3bSVvb3yG-tl5YJLuwqfQ&usqp=CAE",
  //   title:"APPLE IPHONE 11PRO SILVER",
  //   rating:"4.5⭐",
  //   price:"63,900",
  //   finalprice:"60,900",
  // },
  
  // ]

  const [mobile,setMobile]= useState([]);
  useEffect(()=>{
    fetch(`${API}/mobile`)
    .then((data)=>data.json())
    .then((mbs)=> setMobile(mbs));

  },[]);

  return(
    <div className="bgimage">
    <div>
      <h1 className="h1">Amazon.in</h1>
      <div className="button">
      <a class="btn btn-primary" href="https://www.amazon.in/s?k=iphone&crid=1OG5BLR5E3AB9&sprefix=%2Caps%2C2549&ref=nb_sb_noss" role="button">Link</a>
      </div>
   
   
    <div className=" App phone-list-container">
      
        {mobile.map((mobile) =>( <Phone mobile={mobile}/>))}
    </div>
    </div>
    </div>
 
  )
}

function Phone({mobile}){
  
  return <div className="phone-container">
    
    <img className="phone-picture" src={mobile.img} alt={mobile.img}/>
    
    <h2 className="phone-name" >{mobile.title}</h2>
    <p className="phone-company" >{mobile.rating}, Price ₹{mobile.price}</p>
    <h3 className="phone-final">Final Price with offer ₹{mobile.finalprice}</h3>
    
      </div>
}

function Flipkart(){
//   const elecs=[
//     {
//     img:"https://rukminim2.flixcart.com/image/612/612/knunf680/air-cooler/a/f/o/rambo-grey-ac-303-maharaja-whiteline-original-imag2f8ythp9xkkn.jpeg?q=70",
//     title:"AIR COOLER",
//     rating:"4⭐",
//     price:"8,899",
//     finalprice:"5,999",
//   },
//   {
//     img:"https://rukminim2.flixcart.com/image/612/612/ktaeqvk0/water-purifier/q/o/f/advanced-max-pureit-original-imag6z9zzfn2ejms.jpeg?q=70",
//     title:"PUREIT BY HUL",
//     rating:"4.4⭐",
//     price:"9,799",
//     finalprice:"6,799",
//   },
//   {
//     img:"https://rukminim2.flixcart.com/image/612/612/kfbfr0w0/refrigerator-new/v/u/y/563gsmqs-na-marq-by-flipkart-original-imafvtfahqa9hzgg.jpeg?q=70",
//     title:"REFRIGERATOR",
//     rating:"4.5⭐",
//     price:"51,990",
//     finalprice:"49,999",
//   },
//   {
//     img:"https://rukminim2.flixcart.com/image/612/612/k3670cw0/room-heater/h/y/d/sqh800-sansui-original-imafmcxdhsbmr2ga.jpeg?q=70",
//     title:"ROOM HEATER",
//     rating:"4⭐",
//     price:"5,599",
//     finalprice:"3,999",
//   },
//   {
//     img:"https://rukminim2.flixcart.com/image/612/612/kkprmvk0/water-purifier/b/v/2/ro-uv-uf-tds-audi-grand-plus-original-imagyy5c4shfw9nj.jpeg?q=70",
//     title:"WATER PURIFIER",
//     rating:"3.7⭐",
//     price:"4,899",
//     finalprice:"3,999",
//   },
//   {
//     img:"https://rukminim2.flixcart.com/image/612/612/ji20r680/vacuum-cleaner/8/t/f/philips-powerpro-compact-fc9352-01-bagless-original-imaf5xqwak9evffz.jpeg?q=70",
//     title:"VACUUM CLEANER",
//     rating:"4.4⭐",
//     price:"8,399",
//     finalprice:"6,999",
//   },
// ]
const [elecs,setElecs]= useState([]);
useEffect(()=>{
  fetch(`${API}/elecs`)
  .then((data)=>data.json())
  .then((mbs)=> setElecs(mbs));

},[]);

return(
  <div className="bgimage">
    <div>
      <h1 className="h1">Flipkart.com</h1>
      <div className="button">
      <a class="btn btn-primary" href="https://www.flipkart.com/home-kitchen/home-appliances/electric~type/pr?sid=j9e%2Cabm&page=14">Link</a>
      </div>
   
   
    <div className=" App phone-list-container">
      
        {elecs.map((el) =>( <Electro el={el}/>))}
    </div>
    </div>
    </div>
)
}
function Electro({el}){
  
  return <div className="phone-container">
    
    <img className="phone-picture" src={el.img} alt={el.img}/>
    
    <h2 className="phone-name" >{el.title}</h2>
    <p className="phone-company" >{el.rating}, Price ₹{el.price}</p>
    <h3 className="phone-final">Final Price with offer ₹{el.finalprice}</h3>
    
      </div>
}

function Snapdeal(){
//  const snaps=[
//    {
//   img:"https://n4.sdlcdn.com/imgs/j/t/0/large/ANALOGUE-ANLG-428-BLUE-BLU-SDL661108400-1-11d0c.webp",
//   title:"ANALOGUE ANLG-428",
//   rating:"4⭐",
//   price:"349",
//   finalprice:"300",
//  },
//  {
//   img:"https://n4.sdlcdn.com/imgs/j/q/3/230X258_sharpened/David-Miller-DMRCM330-Stainless-Steel-SDL009505930-1-ffa09.webp",
//   title:"DAVID MILER",
//   rating:"4⭐",
//   price:"339",
//   finalprice:"299",
//  },
//  {
//   img:"https://n4.sdlcdn.com/imgs/j/u/i/230X258_sharpened/Redux-RWS0200S-Brown-Dial-Leather-SDL670957005-1-65383.webp",
//   title:"REDUX RWS0200S",
//   rating:"4.6⭐",
//   price:"304",
//   finalprice:"280",
//  },
//  {
//   img:"https://n2.sdlcdn.com/imgs/j/v/m/230X258_sharpened/Redux-MW-404-Golden-Dial-SDL013895527-1-2ed4a.webp",
//   title:"REDUX MW-404",
//   rating:"3⭐",
//   price:"372",
//   finalprice:"350",
//  },
//  {
//   img:"https://n2.sdlcdn.com/imgs/j/n/8/230X258_sharpened/Padmaja-arrow-watch-Silicon-Analog-SDL588874743-1-5fd46.webp",
//   title:"PADMAJA ARROW WATCH",
//   rating:"4.6⭐",
//   price:"249",
//   finalprice:"220",
//  },
//  {
//   img:"https://n1.sdlcdn.com/imgs/j/w/p/large/HMXT-HMXT-1-Stainless-Steel-SDL161039405-1-4984c.jpeg",
//   title:"HMXT-1 STAINLESS STEEL",
//   rating:"4.8⭐",
//   price:"379",
//   finalprice:"350",
// },
// ]
const [snaps,setSnaps]= useState([]);
useEffect(()=>{
  fetch(`${API}/snaps`)
  .then((data)=>data.json())
  .then((mbs)=> setSnaps(mbs));

},[]);

 return(
  <div className="bgimage">
    <div>
      <h1 className="h1">Snapdeal.com</h1>
      <div className="button">
      <a class="btn btn-primary" href="https://www.snapdeal.com/search?keyword=watch&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy">Link</a>
      </div>
   
   
    <div className=" App phone-list-container">
      
        {snaps.map((sn) =>( <Snap sn={sn}/>))}
    </div>
    </div>
    </div>
 )

}
function Snap({sn}){
  return <div className="phone-container">
    
  <img className="phone-picture" src={sn.img} alt={sn.img}/>
  
  <h2 className="phone-name" >{sn.title}</h2>
  <p className="phone-company" >{sn.rating}, Price ₹{sn.price}</p>
  <h3 className="phone-final">Final Price with offer ₹{sn.finalprice}</h3>
  
    </div>
}

