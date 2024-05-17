function TrackExpence({data,item,key,index,Delete}){
    return(
        <>
        <div className="TrackExpence">
            <div className="track_1">
               <div className="track_2">
                <h2>{data[0]} -</h2>
                <p>rs. {data[1]}</p>
                <p>{key}</p>
               </div>
            <button onClick={() => Delete(index)}>
               X
            </button>
            </div>
        </div>
        </>
    )
}
export default TrackExpence;