import styles from './styles.module.scss';

enum sizeOptions{
    increase,
    decrease
}

const BtnFontSize = () => {
    function changeSize(props: sizeOptions){
        console.log("CHAMOU")
        document.querySelectorAll(`
            body>*:not(nav) h1, 
            body>*:not(nav) h2, 
            body>*:not(nav) h3, 
            body>*:not(nav) h4, 
            body>*:not(nav) h5, 
            body>*:not(nav) h6, 
            body>*:not(nav) p, 
            body>*:not(nav) span, 
            body>*:not(nav) ul, 
            body>*:not(nav) li, 
            body>*:not(nav) u, 
            body>*:not(nav) i, 
            body>*:not(nav) font, 
            body>*:not(nav) a, 
            body>*:not(nav) button:not(.${styles.fontSize}), 
            body>*:not(nav) input, 
            body>*:not(nav) div    
        `).forEach((item: Element) => {
            if(item.tagName != undefined){
                const cssObj = window.getComputedStyle(item, null);
                let fontSize: number = parseInt(cssObj?.getPropertyValue("font-size").replace("px", ""));
                
                props === sizeOptions.decrease ? fontSize-- : fontSize++;
    
                item.setAttribute("style", `font-size: ${fontSize.toString()}px !important;`);
            }
        })
    }
    
    return(
        <div className={styles.itemMenuSize}>
            <button className={styles.fontSize} onClick={() => changeSize(sizeOptions.decrease)}>A-</button>
            <button className={styles.fontSize} onClick={() => changeSize(sizeOptions.increase)}>A+</button>
        </div>
    )
}   

export default BtnFontSize;