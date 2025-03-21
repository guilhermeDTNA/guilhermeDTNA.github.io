"use client";

import { useContext } from 'react';
import styles from './styles.module.scss';
import { ContrastContext } from '@/providers/Context';

const ContrastToggle = () => {
    const {isDisabled, toggle} = useContext(ContrastContext);

    return(
        <div className={styles.contrastToggle}>
            <label htmlFor='contrast' className="switch" data-title={!isDisabled ? "Modo noturno" : "Modo padrão"}>
                {isDisabled ? <input type="checkbox" id="contrast" name="contrast" onChange={toggle} /> : <input type="checkbox" id="contrast" name="contrast" onChange={toggle} checked />}
                
                <span className="slider round">
                    <div className="svg-light">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 462.345 462.345">
                            <g>
                                <path d="M235.696,81.72c0-4.487-3.633-8.129-8.129-8.129c-46.926,0-85.106,38.18-85.106,85.106   c0,4.487,3.633,8.129,8.129,8.129c4.495,0,8.129-3.642,8.129-8.129c0-37.96,30.889-68.849,68.849-68.849   C232.063,89.848,235.696,86.215,235.696,81.72z"></path>
                                <path d="M108.305,158.697c0,27.897,9.015,54.274,26.076,76.279c0.081,0.106,0.171,0.211,0.26,0.317   c35.579,49.389,26.735,72.881,26.735,72.921c-1.902,4.064-0.146,8.901,3.918,10.811c1.114,0.52,2.284,0.772,3.438,0.764   c3.056,0,5.983-1.731,7.364-4.682c1.471-3.121,13.095-32.214-28.694-89.91c-0.187-0.252-0.374-0.496-0.585-0.723   c-14.558-19.021-22.248-41.748-22.248-65.785c0-59.729,48.601-108.321,108.321-108.321S341.213,98.96,341.213,158.689   c0,24.101-7.738,46.918-22.524,66.15c-41.813,57.737-29.718,87.163-28.206,90.333c1.91,3.975,6.6,5.601,10.616,3.804   s5.836-6.576,4.137-10.64c-0.098-0.236-9.413-24.199,26.483-73.775c16.842-21.915,25.751-48.146,25.751-75.864   c0-68.695-55.884-124.579-124.579-124.579S108.305,90.011,108.305,158.697z"></path>
                                <path d="M305.439,351.084v-6.909c0-11.014-8.966-19.972-19.972-19.972H175.927   c-11.014,0-19.972,8.958-19.972,19.972v6.909c0,11.006,8.958,19.972,19.972,19.972h109.549   C296.482,371.056,305.439,362.098,305.439,351.084z M172.212,351.084v-6.909c0-2.048,1.666-3.715,3.715-3.715h109.549   c2.048,0,3.715,1.666,3.715,3.715v6.909c0,2.048-1.666,3.715-3.715,3.715H175.927C173.878,354.799,172.212,353.133,172.212,351.084   z"></path>
                                <path d="M189.087,383.412c-4.495,0-8.129,3.642-8.129,8.129v21.468c0,3.186,1.861,6.072,4.755,7.397   l43.805,19.988c1.073,0.488,2.219,0.732,3.373,0.732c1.187,0,2.374-0.26,3.471-0.78l43.927-20.728   c2.845-1.341,4.658-4.202,4.658-7.348v-20.72c0-4.487-3.633-8.129-8.129-8.129s-8.129,3.642-8.129,8.129v15.574l-35.855,16.924   l-35.619-16.257v-16.241C197.215,387.045,193.582,383.412,189.087,383.412z"></path>
                                <path d="M422.263,305.581c2.666-3.609,1.894-8.698-1.715-11.364l-55.144-40.659   c-3.617-2.666-8.698-1.902-11.364,1.715c-2.666,3.609-1.894,8.698,1.715,11.364l55.144,40.659c1.455,1.073,3.146,1.585,4.82,1.585   C418.207,308.889,420.67,307.743,422.263,305.581z"></path>
                                <path d="M99.16,77.468c1.455,1.073,3.146,1.585,4.82,1.585c2.495,0,4.95-1.146,6.552-3.308   c2.666-3.609,1.894-8.698-1.715-11.364l-56.388-41.57c-3.609-2.674-8.698-1.894-11.364,1.715   c-2.666,3.617-1.902,8.706,1.715,11.372L99.16,77.468z"></path>
                                <path d="M101.721,250.761l-58.932,43.455c-3.609,2.666-4.381,7.755-1.715,11.364   c1.593,2.162,4.056,3.308,6.552,3.308c1.674,0,3.365-0.512,4.82-1.585l58.932-43.455c3.609-2.666,4.381-7.755,1.715-11.364   C110.41,248.867,105.33,248.103,101.721,250.761z"></path>
                                <path d="M358.161,61.699c-3.609,2.666-4.381,7.755-1.715,11.364c1.593,2.162,4.056,3.308,6.552,3.308   c1.674,0,3.365-0.52,4.82-1.585l52.746-38.887c3.609-2.666,4.381-7.755,1.715-11.364c-2.666-3.609-7.747-4.389-11.364-1.715   L358.161,61.699z"></path>
                                <path d="M454.217,156.933h-62.175c-4.495,0-8.129,3.642-8.129,8.129s3.633,8.129,8.129,8.129h62.175   c4.495,0,8.129-3.642,8.129-8.129S458.712,156.933,454.217,156.933z"></path>
                                <path d="M80.416,165.062c0-4.487-3.633-8.129-8.129-8.129H8.129c-4.495,0-8.129,3.642-8.129,8.129   s3.633,8.129,8.129,8.129h64.159C76.774,173.19,80.416,169.549,80.416,165.062z"></path>
                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>	
                    </div>

                    <div className="svg-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.242 489.242">
                            <g>
                            <g>
                                <path d="M416.321,171.943c0-97.8-82.2-176.9-181-171.7c-89.5,5.2-160.3,79.1-162.4,168.6c0,44.7,16.6,86.3,45.8,118.6    c47.7,51.1,41.6,110.3,41.6,110.3c0,11.4,9.4,20.8,20.8,20.8h126.9c11.4,0,20.8-9.4,21.8-20.8c0,0-7-57.7,40.6-109.2    C399.621,257.243,416.321,215.643,416.321,171.943z M288.321,377.943h-87.4c-2.1-42.7-20.8-84.3-51-116.5    c-22.9-25-34.3-57.2-34.3-90.5c1-68.7,54.1-124.8,122.8-129c74.9-4.2,137.3,56.2,137.3,130c0,32.3-12.5,64.5-35.4,88.4    C309.121,293.643,290.421,335.243,288.321,377.943z"></path>
                                <path d="M281.021,447.643h-73.9c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h73.9c11.4,0,20.8-9.4,20.8-20.8    C301.821,457.043,292.521,447.643,281.021,447.643z"></path>
                            </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>	
                    </div>
                </span>
            </label>
        </div>
    )
}

export default ContrastToggle;