import './RepositoryItem.scss';
import React, { useEffect, useState } from 'react';
import swift from 'programming-languages-logos/src/swift/swift.svg';
import kotlin from 'programming-languages-logos/src/kotlin/kotlin.svg';
import JavaScript from 'programming-languages-logos/src/javascript/javascript.svg';
import java from 'programming-languages-logos/src/java/java.svg';
import TypeScript from 'programming-languages-logos/src/typescript/typescript.svg';

const RepositoryItem = (props) => {

    const logos = {
        swift,
        kotlin,
        JavaScript,
        java,
        TypeScript
    };

    const [languages, setLanguages] = useState([]);

    useEffect(async () => {
        const result = await props.getLanguages(props.name)
        setLanguages(result)
    }, []);

    return(
        <div id="itemContainer" style= {
            {
                marginLeft: props.id === 0 ? "3vw" : null,
                background: `url(https://cdn.jsdelivr.net/npm/programming-languages-logos/src/${languages[0]}/${languages[0]}.png)`
            }
        }>
            <a target="_blank" href={`https://www.github.com/marcustjensen/${props.name}`} style={{textDecoration: "none"}}>
                <div className="item">
                    <div id="languagesDiv">
                        {
                            languages.map((language) => (
                                <img className="languagesImg" src={
                                    language !== "shaderlab" ?
                                    `https://cdn.jsdelivr.net/npm/programming-languages-logos/src/${language}/${language}.png` :
                                        'https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg'
                                } height="75" />
                            ))
                        }
                    </div>
                    <div>
                        <p className="itemText">{props.name}</p>
                    </div>
                    <p className="description">{props.description}</p>
                </div>
            </a>
        </div>
    );
};

export default RepositoryItem;
