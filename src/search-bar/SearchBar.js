import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props)
		this.state = {
			searchTerm: '',
			loading: props.loading
		};
	}

	handleChange = (e) => {
		this.setState({searchTerm: e.target.value});
	};

	handleSearch = () => {
		this.props.onKeywordUpdated(this.state.searchTerm);
	}

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-5">Github Jobs Search</h1>
					<hr className="my-4" />

					<div className="input-group mt-4">
						<input type="text"
							className="form-control col-lg-4"
							placeholder="Enter keyword"
							onChange={this.handleChange} />

						<div className="input-group-append">
							<button type="button"
								className="btn btn-primary"
								onClick={this.handleSearch}
								disabled={this.state.loading ? true : false }>
								{this.state.loading ? 'Searching...' : 'Search'}
							</button>
						</div>

					</div>

				</div>
			</div>
		)
	}
}

export default SearchBar;
