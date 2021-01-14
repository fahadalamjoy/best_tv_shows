import React from 'react';
import useApiData from './useApiData';
import './TvMazeDatalist.css'

const TvMazeDataList = ({tvMazeData}) => {
    const apiData = useApiData(tvMazeData);


    return(
        <div className="tvMazeDataList">

        {
            apiData.map((data)=>(
                <div className="card">
                    <img 
                    width="250px"
                    height="270px"
                    src={data.character.image.medium}
                    className="picture" alt={data.character.name}/>
                <div className="text">
                    <h2>{data.character.name}</h2>
                </div>
                <div className="info">
                    <div className="data">
                        <div className="value">
                            {data.person.birthday}
                        </div>
                    </div>
                    <div className="data border">
                        <div className="value">
                            {data.person.country.name}
                        </div>
                    </div>
                </div>

                </div>
            ))
        }
        </div>
    )
}

export default TvMazeDataList;