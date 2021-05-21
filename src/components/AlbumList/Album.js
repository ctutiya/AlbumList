import React from "react";

class Album extends React.Component {
  render() {
    return (
      <>
        <ul>
          {this.props.albumData.map((album) => (
            <li key={album.id}>
              {album.id}
              {album.title}
              <button>View Albums</button>
            </li>
          ))}
        </ul>

        <div></div>
      </>
    );
  }
}

export default Album;
