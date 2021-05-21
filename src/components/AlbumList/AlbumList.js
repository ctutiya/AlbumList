import React from "react";
import Album from "./Album";

class AlbumList extends React.Component {
  state = {
    albums: [],
  };

  fetchAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albumData = await response.json();
    this.setState({
      albums: albumData,
    });
    console.log(albumData);
  };

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    return (
      <>
        <h1>Album List</h1>
        <Album albumData={this.state.albums} />
      </>
    );
  }
}

export default AlbumList;
