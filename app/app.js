

class RemoteJobs extends React.Component {

    // Fetch from https://remoteok.io/api

    url = "https://remoteok.io/api";
    // getJobsData = {};
    // jobsDisplay;

    constructor(props) {
        super()
        this.state = {
            jobsState: []
        }
    }


    async getJobs() {
        const response = await fetch(this.url);
        const data = await response.json();
        // const jobs = await Array.from(data)
    
        // console.log("Job data: ", data);
    
        const jobs = Array.from(data)

        const legal = jobs.shift();
    
    
        const jobsD = jobs.map((job) => {
            return(
                <div className="job" key={job.id}>
                    <a href={job.url}>
                    
                        <h2>{job.position}</h2>
                        
                        <div className="bottom-row">
                            <div>
                                <img className="company-logo" src={job.company_logo}/>
                                <span>{job.company}</span>
                            </div>
                            <p>{job.description}</p>
                            
                        </div>

                        <ul className="tags">
                            {}
                        </ul>
                    </a>
                </div>
            )
        });

        this.setState({
            jobsState: jobsD
        }) 
        
    
    }
    
    
    // Parse data

    componentDidMount() {
        this.getJobs()
      }
        

    render() {


        return (<div>
            {this.state.jobsState}
        </div>)
    }

}






// Render components to the browser
const domContainer = document.querySelector('#app');

ReactDOM.render( <RemoteJobs />, domContainer );