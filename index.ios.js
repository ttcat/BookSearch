'use strict';

var React = require('react-native');
var Featured = require('./Featured');
var Search = require('./Search');
var BookDetail = require('./BookDetail');


var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
      selected={this.state.selectedTab === 'featured'}
      systemIcon = "featured"
      // icon={{systemIcon:'featured'}}
      onPress={() => {
        this.setState({
          selectedTab: 'featured'
        });
      }}>
      <Featured/>
      </TabBarIOS.Item>
      <TabBarIOS.Item
      selected={this.state.selectedTab === 'search'}
      systemIcon = "search"
      // icon={{systemIcon:'search'}}
      onPress={() => {
        this.setState({
          selectedTab: 'search'
        });
      }}>
      <Search/>
      </TabBarIOS.Item>
      </TabBarIOS>
      );
  }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);