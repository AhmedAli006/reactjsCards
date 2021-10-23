import "./App.css";

function App() {
  let pro = [
    {
      name: "indian chief dark horse",
      price: "21,135 $",
      image:
        "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/D6/E4/D6E44D7A-0662-4F39-B067-7E9F90B82383.jpg",
      disc: "aggressive styling covered in black finishes. The Dark Horse family features blacked-out, aggressive styling that will have you begging to hit the road. BLACKED-OUT STYLE. If you like to spend your time polishing chrome, keep looking.",
    },
    {
      name: "indian scout bobber",
      price: "21,135 $",
      image:
        "https://www.cycleworld.com/resizer/ufv3sMNshn_6PdGU9bzjTVQsFk4=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/EEQPGHHOCZBT3KNAJBPXRQFY4M.jpg",
      disc: "Indian Scout Bobber Motorcycle. This cruiser includes a liquid cooled V-Twin engine and 6-speed transmission making it great for beginners.",
    },
    {
      name: "Harley-Davidson Iron 883",
      price: "21,135 $",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB37p6ku6Zo93ZL4_B4HjYdGePK0hKLlVe3A&usqp=CAU",
      disc: "If you are a diehard Harley fan and you refuse to ride any other brand of bikes, then this is still not a good motorcycle for you as a beginner. The main reasons why the Iron 883 isnt great for amateurs is due to its performance.",
    },
    {
      name: "harley davidson sportster S",
      price: "21,135 $",
      image:
        "https://www.cycleworld.com/resizer/ToLn2UjeyyAwedAIo2mhO6V71ZM=/1440x0/filters:focal(997x640:1007x650)/cloudfront-us-east-1.images.arcpublishing.com/octane/O6THQTD6DBHLXPSCAUODIABXUE.jpg",
      disc: "the legendary Sportster family is meaningful precisely because it’s a symbol. A 45-degree air-cooled pushrod engine, classic cruiser styling, that Milwaukee sound: They’re real, valuable, and necessary, because they’re the soul of Harley-Davidson.",
    },
    {
      name: "harley davidson fat bob",
      price: "21,135 $",
      image:
        "https://www.motorcycle.com/blog/wp-content/uploads/2017/08/083117-Harley-Davidson-Fat-Bob-9949.jpg",
      disc: "The Fat Bob motorcycle features aggressive, unapologetic styling, mind-blowing performance and handling, premium finishes",
    },
    {
      name: "harley davidson roadster",
      price: "21,135 $",
      image:
        "https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/2020-Harley-Davidson-Roadster-Buyers-Guide-Specs-Prices-3.jpg",
      disc: " Sportster models are designated in Harley-Davidsons product code by beginning with XL. In 1952, the predecessors to the Sportster",
    },
    {
      name: "triumph trident 660",
      price: "21,135 $",
      image:
        "https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking-moto.fr/2021/05/15/09/11/triumph-trident-triumph-trident-660-silver-ice-diablo-red-2021-new-motorcycle-for-sale-in-dieppe_151399831.jpg",
      disc: "The new Trident 660 is an accessible urban roadster that combines beautiful urban style with thrilling triple engine performance.",
    },
    {
      name: "triumph rocket 3 R",
      price: "21,135 $",
      image:
        "https://images.hindustantimes.com/auto/img/2020/09/10/600x338/20200904051653_Rocket-3-GT_1599718914445_1599718921043.jpg",
      disc: "Triumphs big-bore three-cylinder cruiser, the Rocket 3, has been completely redesigned. Engine capacity is up from 2,294cc to 2458cc further cementing the massive Brit bikes title as the worlds largest-displacement production motorcycle.",
    },
    {
      name: "triumph bonneville speedmaster",
      price: "21,135 $",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8WLAKJXky9MNKuag_mfa6ZTy6M95uFK-833JI3jahpKARrSUxzdjDuH0483-0-HbjM4&usqp=CAU",
      disc: "The Triumph Speedmaster is a cruiser that pulls heavily from its fellow Bonneville brothers: the 1,200cc parallel twin taken from the Bonneville T120 to the Bonneville Bobbers classic ride-alone",
    },
    {
      name: "triumph thruxton",
      price: "21,135 $",
      image: "https://i.ytimg.com/vi/r5uz02yLSGc/maxresdefault.jpg",
      disc: "Like the rest of the British motorcycle industry, Triumph went out of business by the 1980s. But the brand was resurrected in the 1990s by British industrialist John Bloor who has built a lineup of cutting-edge sportbikes to nostalgia-themed throwbacks",
    },
  ];
  return (
    <div className="App">
      <div className="cardswraper">
        <Card info={pro} />
      </div>
    </div>
  );
}
function Card(props) {
  const { info } = props;
  console.log(props);
  return (
    <>
      {info.map((val, i) => {
        return (
          <div className="card">
            <img src={val.image} alt="" />
            <div className="bod">
              <p className="card-title">{val.name}</p>
              <p className="price">{val.price}</p>
              <p className="discrip">{val.disc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
