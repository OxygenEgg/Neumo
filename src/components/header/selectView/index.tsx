import styles from "./index.module.scss";

const SelectView = (props: { title: string; view: View; onClick: () => void }) => {
    return (
        <button className={styles.navLink} onClick={props.onClick}>
            <div className={styles.navLink__title}>{props.title}</div>
        </button>
    );
};

export default SelectView;
