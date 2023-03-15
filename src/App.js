
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function app(){

  var priceCard=[
    {
      plan:"Free",
      price:"0",
      features:[
      {
        title:"Single User",
        isEnable : true
      },
      {
        title :"5GB Storage",
        isEnable : true
      },
      {
        title :"Unlimited Public Projects",
        isEnable : true
      },
      {
        title :"Community Access",
        isEnable : true
      },
      {
        title:"Unlimited Private Projects",
        isEnable : false
      },
      {
        title :"Dedicated Phone Support",
        isEnable : false

      },
      {
        title :"Free Subdomain",
        isEnable : false
      },
      {
        title :"Monthly Status Reports",
        isEnable : false
      }
    ]

    },
    {
      plan:"Plus",
      price:"9",
      features:[
        {
          title:"5 Users",
          isEnable : true
        },
        {
          title :"50GB Storage",
          isEnable : true
        },
        {
          title :"Unlimited Public Projects",
          isEnable : true
        },
        {
          title :"Community Access",
          isEnable : true
        },
        {
          title:"Unlimited Private Projects",
          isEnable : true
        },
        {
          title :"Dedicated Phone Support",
          isEnable : true
        },
        {
          title :"Free Subdomain",
          isEnable : true
        },
        {
          title :"Monthly Status Reports",
          isEnable : false
        }
      ]

    },
    {
      plan:"Pro",
      price:"49",
      features:[
        {
          title:"Unlimited Users",
          isEnable : true
        },
        {
          title :"150GB Storage",
          isEnable : true
        },
        {
          title :"Unlimited Public Projects",
          isEnable : true
        },
        {
          title :"Community Access",
          isEnable : true
        },
        {
          title:"Unlimited Private Projects",
          isEnable : true
        },
        {
          title :"Dedicated Phone Support",
          isEnable : true
        },
        {
          title :"Free Subdomain",
          isEnable : true
        },
        {
          title :"Monthly Status Reports",
          isEnable : true
        }
      ]

    },
    

  ]

  return (
    <section className="pricing py-5">
       <div className="container">
         <div className="row mt-3">
      
        {
          priceCard.map((card) => {
            // return <Card plan={card.plan} price={card.price}></Card>
            return <Card card={card}></Card>
          })
        }                   
            
            
          </div>
     </div>    
    </section>
   
  );
}

