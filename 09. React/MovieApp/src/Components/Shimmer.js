const Shimmer = () =>{
    return (
       <div className="m-5 p-2">
            {
                Array(10).fill('').map(()=>{
                    return <div className="card bg-slate-900"></div>
                })
            }
       </div>
    );
}

export default Shimmer ;