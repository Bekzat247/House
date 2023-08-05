import css from "./title.module.css"
function Title(props) {
    return(
        <div className={css.title} style={{textAlign:props.possition}}>
            {props.title}
        </div>
    )
}

export default Title