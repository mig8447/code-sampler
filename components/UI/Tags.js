import classes from "../../styles/Tags.module.css";

const Tags = ({tags}) => (
    <div className={["d-flex", "flex-row", "flex-wrap", classes.tags].join(" ")} >
        {tags.map(tag => (
            <p className={["text-capitalize", classes.tag].join(" ")} key={tag}>{tag}</p>
        )
        )}
    </div>
)


export default Tags;