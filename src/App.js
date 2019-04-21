import React, { Component } from 'react';
import './App.scss';
import SearchBar from './search-bar/SearchBar';
import JobCardList from './job-card-list/JobCardList';
import * as axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			jobs: [],
			loading: false,
			searchTerm: '',
			pageIndex: 1,
			newSearch: false
		};
	}

	toggleLoading = () => {
		this.setState({
			loading: !this.state.loading
		});
	}

	handleResponse = (response) => {
		let newJobs = response.data;
		if (this.state.pageIndex > 1) {
			let currentJobs = this.state.jobs;

			newJobs = currentJobs.concat(newJobs);
		}

		this.setState({
			jobs: newJobs
		});
	}

	handleError = (e) => {
		console.log(e);
	}

	showMore = (e) => {
		const newPageIndex = this.state.pageIndex + 1;
		this.setState({
			pageIndex: newPageIndex
		}, () => {
			this.search();
		});
	}

	handleKeywordUpdate = (keyword) => {
		if(this.state.searchTerm === '') {
			this.setState({
				searchTerm: keyword,
				newSearch: false
			}, () => {
				this.search();
			})

			return;
		}

		if (this.state.searchTerm === keyword) {
			this.setState({
				searchTerm: keyword,
				newSearch: true
			}, () => {
				this.search();
			})
		}
	}

	/**
	 * Search
	 */
	search = () => {
		this.toggleLoading();

		const { searchTerm, pageIndex } = this.state;
		axios.get(`http://localhost:8000/api/jobs?description=${searchTerm}&page=${pageIndex}`)
			.then(response => this.handleResponse(response))
			.catch(error => this.handleError(error))
			.then(_ => this.toggleLoading());

	}

	render() {
		return (
			<div className="container mt-4">
				<div className="row">
					<div className="col-lg-12 mx-auto">
						<SearchBar
							onKeywordUpdated={this.handleKeywordUpdate}
							loading={this.state.loading}/>
					</div>
				</div>

				<div className="row mt-4">
					<JobCardList jobs={this.state.jobs} />
				</div>

				{this.state.jobs.length > 0 &&
					<div className="row mx-auto mt-4">
						<button className="btn btn-link mx-auto" onClick={this.showMore}>Show More</button>
					</div>
				}

				{this.state.loading &&
					<div className="row mx-auto">
						<div className="spinner-grow text-primary mx-auto">
						</div>
					</div>
				}

			</div>
		);
	}
}

export default App;
