jest.dontMock('../SearchBar.js');

describe('SearchBar', function () {
  if('renders with filterText empty', function () {
    var React = require('react/addons');
    var SearchBar = require('../SearchBar.js');
    var TestUtils = React.addons.TestUtils;

    var dummyCallback = function () {};
    // Render the searchbar into a document
    var searchBar = TestUtils.renderIntoDocument(
      <SearchBar filterText={""} onUserInput={dummyCallback} />
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(
      searchBar, 'input');
    expect(React.findDOMNode(filterText).textContent).toEqual('');
  });
});
