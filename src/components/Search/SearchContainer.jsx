import { Component } from 'react';
import PropTypes from "prop-types";
import './search-styles.scss';

const Search = ({ searchTerm, onSearchTermChange, onSortChange, onTypeFilter }) => {

  // PropTypes in React ensure that components use correct data types and pass the right data as props from one component to another.
  Search.propTypes = {
    // string that represents the current input string the user has entered.
    // This is required for the searchbar to function
    searchTerm: PropTypes.string.isRequired,

    // function called to filter games corresponsind to searchTerm
    onSearchTermChange: PropTypes.func.isRequired,
    
    // function called to filter games in different orders when they are displayed.
    onSortChange: PropTypes.func.isRequired,

    // THESE BUTTON FILTERS WILL PROBABLY BE OPTIONAL BECAUSE OF THE FEW GAMES WE HAVE
    // function called when a game-type filter button is click. The function will filter the display items by the selected type.
    onGameTypeFilter: PropTypes.func.isRequired,
  };

  return (
    <div className="Search">
      <input
        className="Search-input"
        type="text"
        placeholder="Games..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <div className="Search-controls">
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="numerical">Lowest Number to Highest</option>
          <option value="reverseNumerical">Highest Number to Lowest</option>
          <option value="alphabetical">A-Z</option>
          <option value="reverseAlphabetical">Z-A</option>
        </select>
        <button class = "All" onClick={() => onTypeFilter('')}>All Types </button>
        <button class = "Puzzle" onClick={() => onTypeFilter('puzzle')}>Puzzle</button>
        <button class = "Classics" onClick={() => onTypeFilter('classic')}>Classics</button>
        <button class = "AI" onClick={() => onTypeFilter('AI')}>AI</button>
    
        
        {/* Add more type buttons as needed */}
      </div>
    </div>
  );
};

export default Search;
