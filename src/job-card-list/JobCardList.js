
import React, { Component } from 'react'
import JobCard from '../job-card/JobCard';

class JobCardList extends Component {

	render() {
		return this.props.jobs.map(job => {
			return (
				<div className="col-lg-4 col-sm-6" key={job.id}>
					<JobCard job={job}/>
				</div>
			)
		})
	}
}


export default JobCardList
