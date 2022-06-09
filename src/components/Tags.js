import { useState } from "react";

export default function Tags(props) {

  const [input, setInput] = useState("");
  const { tags, setTags, id } = props;

  const addTag = (e) => {
    if(!input.length) {
      setInput("");
    } else {
      e.preventDefault();
      setTags({ ...tags }, tags[id].push(input.trim()));
      setInput("");
    }
  }

  const removeTag = (index) => {
    const newTags = { ...tags };
    const newTagsArr = tags[id].filter((tag, i) => i !== index);
    newTags[id] = newTagsArr;
    setTags(newTags);
  }

  const tagsToDisplay = (tags ? tags[id].map((tag, i) =>
    <div className="tag-item" key={i}>
      <span className="tag-text">{tag}</span >
      <span className="tag-close" onClick={() => removeTag(i)}>&times;</span>
    </div >
   ) : null)

  return (
    <>
      <div className="student-tags">
        {tagsToDisplay}
      </div>
      <form
        onSubmit={addTag}
      >
        <input
          type="text"
          value={input}
          placeholder="Add a tag"
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </>
  );
}