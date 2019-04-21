import React, { Component } from 'react';
import './App.scss';
import SearchBar from './search-bar/SearchBar';

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

	handleError = (e) => {
		console.log(e);
	}

	handleKeywordUpdate = (keyword) => {
		if(this.state.searchTerm === '') {
			this.setState({
				searchTerm: keyword,
				newSearch: false
			})

			return;
		}

		if (this.state.searchTerm === keyword) {
			this.setState({
				searchTerm: keyword,
				newSearch: true
			})
		}
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
			</div>
		);
	}
}

export default App;
