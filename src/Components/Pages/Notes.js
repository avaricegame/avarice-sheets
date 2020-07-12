import React from "react"

const Notes = ({ characterSheet }) => {
  return (
    <React.Fragment>
      <div className="secondary-header">
        <h1>Notes</h1>
      </div>

      <div className="all-notes bgb">
        <div className="heading-bar">
          <h2>All Notes</h2>
        </div>

        <button id="createNewNoteButton">Create a New Note</button>
        <form id="createNewNoteForm">
          <fieldset>
            <label>Note Title:</label>
            <input type="text" />
            <textarea></textarea>
            <input type="submit" className="submit-button" value="Save Note" />
          </fieldset>
        </form>
      </div>
      <div className="notes bgb">
        <div className="heading-bar">
          <h2>Note Content</h2>
        </div>
        {/* <h4>Heading for the note</h4> */}
        <h4>title</h4>
        <p>text stuff</p>
        {/* <h4>Heading for the note</h4>
                        <p>
                                Platea dictumst quisque sagittis purus sit. Amet risus nullam eget felis eget. Interdum
                                velit laoreet id donec ultrices tincidunt arcu. Risus nec feugiat in fermentum posuere
                                urna nec tincidunt praesent. Tellus integer feugiat scelerisque varius morbi enim. Nulla
                                porttitor massa id neque aliquam vestibulum morbi. Donec pretium vulputate sapien nec
                                sagittis aliquam. Gravida in fermentum et sollicitudin ac orci phasellus. Sed felis eget
                                velit aliquet sagittis. Est ultricies integer quis auctor. Porta non pulvinar neque
                                laoreet suspendisse interdum. Tellus pellentesque eu tincidunt tortor aliquam nulla
                                facilisi cras. Bibendum ut tristique et egestas quis. Tempus urna et pharetra pharetra.
</p> */}
      </div>
    </React.Fragment>
  )
}

export default Notes
