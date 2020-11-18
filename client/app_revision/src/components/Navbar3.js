import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    navWrapper: {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        width: "90%",
        height: "80px",
        borderRadius: "0 0 15px 15px",
        padding: "0 25px",
        zIndex: 2,
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    },



    navContainer: {
        position: "fixed",
        display: "none",
        overflowY: "auto",
        zIndex: "-1",
        top: 0,
        right: 0,
        width: "280px",
        height: "100%",
        background: "#fff",
        boxShadow: "-1px 0 2px rgba(0, 0, 0, 0.2)",
    },

    menuBtn: {
        position: "relative",
        display: "block",
        margin: 0,
        width: "20px",
        height: "15px",
        cursor: "pointer",
        zIndex: 2,
        padding: "10px",
        borderRadius: "10px",
    },

    navTabs: {
        display: "flex",
        fontWeight: 600,
        fontSize: "18px",
        listStyle: "none",
    },

    navTab: {
        padding: "10px 25px",
        margin: 0,
        borderRight: "1px solid #eee",
    },

    menu: {
        display: "block",
		width: "100%",
		height: "2px",
		borderRadius: "2px",
		background: "#111",
    }

}))


export default function Navbar3() {
    const classes = useStyles()
    return (
        <header>
            <div className={classes.navWrapper}>
                <div className={classes.logoContainer}>
                    <img className="logo" src="https://i.imgur.com/gea725J.png" alt="Logo"></img>
                </div>
                <nav>
                    <label className={classes.menuBtn} for="menuToggle">
                        <div className={classes.menu}></div>
                        <div className={classes.menu}></div>
                        <div className={classes.menu}></div>
                    </label>
                    <div className={classes.navContainer}>
                        <ul className={classes.navTabs}>
                            <li className={classes.navTab}>Home</li>
                            <li className={classes.navTab}>Products</li>
                            <li className={classes.navTab}>Services</li>
                            <li className={classes.navTab}>FAQ</li>
                            <li className={classes.navTab}>Contact</li>
                            <li className={classes.navTab}>Careers</li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}