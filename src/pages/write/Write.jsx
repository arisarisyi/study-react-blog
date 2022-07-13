import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/03/05/aurora-borealis-2647474_960_720-20220305073333.jpg"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
