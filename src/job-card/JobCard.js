import React, {Component} from 'react';
import './JobCard.scss';

class JobCard extends Component {

	render() {
		const { job } = this.props;

		return (
			<div className="card">

				<div className="card-body">
					<h5 className="card-title">{job.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{job.location}</h6>
					<h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
					<h6 className="card-subtitle mb-2 text-muted">{job.created_at}</h6>

				</div>
				<div className="card-footer">
					<a href={job.url} className="btn btn-link" target="_blank">Click To Apply</a>
				</div>
			</div>
		)
	}
}

export default JobCard;
