import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMixer } from "react-icons/fa";

function SearchBar({ placeholder, data }) {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return value.firstname.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered("");
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					type="text"
					placeholder={placeholder}
					value={wordEntered}
					onChange={handleFilter}
				/>
				<div className="searchIcon">
					{filteredData.length === 0 ? (
						<FaSearch />
					) : (
						<FaMixer id="clearBtn" onClick={clearInput} />
					)}
				</div>
			</div>
			{filteredData.length != 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 15).map((value, key) => {
						return (
							<a className="dataItem" href={value.link} target="_blank">
								<p>{value.firstname} </p>
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBar;
