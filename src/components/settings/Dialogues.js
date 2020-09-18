import React , {useEffect , useState} from 'react';
import classes from './Dialogues.module.css';
import Plus from './dialogues-icons/plus.svg';
import Data from './Data';
import Topbar from '../Topbar';


const Dialogues = ({name}) => {
    const [names , setnames] = useState([]);
    const [loading , setloading] = useState(true);
    // Pagination
    const [currentPage, setcurrentPage] = useState(1)


    useEffect (() => {
        const job = jobApi();
        job.then((posting) => {
          setnames(posting);
          setloading(false)
        }).catch(()=>{
            setloading(true)
            alert('Error while fetching data from API!!')
        })
      },[])
    



      //async function
    const jobApi = async () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const response = await fetch(`${proxyUrl}https://jobs.github.com/positions.json?`);
        const jsonData = response.json();
        return jsonData;
    }
    const indexOfLastName = currentPage * 20;
    const indexOfFirstName = indexOfLastName - 20; 
    const currentNames = names.slice(indexOfFirstName,indexOfLastName);

    const nextPage = () => {
        if(currentPage >= Math.ceil(names.length/20)){
            setcurrentPage(1)
        }
        else{
            setcurrentPage(prev => prev + 1)
        }
    }
    const prevPage = () => {
        if(currentPage <= 1){
            setcurrentPage(1)
        }
        else{
            setcurrentPage(prev => prev - 1)
        }
    }
    
    return (
       <div className = 'container'>
           <Topbar name = {name}/>
            <div className = {classes.dialogues}>
            <div className= {classes.new_dialg}>
                <div className={classes.new}>
                    <img src= {Plus} alt="o" /><p>ADD DIALOGUES</p>
                </div>
            </div>
            <div className={classes.dialg}>
                <div className={classes.title}>
                    <p>NAME</p>
                    <p>KIND</p>
                    <p>BRAND</p>
                    <p>EXPORT/IMPORT</p>
                    <p>ACTIONS</p>                    
                </div>


                {
                  (loading)?(
                    <div
                    style = {{
                        height : '60%',
                        display : 'grid',
                        placeItems : 'center'
                    }}
                    >
                        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                                <stop stopColor="#192a56" stopOpacity="0" offset="0%"/>
                                <stop stopColor="#192a56" stopOpacity=".631" offset="63.146%"/>
                                <stop stopColor="#192a56" offset="100%"/>
                            </linearGradient>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                            <g transform="translate(1 1)">
                                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur="0.9s"
                                        repeatCount="indefinite" />
                                </path>
                                <circle fill="#fff" cx="36" cy="18" r="1">
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur="0.9s"
                                        repeatCount="indefinite" />
                                </circle>
                            </g>
                        </g>
                    </svg>
                    </div>
                )  
                :(<div className = {classes.table}>
                    {
                        currentNames.map((name,index)=>{
                            return (<Data key = {`${index}-${name.title}`} name = {name.company}/>)
                        })
                    }
                </div>)}
            </div>
            <div className={classes.pagination}>
                <div className={classes.controls}>
                    <div className = {classes.back} onClick = {()=>prevPage()}>&#8592;</div>
                    <div>{currentPage}</div>
                    <div className = {classes.next} onClick = {()=>nextPage()}>&#8594;</div>
                </div>
                <p>20 per page</p>
            </div>
        </div>
       </div>
    )
}

export default Dialogues
