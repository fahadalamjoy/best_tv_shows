
import React,{useState} from 'react'
import './components/App.css';
import TvShowList from './components/TvMazeDataList';




const App = () => {
const [tvShow,setTvShow] = useState(['82']);
  
// useEffect(()=>{


//    fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(res=> res.json())
//   .then((data)=>{
//     console.log(data)
//     setCountry(data)
//   })
// },[])  


  return (
    <div >
      <div className="App">
        <h1>My Best TV Show</h1>
        <h2 className="cast">Cast Members</h2>
      <button className="btn styleTop" onClick={()=>setTvShow('82')}>
        Game Of Thrones
      </button>
      <button className="btn styleBottom" onClick={()=>setTvShow('431')}>
        Friends
      </button><button className="btn styleTop" onClick={()=>setTvShow('169')}>
        Breaking Bad
      </button><button className="btn styleBottom" onClick={()=>setTvShow('66')}>
        Big Bang Theory
      </button>
      <button className="btn styletop" onClick={()=>setTvShow('38963')}>
        The Mandalorian
      </button>
      <button className="btn styleBottom" onClick={()=>setTvShow('13634')}>
      Godless
      </button>
      </div>
      <TvShowList tvMazeData={tvShow}/>
    </div>
  )
}
export default App;
