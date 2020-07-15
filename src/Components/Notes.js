import React from "react"

const Notes = ({ characterSheet }) => {
  return (
    <React.Fragment>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Notes</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Notes</h2>
          <div className="cw__container">
            <hr className="horizontal-rule" />
            <button>Note 1</button>
            <button>Note 2</button>
            <button>Note 3</button>
            <button>Note 4</button>
            <button>Note 5</button>
            <hr className="horizontal-rule" />
            <button>Create New</button>
          </div>
        </div>

        <div className="cw__75">
          <h2 className="heading">Note Content</h2>
          <div className="cw__container">
            <button className="edit-note-button">Edit Note</button>
            <h3 className="note-title">Note 1</h3>
            <hr className="horizontal-rule" />
            <div className="note-content">
              <p>Platea dictumst quisque sagittis purus sit. Amet risus nullam eget felis eget. Interdum velit laoreet id donec ultrices tincidunt arcu. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Tellus integer feugiat scelerisque varius morbi enim. Nulla porttitor massa id neque aliquam vestibulum morbi. Donec pretium vulputate sapien nec sagittis aliquam. Gravida in fermentum et sollicitudin ac orci phasellus. Sed felis eget velit aliquet sagittis. Est ultricies integer quis auctor. Porta non pulvinar neque laoreet suspendisse interdum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Bibendum ut tristique et egestas quis. Tempus urna et pharetra pharetra.</p>
              <p>Platea dictumst quisque sagittis purus sit. Amet risus nullam eget felis eget. Interdum velit laoreet id donec ultrices tincidunt arcu. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Tellus integer feugiat scelerisque varius morbi enim. Nulla porttitor massa id neque aliquam vestibulum morbi. Donec pretium vulputate sapien nec sagittis aliquam. Gravida in fermentum et sollicitudin ac orci phasellus. Sed felis eget velit aliquet sagittis. Est ultricies integer quis auctor. Porta non pulvinar neque laoreet suspendisse interdum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Bibendum ut tristique et egestas quis. Tempus urna et pharetra pharetra.</p>
            </div>
          </div>
          <hr className="horizontal-rule" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Notes
