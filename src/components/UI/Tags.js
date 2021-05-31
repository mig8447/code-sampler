import classes from "../../styles/Tags.module.css";

const Tags = ({tags}) => (
    <div className={["d-flex", "flex-row", "flex-wrap", "mb-2", classes.tags].join(" ")} >
        {tags.map(tag => (
            <p className={["text-capitalize", "mb-1 mr-1", "text-truncate", "px-2", classes.tag].join(" ")} key={tag}>{tag}</p>
        )
        )}
    </div>
)


export default Tags;