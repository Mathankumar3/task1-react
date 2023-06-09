import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({card}) {


    return(
      <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{card.plan}</h5>
          <h6 class="card-price text-center">${card.price}<span class="period">/month</span></h6>
          <hr/>
          <ul class="fa-ul">
           {
            card.features.map((item) => {
              return(
                <li 
                className={`mt-10 ${item.bold ? '' : "fw-bold"} ${item.isEnable ? '' : 'text-muted'}`}>
                  <FontAwesomeIcon icon={item.isEnable ? faCheck : faXmark} /> {item.title}</li>
              //   card.features.map((iteam) =>{
              //     return <li> <FontAwesomeIcon icon={iteam.isEnable ? faCheck : faXmark}/>{iteam.title}</li>
              // })



              )
            })
           }
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
     
    );
}