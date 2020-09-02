import './RepositoryItem.scss';
import React, { useEffect, useState } from 'react';
import swift from 'programming-languages-logos/src/swift/swift.svg';
import kotlin from 'programming-languages-logos/src/kotlin/kotlin.svg';
import JavaScript from 'programming-languages-logos/src/javascript/javascript.svg';
import java from 'programming-languages-logos/src/java/java.svg';
import TypeScript from 'programming-languages-logos/src/typescript/typescript.svg';
import LazyLoad from 'react-lazyload';
import { useHistory, Link , BrowserRouter as Router} from 'react-router-dom';

const RepositoryItem = (props) => {

    const history = useHistory();
    const [languages, setLanguages] = useState();

    const logos = {
        swift,
        kotlin,
        JavaScript,
        java,
        TypeScript
    };

    /*useEffect(async () => {
        const response = await props.getLanguages(props.name);
        setLanguages(response);
    }, []);*/

    return(
        <div id={window.innerHeight < window.innerWidth ? "itemContainer" : "itemContainerMobile"} style= {
            {
                background: `url(${process.env.PUBLIC_URL}/${props.technologies[0]}.png)`
            }
        }>
            <div className={window.innerHeight < window.innerWidth ? "item" : "itemMobile"}
                 onClick={() => history.push("/details", {project: props.activeProject})}>
                <LazyLoad>
                    <div id="languagesDiv">
                        {
                            props.technologies.map((tech) => (
                                <img className="languagesImg" src={`${process.env.PUBLIC_URL}/${tech}.png`} height="75"/>
                            ))
                        }
                    </div>
                    <div>
                        <p className="itemText">{props.name}</p>
                    </div>
                    <p className="description">{props.description}</p>
                </LazyLoad>
            </div>
        </div>
    );
};

export default RepositoryItem;
