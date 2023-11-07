import './Content.css';
import nike from './images/hero-image.png';
import flipkart from './images/flipkart.png';
import amazon from './images/amazon.png';

function Content() {
    return (
      <div className="Container">
            <div className="Content">
                <div className="left-content">
                    <div className="Title">
                        <h1>YOUR FEET <br></br>
                        DESERVE <br/>THE BEST</h1>
                    </div>
                    <div className="read-more">
                        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div className="sell-button">
                        <div className="shop-now">
                            <button value="Shop-Now-1" className='Shop-Now-1'>Shop Now</button>
                            <button value="Category" className='Category'>Category</button>
                        </div>
                       
                    </div>
                    <div className="Available-on">
                    
                        <div className="para">Also Available On</div>
                        <div className="icon">
                            <a href='https://www.flipkart.com/nike-downshifter-12-running-shoes-men/p/itme73086e7eb566?pid=SHOGRZGZUTARSZRG&lid=LSTSHOGRZGZUTARSZRGTJELYD&marketplace=FLIPKART&q=skechers+shoes+nike&store=osp%2Fcil%2F1cu&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=bebfa8b8-1ec5-4c5e-8416-70ac3b97f85c.SHOGRZGZUTARSZRG.SEARCH&ppt=sp&ppn=sp&qH=7388feba8bd727da'><img src={flipkart} alt="flipkart"></img></a>
                            <a href='https://www.amazon.in/Skechers-Mens-Uno-Cushioned-Comfort/dp/B07NYTJGW5/ref=sr_1_26?adgrpid=1322714094872953&hvadid=82669901375885&hvbmt=be&hvdev=c&hvlocphy=148977&hvnetw=o&hvqmt=e&hvtargid=kwd-82670511004356%3Aloc-90&hydadcr=22284_2343026&keywords=skechers+shoes&nsdOptOutParam=true&qid=1698740720&sr=8-26'><img src={amazon} alt="amazon"></img></a>
                            
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <img src={nike} alt="nike-ka-joota"></img>
                </div>
            </div>
      </div>
    );
  }
  
  export default Content;